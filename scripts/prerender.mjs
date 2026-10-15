// Derleme sonrası, belirli sayfalar için kendi baş etiketlerini taşıyan statik
// HTML üretir (dist/<slug>/index.html).
//
// Neden gerekli: site tek sayfa uygulaması olduğu için başlık, açıklama ve
// yapılandırılmış veri tarayıcıda JavaScript çalıştıktan sonra yazılıyor. Sunucudan
// dönen ilk HTML ise her adres için ana sayfanın etiketlerini taşıyordu. Bu,
// JavaScript çalıştırmadan içerik okuyan istemcilerde (reklam politikası incelemesi,
// bağlantı önizlemeleri, bazı tarayıcı botları) yanlış başlığın görünmesine yol açar.
// Reklam trafiğinin düştüğü sayfalarda bunun düzeltilmesi doğrudan onay ve
// tıklama sonrası deneyimle ilgilidir.
//
// Gövde de sunucuda render edilir (src/entry-server.jsx) ve <div id="root"> içine yazılır.
// Önceden yalnız <head> yazılıyordu, gövde boştu: JavaScript çalıştırmayan istemciler
// sayfada tek başlık ve tek satır metin görmüyordu. Tarayıcıda main.jsx bu gövdeyi
// hidrate eder; data-rota damgası hangi adres için render edildiğini söyler.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'
import { SITE_URL, BRAND_KISA, LOCATION } from '../src/config/site.js'
import { landings } from '../src/data/landingsTam.js'
import { blogPosts } from '../src/data/blogPosts.js'
import { serviceCategories } from '../src/data/services.js'
import { landingJsonLd } from '../src/lib/landingSchema.js'
import {
  JSON_LD_ID, anaSayfaSemasi, iletisimSemasi, hakkimdaSemasi, tedaviYaklasimlariSemasi,
  kategoriSemasi, blogSemasi, gizlilikSemasi, noindexSemasi,
} from '../src/lib/siteSchema.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

// Sunucu render paketi (vite build --ssr src/entry-server.jsx --outDir dist-ssr).
const ssrYolu = resolve(__dirname, '../dist-ssr/entry-server.js')
if (!existsSync(ssrYolu)) {
  throw new Error('dist-ssr/entry-server.js yok. Önce: vite build --ssr src/entry-server.jsx --outDir dist-ssr')
}
const { render, icerikOnbellekDoldur } = await import(pathToFileURL(ssrYolu).href)

const KOK_BOS = '<div id="root"></div>'
let govdeSayisi = 0

/**
 * Sayfanın gövdesini sunucuda render edip <div id="root"> içine yazar.
 * Render hata verirse betik DURUR: yarım ya da boş gövdeyle yayına çıkmaktansa
 * derlemenin kırılması tercih edilir.
 */
async function govdeEkle(html, url) {
  if (!html.includes(KOK_BOS)) throw new Error(`${url}: şablonda ${KOK_BOS} bulunamadı`)
  const govde = await render(url)
  if (!govde || govde.length < 200) throw new Error(`${url}: gövde boş ya da çok kısa (${govde.length} karakter)`)
  govdeSayisi++
  return html.replace(KOK_BOS, `<div id="root" data-rota="${url}">${govde}</div>`)
}

const kacis = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// JSON-LD, </script> dizisiyle erken kapanmasın diye kaçışlanır.
const jsonLdYaz = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c')

// Sayfanın tek JSON-LD bloğu (site, sayfa, kırıntı ve varlıklar tek grafikte; src/lib/siteSchema.js).
// Kimlik useSeo.js'teki setJsonLd() ile AYNI (JSON_LD_ID): tarayıcı hidrasyonda bu bloğu
// bulur ve içeriğini günceller. Kimlik tutmasaydı yenisini ekler, sayfada iki FAQPage, iki
// Service ve iki BreadcrumbList oluşurdu (aynı sınıf hata canonical'da da yaşandı: şablondaki
// etiket silinmeyince ikilendi).
const jsonLdEtiketi = (obj) =>
  obj ? `<script type="application/ld+json" id="${JSON_LD_ID}">${jsonLdYaz(obj)}</script>` : ''

/**
 * Şablondaki başlık ve açıklamayı sayfaya özgü değerlerle değiştirir,
 * kanonik adres, Open Graph ve yapılandırılmış veriyi ekler.
 */
function headDegistir(sablon, { title, description, canonical, image, jsonLd = null, noindex = false, onYukle = [] }) {
  let html = sablon

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${kacis(title)}</title>`)
  html = html.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/,
    `<meta name="description" content="${kacis(description)}" />`,
  )

  // Sablondaki canonical SILINIR. Yoksa asagida eklenen sayfaya ozel canonical'in
  // yaninda ikinci bir canonical kalir ve arama motoru ilkini (ana sayfayi) secer:
  // her sayfa ana sayfaya kanoniklenir. Bu, canonical hic olmamasindan KOTUDUR.
  html = html.replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '')

  const ekEtiketler = [
    // Rota parçaları: tarayıcı bunları ana paketle AYNI ANDA indirir. Aksi halde
    // ana paket -> sayfa parçası -> içerik modülü zinciri sırayla beklenir ve reklam
    // sayfasının ilk boyaması her halkada bir gidiş-dönüş daha gecikir.
    ...onYukle.map((h) => `<link rel="modulepreload" crossorigin href="${kacis(h)}" />`),
    // 404 sayfasının kanonik adresi yoktur (her bilinmeyen adreste aynı dosya sunulur).
    canonical ? `<link rel="canonical" href="${kacis(canonical)}" />` : '',
    `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${kacis(title)}" />`,
    `<meta property="og:description" content="${kacis(description)}" />`,
    canonical ? `<meta property="og:url" content="${kacis(canonical)}" />` : '',
    image ? `<meta property="og:image" content="${kacis(image)}" />` : '',
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${kacis(title)}" />`,
    `<meta name="twitter:description" content="${kacis(description)}" />`,
    jsonLdEtiketi(jsonLd),
  ]
    .filter(Boolean)
    .join('\n    ')

  return html.replace('</head>', `  ${ekEtiketler}\n  </head>`)
}

// Dosya "<slug>/index.html" değil "<slug>.html" olarak yazılır.
// Cloudflare'in varsayılan html_handling ayarı (auto-trailing-slash), dizin
// biçimindeki bir sayfa için /slug adresini /slug/ adresine 307 ile yönlendiriyor.
// Bu hem kanonik adresle çelişir hem reklam hedef adresine gereksiz bir atlama ekler.
// Aynı ayar "<slug>.html" dosyasını /slug adresinde doğrudan sunar.
function yaz(slug, html) {
  const hedef = resolve(distDir, `${slug}.html`)
  // Slug ic ice olabilir (blog/bel-agrisi gibi); ust dizin de olusturulur.
  mkdirSync(dirname(hedef), { recursive: true })
  writeFileSync(hedef, html, 'utf-8')
}

// index.html hem şablon hem de ana sayfadır; betik sonunda ana sayfanın gövdesi ona
// yazılır. Betik ikinci kez çalışırsa (vite build yapılmadan) şablon artık boş kök
// taşımaz ve bütün sayfalar yanlış render edilirdi. Bu yüzden temiz şablon ilk
// çalışmada saklanır, sonraki çalışmalar onu kullanır.
const sablonYolu = resolve(distDir, 'index.html')
const temizKopya = resolve(distDir, '.sablon-index.html')
let sablon = readFileSync(sablonYolu, 'utf-8')
if (sablon.includes(KOK_BOS)) {
  writeFileSync(temizKopya, sablon, 'utf-8')
} else if (existsSync(temizKopya)) {
  sablon = readFileSync(temizKopya, 'utf-8')
} else {
  throw new Error('dist/index.html zaten render edilmiş ve temiz şablon kopyası yok. Önce: vite build')
}

// Manifest ve şablon kopyası yalnızca derleme aracıdır; Wrangler bunları yayına almasın.
writeFileSync(resolve(distDir, '.assetsignore'), '.vite\n.sablon-index.html\n', 'utf-8')

// Vite manifest'i (vite.config.js build.manifest): kaynak dosya -> hash'li parça adı.
// Bir parçanın kendi statik bağımlılıkları (`imports`) da önyüklenir; yoksa parça
// indikten sonra onlar için yeni bir tur beklenir.
const manifestYolu = resolve(distDir, '.vite/manifest.json')
const manifest = existsSync(manifestYolu) ? JSON.parse(readFileSync(manifestYolu, 'utf-8')) : {}
function parcaDosyalari(kaynak, gorulen = new Set()) {
  const kayit = manifest[kaynak]
  if (!kayit || gorulen.has(kaynak)) return []
  gorulen.add(kaynak)
  const dosyalar = [`/${kayit.file}`]
  for (const bagimlilik of kayit.imports || []) dosyalar.push(...parcaDosyalari(bagimlilik, gorulen))
  return dosyalar
}
// Ana giriş zaten HTML'de <script> ve modulepreload olarak var; onu yinelemeyelim.
const girisParcalari = new Set(parcaDosyalari('index.html'))
const landingOnYukle = (landing) =>
  [...new Set([
    ...parcaDosyalari('src/pages/LandingPage.jsx'),
    ...parcaDosyalari(`src/data/${landing.icerikModul}.js`),
  ])].filter((d) => !girisParcalari.has(d))

// Reklam hizmet sayfaları
for (const landing of landings) {
  const html = headDegistir(sablon, {
    title: landing.icerik.title,
    description: landing.icerik.metaDescription,
    canonical: `${SITE_URL}/${landing.slug}`,
    image: `${SITE_URL}${landing.gorsel}`,
    jsonLd: landingJsonLd(landing),
    onYukle: landingOnYukle(landing),
  })
  // Metin normalde useEffect içinde yüklenir; sunucuda efekt çalışmadığı için önbellek
  // önceden doldurulur. landingsTam metni eşzamanlı olarak taşır.
  icerikOnbellekDoldur(landing.slug, landing.icerik)
  yaz(landing.slug, await govdeEkle(html, `/${landing.slug}`))
}

// Gizlilik politikası: reklam incelemesinde doğrudan açılabildiği için o da statik.
yaz(
  'gizlilik-politikasi',
  await govdeEkle(headDegistir(sablon, {
    title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni | Fizyoterapist Onur Yalçın',
    description:
      'Fizyoterapist Onur Yalçın internet sitesinde toplanan kişisel verilerin işlenmesi, çerez kullanımı ve KVKK kapsamındaki haklarınıza ilişkin aydınlatma metni.',
    canonical: `${SITE_URL}/gizlilik-politikasi`,
    jsonLd: gizlilikSemasi(),
  }), '/gizlilik-politikasi'),
)

// ── Blog yazıları ────────────────────────────────────────────────────────
// Başlık ve açıklama formülü BlogPost.jsx'teki useSeo çağrısıyla BİREBİR aynı
// tutulur. Farklı olursa istemci hidrasyonda başlığı değiştirir ve sunucudan
// gelenle çelişir; bu, düzeltmeyi düzeltmemekten kötü hale getirir.
for (const post of blogPosts) {
  yaz(
    `blog/${post.id}`,
    await govdeEkle(headDegistir(sablon, {
      title: `${post.title} | ${BRAND_KISA}`,
      description: `${post.excerpt} ${LOCATION.district} ${LOCATION.neighborhood} fizyoterapist Onur Yalçın.`,
      canonical: `${SITE_URL}/blog/${post.id}`,
      jsonLd: blogSemasi(post),
    }), `/blog/${post.id}`),
  )
}

// ── Hizmet kategorisi sayfaları ──────────────────────────────────────────
// Formül KategoriPage.jsx ile birebir aynı.
for (const cat of serviceCategories) {
  yaz(
    `tedavi-yaklasimlarimiz/${cat.slug}`,
    await govdeEkle(headDegistir(sablon, {
      title: `${LOCATION.district} ${cat.name} | ${BRAND_KISA}`,
      description: cat.intro,
      canonical: `${SITE_URL}/tedavi-yaklasimlarimiz/${cat.slug}`,
      jsonLd: kategoriSemasi(cat),
    }), `/tedavi-yaklasimlarimiz/${cat.slug}`),
  )
}

// ── Kurumsal sayfalar ────────────────────────────────────────────────────
// Değerler ilgili sayfa bileşenlerindeki useSeo çağrılarından birebir alındı.
// Kliniğin tam kaydı ana sayfanın dışında yalnız iletişimde, Onur Yalçın'ınki yalnız Hakkımda'da.
const kurumsal = [
  {
    slug: 'hakkimda',
    title: 'Fizyoterapist Onur Yalçın Kimdir? | Hakkımda – Kadıköy Kozyatağı',
    description:
      "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu Fizyoterapist Onur Yalçın; Kadıköy Kozyatağı'nda bütüncül ve kaynak odaklı fizyoterapi ile manuel terapi uygular.",
    jsonLd: hakkimdaSemasi(),
  },
  {
    slug: 'iletisim',
    title: 'İletişim ve Randevu | Fizyoterapist Onur Yalçın – Kadıköy Kozyatağı',
    description:
      'Fizyoterapist Onur Yalçın kliniği iletişim ve randevu: Kozyatağı, Gülbahar Sk. Ege Yıldız Sitesi No:15, 34742 Kadıköy/İstanbul. Telefon +90 507 294 99 00.',
    jsonLd: iletisimSemasi(serviceCategories),
  },
  {
    slug: 'tedavi-yaklasimlarimiz',
    title:
      'Tedavi Yaklaşımlarımız | Fizyoterapi ve Rehabilitasyon Hizmetleri – Kadıköy Kozyatağı',
    description:
      "Kadıköy Kozyatağı'nda manuel terapi, Schroth ile skolyoz, pelvik taban, TME (çene eklemi), klinik pilates ve nörolojik/ortopedik rehabilitasyon dahil fizyoterapi hizmet kategorilerimiz. Fizyoterapist Onur Yalçın.",
    jsonLd: tedaviYaklasimlariSemasi(serviceCategories),
  },
]
for (const s of kurumsal) {
  yaz(s.slug, await govdeEkle(headDegistir(sablon, { ...s, canonical: `${SITE_URL}/${s.slug}` }), `/${s.slug}`))
}

// Teşekkür sayfası dizine girmemeli.
yaz(
  'randevu-talebiniz-alindi',
  await govdeEkle(headDegistir(sablon, {
    title: 'Randevu Talebiniz Alındı | Fizyoterapist Onur Yalçın',
    description: 'Randevu talebiniz kliniğimize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.',
    canonical: `${SITE_URL}/randevu-talebiniz-alindi`,
    noindex: true,
    jsonLd: noindexSemasi(),
  }), '/randevu-talebiniz-alindi'),
)

// Bulunamadı sayfası: Cloudflare bilinmeyen adreslerde bu dosyayı 404 koduyla sunar
// (wrangler.jsonc not_found_handling: 404-page). Gövde, hiçbir rotayla eşleşmeyen bir
// adres için render edilir; App'teki yakalayıcı rota SayfaBulunamadi'yı çizer. Tarayıcıda
// data-rota gerçek adresle eşleşmediği için main.jsx gövdeyi temizleyip yeniden çizer.
yaz(
  '404',
  await govdeEkle(headDegistir(sablon, {
    title: `Sayfa bulunamadı | ${BRAND_KISA}`,
    description: 'Aradığınız sayfa bulunamadı. Ana sayfadan ya da tedavi yaklaşımlarımızdan devam edebilirsiniz.',
    noindex: true,
    jsonLd: noindexSemasi(),
  }), '/__sayfa-bulunamadi'),
)

// Ana sayfa EN SON yazılır: index.html hem ana sayfa hem de yukarıdaki bütün sayfaların
// şablonudur (sablon betiğin başında okundu). Şablonda JSON-LD yoktur; kliniğin tam kaydı
// şablonda dursaydı her sayfaya basılırdı. Ana sayfanın grafiği yalnız buraya eklenir;
// başlık, açıklama ve canonical şablondaki gibi kalır.
// Hero portresi ana sayfanın en büyük öğesi (LCP): tarayıcı onu JS'i beklemeden indirsin.
const heroOnYukle = '<link rel="preload" as="image" type="image/webp" fetchpriority="high" ' +
  'imagesrcset="/assets/hero-onur-yalcin-480.webp 480w, /assets/hero-onur-yalcin-720.webp 720w, /assets/hero-onur-yalcin-1080.webp 1080w" ' +
  'imagesizes="(min-width: 992px) 560px, 92vw" />'
const anaSayfa = sablon.replace('</head>', `  ${heroOnYukle}\n  ${jsonLdEtiketi(anaSayfaSemasi(serviceCategories))}\n  </head>`)
writeFileSync(resolve(distDir, 'index.html'), await govdeEkle(anaSayfa, '/'), 'utf-8')

const toplam =
  landings.length + blogPosts.length + serviceCategories.length + kurumsal.length + 3

console.log(
  `prerender: ${toplam} sayfa için baş etiketleri, ${govdeSayisi} sayfa için gövde yazıldı\n` +
    `  reklam açılış : ${landings.length}\n` +
    `  blog          : ${blogPosts.length}\n` +
    `  kategori      : ${serviceCategories.length}\n` +
    `  kurumsal      : ${kurumsal.length}\n` +
    `  diğer         : gizlilik-politikasi, randevu-talebiniz-alindi, 404`,
)

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
// Gövde SPA tarafından render edilmeye devam eder; burada yalnızca <head> değişir.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { SITE_URL, BRAND, LOCATION } from '../src/config/site.js'
import { landings } from '../src/data/landings.js'
import { blogPosts } from '../src/data/blogPosts.js'
import { serviceCategories } from '../src/data/services.js'
import { landingJsonLd, landingBreadcrumbJsonLd } from '../src/lib/landingSchema.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

const kacis = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// JSON-LD, </script> dizisiyle erken kapanmasın diye kaçışlanır.
const jsonLdYaz = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c')

/**
 * Şablondaki başlık ve açıklamayı sayfaya özgü değerlerle değiştirir,
 * kanonik adres, Open Graph ve yapılandırılmış veriyi ekler.
 */
function headDegistir(sablon, { title, description, canonical, image, jsonLd = [], noindex = false }) {
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
    `<link rel="canonical" href="${kacis(canonical)}" />`,
    `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${kacis(title)}" />`,
    `<meta property="og:description" content="${kacis(description)}" />`,
    `<meta property="og:url" content="${kacis(canonical)}" />`,
    image ? `<meta property="og:image" content="${kacis(image)}" />` : '',
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${kacis(title)}" />`,
    `<meta name="twitter:description" content="${kacis(description)}" />`,
    // ID'ler useSeo.js'teki setJsonLd() ile AYNI olmali. Aksi halde React hidrasyonda
    // bloklari bulamaz ve YENISINI ekler; sayfada iki FAQPage, iki Service ve iki
    // BreadcrumbList olusur. Ayni id kullanildiginda useSeo mevcut blogu gunceller.
    // (Ayni sinif hata canonical'da da yasandi: sablondaki etiket silinmeyince ikilendi.)
    ...jsonLd.map((o, i) => {
      const tipler = []
      for (const n of o['@graph'] || [o]) {
        if (n && n['@type']) tipler.push(...[].concat(n['@type']))
      }
      const id = tipler.includes('BreadcrumbList') ? 'ld-breadcrumb' : i === 0 ? 'ld-page' : `ld-ek-${i}`
      return `<script type="application/ld+json" id="${id}">${jsonLdYaz(o)}</script>`
    }),
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

const sablon = readFileSync(resolve(distDir, 'index.html'), 'utf-8')

// Reklam hizmet sayfaları
for (const landing of landings) {
  const html = headDegistir(sablon, {
    title: landing.icerik.title,
    description: landing.icerik.metaDescription,
    canonical: `${SITE_URL}/${landing.slug}`,
    image: `${SITE_URL}${landing.gorsel}`,
    jsonLd: [landingJsonLd(landing), landingBreadcrumbJsonLd(landing)],
  })
  yaz(landing.slug, html)
}

// Gizlilik politikası: reklam incelemesinde doğrudan açılabildiği için o da statik.
yaz(
  'gizlilik-politikasi',
  headDegistir(sablon, {
    title: 'Gizlilik Politikası ve KVKK Aydınlatma Metni | Fizyoterapist Onur Yalçın',
    description:
      'Fizyoterapist Onur Yalçın internet sitesinde toplanan kişisel verilerin işlenmesi, çerez kullanımı ve KVKK kapsamındaki haklarınıza ilişkin aydınlatma metni.',
    canonical: `${SITE_URL}/gizlilik-politikasi`,
  }),
)

// ── Blog yazıları ────────────────────────────────────────────────────────
// Başlık ve açıklama formülü BlogPost.jsx'teki useSeo çağrısıyla BİREBİR aynı
// tutulur. Farklı olursa istemci hidrasyonda başlığı değiştirir ve sunucudan
// gelenle çelişir; bu, düzeltmeyi düzeltmemekten kötü hale getirir.
for (const post of blogPosts) {
  yaz(
    `blog/${post.id}`,
    headDegistir(sablon, {
      title: `${post.title} | ${BRAND} – ${LOCATION.district} ${LOCATION.neighborhood}`,
      description: `${post.excerpt} ${LOCATION.district} ${LOCATION.neighborhood} fizyoterapist Onur Yalçın.`,
      canonical: `${SITE_URL}/blog/${post.id}`,
    }),
  )
}

// ── Hizmet kategorisi sayfaları ──────────────────────────────────────────
// Formül KategoriPage.jsx ile birebir aynı.
for (const cat of serviceCategories) {
  yaz(
    `tedavi-yaklasimlarimiz/${cat.slug}`,
    headDegistir(sablon, {
      title: `${LOCATION.district} ${cat.name} | ${LOCATION.neighborhood} – ${BRAND}`,
      description: cat.intro,
      canonical: `${SITE_URL}/tedavi-yaklasimlarimiz/${cat.slug}`,
    }),
  )
}

// ── Kurumsal sayfalar ────────────────────────────────────────────────────
// Değerler ilgili sayfa bileşenlerindeki useSeo çağrılarından birebir alındı.
const kurumsal = [
  {
    slug: 'hakkimda',
    title: 'Fizyoterapist Onur Yalçın Kimdir? | Hakkımda – Kadıköy Kozyatağı',
    description:
      "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu Fizyoterapist Onur Yalçın; Kadıköy Kozyatağı'nda bütüncül ve kaynak odaklı fizyoterapi ile manuel terapi uygular.",
  },
  {
    slug: 'iletisim',
    title: 'İletişim ve Randevu | Fizyoterapist Onur Yalçın – Kadıköy Kozyatağı',
    description:
      'Fizyoterapist Onur Yalçın kliniği iletişim ve randevu: Kozyatağı, Gülbahar Sk. Ege Yıldız Sitesi No:15, 34742 Kadıköy/İstanbul. Telefon +90 507 294 99 00.',
  },
  {
    slug: 'tedavi-yaklasimlarimiz',
    title:
      'Tedavi Yaklaşımlarımız | Fizyoterapi ve Rehabilitasyon Hizmetleri – Kadıköy Kozyatağı',
    description:
      "Kadıköy Kozyatağı'nda manuel terapi, Schroth ile skolyoz, pelvik taban, TME (çene eklemi), klinik pilates ve nörolojik/ortopedik rehabilitasyon dahil fizyoterapi hizmet kategorilerimiz. Fizyoterapist Onur Yalçın.",
  },
]
for (const s of kurumsal) {
  yaz(s.slug, headDegistir(sablon, { ...s, canonical: `${SITE_URL}/${s.slug}` }))
}

// Teşekkür sayfası dizine girmemeli.
yaz(
  'randevu-talebiniz-alindi',
  headDegistir(sablon, {
    title: 'Randevu Talebiniz Alındı | Fizyoterapist Onur Yalçın',
    description: 'Randevu talebiniz kliniğimize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.',
    canonical: `${SITE_URL}/randevu-talebiniz-alindi`,
    noindex: true,
  }),
)

const toplam =
  landings.length + blogPosts.length + serviceCategories.length + kurumsal.length + 2

console.log(
  `prerender: ${toplam} sayfa için baş etiketleri yazıldı\n` +
    `  reklam açılış : ${landings.length}\n` +
    `  blog          : ${blogPosts.length}\n` +
    `  kategori      : ${serviceCategories.length}\n` +
    `  kurumsal      : ${kurumsal.length}\n` +
    `  diğer         : gizlilik-politikasi, randevu-talebiniz-alindi`,
)

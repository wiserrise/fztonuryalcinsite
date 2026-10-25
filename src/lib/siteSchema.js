// Sitenin yapılandırılmış verisi (JSON-LD) için tek kaynak.
//
// Her sayfanın bloğu iki yerde üretilir: derleme sonrası statik HTML'i yazan
// scripts/prerender.mjs ve tarayıcıda sayfa bileşenlerinin çağırdığı useSeo. İkisi de
// buradaki fonksiyonları aynı veriyle çağırır. Önceden klinik kaydı index.html'de elle
// yazılıydı ve şablon olarak BÜTÜN sayfalara basılıyordu; liste ve kırıntı blokları da
// sunucuda ve tarayıcıda ayrı ayrı kuruluyordu.
//
// Kurallar (Wiserrise schema standardı, 09.10.2026 ve 11.10.2026 düzeltmesi):
//  - Kliniğin TAM kaydı yalnız ana sayfada ve iletişimde, ikisinde aynı veriyle. Diğer
//    sayfalar kliniğe kısa özetle bağlanır (@type + @id + name + url): Google her sayfayı
//    tek başına işler, yalnız @id taşıyan referans tam kaydın olmadığı sayfada çözülmez.
//  - Onur Yalçın'ın TAM kaydı yalnız Hakkımda'da ve yalnız o sayfada görünen bilgilerle.
//    Kurucu ve yazar alanlarında kişi özeti kullanılır.
//  - Dizine giren her sayfada WebSite + sayfa düğümü (<adres>#webpage). Ana sayfa dışında
//    BreadcrumbList; son öğe sayfanın kendisidir, item (URL) taşımaz.
//  - Sayfa düğümünün adı sayfanın H1'idir; marka ekli title etiketi kullanılmaz.
//  - Konmaz: aggregateRating, review, award, slogan, priceRange, keywords, ödeme ve olanak
//    alanları; sağlıkta sonuç vaadi içeren ifade. Sayfada görünmeyen bilgi şemaya girmez.
//
// Hizmet kategorileri (services.js) parametre olarak verilir, burada içe aktarılmaz: bu
// modül her sayfa parçasının ortak paketine girer ve reklam sayfaları da onu indirir.

import { SITE_URL, BRAND, PHONE, LOCATION, CALISMA_SAATLERI, GBP_MAP_URL } from '../config/site.js'
import { getLandingBySlug, hizmetSayfalari, bolgeSayfalari } from '../data/landings.js'

// Sunucunun yazdığı ve useSeo'nun güncellediği tek JSON-LD bloğunun kimliği. İki taraf da
// bu sabiti kullanır: kimlik tutmazsa useSeo bloğu bulamaz ve ikincisini ekler.
export const JSON_LD_ID = 'ld-page'

const DIL = 'tr-TR'
const ANA_SAYFA = `${SITE_URL}/`
const SITE_ID = `${SITE_URL}/#website`
// Sitede zaten kullanılan sabit kimlikler korunur (standart: her yerde aynı değer).
const KLINIK_ID = `${SITE_URL}/#clinic`
// Kliniğin tipi tam kayıtta ve özette aynıdır. schema.org'da Physiotherapy hem tıbbi uzmanlık
// değeri hem MedicalBusiness alt türü olduğundan tek başına yazılınca bazı denetleyiciler onu
// işletme saymıyor (provider/worksFor Organization bekler); dizi bu belirsizliği kaldırır.
const KLINIK_TIPI = ['Physiotherapy', 'MedicalBusiness', 'LocalBusiness']
const KISI_ID = `${SITE_URL}/#onuryalcin`
const KISI_ADI = 'Onur Yalçın'
const PROFIL_URL = `${SITE_URL}/hakkimda`
const PORTRE = `${SITE_URL}/assets/onur-yalcin-portrait-Pdhc5rvj.jpg`

// Sayfa düğümlerinin adı: ilgili sayfanın H1'i. Bileşendeki metinle aynı tutulur;
// scripts/sema-denetim.mjs üretilen HTML'de ikisini karşılaştırır.
const SAYFA_ADLARI = {
  anaSayfa: 'Kadıköy Fizyoterapist',
  hakkimda: 'Fizyoterapist Onur Yalçın Kimdir?',
  iletisim: 'İletişim',
  tedaviYaklasimlari: 'Tedavi Yaklaşımlarımız',
  gizlilik: 'Gizlilik Politikası ve KVKK Aydınlatma Metni',
}

const ANA_KIRINTI = { name: 'Ana Sayfa', url: '/' }

/** '/hakkimda' -> 'https://fztonuryalcin.com/hakkimda'; kök için sondaki eğik çizgi kalır. */
const tamAdres = (yol) => (yol === '/' ? ANA_SAYFA : `${SITE_URL}${yol}`)

/** Kliniğe kısa referans (publisher, about, provider, worksFor). Tam kayıt: klinikTamKaydi. */
export const klinikOzeti = () => ({ '@type': KLINIK_TIPI, '@id': KLINIK_ID, name: BRAND, url: ANA_SAYFA })

/** Onur Yalçın'a kısa referans (founder, author). Tam kayıt Hakkımda'da. */
export const kisiOzeti = () => ({ '@type': 'Person', '@id': KISI_ID, name: KISI_ADI, url: PROFIL_URL })

export const semaGrafi = (dugumler) => ({ '@context': 'https://schema.org', '@graph': dugumler.filter(Boolean) })


/**
 * Kliniğin tam kaydı. Yalnız ana sayfada ve iletişimde basılır.
 * Ad, adres, telefon, saat ve harita GBP kaydıyla aynıdır (config/site.js). Hizmet kataloğu
 * kategori sayfalarında görünen listeden (services.js) üretilir: index.html'deki elle tutulan
 * kopya, erkek pelvik taban hizmeti listeye eklendiğinde geride kalmıştı.
 * Çıkarılanlar: ödeme, para birimi ve olanak alanları (standartta "konmaz"); sitede
 * yazmayan alternatif ad ve kuruluş tarihi.
 */
export function klinikTamKaydi(kategoriler) {
  return {
    '@type': KLINIK_TIPI,
    '@id': KLINIK_ID,
    name: BRAND,
    url: ANA_SAYFA,
    image: [PORTRE, `${SITE_URL}/assets/yeni-foto-C-mJqn-u.jpg`],
    logo: PORTRE,
    description:
      "Kadıköy Kozyatağı'ndaki klinikte erkek pelvik taban fizyoterapisi, bütüncül fizyoterapi ve manuel terapi uygulamaları yürütülür. Değerlendirme sonrası kişiye özel programlarla; boyun ve bel ağrıları, postür sorunları, spor yaralanmaları sonrası rehabilitasyon, Schroth yöntemiyle skolyoz rehabilitasyonu, pelvik taban rehabilitasyonu, çene eklemi (TME) uygulamaları ve fasyal manipülasyon gibi alanlarda çalışılır. Klinik reformer pilates ve nörogelişimsel yaklaşımlarla hareket ve fonksiyon desteklenir.",
    telephone: PHONE,
    email: 'fztonuryalcin@gmail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: PHONE,
      areaServed: 'TR',
      availableLanguage: { '@type': 'Language', name: 'Turkish', alternateName: 'tr' },
    },
    address: {
      '@type': 'PostalAddress',
      // Google Haritalar'ın gösterdiği biçim (25.10.2026): "Kozyatağı, Gülbahar Sk. Ege Yıldız
      // Sitesi No:15, 34742 Kadıköy/İstanbul". Standart: fark varsa görünen biçim esas alınır.
      // Sitedeki görünür adres (NAP) GBP'ye girilen satırlarla aynı kalır.
      streetAddress: 'Kozyatağı, Gülbahar Sk. Ege Yıldız Sitesi No:15',
      addressLocality: LOCATION.district,
      addressRegion: LOCATION.city,
      postalCode: '34742',
      addressCountry: 'TR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 40.9724211, longitude: 29.099073 },
    hasMap: GBP_MAP_URL,
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: LOCATION.district,
        containedInPlace: { '@type': 'City', name: LOCATION.city },
      },
    ],
    // Haritalar kaydı ve GBP'deki sosyal profiller (url_twitter, url_instagram).
    sameAs: [GBP_MAP_URL, 'https://www.instagram.com/fztonuryalcin/', 'https://x.com/fztonuryalcin'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: CALISMA_SAATLERI.acilis,
        closes: CALISMA_SAATLERI.kapanis,
      },
      // Pazar kapalı: Google'da kapalı gün, açılış ve kapanışın 00:00 yazılmasıyla gösterilir.
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' },
    ],
    // Tek fizyoterapistli klinik: kurucu yeter, aynı kişi employee ile tekrar edilmez.
    founder: kisiOzeti(),
    potentialAction: [
      {
        '@type': 'ReserveAction',
        name: 'WhatsApp ile Randevu Al',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://wa.me/905072949900',
          actionPlatform: [
            'https://schema.org/DesktopWebPlatform',
            'https://schema.org/MobileWebPlatform',
            'https://schema.org/IOSPlatform',
            'https://schema.org/AndroidPlatform',
          ],
        },
        result: { '@type': 'Reservation', name: 'Fizyoterapi Randevusu' },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fizyoterapi ve Rehabilitasyon Hizmetleri',
      itemListElement: kategoriler.map((k) => ({
        '@type': 'OfferCatalog',
        name: k.name,
        itemListElement: k.services.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            // itemOffered Product / Service bekler; MedicalTherapy bu aralıkta değil (sözlük denetimi).
            '@type': 'Service',
            name: s.name,
            description: s.description,
          },
        })),
      })),
    },
  }
}

/**
 * Onur Yalçın'ın tam kaydı: yalnız Hakkımda'da görünen bilgiler (H1'deki ad ve unvan,
 * fotoğraf, İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezuniyeti, kliniği).
 * Uzmanlık listesi (knowsAbout) o sayfada yazmadığı için yok.
 */
function kisiTamKaydi() {
  return {
    '@type': 'Person',
    '@id': KISI_ID,
    name: KISI_ADI,
    url: PROFIL_URL,
    jobTitle: 'Fizyoterapist',
    image: PORTRE,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'İstanbul Üniversitesi',
      department: { '@type': 'Organization', name: 'Fizyoterapi ve Rehabilitasyon' },
    },
    worksFor: klinikOzeti(),
  }
}

export function webSiteDugumu() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: ANA_SAYFA,
    name: BRAND,
    inLanguage: DIL,
    publisher: klinikOzeti(),
  }
}

/**
 * Sayfa düğümü. ad: sayfanın H1'i. isPartOf işletmeyi değil site düğümünü gösterir
 * (isPartOf bir CreativeWork bekler); site düğümü her sayfanın grafiğinde tam olarak var.
 */
export function sayfaDugumu({ tur = 'WebPage', yol, ad, ...ek }) {
  const url = tamAdres(yol)
  return {
    '@type': tur,
    '@id': `${url}#webpage`,
    url,
    name: ad,
    isPartOf: { '@id': SITE_ID },
    about: klinikOzeti(),
    inLanguage: DIL,
    ...ek,
  }
}

/**
 * Kırıntı navigasyonu. kirintilar: [{ name, url }], url '/' ile başlayan yol. Son öğe
 * sayfanın kendisidir: item taşımaz, Google adresi sayfanın kendisinden alır.
 */
export function kirintiDugumu(yol, kirintilar) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${tamAdres(yol)}#breadcrumb`,
    itemListElement: kirintilar.map((k, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: k.name,
      ...(i < kirintilar.length - 1 ? { item: tamAdres(k.url) } : {}),
    })),
  }
}

/** Sayfada görünen sorular. Soru yoksa düğüm basılmaz (boş mainEntity geçersizdir). */
export function sssDugumu(yol, sorular) {
  if (!sorular || sorular.length === 0) return null
  return {
    '@type': 'FAQPage',
    '@id': `${tamAdres(yol)}#faq`,
    mainEntity: sorular.map((f) => ({
      '@type': 'Question',
      name: f.soru,
      acceptedAnswer: { '@type': 'Answer', text: f.cevap },
    })),
  }
}

// ── Liste sayfaları ──────────────────────────────────────────────────────
// Öğeler sayfada görünenlerle sınırlıdır ve hedef sayfadaki düğüme kısa özetle bağlanır;
// öğenin adı o düğümün adıdır (hizmet sayfasında Service.name, kategori sayfasında H1).

const kategoriYolu = (k) => `/tedavi-yaklasimlarimiz/${k.slug}`
// Kategori sayfasının H1'i (KategoriPage.jsx: ilçe + kategori adı).
const kategoriAdi = (k) => `${LOCATION.district} ${k.name}`

const kategoriOzeti = (k) => ({
  '@type': 'CollectionPage',
  '@id': `${tamAdres(kategoriYolu(k))}#webpage`,
  name: kategoriAdi(k),
  url: tamAdres(kategoriYolu(k)),
})

const hizmetOzeti = (l) => ({
  '@type': 'Service',
  '@id': `${tamAdres(`/${l.slug}`)}#service`,
  name: l.servisAdi,
  url: tamAdres(`/${l.slug}`),
})

const ogeListesi = (ogeler) => ({
  '@type': 'ItemList',
  numberOfItems: ogeler.length,
  itemListElement: ogeler.map((item, i) => ({ '@type': 'ListItem', position: i + 1, item })),
})

// ── Sayfa grafikleri ─────────────────────────────────────────────────────

/** Ana sayfa: kliniğin tam kaydı, site ve sayfa. Kök sayfa olduğu için kırıntı yok. */
export function anaSayfaSemasi(kategoriler) {
  return semaGrafi([
    klinikTamKaydi(kategoriler),
    webSiteDugumu(),
    sayfaDugumu({ yol: '/', ad: SAYFA_ADLARI.anaSayfa }),
  ])
}

/** İletişim: kliniğin tam kaydı ana sayfadakiyle aynı. */
export function iletisimSemasi(kategoriler) {
  const yol = '/iletisim'
  return semaGrafi([
    klinikTamKaydi(kategoriler),
    webSiteDugumu(),
    sayfaDugumu({ tur: 'ContactPage', yol, ad: SAYFA_ADLARI.iletisim }),
    kirintiDugumu(yol, [ANA_KIRINTI, { name: 'İletişim', url: yol }]),
  ])
}

/** Hakkımda: profil sayfası, ana varlığı Onur Yalçın'ın tam kaydı. */
export function hakkimdaSemasi() {
  const yol = '/hakkimda'
  return semaGrafi([
    webSiteDugumu(),
    sayfaDugumu({ tur: 'ProfilePage', yol, ad: SAYFA_ADLARI.hakkimda, mainEntity: kisiTamKaydi() }),
    kirintiDugumu(yol, [ANA_KIRINTI, { name: 'Hakkımda', url: yol }]),
  ])
}

/**
 * Tedavi yaklaşımları hub'ı. Liste sayfadaki sırayla: kategori kartları, "Hizmet
 * Sayfalarımız", "Hizmet Verdiğimiz Bölgeler" (bkz. TedaviYaklasimlari.jsx).
 */
export function tedaviYaklasimlariSemasi(kategoriler) {
  const yol = '/tedavi-yaklasimlarimiz'
  const ogeler = [
    ...kategoriler.map(kategoriOzeti),
    ...hizmetSayfalari.map(hizmetOzeti),
    ...bolgeSayfalari.map(hizmetOzeti),
  ]
  return semaGrafi([
    webSiteDugumu(),
    sayfaDugumu({ tur: 'CollectionPage', yol, ad: SAYFA_ADLARI.tedaviYaklasimlari, mainEntity: ogeListesi(ogeler) }),
    kirintiDugumu(yol, [ANA_KIRINTI, { name: 'Tedavi Yaklaşımlarımız', url: yol }]),
  ])
}

/**
 * Kategori sayfası. Liste, kartlarda bağlantısı verilen hizmet sayfalarıdır: sayfadaki
 * sırayla, aynı sayfaya giden kartlar bir kez. Yalnız bir blog yazısına bağlanan kartlar
 * listeye girmez; kendi Service düğümleri yok ve yazı başlıkları blogPosts.js'te (yaklaşık
 * 370 KB), onu kategori sayfasının paketine taşımaya değmez. Alttaki "Diğer Tedavi
 * Yaklaşımları" gezinme bağlantısıdır, bu sayfanın listesi değildir.
 */
export function kategoriSemasi(kategori) {
  const yol = kategoriYolu(kategori)
  const eklenen = new Set()
  const ogeler = []
  for (const s of kategori.services) {
    const landing = s.sayfa ? getLandingBySlug(s.sayfa.replace(/^\/+/, '')) : null
    if (!landing || eklenen.has(landing.slug)) continue
    eklenen.add(landing.slug)
    ogeler.push(hizmetOzeti(landing))
  }
  return semaGrafi([
    webSiteDugumu(),
    sayfaDugumu({
      tur: 'CollectionPage',
      yol,
      ad: kategoriAdi(kategori),
      ...(ogeler.length > 0 ? { mainEntity: ogeListesi(ogeler) } : {}),
    }),
    kirintiDugumu(yol, [
      ANA_KIRINTI,
      { name: 'Tedavi Yaklaşımlarımız', url: '/tedavi-yaklasimlarimiz' },
      { name: kategori.name, url: yol },
    ]),
  ])
}

const AYLAR = ['ocak', 'şubat', 'mart', 'nisan', 'mayıs', 'haziran', 'temmuz', 'ağustos', 'eylül', 'ekim', 'kasım', 'aralık']

/** Sayfada yazan tarihi ISO biçimine çevirir ("2026-10-12" ya da "12 Ekim 2026"); tarih değilse null. */
function gorunenTarih(metin) {
  const s = String(metin || '').trim()
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s
  const m = s.match(/^(\d{1,2})\s+(\S+)\s+(\d{4})$/)
  const ay = m ? AYLAR.indexOf(m[2].toLocaleLowerCase('tr')) : -1
  return ay >= 0 ? `${m[3]}-${String(ay + 1).padStart(2, '0')}-${m[1].padStart(2, '0')}` : null
}

/**
 * Blog yazısı. headline sayfanın H1'idir (post.title). Tarih yalnız sayfada görünen
 * tarihten gelir (BlogPost.jsx post.date'i basar); şu an bütün yazılarda tarih yerine
 * "Güncel Makale" yazdığı için tarih alanları basılmaz. Yazıların kendi görseli olmadığı
 * için image de yok; sitenin genel görseli bilinçli olarak konmaz.
 */
export function blogSemasi(post) {
  const yol = `/blog/${post.id}`
  const url = tamAdres(yol)
  const tarih = gorunenTarih(post.date)
  return semaGrafi([
    webSiteDugumu(),
    sayfaDugumu({ yol, ad: post.title }),
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.excerpt,
      author: kisiOzeti(),
      publisher: klinikOzeti(),
      ...(tarih ? { datePublished: tarih, dateModified: tarih } : {}),
      inLanguage: DIL,
      mainEntityOfPage: { '@id': `${url}#webpage` },
    },
    // Blog'un ayrı bir liste sayfası yok; yazılar ana sayfadaki blog bölümünde listeleniyor.
    kirintiDugumu(yol, [ANA_KIRINTI, { name: 'Blog', url: '/#blog' }, { name: post.title, url: yol }]),
  ])
}

export function gizlilikSemasi() {
  const yol = '/gizlilik-politikasi'
  return semaGrafi([
    webSiteDugumu(),
    sayfaDugumu({ yol, ad: SAYFA_ADLARI.gizlilik }),
    kirintiDugumu(yol, [ANA_KIRINTI, { name: 'Gizlilik Politikası', url: yol }]),
  ])
}

/** Dizine girmeyen sayfalar (teşekkür sayfası, 404, "bulunamadı" durumları): yalnız site düğümü. */
export function noindexSemasi() {
  return semaGrafi([webSiteDugumu()])
}

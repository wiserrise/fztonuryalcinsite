// Reklam hizmet sayfaları için on-page denetimi.
//
// "Sayfa hazır" demeden önce mekanik olarak doğrulanabilecek her şeyi burada
// kontrol ediyoruz: odak kelimenin gerçekten geçmesi gereken beş yerde birebir
// geçip geçmediği, başlık ve açıklama uzunlukları, içerik derinliği, iç bağlantı
// geçerliliği, yasaklı ifadeler ve reklam metni karakter sınırları.
//
// Kullanım: node scripts/seo-check.mjs
// Çıkış kodu 1 ise en az bir sayfa denetimden geçememiştir.

import { landings } from '../src/data/landings.js'
import { blogPosts } from '../src/data/blogPosts.js'
import { serviceCategories } from '../src/data/services.js'

// Türkçe büyük/küçük harf farkını ve fazla boşluğu yok sayan karşılaştırma.
const normalize = (s) =>
  String(s)
    .toLocaleLowerCase('tr')
    .replace(/\s+/g, ' ')
    .trim()

// Adres bileşenleri Türkçe karakter taşımaz (kadikoy), metin taşır (Kadıköy).
// Karşılaştırmadan önce ikisini de ASCII'ye indiriyoruz.
const asciiye = (s) =>
  normalize(s)
    .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g')
    .replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/â/g, 'a')

const icerir = (metin, aranan) => normalize(metin).includes(normalize(aranan))

// Sayfada geçmemesi gereken ifadeler: üstünlük iddiası, sonuç garantisi,
// fiyat ve kampanya dili. Kelime sınırıyla aranır ki "iyileşme" gibi masum
// kullanımlar yanlış alarm üretmesin.
// Not: "garanti" tek başına aranmaz. "doğru kasılmayı garanti etmez" gibi
// olumsuz ve dürüst kullanımlar meşrudur; yasak olan vaat kuran biçimleridir.
const YASAKLI = [
  'en iyi', 'en başarılı', 'lider', 'bir numara', '1 numara', 'türkiye’nin ilk', "türkiye'nin ilk",
  'garanti ediyoruz', 'garanti ederiz', 'garantilidir', 'garantili', 'sonuç garantisi',
  'kesin çözüm', 'kesin sonuç', 'kurtulursunuz', 'kurtarır',
  'mucize', 'şifa', 'yüzde yüz', '%100',
  'indirim', 'kampanya', 'promosyon', 'ücretsiz muayene', 'taksit',
  'uzman kadromuz', 'uzman ekibimiz',
  'ihmal etmeyin', 'geç kalmayın',
]

const gecerliRotalar = new Set([
  '/', '/hakkimda', '/tedavi-yaklasimlarimiz', '/iletisim',
  '/gizlilik-politikasi', '/randevu-talebiniz-alindi',
  ...serviceCategories.map((c) => `/tedavi-yaklasimlarimiz/${c.slug}`),
  ...blogPosts.map((p) => `/blog/${p.id}`),
  ...landings.map((l) => `/${l.slug}`),
])

const govdeMetni = (icerik) =>
  icerik.bolumler
    .flatMap((b) => [b.h2, ...(b.paragraflar || []), ...((b.liste || []).flatMap((l) => [l.baslik, l.metin]))])
    .join(' ')

const sssMetni = (icerik) => icerik.sss.flatMap((f) => [f.soru, f.cevap]).join(' ')

const ilkCumle = (p) => String(p).split(/(?<=[.!?])\s/)[0]

function denetle(landing) {
  const c = landing.icerik
  const odak = landing.odakKelime
  const sonuc = []
  const ekle = (gecti, baslik, detay) => sonuc.push({ gecti, baslik, detay })

  if (!odak) {
    ekle(false, 'Odak kelime tanımlı', 'landings.js içinde odakKelime alanı yok')
    return sonuc
  }

  // 1. Odak kelime, geçmesi gereken beş yerde birebir bulunmalı
  const slugMetni = asciiye(landing.slug.replace(/-/g, ' '))
  const odakSlug = normalize(odak).split(' ').filter((k) => k.length > 3)
  const slugKapsama = odakSlug.filter((k) => slugMetni.includes(asciiye(k)))
  ekle(
    slugKapsama.length >= Math.min(2, odakSlug.length),
    'Odak kelime URL’de',
    `${slugKapsama.join(', ') || 'yok'} (/${landing.slug})`,
  )
  ekle(icerir(c.title, odak), 'Odak kelime title’da birebir', c.title)
  ekle(icerir(c.metaDescription, odak), 'Odak kelime meta açıklamada birebir', '')
  ekle(icerir(c.h1, odak), 'Odak kelime H1’de birebir', c.h1)
  ekle(icerir(ilkCumle(c.heroParagraf), odak), 'Odak kelime ilk cümlede birebir', ilkCumle(c.heroParagraf).slice(0, 90))

  // 2. Başlık ve açıklama uzunlukları
  ekle(c.title.length <= 60, 'Title 60 karakteri aşmıyor', `${c.title.length} karakter`)
  ekle(c.metaDescription.length <= 155, 'Meta açıklama 155 karakteri aşmıyor', `${c.metaDescription.length} karakter`)
  ekle(normalize(c.title) !== normalize(c.h1), 'Title ile H1 birebir aynı değil', '')

  // 3. İçerik derinliği
  const kelime = govdeMetni(c).split(/\s+/).filter(Boolean).length
  const toplam = kelime + sssMetni(c).split(/\s+/).filter(Boolean).length
  ekle(kelime >= 1500, 'Gövde en az 1500 kelime', `${kelime} kelime (SSS dahil ${toplam})`)
  ekle(c.bolumler.length >= 8, 'En az 8 bölüm (H2)', `${c.bolumler.length} bölüm`)
  ekle(c.sss.length >= 8, 'En az 8 soru-cevap', `${c.sss.length} soru`)

  // 4. Yasaklı ifadeler (gövde, SSS, başlık, açıklama ve reklam metinleri birlikte)
  const tumMetin = normalize(
    [govdeMetni(c), sssMetni(c), c.title, c.metaDescription, c.h1, c.heroAltBaslik, c.heroParagraf,
      ...(c.reklamMetinleri?.basliklar || []), ...(c.reklamMetinleri?.aciklamalar || [])].join(' '),
  )
  const bulunan = YASAKLI.filter((y) => tumMetin.includes(normalize(y)))
  ekle(bulunan.length === 0, 'Yasaklı ifade yok', bulunan.join(', ') || 'temiz')

  // 5. Em dash
  const emDash = [govdeMetni(c), sssMetni(c), c.title, c.metaDescription].join(' ').includes('—')
  ekle(!emDash, 'Em dash kullanılmamış', '')

  // 6. İç bağlantılar geçerli rotaya gidiyor
  const baglar = landing.ilgiliBaglantilar || []
  const kirik = baglar.filter((b) => !gecerliRotalar.has(b.to))
  ekle(baglar.length >= 2 && kirik.length === 0, 'İç bağlantılar geçerli',
    `${baglar.length} bağlantı${kirik.length ? ', KIRIK: ' + kirik.map((k) => k.to).join(', ') : ''}`)

  // 7. Görsel ve alt metin
  ekle(Boolean(landing.gorsel), 'Sayfa görseli tanımlı', landing.gorsel || 'yok')
  ekle((c.gorselAltMetinleri || []).length >= 1, 'Görsel alt metni önerisi var',
    `${(c.gorselAltMetinleri || []).length} adet`)

  // 8. Reklam metni karakter sınırları
  const uzunBaslik = (c.reklamMetinleri?.basliklar || []).filter((b) => b.length > 30)
  const uzunAciklama = (c.reklamMetinleri?.aciklamalar || []).filter((b) => b.length > 90)
  ekle(uzunBaslik.length === 0, 'Reklam başlıkları 30 karakter sınırında',
    uzunBaslik.map((b) => `"${b}" (${b.length})`).join('; ') || 'tamamı uygun')
  ekle(uzunAciklama.length === 0, 'Reklam açıklamaları 90 karakter sınırında',
    uzunAciklama.map((b) => `"${b}" (${b.length})`).join('; ') || 'tamamı uygun')

  // 9. Odak kelime gövdede geçmeli, ama yığılmamalı.
  // Sadece başlıkta geçip gövdede hiç geçmemesi de bir zayıflıktır: konu bütünlüğü
  // sinyali gövdeden gelir. Üst sınır ise yığmacılığı engeller.
  const odakSayisi = normalize(govdeMetni(c)).split(normalize(odak)).length - 1
  const yogunluk = kelime ? (odakSayisi / kelime) * 100 : 0
  ekle(odakSayisi >= 2, 'Odak kelime gövdede en az 2 kez',
    `${odakSayisi} kez`)
  ekle(yogunluk < 2.5, 'Anahtar kelime yığmacılığı yok',
    `yoğunluk %${yogunluk.toFixed(2)}`)

  return sonuc
}

let hataVar = false
for (const landing of landings) {
  const sonuc = denetle(landing)
  const gecen = sonuc.filter((s) => s.gecti).length
  console.log(`\n=== /${landing.slug} === ${gecen}/${sonuc.length} ölçüt`)
  for (const s of sonuc) {
    if (!s.gecti) hataVar = true
    console.log(`  ${s.gecti ? 'OK  ' : 'HATA'} ${s.baslik}${s.detay ? '  ·  ' + s.detay : ''}`)
  }
}

console.log(hataVar ? '\nDenetimden geçmeyen ölçüt var.' : '\nTüm sayfalar denetimden geçti.')
process.exit(hataVar ? 1 : 0)

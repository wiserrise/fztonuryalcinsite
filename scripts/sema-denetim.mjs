// Üretilen HTML'deki yapılandırılmış verinin (JSON-LD) denetimi.
//
// Kurallar src/lib/siteSchema.js'te uygulanır; bu betik sonucu dist/ altındaki HTML
// üzerinde ölçer: blokların ayrıştırılması ve tekilliği, tam kayıtların yalnız kendi
// sayfalarında durması, referansların kısa özet olması, site/sayfa/kırıntı iskeleti,
// blog yazıları ve liste öğelerinin hedef sayfalarla tutarlılığı.
//
// Kullanım: npm run build && node scripts/sema-denetim.mjs
// Çıkış kodu 1 ise en az bir denetim geçmemiştir.

import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_URL, BRAND } from '../src/config/site.js'
import { landings } from '../src/data/landingsTam.js'
import { blogPosts } from '../src/data/blogPosts.js'

const DIST = resolve(dirname(fileURLToPath(import.meta.url)), '../dist')

const KLINIK_ID = `${SITE_URL}/#clinic`
const KISI_ID = `${SITE_URL}/#onuryalcin`
const SITE_ID = `${SITE_URL}/#website`
const OZET = ['@type', '@id', 'name', 'url']
const OZET_BEKLENEN = {
  [KLINIK_ID]: { '@type': 'Physiotherapy', name: BRAND, url: `${SITE_URL}/` },
  [KISI_ID]: { '@type': 'Person', name: 'Onur Yalçın', url: `${SITE_URL}/hakkimda` },
}
const KONMAZ = [
  'aggregateRating', 'review', 'award', 'slogan', 'priceRange', 'keywords',
  'paymentAccepted', 'currenciesAccepted', 'amenityFeature', 'numberOfEmployees',
]
const landingSlug = new Map(landings.map((l) => [`/${l.slug}`, l]))

// ── HTML'i oku ────────────────────────────────────────────────────────────

function htmlDosyalari(dizin) {
  const out = []
  for (const e of readdirSync(dizin, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue // .vite, .sablon-index.html: derleme araçları
    const yol = join(dizin, e.name)
    if (e.isDirectory()) out.push(...htmlDosyalari(yol))
    else if (e.name.endsWith('.html') && !/^google[0-9a-f]+\.html$/.test(e.name)) out.push(yol)
  }
  return out
}

const metin = (s) =>
  s.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, '')
    .replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()

/** Grafikteki bütün düğümler (iç içe olanlar dahil): @type ya da @id taşıyan nesneler. */
function dugumler(deger, liste = []) {
  if (Array.isArray(deger)) deger.forEach((d) => dugumler(d, liste))
  else if (deger && typeof deger === 'object') {
    if (deger['@type'] || deger['@id']) liste.push(deger)
    Object.values(deger).forEach((d) => dugumler(d, liste))
  }
  return liste
}

const tipVar = (d, tip) => [].concat(d?.['@type'] || []).includes(tip)
const yalnizId = (d) => Object.keys(d).length === 1 && d['@id']
const ozetMi = (d) => Object.keys(d).length === OZET.length && OZET.every((k) => k in d)
const klinikTam = (d) => d['@id'] === KLINIK_ID && ('address' in d || 'telephone' in d)
const kisiTam = (d) => d['@id'] === KISI_ID && Object.keys(d).some((k) => !OZET.includes(k))

const sayfalar = new Map()
for (const dosya of htmlDosyalari(DIST)) {
  const html = readFileSync(dosya, 'utf8')
  const rel = relative(DIST, dosya).replace(/\\/g, '/')
  const rota = rel === 'index.html' ? '/' : `/${rel.replace(/\.html$/, '')}`
  const basSonu = html.indexOf('</head>')
  const bloklar = [...html.matchAll(/<script type="application\/ld\+json"([^>]*)>([\s\S]*?)<\/script>/g)].map((m) => {
    const id = (m[1].match(/\bid="([^"]*)"/) || [])[1] || null
    let veri = null
    let hata = null
    try { veri = JSON.parse(m[2]) } catch (e) { hata = e.message }
    return { id, veri, hata, baslikta: m.index < basSonu }
  })
  const graf = bloklar.flatMap((b) => (b.veri ? b.veri['@graph'] || [b.veri] : []))
  sayfalar.set(rota, {
    rota,
    dosya: rel,
    html,
    noindex: /<meta name="robots" content="noindex/.test(html),
    canonical: (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1],
    h1ler: [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => metin(m[1])),
    bloklar,
    graf,
    tum: dugumler(graf),
  })
}

// ── Sayfa türleri ─────────────────────────────────────────────────────────

function beklenenTur(rota) {
  if (rota === '/') return 'WebPage'
  if (rota === '/iletisim') return 'ContactPage'
  if (rota === '/hakkimda') return 'ProfilePage'
  if (rota === '/tedavi-yaklasimlarimiz' || rota.startsWith('/tedavi-yaklasimlarimiz/')) return 'CollectionPage'
  if (landingSlug.has(rota)) return 'MedicalWebPage'
  return 'WebPage' // blog yazıları, gizlilik politikası
}
const grup = (s) =>
  s.noindex ? 'noindex'
    : s.rota === '/' ? 'ana sayfa'
      : s.rota === '/iletisim' ? 'iletişim'
        : s.rota === '/hakkimda' ? 'hakkımda'
          : s.rota === '/tedavi-yaklasimlarimiz' ? 'tedavi yaklaşımları'
            : s.rota.startsWith('/tedavi-yaklasimlarimiz/') ? 'kategori'
              : s.rota.startsWith('/blog/') ? 'blog'
                : landingSlug.has(s.rota) ? 'açılış (reklam/hizmet/bölge)'
                  : s.rota.slice(1)

// ── Denetimler ────────────────────────────────────────────────────────────

const sonuclar = []
function denetim(baslik, fn) {
  const hatalar = []
  const not = fn((rota, mesaj) => hatalar.push(`${rota}: ${mesaj}`))
  sonuclar.push({ baslik, hatalar, not })
}
const hepsi = [...sayfalar.values()]
const dizinde = hepsi.filter((s) => !s.noindex)

denetim('JSON-LD blokları ayrıştırılıyor, <head> içinde; aynı id\'li blok ikilenmiyor', (hata) => {
  let blok = 0
  for (const s of hepsi) {
    blok += s.bloklar.length
    s.bloklar.forEach((b) => {
      if (b.hata) hata(s.rota, `ayrıştırılamadı: ${b.hata}`)
      if (!b.baslikta) hata(s.rota, 'JSON-LD bloğu <head> dışında')
    })
    const idler = s.bloklar.map((b) => b.id)
    if (idler.some((id, i) => idler.indexOf(id) !== i)) hata(s.rota, `aynı id'li blok: ${idler.join(', ')}`)
    if (s.bloklar.length !== 1) hata(s.rota, `${s.bloklar.length} blok (1 bekleniyor)`)
    // Aynı @id'nin iki ayrı TAM tanımı olmamalı (özet ve yalnız-@id referanslar sayılmaz).
    const tamlar = new Map()
    for (const d of s.tum) {
      if (!d['@id'] || yalnizId(d) || ozetMi(d)) continue
      tamlar.set(d['@id'], (tamlar.get(d['@id']) || 0) + 1)
    }
    for (const [id, n] of tamlar) if (n > 1) hata(s.rota, `${id} ${n} kez tam tanımlanmış`)
  }
  const idler = [...new Set(hepsi.flatMap((s) => s.bloklar.map((b) => b.id)))]
  return `${hepsi.length} sayfa, ${blok} blok, blok kimliği: ${idler.join(', ')}`
})

denetim('Klinik tam kaydı yalnız index.html ve iletisim.html\'de, her birinde tam 1; ikisi birebir aynı', (hata) => {
  const kayitlar = []
  for (const s of hepsi) {
    const n = s.tum.filter(klinikTam)
    const bekle = s.rota === '/' || s.rota === '/iletisim' ? 1 : 0
    if (n.length !== bekle) hata(s.rota, `${n.length} tam klinik kaydı (${bekle} bekleniyor)`)
    if (n.length) kayitlar.push(JSON.stringify(n[0]))
  }
  if (new Set(kayitlar).size > 1) hata('index/iletisim', 'iki sayfadaki klinik kaydı farklı')
  const k = sayfalar.get('/')?.tum.find(klinikTam) || {}
  return `alanlar: ${Object.keys(k).join(', ')}`
})

denetim('Person (Onur Yalçın) tam kaydı yalnız hakkimda.html\'de', (hata) => {
  for (const s of hepsi) {
    const n = s.tum.filter(kisiTam).length
    const bekle = s.rota === '/hakkimda' ? 1 : 0
    if (n !== bekle) hata(s.rota, `${n} tam kişi kaydı (${bekle} bekleniyor)`)
  }
  const k = sayfalar.get('/hakkimda')?.tum.find(kisiTam) || {}
  return `alanlar: ${Object.keys(k).join(', ')}`
})

denetim('Tam kaydın olmadığı sayfada #clinic / #onuryalcin\'e yalnız-@id referans yok; özetler @type+@id+name+url ve adı tam kayıtla aynı', (hata) => {
  let ozet = 0
  for (const s of hepsi) {
    for (const [id, tamMi] of [[KLINIK_ID, klinikTam], [KISI_ID, kisiTam]]) {
      const tamVar = s.tum.some(tamMi)
      for (const d of s.tum.filter((x) => x['@id'] === id && !tamMi(x))) {
        if (yalnizId(d)) {
          if (!tamVar) hata(s.rota, `${id} yalnız @id ile referans veriliyor`)
          continue
        }
        if (!ozetMi(d)) { hata(s.rota, `${id} referansı kısa özet değil: ${Object.keys(d).join(', ')}`); continue }
        ozet++
        for (const [k, v] of Object.entries(OZET_BEKLENEN[id])) {
          if (d[k] !== v) hata(s.rota, `${id} özetinde ${k} = "${d[k]}" ("${v}" bekleniyor)`)
        }
      }
    }
  }
  return `${ozet} kısa özet referans`
})

denetim('Dizine giren her sayfada WebSite + sayfa düğümü (tür, <url>#webpage, isPartOf, about = klinik özeti, tr-TR); sayfa adı = H1', (hata) => {
  const turler = {}
  for (const s of dizinde) {
    const site = s.graf.filter((d) => d['@id'] === SITE_ID && tipVar(d, 'WebSite'))
    if (site.length !== 1) hata(s.rota, `${site.length} WebSite düğümü`)
    else if (!site[0].publisher || site[0].publisher['@id'] !== KLINIK_ID) hata(s.rota, 'WebSite.publisher klinik özeti değil')
    const tur = beklenenTur(s.rota)
    const sayfa = s.graf.find((d) => d['@id'] === `${s.canonical}#webpage`)
    if (!sayfa) { hata(s.rota, `sayfa düğümü yok (${s.canonical}#webpage)`); continue }
    turler[sayfa['@type']] = (turler[sayfa['@type']] || 0) + 1
    if (sayfa['@type'] !== tur) hata(s.rota, `sayfa türü ${sayfa['@type']} (${tur} bekleniyor)`)
    if (sayfa.isPartOf?.['@id'] !== SITE_ID) hata(s.rota, 'isPartOf site düğümünü göstermiyor')
    if (sayfa.about?.['@id'] !== KLINIK_ID || !ozetMi(sayfa.about)) hata(s.rota, 'about klinik özeti değil')
    if (sayfa.inLanguage !== 'tr-TR') hata(s.rota, `inLanguage ${sayfa.inLanguage}`)
    if (s.h1ler.length !== 1) hata(s.rota, `${s.h1ler.length} H1`)
    else if (sayfa.name !== s.h1ler[0]) hata(s.rota, `sayfa adı "${sayfa.name}", H1 "${s.h1ler[0]}"`)
  }
  return `${dizinde.length} sayfa; türler: ${Object.entries(turler).map(([t, n]) => `${t} ${n}`).join(', ')}`
})

denetim('Ana sayfa dışında dizine giren her sayfada BreadcrumbList (sıra 1..n, son öğede item yok)', (hata) => {
  let n = 0
  for (const s of dizinde) {
    const kirinti = s.graf.filter((d) => tipVar(d, 'BreadcrumbList'))
    if (s.rota === '/') { if (kirinti.length) hata(s.rota, 'ana sayfada kırıntı var'); continue }
    if (kirinti.length !== 1) { hata(s.rota, `${kirinti.length} BreadcrumbList`); continue }
    n++
    const ogeler = kirinti[0].itemListElement || []
    if (ogeler.some((o, i) => o.position !== i + 1)) hata(s.rota, 'position sırası bozuk')
    if (ogeler.at(-1)?.item) hata(s.rota, 'son öğede item var')
    if (ogeler.slice(0, -1).some((o) => !o.item)) hata(s.rota, 'ara öğede item eksik')
  }
  return `${n} sayfa`
})

denetim('noindex sayfalar (404, randevu-talebiniz-alindi) yalnız WebSite taşıyor', (hata) => {
  const noindex = hepsi.filter((s) => s.noindex)
  for (const s of noindex) {
    const turler = s.graf.map((d) => d['@type'])
    if (turler.some((t) => t !== 'WebSite')) hata(s.rota, `düğümler: ${turler.join(', ')}`)
  }
  return noindex.map((s) => s.dosya).join(', ')
})

const bloglar = dizinde.filter((s) => s.rota.startsWith('/blog/'))
denetim('Her blog sayfasında BlogPosting: headline = H1, author = kişi özeti, publisher = klinik özeti, mainEntityOfPage, tr-TR; image yalnız yazının kendi görseli', (hata) => {
  for (const s of bloglar) {
    const yazi = s.graf.filter((d) => tipVar(d, 'BlogPosting'))
    if (yazi.length !== 1) { hata(s.rota, `${yazi.length} BlogPosting`); continue }
    const y = yazi[0]
    if (y['@id'] !== `${s.canonical}#article`) hata(s.rota, `@id ${y['@id']}`)
    if (y.headline !== s.h1ler[0]) hata(s.rota, `headline "${y.headline}", H1 "${s.h1ler[0]}"`)
    if (!y.description) hata(s.rota, 'description yok')
    if (y.author?.['@id'] !== KISI_ID || !ozetMi(y.author)) hata(s.rota, 'author kişi özeti değil')
    if (y.publisher?.['@id'] !== KLINIK_ID || !ozetMi(y.publisher)) hata(s.rota, 'publisher klinik özeti değil')
    if (y.mainEntityOfPage?.['@id'] !== `${s.canonical}#webpage`) hata(s.rota, 'mainEntityOfPage sayfa düğümünü göstermiyor')
    if (y.inLanguage !== 'tr-TR') hata(s.rota, `inLanguage ${y.inLanguage}`)
    if (y.image) hata(s.rota, `image var (${y.image}); yazıların kendi görseli veride yok`)
  }
  return `${bloglar.length} blog sayfası`
})

denetim('Blog tarihleri: datePublished ve dateModified mevcut (sayfada görünen tarihten)', (hata) => {
  let var_ = 0
  for (const s of bloglar) {
    const y = s.graf.find((d) => tipVar(d, 'BlogPosting'))
    if (y?.datePublished && y?.dateModified) { var_++; continue }
    const post = blogPosts.find((p) => `/blog/${p.id}` === s.rota)
    hata(s.rota, `tarih yok; sayfada tarih yerine "${post?.date}" yazıyor`)
  }
  return `${var_}/${bloglar.length} sayfada tarih var`
})

denetim('ItemList öğeleri kısa özet (@type+@id+name+url); her öğe hedef sayfadaki düğüme çözülüyor, adı ve türü o düğümle aynı', (hata) => {
  let liste = 0
  let oge = 0
  for (const s of dizinde) {
    for (const l of s.tum.filter((d) => tipVar(d, 'ItemList'))) {
      liste++
      const ogeler = l.itemListElement || []
      if (l.numberOfItems !== ogeler.length) hata(s.rota, `numberOfItems ${l.numberOfItems}, öğe ${ogeler.length}`)
      ogeler.forEach((li, i) => {
        oge++
        const it = li.item || {}
        if (li.position !== i + 1) hata(s.rota, `position ${li.position} (${i + 1} bekleniyor)`)
        if (!ozetMi(it)) { hata(s.rota, `öğe kısa özet değil: ${Object.keys(it).join(', ')}`); return }
        const hedef = sayfalar.get(it.url === `${SITE_URL}/` ? '/' : it.url.replace(SITE_URL, ''))
        const dugum = hedef?.graf.find((d) => d['@id'] === it['@id'])
        if (!hedef) hata(s.rota, `hedef sayfa yok: ${it.url}`)
        else if (!dugum) hata(s.rota, `hedef sayfada ${it['@id']} düğümü yok`)
        else {
          if (dugum.name !== it.name) hata(s.rota, `"${it.name}" hedefte "${dugum.name}"`)
          if (!tipVar(dugum, it['@type'])) hata(s.rota, `${it['@id']} türü ${it['@type']}, hedefte ${dugum['@type']}`)
        }
      })
    }
  }
  return `${liste} liste, ${oge} öğe`
})

denetim('Açılış sayfaları: MedicalWebPage + Service (name = temiz hizmet adı, provider = klinik özeti) + FAQPage (sayfada soru varsa)', (hata) => {
  let sss = 0
  for (const s of dizinde.filter((x) => landingSlug.has(x.rota))) {
    const l = landingSlug.get(s.rota)
    const hizmet = s.graf.find((d) => d['@id'] === `${s.canonical}#service`)
    if (!hizmet || !tipVar(hizmet, 'Service')) { hata(s.rota, 'Service yok'); continue }
    if (hizmet.name !== l.servisAdi) hata(s.rota, `Service.name "${hizmet.name}" (servisAdi "${l.servisAdi}")`)
    if (hizmet.provider?.['@id'] !== KLINIK_ID || !ozetMi(hizmet.provider)) hata(s.rota, 'provider klinik özeti değil')
    const faq = s.graf.find((d) => tipVar(d, 'FAQPage'))
    const soru = (l.icerik.sss || []).length
    if (soru && faq?.mainEntity?.length !== soru) hata(s.rota, `FAQPage ${faq?.mainEntity?.length || 0} soru, sayfada ${soru}`)
    if (!soru && faq) hata(s.rota, 'sayfada soru yokken FAQPage var')
    if (faq) sss++
  }
  return `${landingSlug.size} sayfa, ${sss} sayfada FAQPage`
})

denetim('Konmaz alan yok (aggregateRating, review, award, slogan, priceRange, keywords, ödeme/olanak alanları); "en iyi" ve uzun tire yok', (hata) => {
  for (const s of hepsi) {
    const ld = JSON.stringify(s.graf)
    for (const alan of KONMAZ) if (ld.includes(`"${alan}"`)) hata(s.rota, `konmaz alan: ${alan}`)
    if (/(?<!\p{L})en\s+iyi(?!\p{L})/iu.test(ld)) hata(s.rota, '"en iyi" ifadesi')
    if (ld.includes('\u2014')) hata(s.rota, 'uzun tire')
  }
})

// ── Rapor ─────────────────────────────────────────────────────────────────

const gruplar = {}
for (const s of hepsi) gruplar[grup(s)] = (gruplar[grup(s)] || 0) + 1
console.log(`Şema denetimi: dist/ altında ${hepsi.length} HTML sayfası`)
console.log(`  ${Object.entries(gruplar).map(([g, n]) => `${g} ${n}`).join(' · ')}\n`)

let hataVar = false
sonuclar.forEach(({ baslik, hatalar, not }, i) => {
  if (hatalar.length) hataVar = true
  console.log(`${hatalar.length ? 'HATA' : 'OK  '}  ${i + 1}. ${baslik}`)
  if (not) console.log(`        ${not}`)
  hatalar.slice(0, 6).forEach((h) => console.log(`        - ${h}`))
  if (hatalar.length > 6) console.log(`        - ... ve ${hatalar.length - 6} sayfa daha`)
})
console.log(hataVar ? '\nGeçmeyen denetim var.' : '\nTüm denetimler geçti.')
process.exit(hataVar ? 1 : 0)

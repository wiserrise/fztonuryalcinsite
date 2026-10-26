import { useEffect } from 'react'
import { SITE_URL } from '../config/site.js'
import { JSON_LD_ID } from '../lib/siteSchema.js'

// Adres tek yerde tanımlıdır (config/site.js); buradan yeniden dışa aktarılmasının
// nedeni sayfaların halihazırda useSeo üzerinden içe aktarıyor olmasıdır.
export { SITE_URL }
export const DEFAULT_IMAGE = `${SITE_URL}/assets/onur-yalcin-portrait-Pdhc5rvj.jpg`

// Ana sayfa (landing) SEO metni: index.html'deki statik değerlerle aynı tutulur,
// blog sayfasından geri dönüldüğünde title/description'ın eski haline dönmesi için.
export const HOME_SEO = {
  title:
    'Kadıköy Fizyoterapist | En İyi Fizyoterapist Onur Yalçın, Kozyatağı',
  description:
    "Kadıköy'de erkek pelvik taban fizyoterapisi, manuel terapi, TME (çene eklemi), skolyoz ve klinik pilates alanlarında fizyoterapi ve rehabilitasyon hizmeti. Fizyoterapist Onur Yalçın – Kadıköy Kozyatağı.",
  canonical: `${SITE_URL}/`,
  ogType: 'website',
}

function setMetaTag(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  if (!href) return
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Kimlikli bir JSON-LD <script> ekler/günceller; obj null ise kaldırır.
// Ön render edilmiş sayfada blok sunucudan aynı kimlikle gelir (scripts/prerender.mjs);
// burada bulunur ve yalnız içeriği yenilenir, ikinci bir blok eklenmez.
function setJsonLd(id, obj) {
  let el = document.getElementById(id)
  if (!obj) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(obj)
}

/**
 * Sayfa başına <title>, meta description, canonical, Open Graph ve JSON-LD etiketlerini
 * günceller. SPA olduğu için her sayfa kendi SEO değerlerini set eder.
 * jsonLd: sayfanın tek JSON-LD grafiği (site, sayfa, kırıntı ve varlıklar birlikte);
 *   lib/siteSchema.js'teki fonksiyonlardan gelir, prerender da aynılarını kullanır.
 * beklemede: true iken hiçbir etikete dokunulmaz. Sayfa metni tembel yüklenirken
 *   (LandingPage) prerender'dan gelen doğru başlık ve JSON-LD yerinde kalır; aksi halde
 *   içerik gelene kadar ld-page silinip yeniden yazılıyordu.
 */
export function useSeo({ title, description, canonical, ogType = 'website', image = DEFAULT_IMAGE, jsonLd, noindex = false, beklemede = false }) {
  const ldKey = jsonLd ? JSON.stringify(jsonLd) : ''
  useEffect(() => {
    if (beklemede) return
    if (title) document.title = title
    // Teşekkür sayfası gibi arama sonuçlarında görünmemesi gereken sayfalar için.
    // SPA olduğundan etiket, dizine girmesi gereken sayfaya geçilince geri alınır.
    setMetaTag('name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:url', canonical)
    setMetaTag('property', 'og:image', image)
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', image)
    setCanonical(canonical)
    setJsonLd(JSON_LD_ID, jsonLd || null)
  }, [title, description, canonical, ogType, image, ldKey, noindex, beklemede])
}

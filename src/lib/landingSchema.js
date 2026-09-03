// Reklam hizmet sayfalarının yapılandırılmış verisi ve baş etiketleri.
//
// Aynı değerler iki yerde gerekiyor: tarayıcıda çalışan LandingPage bileşeninde ve
// derleme sonrası her sayfa için statik HTML üreten prerender betiğinde. İkisinin
// ayrışmaması için tek kaynak burasıdır.

import { SITE_URL } from '../config/site.js'
import { LOCATION } from '../config/site.js'

/** Sayfanın @graph biçimindeki yapılandırılmış verisi. */
export function landingJsonLd(landing) {
  const url = `${SITE_URL}/${landing.slug}`
  const icerik = landing.icerik
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${url}#webpage`,
        url,
        name: icerik.title,
        description: icerik.metaDescription,
        inLanguage: 'tr-TR',
        isPartOf: { '@id': `${SITE_URL}/#clinic` },
        about: { '@id': `${url}#service` },
        primaryImageOfPage: `${SITE_URL}${landing.gorsel}`,
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: landing.servisAdi,
        description: icerik.metaDescription,
        serviceType: landing.servisAdi,
        provider: { '@id': `${SITE_URL}/#clinic` },
        // Bölge sayfasında hizmet alanı semttir (w8-schema); ilçe ve il zincirde kalır.
        // Hizmet sayfalarında ilçe. Tek klinik entity'si (#clinic) değişmez.
        areaServed: landing.semt
          ? {
              '@type': 'Place',
              name: landing.semt,
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: LOCATION.district,
                containedInPlace: { '@type': 'City', name: LOCATION.city },
              },
            }
          : {
              '@type': 'AdministrativeArea',
              name: LOCATION.district,
              containedInPlace: { '@type': 'City', name: LOCATION.city },
            },
        url,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: icerik.sss.map((f) => ({
          '@type': 'Question',
          name: f.soru,
          acceptedAnswer: { '@type': 'Answer', text: f.cevap },
        })),
      },
    ],
  }
}

/** Sayfanın kırıntı navigasyonu (BreadcrumbList kaynağı). */
export function landingBreadcrumbs(landing) {
  return [
    { name: 'Ana Sayfa', url: '/' },
    { name: landing.breadcrumbAdi, url: `/${landing.slug}` },
  ]
}

export function landingBreadcrumbJsonLd(landing) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: landingBreadcrumbs(landing).map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.url === '/' ? '/' : c.url}`,
    })),
  }
}

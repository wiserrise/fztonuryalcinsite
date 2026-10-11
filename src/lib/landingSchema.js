// Reklam hizmet sayfalarının yapılandırılmış verisi.
//
// Aynı değerler iki yerde gerekiyor: tarayıcıda çalışan LandingPage bileşeninde ve
// derleme sonrası her sayfa için statik HTML üreten prerender betiğinde. İkisinin
// ayrışmaması için tek kaynak burasıdır; ortak düğümler (site, sayfa, kırıntı, klinik
// özeti) lib/siteSchema.js'ten gelir.

import { SITE_URL, LOCATION } from '../config/site.js'
import { semaGrafi, webSiteDugumu, sayfaDugumu, kirintiDugumu, sssDugumu, klinikOzeti } from './siteSchema.js'

/**
 * Sayfanın @graph biçimindeki yapılandırılmış verisi: site, MedicalWebPage, Service,
 * (sayfada soru varsa) FAQPage ve kırıntı. Klinik burada tam kayıt olarak değil kısa
 * özetle geçer; tam kayıt ana sayfada ve iletişimde.
 */
export function landingJsonLd(landing) {
  const yol = `/${landing.slug}`
  const url = `${SITE_URL}${yol}`
  const icerik = landing.icerik
  return semaGrafi([
    webSiteDugumu(),
    sayfaDugumu({
      tur: 'MedicalWebPage',
      yol,
      ad: icerik.h1,
      description: icerik.metaDescription,
      // Sayfanın konusu klinik (about), ana varlığı bu sayfadaki hizmet. Hizmet düğümü
      // aynı grafikte tam olarak durduğu için burada yalnız @id yeterli.
      mainEntity: { '@id': `${url}#service` },
      primaryImageOfPage: `${SITE_URL}${landing.gorsel}`,
    }),
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      // Temiz hizmet adı: H1 uzun bir cümle olduğu için servisAdi kullanılır.
      name: landing.servisAdi,
      description: icerik.metaDescription,
      serviceType: landing.servisAdi,
      provider: klinikOzeti(),
      // Bölge sayfasında hizmet alanı semttir (w8-schema); ilçe ve il zincirde kalır.
      // Hizmet sayfalarında ilçe.
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
    // Sayfada soru yoksa FAQPage basılmaz (boş mainEntity geçersiz yapılandırılmış veridir).
    sssDugumu(yol, icerik.sss),
    kirintiDugumu(yol, landingBreadcrumbs(landing)),
  ])
}

/** Sayfanın kırıntı navigasyonu (hero'daki görünen kırıntıyla aynı). */
export function landingBreadcrumbs(landing) {
  return [
    { name: 'Ana Sayfa', url: '/' },
    { name: landing.breadcrumbAdi, url: `/${landing.slug}` },
  ]
}

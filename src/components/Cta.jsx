// İletişim çağrıları tek yerden yönetilir: numara ve WhatsApp mesaj metni burada
// birleşir. Tıklamaların Google Ads'e dönüşüm olarak bildirilmesi ise belge
// düzeyindeki dinleyiciye bırakılmıştır (lib/tracking.js installLinkTracking):
// bu sayede sitedeki her tel:/wa.me bağlantısı, bu bileşenlerden geçmese bile
// ölçülür ve aynı tıklama iki kez sayılmaz. Buradaki data-cta-source niteliği
// dönüşümün hangi bölümden geldiğini bildirir.

import { PHONE, NAP } from '../config/site.js'

export const PHONE_HREF = 'tel:+905072949900'
const WA_BASE = 'https://wa.me/905072949900'

// Google Haritalar yol tarifi: koordinat değil, işletme adı + tam adres verilir ki
// harita profili kaydın kendisine (GBP) eşlesin, yalnızca bir noktaya değil.
export const YOL_TARIFI_HREF = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${NAP.isim}, ${NAP.adres}`)}`

/** Verilen mesajla WhatsApp bağlantısı üretir. */
export function waHref(mesaj) {
  const varsayilan = 'Merhaba, web sitenizden ulaşıyorum. Randevu/bilgi almak istiyorum.'
  return `${WA_BASE}?text=${encodeURIComponent(mesaj || varsayilan)}`
}

const PhoneIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </svg>
)

const WhatsAppIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
  </svg>
)

/**
 * Sayfa içi WhatsApp butonu.
 * @param {string} source Dönüşüm olayında hangi bölümden tıklandığını belirtir.
 * @param {string} mesaj WhatsApp'a önceden doldurulacak metin.
 */
export function WhatsAppButton({ source, mesaj, children, className = 'btn btn-primary', style }) {
  return (
    <a
      href={waHref(mesaj)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-cta-source={source}
      style={{ gap: '0.6rem', ...style }}
    >
      <WhatsAppIcon size={20} />
      {children || 'WhatsApp ile Randevu Al'}
    </a>
  )
}

/** Sayfa içi arama butonu. */
export function PhoneButton({ source, children, className = 'btn btn-outline', style }) {
  return (
    <a
      href={PHONE_HREF}
      className={className}
      data-cta-source={source}
      style={{ gap: '0.6rem', ...style }}
    >
      <PhoneIcon size={20} />
      {children || PHONE}
    </a>
  )
}

/**
 * Sağ altta sabit duran arama + WhatsApp butonları.
 * Görünümü ana sayfadaki özgün haliyle birebir aynıdır; ayrı bileşene alınmasının
 * nedeni reklam sayfalarında da kullanılabilmesidir.
 */
export default function FloatingCta({ source = 'sabit-buton', mesaj, className = '' }) {
  return (
    <div
      className={`floating-container ${className}`.trim()}
      data-cta-source={source}
      style={{ position: 'fixed', bottom: '30px', right: '30px', display: 'flex', gap: '15px', alignItems: 'center', zIndex: '9999' }}
    >
      <a
        href={PHONE_HREF}
        className="floating-call-btn pulse-call"
        aria-label="Hemen Bizi Arayın"
        style={{ backgroundColor: 'var(--primary, #0ea5e9)', color: 'white', padding: '0px 24px', height: '60px', borderRadius: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', transition: '0.3s', whiteSpace: 'nowrap' }}
      >
        <PhoneIcon />
        <span className="hide-on-mobile">Hemen Bizi Arayın</span>
      </a>
      <a
        href={waHref(mesaj)}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn pulse-green"
        aria-label="WhatsApp ile iletişime geçin"
        style={{ backgroundColor: 'rgb(37, 211, 102)', color: 'white', width: '65px', height: '65px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s', cursor: 'pointer' }}
      >
        <WhatsAppIcon size={36} />
      </a>
    </div>
  )
}

/**
 * Reklam sayfalarında mobil ekranın altına yapışan iki buton: Hemen Ara + WhatsApp.
 * Yalnızca dar ekranda görünür (index.css .mobil-alt-cubuk); masaüstünde render edilir
 * ama CSS ile gizlidir, böylece pencere daraltılınca da çalışır. Tıklamalar
 * installLinkTracking tarafından data-cta-source ile ölçülür; ayrıca onClick gerekmez.
 * Gövdeye pay bırakma işi sayfanın <main class="reklam-sayfa"> sınıfındadır (CLS yok).
 */
export function MobilAltCubuk({ mesaj, source = 'mobil-cubuk' }) {
  return (
    <div className="mobil-alt-cubuk" data-cta-source={source} role="region" aria-label="Hızlı iletişim">
      <a href={PHONE_HREF} className="mobil-alt-cubuk-btn mobil-alt-cubuk-ara">
        <PhoneIcon size={22} />
        Hemen Ara
      </a>
      <a href={waHref(mesaj)} target="_blank" rel="noopener noreferrer" className="mobil-alt-cubuk-btn mobil-alt-cubuk-wa">
        <WhatsAppIcon size={22} />
        WhatsApp
      </a>
    </div>
  )
}

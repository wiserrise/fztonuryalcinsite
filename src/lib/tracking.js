// Google Ads / gtag olay gönderimi.
//
// Tasarım kararları:
// - gtag yoksa (reklam engelleyici, betik yüklenmedi) sessizce geçilir; hiçbir
//   tıklama gtag yüzünden engellenmez. Ölçüm, kullanıcının sayfayı kullanmasının
//   önüne asla geçmez.
// - Dönüşüm etiketi girilmemişse Google Ads'e "conversion" gönderilmez, yalnızca
//   adlandırılmış olay gönderilir. Böylece etiket gelmeden yanlış sayım oluşmaz.
// - Site bir SPA olduğu için gtag.js'in ilk yüklemede attığı tek page_view yeterli
//   değildir; rota değişimleri usePageView ile ayrıca bildirilir.

import {
  GOOGLE_ADS_ID,
  CONVERSION_LABELS,
  CONVERSION_VALUE,
  CONVERSION_CURRENCY,
} from '../config/ads.js'

function gtag(...args) {
  if (typeof window === 'undefined') return false
  if (typeof window.gtag !== 'function') return false
  try {
    window.gtag(...args)
    return true
  } catch {
    return false
  }
}

/**
 * Bir dönüşüm olayını bildirir.
 * @param {'whatsapp_click'|'phone_click'|'form_submit'} action
 * @param {object} params Olaya eklenecek ek bilgi (ör. { source: 'klinik-pilates-hero' })
 */
export function trackConversion(action, params = {}) {
  const detay = {
    ...params,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  }

  // Her durumda okunabilir bir olay: Google Ads'te "içe aktarılan" hedef olarak da
  // kullanılabilir, GA4 bağlanırsa oradan da görünür.
  gtag('event', action, detay)

  const label = CONVERSION_LABELS[action]
  if (!label) return

  const conversion = {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    ...detay,
  }
  if (CONVERSION_VALUE > 0) {
    conversion.value = CONVERSION_VALUE
    conversion.currency = CONVERSION_CURRENCY
  }
  gtag('event', 'conversion', conversion)
}

/** WhatsApp bağlantısı tıklandığında çağrılır. */
export const trackWhatsApp = (source) => trackConversion('whatsapp_click', { source })

/** Telefon bağlantısı tıklandığında çağrılır. */
export const trackPhone = (source) => trackConversion('phone_click', { source })

/** Form gönderildiğinde çağrılır. */
export const trackFormSubmit = (source) => trackConversion('form_submit', { source })

/**
 * SPA rota değişimini sayfa görüntüleme olarak bildirir.
 * gtag.js yalnızca ilk yüklemede page_view atar; React Router ile gezinildiğinde
 * bildirilmezse yeniden pazarlama listeleri ve sayfa bazlı raporlar eksik kalır.
 */
export function trackPageView(path, title) {
  gtag('event', 'page_view', {
    page_path: path,
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
    page_title: title || (typeof document !== 'undefined' ? document.title : undefined),
    send_to: GOOGLE_ADS_ID,
  })
}

// --- Bağlantı tıklamalarının merkezi ölçümü ---------------------------------
//
// Telefon ve WhatsApp bağlantıları sitenin her yerine dağılmış durumda (ana sayfa
// gövdesi, blog yazıları, kategori sayfaları, sabit butonlar). Her birine tek tek
// onClick eklemek yerine belge düzeyinde tek bir dinleyici kullanılıyor: sonradan
// eklenen bağlantılar da otomatik ölçülür ve aynı tıklama iki kez sayılmaz.

function kaynakBul(a) {
  const acik = a.closest('[data-cta-source]')
  if (acik) return acik.getAttribute('data-cta-source')
  const bolum = a.closest('section[id]')
  if (bolum) return bolum.id
  if (a.closest('.floating-container')) return 'sabit-buton'
  if (a.closest('footer')) return 'footer'
  if (a.closest('nav')) return 'menu'
  return 'sayfa'
}

/**
 * Belge düzeyinde tıklama dinleyicisi kurar; tel: ve wa.me bağlantılarını
 * dönüşüm olarak bildirir. App bileşeninde bir kez çağrılır.
 * @returns {() => void} dinleyiciyi kaldıran fonksiyon
 */
export function installLinkTracking() {
  if (typeof document === 'undefined') return () => {}

  const onClick = (e) => {
    const a = e.target && e.target.closest ? e.target.closest('a[href]') : null
    if (!a) return
    const href = a.getAttribute('href') || ''
    if (href.startsWith('tel:')) {
      trackPhone(kaynakBul(a))
    } else if (
      href.includes('wa.me') ||
      href.includes('api.whatsapp.com') ||
      href.startsWith('whatsapp://')
    ) {
      trackWhatsApp(kaynakBul(a))
    }
  }

  document.addEventListener('click', onClick, { capture: true })
  return () => document.removeEventListener('click', onClick, { capture: true })
}

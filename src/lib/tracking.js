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
  GA4_OLCUM_KIMLIGI,
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
  const olayGitti = gtag('event', action, detay)

  const label = CONVERSION_LABELS[action]
  if (!label) return olayGitti

  const conversion = {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    ...detay,
  }
  if (CONVERSION_VALUE > 0) {
    conversion.value = CONVERSION_VALUE
    conversion.currency = CONVERSION_CURRENCY
  }
  return gtag('event', 'conversion', conversion)
}

/**
 * Telefonu Google Ads gelişmiş dönüşümleri için E.164 biçimine çevirir
 * (0532 123 45 67 -> +905321234567). Türkiye numarası olarak çözülemezse null döner;
 * o durumda kullanıcı verisi hiç gönderilmez.
 */
export function telefonE164(ham) {
  const r = String(ham || '').replace(/\D/g, '')
  if (r.length === 12 && r.startsWith('90')) return `+${r}`
  if (r.length === 11 && r.startsWith('0')) return `+90${r.slice(1)}`
  if (r.length === 10 && r.startsWith('5')) return `+90${r}`
  return null
}

/**
 * Form gönderimi kesinleştiğinde dönüşümü bildirir.
 *
 * Önceki kurulumda dönüşüm teşekkür sayfasında atılıyordu. Form formsubmit.co'ya gidip
 * oradan yönlendirildiği için o yönlendirme aksadığında sinyal hiç gelmiyor, teşekkür
 * sayfasını doğrudan açan herkes ise dönüşüm sayılıyordu. Artık form arka planda
 * gönderilir ve dönüşüm başarı yanıtı geldiği anda, sayfa değişmeden atılır.
 *
 * Gelişmiş dönüşümler: telefon `user_data` olarak etikete verilir; Google etiketi onu
 * cihazda karma (hash) değere çevirir. Hesapta özellik açık değilse veri kullanılmaz.
 *
 * @param {string} source Formun bulunduğu yer (ör. 'hero-form')
 * @param {string} telefon Formdaki telefon alanı
 * @param {() => void} [bitince] Gönderim tamamlanınca ya da en geç 1,2 sn sonra BİR kez çağrılır
 */
export function formDonusumuBildir(source, telefon, bitince) {
  let bitti = false
  const bitir = () => {
    if (bitti) return
    bitti = true
    if (bitince) bitince()
  }
  const e164 = telefonE164(telefon)
  if (e164) gtag('set', 'user_data', { phone_number: e164 })
  const gitti = trackConversion('form_submit', { source, event_callback: bitir })
  if (!gitti) bitir()
  else setTimeout(bitir, 1200)
}

// Arka plan gönderimi başarısız olursa form klasik yolla (formsubmit.co yönlendirmesiyle)
// gönderilir. Bu işaret, teşekkür sayfasının yalnız gerçekten form gönderen ziyaretçide
// dönüşüm bildirmesini sağlar. İçinde kişisel veri tutulmaz, yalnız zaman damgası.
const KLASIK_GONDERIM_ANAHTARI = 'fzt-form-klasik-gonderim'
const KLASIK_GONDERIM_OMRU_MS = 30 * 60 * 1000

export function klasikGonderimIsaretle() {
  try {
    sessionStorage.setItem(KLASIK_GONDERIM_ANAHTARI, String(Date.now()))
  } catch {
    // Depolama kapalıysa teşekkür sayfası dönüşüm bildiremez; gönderim yine olur.
  }
}

/** İşaret varsa ve tazeyse true döner; her durumda işareti siler. */
export function klasikGonderimAl() {
  try {
    const t = Number(sessionStorage.getItem(KLASIK_GONDERIM_ANAHTARI))
    sessionStorage.removeItem(KLASIK_GONDERIM_ANAHTARI)
    return Boolean(t) && Date.now() - t < KLASIK_GONDERIM_OMRU_MS
  } catch {
    return false
  }
}

/**
 * GA4 ölçüm kimliği girilmişse Google Analytics'i başlatır. Aynı gtag.js kitaplığı
 * kullanılır; ek betik yüklenmez. Rota değişimlerini GA4'ün geliştirilmiş ölçümü
 * (tarayıcı geçmişi olayları) kendisi yakalar. App bileşeninde bir kez çağrılır.
 */
export function installAnalytics() {
  if (!GA4_OLCUM_KIMLIGI) return
  gtag('config', GA4_OLCUM_KIMLIGI)
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

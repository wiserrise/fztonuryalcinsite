// Randevu talep formu.
//
// Gönderim FormSubmit üzerinden e-postaya iletilir. Form ARKA PLANDA gönderilir
// (formsubmit.co/ajax): başarı yanıtı geldiğinde Google Ads dönüşümü sayfa değişmeden
// atılır, ardından teşekkür sayfasına geçilir. Önceki kurulumda dönüşüm, formsubmit.co
// yönlendirmesinden sonra teşekkür sayfasında atılıyordu; yönlendirme aksayınca sinyal
// hiç gelmiyor, teşekkür sayfasını doğrudan açan herkes ise dönüşüm sayılıyordu.
// Arka plan gönderimi herhangi bir nedenle başarısız olursa form klasik yolla gider
// (aşağıdaki gizli alanlar ve _next bu yol için durur) ve dönüşümü teşekkür sayfası atar.
//
// Alanlar bilinçli olarak azdır (ad + telefon). Sağlık bilgisi istenmez; KVKK
// kapsamında özel nitelikli veri olduğu için form bunu toplamak üzere kurulmamıştır.
//
// `mini` varyantı (reklam sayfaları): yalnızca ad + telefon, not alanı hiç yoktur.
// Gönderim akışı, gizli alanlar ve _next yönlendirmesi birebir aynıdır; yalnızca
// doldurulacak alan sayısı ve buton metni değişir.

import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SITE_URL } from '../hooks/useSeo.js'
import { formDonusumuBildir, klasikGonderimIsaretle } from '../lib/tracking.js'

const FORM_ADRESI = 'https://formsubmit.co/fztonuryalcin@gmail.com'
const FORM_AJAX_ADRESI = 'https://formsubmit.co/ajax/fztonuryalcin@gmail.com'
const TESEKKUR_YOLU = '/randevu-talebiniz-alindi'

const inputStyle = {
  padding: '0.95rem 1rem',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--border)',
  outline: 'none',
  fontFamily: 'inherit',
  fontSize: '1rem',
  width: '100%',
}

const labelStyle = { fontWeight: 500, color: 'var(--text)', fontSize: '0.95rem' }

export default function RandevuFormu({ konu, source = 'form', mini = false }) {
  const navigate = useNavigate()
  const [gonderiliyor, setGonderiliyor] = useState(false)
  const kilit = useRef(false)

  async function gonder(e) {
    // fetch yoksa (çok eski tarayıcı) form klasik yolla gider.
    if (typeof fetch !== 'function') {
      klasikGonderimIsaretle()
      return
    }
    e.preventDefault()
    if (kilit.current) return
    kilit.current = true
    setGonderiliyor(true)

    const form = e.currentTarget
    const veri = Object.fromEntries(new FormData(form))
    try {
      const yanit = await fetch(FORM_AJAX_ADRESI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(veri),
      })
      const sonuc = await yanit.json().catch(() => ({}))
      if (!yanit.ok || String(sonuc.success) !== 'true') throw new Error(sonuc.message || `HTTP ${yanit.status}`)
      formDonusumuBildir(source, veri.phone, () => navigate(TESEKKUR_YOLU))
    } catch {
      // Arka plan gönderimi olmadı: klasik gönderim. form.submit() onSubmit'i yeniden
      // tetiklemez; dönüşümü teşekkür sayfası bildirir.
      klasikGonderimIsaretle()
      form.submit()
    }
  }

  return (
    <form
      action={FORM_ADRESI}
      method="POST"
      onSubmit={gonder}
      data-cta-source={source}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
    >
      <input type="hidden" name="_subject" value={`Web sitesi randevu talebi: ${konu}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="konu" value={konu} />
      <input type="hidden" name="_next" value={`${SITE_URL}${TESEKKUR_YOLU}`} />
      <input
        type="hidden"
        name="_autoresponse"
        value="Randevu talebiniz kliniğimize ulaştı. En kısa sürede sizinle iletişime geçeceğiz. Sağlıklı günler dileriz."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <label htmlFor={`ad-${source}`} style={labelStyle}>Adınız Soyadınız</label>
        <input id={`ad-${source}`} name="name" type="text" autoComplete="name" required placeholder="Adınız Soyadınız" style={inputStyle} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <label htmlFor={`tel-${source}`} style={labelStyle}>Telefon Numaranız</label>
        <input id={`tel-${source}`} name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="0 (5__) ___ __ __" style={inputStyle} />
      </div>

      {!mini && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label htmlFor={`not-${source}`} style={labelStyle}>
            Eklemek istediğiniz not <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>(isteğe bağlı)</span>
          </label>
          <textarea
            id={`not-${source}`}
            name="message"
            rows="3"
            placeholder="Size ne zaman ulaşmamız uygun olur?"
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>
      )}

      <button type="submit" className="btn btn-primary" disabled={gonderiliyor} style={{ marginTop: '0.4rem', width: '100%' }}>
        {gonderiliyor ? 'Gönderiliyor…' : mini ? 'Beni Arayın' : 'Randevu Talebi Gönder'}
      </button>

      <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
        Formu göndererek iletişim bilgilerinizin size dönüş yapılması amacıyla işlenmesini kabul
        etmiş olursunuz. Ayrıntı için{' '}
        <Link to="/gizlilik-politikasi" style={{ color: 'var(--secondary)', fontWeight: 600 }}>
          gizlilik politikası ve KVKK aydınlatma metni
        </Link>
        . Tanı, tetkik sonucu gibi sağlık bilgilerinizi forma yazmayın; bunları randevunuzda
        değerlendiriyoruz.
      </p>
    </form>
  )
}

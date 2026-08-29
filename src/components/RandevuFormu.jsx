// Randevu talep formu.
//
// Gönderim FormSubmit üzerinden e-postaya iletilir. Dönüşüm ölçümü, gönderim
// sonrası yönlendirilen teşekkür sayfasında (/randevu-talebiniz-alindi) yapılır:
// form gönderimi sayfadan ayrılmayı gerektirdiği için onSubmit anında atılan bir
// olay tarayıcı tarafından iptal edilebilir, teşekkür sayfası ise güvenilir sinyaldir.
//
// Alanlar bilinçli olarak azdır (ad + telefon). Sağlık bilgisi istenmez; KVKK
// kapsamında özel nitelikli veri olduğu için form bunu toplamak üzere kurulmamıştır.

import { Link } from 'react-router-dom'
import { SITE_URL } from '../hooks/useSeo.js'

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

export default function RandevuFormu({ konu, source = 'form' }) {
  return (
    <form
      action="https://formsubmit.co/fztonuryalcin@gmail.com"
      method="POST"
      data-cta-source={source}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
    >
      <input type="hidden" name="_subject" value={`Web sitesi randevu talebi: ${konu}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="konu" value={konu} />
      <input type="hidden" name="_next" value={`${SITE_URL}/randevu-talebiniz-alindi`} />
      <input
        type="hidden"
        name="_autoresponse"
        value="Randevu talebiniz kliniğimize ulaştı. En kısa sürede sizinle iletişime geçeceğiz. Sağlıklı günler dileriz."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <label htmlFor={`ad-${source}`} style={labelStyle}>Adınız Soyadınız</label>
        <input id={`ad-${source}`} name="name" type="text" required placeholder="Adınız Soyadınız" style={inputStyle} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <label htmlFor={`tel-${source}`} style={labelStyle}>Telefon Numaranız</label>
        <input id={`tel-${source}`} name="phone" type="tel" required placeholder="0 (5__) ___ __ __" style={inputStyle} />
      </div>

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

      <button type="submit" className="btn btn-primary" style={{ marginTop: '0.4rem', width: '100%' }}>
        Randevu Talebi Gönder
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

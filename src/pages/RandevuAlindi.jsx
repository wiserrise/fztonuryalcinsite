// Form gönderiminden sonra gelinen teşekkür sayfası.
// Google Ads form dönüşümü burada bildirilir: sayfanın yüklenmiş olması, formun
// gerçekten gönderildiğinin güvenilir kanıtıdır. Sayfa arama sonuçlarında
// görünmemeli, bu yüzden noindex.

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta from '../components/Cta.jsx'
import { PhoneButton, WhatsAppButton } from '../components/Cta.jsx'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'
import { trackFormSubmit } from '../lib/tracking.js'
import { BRAND, CALISMA_SAATLERI } from '../config/site.js'

export default function RandevuAlindi() {
  useSeo({
    title: `Randevu Talebiniz Alındı | ${BRAND}`,
    description: 'Randevu talebiniz kliniğimize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.',
    canonical: `${SITE_URL}/randevu-talebiniz-alindi`,
    noindex: true,
  })

  useEffect(() => {
    trackFormSubmit('randevu-formu')
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ padding: '9rem 0 5rem', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: 640 }}>
            <div
              style={{
                width: 72, height: 72, borderRadius: '50%', margin: '0 auto 1.75rem',
                backgroundColor: 'rgba(0, 212, 255, 0.12)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>

            <h1 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Randevu talebiniz bize ulaştı
            </h1>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.85, marginBottom: '2rem' }}>
              Talebiniz için teşekkür ederiz. Çalışma saatleri içinde en kısa sürede sizi arayarak
              uygun randevu zamanını birlikte belirleyeceğiz. Acele bir durumunuz varsa doğrudan da
              ulaşabilirsiniz.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <WhatsAppButton source="tesekkur-sayfasi" mesaj="Merhaba, randevu formunu doldurdum. Ek bilgi vermek istiyorum.">
                WhatsApp ile Yaz
              </WhatsAppButton>
              <PhoneButton source="tesekkur-sayfasi">Hemen Ara</PhoneButton>
            </div>

            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
              Çalışma saatleri: {CALISMA_SAATLERI.gunler}, {CALISMA_SAATLERI.saat}
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <Link to="/" style={{ color: 'var(--secondary)', fontWeight: 600 }}>Ana sayfaya dön</Link>
            </p>
          </div>
        </section>
      </main>
      <FloatingCta source="tesekkur-sayfasi" />
      <Footer />
    </>
  )
}

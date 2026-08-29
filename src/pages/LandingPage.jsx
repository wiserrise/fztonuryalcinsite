// Google Ads reklamlarının düştüğü hizmet sayfası (veri güdümlü).
//
// Sayfa içeriği src/data/landings.js dosyasından gelir; bu bileşen yalnızca
// düzeni, ölçümü ve yapılandırılmış veriyi kurar. Reklam sayfası olduğu için
// düzen bilinçli olarak şu sırayı izler: ilk ekranda ne sunulduğu ve iletişim
// yolu, ardından itirazları karşılayan içerik, aralarda tekrar eden tek tip
// eylem çağrısı.

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import FloatingCta, { WhatsAppButton, PhoneButton } from '../components/Cta.jsx'
import RandevuFormu from '../components/RandevuFormu.jsx'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'
import { getLandingBySlug } from '../data/landings.js'
import { landingJsonLd, landingBreadcrumbs } from '../lib/landingSchema.js'
import { BRAND, LOCATION, NAP, CALISMA_SAATLERI } from '../config/site.js'

// İçeriğin en son gözden geçirildiği tarih. Metin güncellendikçe burası da güncellenir.
const SON_GUNCELLEME = '5 Ağustos 2026'

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="M12 5v14" />
  </svg>
)
const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
  </svg>
)
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 4 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

function Sss({ sss }) {
  const [acik, setAcik] = useState(0)
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {sss.map((item, i) => {
        const isOpen = acik === i
        return (
          <div key={i} style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0, 212, 255, 0.15)', overflow: 'hidden' }}>
            <button
              onClick={() => setAcik(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.4rem', backgroundColor: 'transparent', textAlign: 'left', color: 'var(--primary)', fontWeight: 600, fontSize: '1.03rem', lineHeight: 1.5 }}
            >
              {item.soru}
              <span style={{ color: 'var(--secondary)', flexShrink: 0 }}>{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
            </button>
            {/* Cevap kapalıyken de belgede kalır, yalnızca görsel olarak katlanır.
                Koşullu render edilseydi kapalı sorular sayfa metninde hiç bulunmaz,
                arama motorları bu içeriği göremezdi. */}
            <div
              style={{
                maxHeight: isOpen ? '1200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out',
                padding: isOpen ? '0 1.4rem 1.4rem' : '0 1.4rem',
                color: 'var(--text-light)',
                lineHeight: 1.8,
              }}
            >
              <div style={{ paddingTop: '0.6rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>{item.cevap}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function CtaBlogu({ landing, source, baslik, metin }) {
  return (
    <div
      data-cta-source={source}
      style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        color: '#fff', borderRadius: 'var(--radius)', padding: '2.5rem 2rem', textAlign: 'center',
      }}
    >
      <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.75rem' }}>{baslik}</h2>
      <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, maxWidth: 620, margin: '0 auto 1.75rem' }}>{metin}</p>
      <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <WhatsAppButton source={source} mesaj={landing.waMesaj}>{landing.icerik.primaryCtaMetni}</WhatsAppButton>
        <PhoneButton source={source} className="btn btn-outline hero-btn-outline">Telefonla Ara</PhoneButton>
      </div>
    </div>
  )
}

export default function LandingPage({ slug: slugProp }) {
  const params = useParams()
  const slug = slugProp || params.slug
  const landing = getLandingBySlug(slug)
  const icerik = landing ? landing.icerik : null
  const url = `${SITE_URL}/${slug}`

  useSeo({
    title: icerik ? icerik.title : `Sayfa bulunamadı | ${BRAND}`,
    description: icerik ? icerik.metaDescription : 'Aradığınız sayfa bulunamadı.',
    canonical: url,
    image: landing ? `${SITE_URL}${landing.gorsel}` : undefined,
    breadcrumbs: landing ? landingBreadcrumbs(landing) : undefined,
    jsonLd: landing ? landingJsonLd(landing) : null,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!icerik) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '10rem 1.5rem 6rem', textAlign: 'center' }}>
          <h1>Sayfa bulunamadı</h1>
          <p style={{ margin: '1rem 0 2rem' }}>Aradığınız sayfa mevcut değil.</p>
          <Link to="/" className="btn btn-primary">Ana Sayfaya Dön</Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero: ilk ekranda ne sunulduğu, kime uygun olduğu ve iletişim yolu */}
        <header
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            color: '#fff', padding: '7.5rem 0 4rem',
          }}
        >
          <div className="container">
            <nav style={{ fontSize: '0.88rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.65)' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.65)' }}>Ana Sayfa</Link>
              {' / '}
              <span style={{ color: '#fff' }}>{landing.breadcrumbAdi}</span>
            </nav>

            <div className="landing-hero-grid">
              <div>
                <h1 style={{ color: '#fff', fontSize: 'clamp(1.85rem, 4vw, 2.7rem)', fontWeight: 800, lineHeight: 1.2 }}>
                  {icerik.h1}
                </h1>
                <p style={{ marginTop: '1rem', fontSize: '1.12rem', color: 'var(--secondary)', fontWeight: 600, lineHeight: 1.6 }}>
                  {icerik.heroAltBaslik}
                </p>
                <p style={{ marginTop: '1.1rem', fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.88)' }}>
                  {icerik.heroParagraf}
                </p>

                <ul style={{ margin: '1.75rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {landing.guvenMaddeleri.map((m) => (
                    <li key={m} style={{ display: 'flex', gap: '0.7rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.6 }}>
                      <CheckIcon />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                <div data-cta-source="hero" style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                  <WhatsAppButton source="hero" mesaj={landing.waMesaj}>{icerik.primaryCtaMetni}</WhatsAppButton>
                  <PhoneButton source="hero" className="btn btn-outline hero-btn-outline">Telefonla Ara</PhoneButton>
                </div>
              </div>

              {/* Form kartı: masaüstünde ilk ekranda görünür, mobilde içerikten sonra gelir */}
              <aside className="landing-hero-form">
                <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', padding: '2rem 1.75rem' }}>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sizi arayalım</h2>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.4rem' }}>
                    Numaranızı bırakın, uygun randevu zamanını belirlemek için size dönüş yapalım.
                  </p>
                  <RandevuFormu konu={landing.servisAdi} source="hero-form" />
                </div>
              </aside>
            </div>
          </div>
        </header>

        {/* Gövde bölümleri */}
        <section className="section" style={{ padding: '4rem 0 1rem' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            {icerik.bolumler.map((b, i) => (
              <div key={b.h2} style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.7rem)', marginBottom: '1.1rem', lineHeight: 1.3 }}>{b.h2}</h2>
                {b.paragraflar.map((p, j) => (
                  <p key={j} style={{ color: 'var(--text-light)', lineHeight: 1.9, marginBottom: '1.1rem', fontSize: '1.03rem' }}>{p}</p>
                ))}
                {b.liste && b.liste.length > 0 && (
                  <div style={{ display: 'grid', gap: '0.9rem', marginTop: '1.25rem' }}>
                    {b.liste.map((l) => (
                      <div key={l.baslik} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.1rem 1.25rem' }}>
                        <CheckIcon />
                        <div>
                          <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.25rem' }}>{l.baslik}</strong>
                          <span style={{ color: 'var(--text-light)', lineHeight: 1.75 }}>{l.metin}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sayfanın ortasında tek bir ara eylem çağrısı */}
                {i === Math.floor(icerik.bolumler.length / 2) - 1 && (
                  <div style={{ margin: '2.75rem 0 0.5rem' }}>
                    <CtaBlogu
                      landing={landing}
                      source="ara-cta"
                      baslik={landing.araCtaBaslik}
                      metin={landing.araCtaMetin}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sıkça sorulan sorular */}
        <section className="section" style={{ backgroundColor: 'var(--background)', padding: '4rem 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)' }}>Sıkça Sorulan Sorular</h2>
            <div style={{ marginTop: '3.5rem' }}>
              <Sss sss={icerik.sss} />
            </div>
          </div>
        </section>

        {/* Konum ve kapanış: randevu formu burada tekrar sunulur */}
        <section className="section" style={{ padding: '4rem 0 5rem' }}>
          <div className="container">
            <div className="landing-kapanis">
              <div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2.6vw, 1.8rem)', marginBottom: '1rem' }}>
                  {LOCATION.district} {LOCATION.neighborhood}'ndaki klinikte randevu
                </h2>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                  {landing.konumMetni}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  <li><strong style={{ color: 'var(--primary)' }}>Adres:</strong> {NAP.adres}</li>
                  <li><strong style={{ color: 'var(--primary)' }}>Çalışma saatleri:</strong> {CALISMA_SAATLERI.gunler}, {CALISMA_SAATLERI.saat}</li>
                  <li><strong style={{ color: 'var(--primary)' }}>Randevu:</strong> Görüşmeler randevu ile yapılır.</li>
                </ul>
                <div data-cta-source="kapanis" style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
                  <WhatsAppButton source="kapanis" mesaj={landing.waMesaj}>{icerik.primaryCtaMetni}</WhatsAppButton>
                  <PhoneButton source="kapanis">Telefonla Ara</PhoneButton>
                </div>

                {landing.ilgiliBaglantilar && landing.ilgiliBaglantilar.length > 0 && (
                  <div style={{ marginTop: '2.25rem' }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.85rem' }}>İlgili sayfalar</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                      {landing.ilgiliBaglantilar.map((l) => (
                        <Link
                          key={l.to}
                          to={l.to}
                          style={{ padding: '0.55rem 1rem', borderRadius: 30, border: '1px solid var(--border)', backgroundColor: 'var(--surface)', color: 'var(--primary)', fontWeight: 500, fontSize: '0.9rem' }}
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Harita bilinçli olarak yok: alt bilgide zaten bir tane var ve reklam
                  sayfasında ikinci bir gömülü harita hem sayfayı ağırlaştırıyor hem
                  ziyaretçiyi formdan uzaklaştırıyordu. */}
              <div>
                <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.2rem' }}>Randevu talebi bırakın</h3>
                  <RandevuFormu konu={landing.servisAdi} source="kapanis-form" />
                </div>
              </div>
            </div>

            {/* Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında
                Yönetmelik madde 5/(i), internet sitelerinde bilgilendirmenin son
                güncelleme tarihinin ve içerik sorumlusuna ulaşılacak iletişim
                bilgisinin açıkça belirtilmesini istiyor. */}
            <p style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.7 }}>
              Bu sayfadaki bilgiler bilgilendirme amaçlıdır ve hekim değerlendirmesinin yerine geçmez.
              İçerik sorumlusu: Onur Yalçın, Fizyoterapist ({' '}
              <a href="mailto:fztonuryalcin@gmail.com" style={{ color: 'var(--secondary)' }}>fztonuryalcin@gmail.com</a>
              {' '}). Son güncelleme: {SON_GUNCELLEME}.
            </p>
          </div>
        </section>
      </main>
      <FloatingCta source="sabit-buton" mesaj={landing.waMesaj} />
      <Footer />
    </>
  )
}

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
import FloatingCta, { WhatsAppButton, PhoneButton, MobilAltCubuk, PHONE_HREF, waHref, YOL_TARIFI_HREF } from '../components/Cta.jsx'
import RandevuFormu from '../components/RandevuFormu.jsx'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'
import { getLandingBySlug, landingIcerikYukle } from '../data/landings.js'
import { landingJsonLd, landingBreadcrumbs } from '../lib/landingSchema.js'
import { BRAND, BRAND_KISA, LOCATION, NAP, CALISMA_SAATLERI, GBP_MAP_URL } from '../config/site.js'

// İçeriğin en son gözden geçirildiği tarih. Metin güncellendikçe burası da güncellenir.
const SON_GUNCELLEME = '4 Eylül 2026'

// Bir kez yüklenen içerik burada tutulur: aynı sayfaya geri dönüşte yeniden istek atılmaz
// ve ilk render'da boş ekran görülmez.
const icerikOnbellek = {}

/**
 * Sayfanın metinlerini tembel yükler (bkz. landings.js). Reklam sayfalarında bu modül
 * prerender tarafından <link rel="modulepreload"> ile HTML'e yazıldığı için genelde
 * sayfa parçasıyla aynı anda gelir; bekleme süresi yok denecek kadar kısadır.
 */
function useLandingIcerik(landing) {
  const slug = landing ? landing.slug : null
  // Slug ile birlikte tutulur: sayfalar arası geçişte bir önceki sayfanın metni
  // yeni sayfanın başlığı altında bir kare bile görünmesin.
  const [durum, setDurum] = useState(() => ({ slug, icerik: (slug && icerikOnbellek[slug]) || null }))
  useEffect(() => {
    if (!landing) return
    if (icerikOnbellek[landing.slug]) {
      setDurum({ slug: landing.slug, icerik: icerikOnbellek[landing.slug] })
      return
    }
    let iptal = false
    landingIcerikYukle(landing).then((c) => {
      icerikOnbellek[landing.slug] = c
      if (!iptal) setDurum({ slug: landing.slug, icerik: c })
    })
    return () => {
      iptal = true
    }
  }, [landing])
  return durum.slug === slug ? durum.icerik : null
}

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

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
  </svg>
)
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
)
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="M8 12h8" />
  </svg>
)
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </svg>
)

/**
 * Reklam sayfası güven bloğu (hero altı, 4 kart). Kartlardaki her olgu site.js,
 * Hakkımda sayfası ve kunye.json'da zaten yazılı olanlardan alınır; hasta yorumu,
 * yıldız veya puan basılmaz (sağlık tanıtım mevzuatı ve CLAUDE.md §1.2).
 */
function GuvenBlogu({ landing }) {
  const kartStil = { backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.35rem 1.4rem', display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }
  const ikonStil = { color: 'var(--secondary)', flexShrink: 0, marginTop: 2 }
  const baslikStil = { color: 'var(--primary)', fontSize: '1rem', marginBottom: '0.35rem' }
  const metinStil = { color: 'var(--text-light)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }
  // Beyaz kart üstünde --secondary (#00d4ff) 1,77:1 kalıyordu; lacivert + alt çizgi 14,6:1 ve bağlantı olduğu belli.
  const linkStil = { color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3, display: 'inline-block', marginTop: '0.45rem' }
  return (
    <section aria-label="Klinik hakkında bilgiler" style={{ padding: '2.5rem 0 0' }}>
      <div className="container">
        <div className="reklam-guven-grid">
          <div style={kartStil}>
            <span style={ikonStil}><UserIcon /></span>
            <div>
              <h3 style={baslikStil}>Kim yürütüyor</h3>
              <p style={metinStil}>
                Fizyoterapist Onur Yalçın; İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu (2015).
                Değerlendirmeyi ve seansları kendisi yürütür.
              </p>
            </div>
          </div>
          <div style={kartStil}>
            <span style={ikonStil}><MapPinIcon /></span>
            <div>
              <h3 style={baslikStil}>Adres ve ulaşım</h3>
              <p style={metinStil}>{NAP.adres}</p>
              <p style={{ ...metinStil, marginTop: '0.35rem' }}>{landing.konumMetni}</p>
              <a href={YOL_TARIFI_HREF} target="_blank" rel="noopener noreferrer" style={linkStil}>Google Haritalar'da yol tarifi al</a>
            </div>
          </div>
          <div style={kartStil}>
            <span style={ikonStil}><GoogleIcon /></span>
            <div>
              <h3 style={baslikStil}>Google İşletme Profili</h3>
              {/* 'Değerlendirmeler' bilinçli olarak anılmaz: reklam sayfasında hasta yorumuna
                  yönlendirme §1.2 ve sağlık tanıtım yönetmeliği açısından gri alandı. */}
              <p style={metinStil}>Klinik bilgileri, fotoğraflar ve çalışma saatleri Google İşletme Profili'nde yer alır.</p>
              <a href={GBP_MAP_URL} target="_blank" rel="noopener noreferrer" style={linkStil}>Google İşletme Profilimiz</a>
            </div>
          </div>
          <div style={kartStil}>
            <span style={ikonStil}><ClockIcon /></span>
            <div>
              <h3 style={baslikStil}>Çalışma saatleri</h3>
              <p style={metinStil}>{CALISMA_SAATLERI.gunler}: {CALISMA_SAATLERI.saat}. {CALISMA_SAATLERI.kapali}.</p>
              <p style={{ ...metinStil, marginTop: '0.35rem' }}>Görüşmeler randevu ile yapılır; telefon veya WhatsApp yeterlidir.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

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

function CtaBlogu({ landing, icerik, reklam, source, baslik, metin }) {
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
      {reklam ? (
        // Reklam sayfası: tek birincil eylem (mobilde ara), masaüstünde WhatsApp
        <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={PHONE_HREF} className="btn btn-primary reklam-cta-mobil" style={{ gap: '0.6rem' }}><PhoneIcon />Hemen Ara</a>
          <WhatsAppButton source={source} mesaj={landing.waMesaj} className="btn btn-primary reklam-cta-masaustu">{icerik.primaryCtaMetni}</WhatsAppButton>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <WhatsAppButton source={source} mesaj={landing.waMesaj}>{icerik.primaryCtaMetni}</WhatsAppButton>
          <PhoneButton source={source} className="btn btn-outline hero-btn-outline">Telefonla Ara</PhoneButton>
        </div>
      )}
    </div>
  )
}

export default function LandingPage({ slug: slugProp }) {
  const params = useParams()
  const slug = slugProp || params.slug
  const landing = getLandingBySlug(slug)
  const icerik = useLandingIcerik(landing)
  const reklam = Boolean(landing && landing.reklam)
  const url = `${SITE_URL}/${slug}`

  // Baş etiketleri prerender ile HTML'de zaten var; useSeo yalnızca SPA içi geçişlerde
  // ve içerik geldiğinde günceller. İçerik yoldayken (beklemede) hiçbir etikete
  // dokunulmaz ki sunucudan gelen doğru başlık ve JSON-LD bir anlığına silinmesin.
  useSeo({
    title: icerik ? icerik.title : `Sayfa bulunamadı | ${BRAND_KISA}`,
    description: icerik ? icerik.metaDescription : 'Aradığınız sayfa bulunamadı.',
    canonical: url,
    image: landing ? `${SITE_URL}${landing.gorsel}` : undefined,
    breadcrumbs: landing ? landingBreadcrumbs(landing) : undefined,
    jsonLd: landing && icerik ? landingJsonLd({ ...landing, icerik }) : null,
    beklemede: Boolean(landing && !icerik),
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // İçerik modülü yolda: App'teki Suspense yer tutucusuyla aynı boş alan (zıplama yok).
  if (landing && !icerik) {
    return <div style={{ minHeight: '100vh' }} aria-hidden="true" />
  }

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
      {/* reklam-sayfa: mobilde yüzen butonları gizler ve kardeş footer'a alt çubuk payı verdirir (index.css) */}
      <main className={reklam ? 'reklam-sayfa' : undefined}>
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

                {reklam && landing.teklif ? (
                  <>
                    {/* Reklam sayfası: üç satırlık net teklif, ardından TEK birincil eylem.
                        Mobilde "Hemen Ara" (tel:), masaüstünde "Randevu Talebi" (forma kaydırır);
                        hangisinin görüneceğini index.css seçer. WhatsApp ikincil, yalnızca
                        masaüstünde metin bağlantısı olarak durur; mobilde alt çubukta zaten var. */}
                    <dl className="reklam-teklif">
                      <div><dt>Kimin için</dt><dd>{landing.teklif.kimIcin}</dd></div>
                      <div><dt>Hangi ihtiyaç için</dt><dd>{landing.teklif.neIcin}</dd></div>
                      <div><dt>Ne yapılır</dt><dd>{landing.teklif.neYapilir}</dd></div>
                    </dl>

                    <div data-cta-source="hero" style={{ display: 'flex', gap: '0.9rem 1.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1.75rem' }}>
                      <a href={PHONE_HREF} className="btn btn-primary reklam-cta-mobil" style={{ gap: '0.6rem' }}>
                        <PhoneIcon />
                        Hemen Ara
                      </a>
                      <a
                        href="#randevu-formu"
                        className="btn btn-primary reklam-cta-masaustu"
                        onClick={(e) => {
                          e.preventDefault()
                          const form = document.getElementById('randevu-formu')
                          if (!form) return
                          form.scrollIntoView({ behavior: 'smooth', block: 'center' })
                          const ilkAlan = form.querySelector('input[name="name"]')
                          if (ilkAlan) setTimeout(() => ilkAlan.focus({ preventScroll: true }), 400)
                        }}
                      >
                        Randevu Talebi
                      </a>
                      <a
                        href={waHref(landing.waMesaj)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reklam-cta-masaustu"
                        style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', fontSize: '0.95rem' }}
                      >
                        veya WhatsApp'tan yazın
                      </a>
                    </div>

                    <p style={{ marginTop: '1.5rem', fontSize: '1.02rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' }}>
                      {icerik.heroParagraf}
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{ marginTop: '1rem', fontSize: '1.12rem', color: 'var(--secondary)', fontWeight: 600, lineHeight: 1.6 }}>
                      {icerik.heroAltBaslik}
                    </p>
                    <p style={{ marginTop: '1.1rem', fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.88)' }}>
                      {icerik.heroParagraf}
                    </p>
                  </>
                )}

                <ul style={{ margin: '1.75rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {landing.guvenMaddeleri.map((m) => (
                    <li key={m} style={{ display: 'flex', gap: '0.7rem', color: 'rgba(255,255,255,0.92)', lineHeight: 1.6 }}>
                      <CheckIcon />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>

                {!reklam && (
                  <div data-cta-source="hero" style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                    <WhatsAppButton source="hero" mesaj={landing.waMesaj}>{icerik.primaryCtaMetni}</WhatsAppButton>
                    <PhoneButton source="hero" className="btn btn-outline hero-btn-outline">Telefonla Ara</PhoneButton>
                  </div>
                )}
              </div>

              {/* Form kartı: masaüstünde ilk ekranda görünür, mobilde içerikten sonra gelir */}
              <aside className="landing-hero-form" id="randevu-formu">
                <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', padding: '2rem 1.75rem' }}>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sizi arayalım</h2>
                  <p className={reklam ? 'reklam-form-aciklama' : undefined} style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.4rem' }}>
                    {reklam
                      ? 'Adınızı ve numaranızı bırakın, uygun randevu zamanı için sizi arayalım.'
                      : 'Numaranızı bırakın, uygun randevu zamanını belirlemek için size dönüş yapalım.'}
                  </p>
                  <RandevuFormu konu={landing.servisAdi} source="hero-form" mini={reklam} />
                </div>
              </aside>
            </div>
          </div>
        </header>

        {reklam && <GuvenBlogu landing={landing} />}

        {/* Gövde bölümleri */}
        <section className="section" style={{ padding: '4rem 0 1rem' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            {/*
              Sayfa kapak kartı (w7-gorsel). `gorsel` aynı zamanda og:image'dir; kart 1200x630
              olduğu için ikisi tek dosyadan beslenir. width/height CLS için sabit; alt metin
              kartı gerçekten tarif eder (görsel bir fotoğraf değil, bilgi kartıdır).
              Reklam sayfasında kart katlama altındadır (hero + güven bloğu önce gelir) ve LCP
              öğesi hero metnidir; bu yüzden orada lazy yüklenir, ilk boyamayla yarışmaz.
            */}
            {landing.gorsel && (
              <figure style={{ margin: '0 0 3rem' }}>
                <img
                  src={landing.gorsel}
                  alt={landing.gorselAlt || `${landing.breadcrumbAdi}, ${BRAND}`}
                  width="1200"
                  height="630"
                  loading={reklam ? 'lazy' : 'eager'}
                  fetchPriority={reklam ? 'auto' : 'high'}
                  decoding="async"
                  style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }}
                />
              </figure>
            )}
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
                {b.baglantilar && b.baglantilar.length > 0 && (
                  <p style={{ marginTop: '1rem', fontSize: '0.97rem', color: 'var(--text-light)', lineHeight: 1.9 }}>
                    Ayrıntılı yazı:{' '}
                    {b.baglantilar.map((bl, k) => (
                      <span key={bl.yol}>
                        {k > 0 && ', '}
                        <Link to={bl.yol} style={{ color: 'var(--primary)', fontWeight: 600 }}>{bl.metin}</Link>
                      </span>
                    ))}
                  </p>
                )}

                {/* Sayfanın ortasında tek bir ara eylem çağrısı */}
                {i === Math.floor(icerik.bolumler.length / 2) - 1 && (
                  <div style={{ margin: '2.75rem 0 0.5rem' }}>
                    <CtaBlogu
                      landing={landing}
                      icerik={icerik}
                      reklam={reklam}
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
                {reklam ? (
                  <div data-cta-source="kapanis" style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <a href={PHONE_HREF} className="btn btn-primary reklam-cta-mobil" style={{ gap: '0.6rem' }}><PhoneIcon />Hemen Ara</a>
                    <a href={YOL_TARIFI_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Yol tarifi al</a>
                  </div>
                ) : (
                  <div data-cta-source="kapanis" style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
                    <WhatsAppButton source="kapanis" mesaj={landing.waMesaj}>{icerik.primaryCtaMetni}</WhatsAppButton>
                    <PhoneButton source="kapanis">Telefonla Ara</PhoneButton>
                  </div>
                )}

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
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.2rem' }}>{reklam ? 'Sizi arayalım' : 'Randevu talebi bırakın'}</h3>
                  <RandevuFormu konu={landing.servisAdi} source="kapanis-form" mini={reklam} />
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
      {/* Reklam sayfasında mobilde yüzen butonlar gizlenir (alt çubukla çakışmasın), masaüstünde kalır */}
      <FloatingCta source="sabit-buton" mesaj={landing.waMesaj} className={reklam ? 'reklam-yuzen' : ''} />
      {reklam && <MobilAltCubuk mesaj={landing.waMesaj} />}
      <Footer />
    </>
  )
}

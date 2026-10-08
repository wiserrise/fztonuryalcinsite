// Tanımsız adresler için sayfa.
//
// Önceden bilinmeyen bir adres (ör. /kadikoy/klinik-pilates) Cloudflare tarafından
// index.html'e düşürülüyor, 200 dönüyor ve hiçbir rota eşleşmediği için BOŞ sayfa
// açılıyordu. Artık bu bileşenin ön render edilmiş hâli dist/404.html olarak yazılır ve
// Cloudflare onu 404 durum koduyla sunar (wrangler.jsonc: not_found_handling 404-page).
// Uygulama içinde de eşleşmeyen her rota buraya düşer.

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useSeo } from '../hooks/useSeo.js'
import { BRAND_KISA } from '../config/site.js'

export default function SayfaBulunamadi() {
  useSeo({
    title: `Sayfa bulunamadı | ${BRAND_KISA}`,
    description: 'Aradığınız sayfa bulunamadı. Ana sayfadan ya da tedavi yaklaşımlarımızdan devam edebilirsiniz.',
    noindex: true,
  })

  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ padding: '9rem 0 5rem', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: 640 }}>
            <h1 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Aradığınız sayfa bulunamadı
            </h1>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.85, marginBottom: '2rem' }}>
              Adres değişmiş ya da yanlış yazılmış olabilir. Ana sayfadan ya da tedavi
              yaklaşımlarımızdan devam edebilirsiniz.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-primary">Ana Sayfaya Dön</Link>
              <Link to="/tedavi-yaklasimlarimiz" className="btn btn-outline">Tedavi Yaklaşımlarımız</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

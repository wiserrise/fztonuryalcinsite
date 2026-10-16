import { GOOGLE_YORUMLARI } from '../data/guven.js'

// Danışan yorumları: Google İşletme Profili'ndeki yorumlardan BİREBİR alıntılar
// (src/data/guven.js; yalnız kısaltma "(…)" ile). Uydurma ya da yeniden yazılmış yorum basılmaz.
const QuoteIcon = () => (
  <svg className="yorum-tirnak" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  </svg>
)

export default function Testimonials() {
  const yorumlar = Object.values(GOOGLE_YORUMLARI)
  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <h2 className="section-title">Danışanlarımız Ne Diyor?</h2>
        <p className="section-lead">Google İşletme Profilimizdeki danışan yorumlarından alıntılar.</p>
        <div className="yorumlar">
          {yorumlar.map((y) => (
            <figure key={y.ad} className="yorum-kart">
              <QuoteIcon />
              <blockquote>{y.metin}</blockquote>
              <figcaption>
                <span className="yorum-harf" aria-hidden="true">{y.ad.charAt(0)}</span>
                <span>
                  <span className="yorum-ad">{y.ad}</span>
                  <span className="yorum-kaynak">Google yorumu · {y.tarih}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

import { KLINIK_FOTOGRAFLARI } from '../data/guven.js'

// Kliniğin kendi fotoğrafları (Google İşletme Profili'nden; src/data/guven.js).
// Stok görsel kullanılmaz: ziyaretçi gerçek mekânı görür.
// Bina girişi fotoğrafı galeride yok: üzerinde başka bir siteye ait filigran var.
const FOTOLAR = KLINIK_FOTOGRAFLARI.filter((f) => !f.src.includes('klinik-girisi'))
export default function KlinikGalerisi({ baslik = 'Kliniğimiz', aciklama, className = '' }) {
  return (
    <section className={`section galeri-bolum ${className}`.trim()}>
      <div className="container">
        <h2 className="section-title">{baslik}</h2>
        {aciklama && <p className="section-lead">{aciklama}</p>}
        <div className="galeri">
          {FOTOLAR.map((f, i) => (
            <figure key={f.src} className={i === 0 ? 'galeri-oge galeri-oge--genis' : 'galeri-oge'}>
              <picture>
                <source type="image/webp" srcSet={f.src.replace(/\.jpg$/, '.webp')} />
                <img src={f.src} alt={f.alt} width="800" height="600" loading="lazy" decoding="async" />
              </picture>
              <figcaption>{f.baslik}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

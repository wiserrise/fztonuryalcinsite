import { Link } from 'react-router-dom'
import { OkIkon } from './KartIkon.jsx'

// Blog yazılarının yazarı. Bilgiler Hakkımda sayfasında yazanlarla aynıdır
// (unvan, mezuniyet); çalışma alanları kartta yazılmaz, burada yeni bir iddia eklenmez.
// Şemadaki author kaydı (siteSchema.js kisiOzeti) aynı kişiyi ve aynı profil adresini gösterir.
export const YAZAR = {
  ad: 'Onur Yalçın',
  unvan: 'Fizyoterapist',
  profil: '/hakkimda',
  avatar: '/assets/yazar-onur-yalcin',
}

const Avatar = ({ boyut, className }) => (
  <picture className={className}>
    <source type="image/webp" srcSet={`${YAZAR.avatar}-96.webp 96w, ${YAZAR.avatar}-192.webp 192w`} sizes={`${boyut}px`} />
    <img src={`${YAZAR.avatar}-192.jpg`} alt={`${YAZAR.unvan} ${YAZAR.ad}`} width={boyut} height={boyut} loading="lazy" decoding="async" />
  </picture>
)

/** Başlık alanındaki küçük yazar satırı. */
export function YazarSatiri({ dk }) {
  return (
    <p className="yazi-meta">
      <Link to={YAZAR.profil} className="yazi-meta-yazar">
        <Avatar boyut={32} className="yazar-avatar yazar-avatar--kucuk" />
        <span>{YAZAR.unvan} {YAZAR.ad}</span>
      </Link>
      <span aria-hidden="true">·</span>
      <span>{dk} dk okuma</span>
    </p>
  )
}

/** Yazı sonundaki yazar kartı. */
export default function YazarKarti() {
  return (
    <aside className="yazar-karti" aria-label="Yazar hakkında">
      <Avatar boyut={88} className="yazar-avatar" />
      <div className="yazar-govde">
        <span className="yazar-etiket">Yazar</span>
        <p className="yazar-ad">{YAZAR.ad}</p>
        <p className="yazar-unvan">{YAZAR.unvan}</p>
        <p className="yazar-metin">
          İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon bölümü mezunu (2015).
        </p>
        <Link to={YAZAR.profil} className="kt-alt yazar-link">Onur Yalçın hakkında <OkIkon /></Link>
      </div>
    </aside>
  )
}

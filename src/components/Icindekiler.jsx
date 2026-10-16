import { useEffect, useState } from 'react'

/**
 * Sayfa içi başlık listesi. Okunan bölüm vurgulanır (yalnız tarayıcıda; sunucu çıktısı sade
 * listedir, hidrasyonda fark oluşmaz).
 */
export default function Icindekiler({ basliklar, baslik = 'Bu yazıda', className = '' }) {
  const [aktif, setAktif] = useState(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const ogeler = basliklar.map((b) => document.getElementById(b.id)).filter(Boolean)
    if (!ogeler.length) return
    const gorunen = new Map()
    const gozlem = new IntersectionObserver(
      (kayitlar) => {
        kayitlar.forEach((k) => gorunen.set(k.target.id, k.isIntersecting))
        // Ekranın üst yarısına girmiş son başlık aktif kabul edilir.
        const ust = ogeler.filter((o) => o.getBoundingClientRect().top < window.innerHeight * 0.4)
        setAktif(ust.length ? ust[ust.length - 1].id : null)
      },
      { rootMargin: '-80px 0px -55% 0px', threshold: [0, 1] },
    )
    ogeler.forEach((o) => gozlem.observe(o))
    return () => gozlem.disconnect()
  }, [basliklar])

  if (!basliklar || basliklar.length < 3) return null
  return (
    <nav className={className ? `toc ${className}` : 'toc'} aria-label={baslik}>
      <p className="toc-baslik">{baslik}</p>
      <ol>
        {basliklar.map((b) => (
          <li key={b.id}>
            <a href={`#${b.id}`} className={aktif === b.id ? 'toc-aktif' : undefined} aria-current={aktif === b.id ? 'location' : undefined}>
              {b.metin}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

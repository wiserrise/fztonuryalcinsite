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

  // Liste yapışkan kutuya sığmazsa: aktif madde kutu içinde görünür tutulur ve altta devamı
  // olduğunu gösteren solma uygulanır (yalnız kutunun kendi kaydırması; sayfa kaymaz).
  useEffect(() => {
    const nav = document.querySelector('.toc[data-toc]')
    const kutu = nav && nav.parentElement
    if (!kutu) return
    const isaretle = () => {
      const tasiyor = kutu.scrollHeight > kutu.clientHeight + 2
      const sonda = kutu.scrollTop + kutu.clientHeight >= kutu.scrollHeight - 4
      kutu.classList.toggle('toc-devami', tasiyor && !sonda)
    }
    if (aktif) {
      const a = nav.querySelector('.toc-aktif')
      if (a && kutu.scrollHeight > kutu.clientHeight) {
        const ar = a.getBoundingClientRect()
        const kr = kutu.getBoundingClientRect()
        if (ar.bottom > kr.bottom - 24) kutu.scrollTop += ar.bottom - kr.bottom + 48
        else if (ar.top < kr.top + 8) kutu.scrollTop -= kr.top - ar.top + 48
      }
    }
    isaretle()
    kutu.addEventListener('scroll', isaretle, { passive: true })
    window.addEventListener('resize', isaretle)
    return () => {
      kutu.removeEventListener('scroll', isaretle)
      window.removeEventListener('resize', isaretle)
    }
  }, [aktif])

  if (!basliklar || basliklar.length < 3) return null
  return (
    <nav className={className ? `toc ${className}` : 'toc'} aria-label={baslik} data-toc="">
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

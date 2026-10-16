import { useEffect, useState } from 'react'

/** Sayfanın üstünde ince okuma ilerleme çubuğu (hedef öğenin ne kadarı okundu). */
export default function OkumaCubugu({ hedefId }) {
  const [oran, setOran] = useState(0)
  useEffect(() => {
    const hesapla = () => {
      const el = document.getElementById(hedefId)
      if (!el) return
      const r = el.getBoundingClientRect()
      const toplam = r.height - window.innerHeight * 0.6
      setOran(Math.min(1, Math.max(0, (-r.top + 80) / Math.max(1, toplam))))
    }
    hesapla()
    window.addEventListener('scroll', hesapla, { passive: true })
    window.addEventListener('resize', hesapla)
    return () => {
      window.removeEventListener('scroll', hesapla)
      window.removeEventListener('resize', hesapla)
    }
  }, [hedefId])
  return <div className="okuma-cubugu" aria-hidden="true" style={{ transform: `scaleX(${oran})` }} />
}

// Kart ikonları: tek renkli çizgi ikonlar (24x24). Fotoğraf yerine kategoriyi tanıtan tutarlı bir görsel dil.
const YOLLAR = {
  'fizik-tedavi-klinigi': <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  'rehabilitasyon-merkezi': (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <polyline points="21 3 21 9 15 9" />
    </>
  ),
  'fizik-tedavi-uzmani': (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </>
  ),
  'pilates-salonu': (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  'spor-masaj-terapisti': <path d="M12 2.7s7 7.3 7 12.3a7 7 0 0 1-14 0C5 10 12 2.7 12 2.7z" />,
  'yoga-studyosu': (
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 7-10 16-10 0 9-4 17-9 17z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </>
  ),
}

export default function KartIkon({ slug }) {
  return (
    <span className="kt-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {YOLLAR[slug] || YOLLAR['fizik-tedavi-klinigi']}
      </svg>
    </span>
  )
}

export function OkIkon() {
  return (
    <svg className="kt-ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

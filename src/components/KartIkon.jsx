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
  'pelvik-taban': <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />,
  skolyoz: <path d="M9 3c3 3-3 6 0 9s-3 6 0 9M15 3c3 3-3 6 0 9s-3 6 0 9" />,
  manuel: (
    <>
      <path d="M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </>
  ),
  sporcu: (
    <>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </>
  ),
  degerlendirme: (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M12 11h4M12 16h4M8 11h.01M8 16h.01" />
    </>
  ),
  visseral: (
    <>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
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

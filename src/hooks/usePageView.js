import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../lib/tracking.js'

/**
 * Rota her değiştiğinde Google Ads etiketine sayfa görüntüleme bildirir.
 * App bileşeninde bir kez kullanılır. Sayfa bileşenlerinin useSeo etkileri
 * (title güncellemesi) React'te alt bileşen olarak önce çalıştığı için,
 * buradan bildirilen page_title güncel başlığı taşır.
 */
export function usePageView() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    trackPageView(pathname + search)
  }, [pathname, search])
}

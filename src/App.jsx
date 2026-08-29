import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { usePageView } from './hooks/usePageView.js'
import { installLinkTracking } from './lib/tracking.js'
import { landings } from './data/landings.js'

// Rota bazlı kod bölme.
//
// Site tek bir pakette derlendiğinde her ziyaretçi, açtığı sayfayla ilgisi olmayan
// kodu da indiriyordu: ana sayfanın uzun gövdesi, blog için kullanılan markdown
// ayrıştırıcısı ve tüm hizmet verisi. Reklam trafiğinin düştüğü sayfalarda ilk
// yükleme süresi hem dönüşümü hem Google Ads kalite puanını doğrudan etkilediği
// için sayfalar ayrı parçalara bölündü; ziyaretçi yalnızca girdiği sayfanın
// kodunu indirir.
const Home = lazy(() => import('./pages/Home.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const Iletisim = lazy(() => import('./pages/Iletisim.jsx'))
const Hakkimda = lazy(() => import('./pages/Hakkimda.jsx'))
const TedaviYaklasimlari = lazy(() => import('./pages/TedaviYaklasimlari.jsx'))
const KategoriPage = lazy(() => import('./pages/KategoriPage.jsx'))
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'))
const GizlilikPolitikasi = lazy(() => import('./pages/GizlilikPolitikasi.jsx'))
const RandevuAlindi = lazy(() => import('./pages/RandevuAlindi.jsx'))

// Parça yüklenirken sayfanın zıplamaması için yer tutucu.
const Yukleniyor = () => <div style={{ minHeight: '100vh' }} aria-hidden="true" />

export default function App() {
  // Rota değişimlerini Google Ads etiketine bildirir (SPA'da gtag tek page_view atar).
  usePageView()

  // Sitedeki tüm tel: ve WhatsApp bağlantılarının tıklanmasını dönüşüm olarak ölçer.
  useEffect(() => installLinkTracking(), [])

  return (
    <Suspense fallback={<Yukleniyor />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/tedavi-yaklasimlarimiz" element={<TedaviYaklasimlari />} />
        <Route path="/tedavi-yaklasimlarimiz/:slug" element={<KategoriPage />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* Hizmet sayfalari. Rotalar src/data/landings.js'ten URETILIR, elle yazilmaz.
            Onceden uc rota elle yaziliydi; listeye sayfa eklenince rota eklemek unutulunca
            sayfa on-render edilmis basligi tasiyor ama React hicbir sey render etmiyordu.
            Tek kaynak landings listesidir: sitemap, on-render ve rota ayni yerden gelir. */}
        {landings.map((l) => (
          <Route key={l.slug} path={`/${l.slug}`} element={<LandingPage slug={l.slug} />} />
        ))}
        <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
        <Route path="/randevu-talebiniz-alindi" element={<RandevuAlindi />} />
      </Routes>
    </Suspense>
  )
}

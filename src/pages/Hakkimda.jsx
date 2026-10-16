import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import KlinikGalerisi from '../components/KlinikGalerisi.jsx'
import { WhatsAppButton, PhoneButton } from '../components/Cta.jsx'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'
import { hakkimdaSemasi } from '../lib/siteSchema.js'
import { NAP } from '../config/site.js'

// Onur Yalçın'ın tam kaydı (Person) yalnız bu sayfada; içine bu sayfada görünen bilgiler girer.
// Metinler önceki sürümle aynıdır; yalnız düzen yeni tasarım diline taşındı.
const jsonLd = hakkimdaSemasi()

export default function Hakkimda() {
  useSeo({
    title: 'Fizyoterapist Onur Yalçın Kimdir? | Hakkımda – Kadıköy Kozyatağı',
    description:
      "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu Fizyoterapist Onur Yalçın; Kadıköy Kozyatağı'nda erkek pelvik taban fizyoterapisi, bütüncül ve kaynak odaklı fizyoterapi ile manuel terapi uygular.",
    canonical: `${SITE_URL}/hakkimda`,
    jsonLd,
  })
  return (
    <>
      <Navbar />
      <main>
        <header className="hk-ust">
          <div className="container">
            <nav className="yazi-kirinti" aria-label="Sayfa konumu">
              <Link to="/">Ana Sayfa</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Hakkımda</span>
            </nav>
            <h1>
              <span>Fizyoterapist Onur Yalçın</span> Kimdir?
            </h1>
          </div>
        </header>

        <section id="about" className="section hk-govde">
          <div className="container hk-izgara">
            <div className="hk-portre">
              <picture>
                <source type="image/webp" srcSet="/assets/onur-yalcin-portre-480.webp 480w, /assets/onur-yalcin-portre-768.webp 768w" sizes="(min-width: 992px) 420px, 92vw" />
                <img
                  alt="Fizyoterapist Onur Yalçın – Kadıköy Kozyatağı kliniğinde manuel terapi uygulaması"
                  src="/assets/onur-yalcin-portrait-Pdhc5rvj.jpg"
                  width="768"
                  height="1024"
                  fetchpriority="high"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="hk-metin">
              <p className="hk-giris">
                2015 yılında İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon bölümünden mezun olarak meslek hayatıma
                başladım. Akademik eğitimimi tamamladıktan sonra, klinik pratiklerimde insan vücudunun sadece bölgeden
                ibaret olmadığını, her bir eklemin ve dokunun birbiriyle konuşan devasa bir ağın parçası olduğunu gördüm.
              </p>
              <p className="icerik-p">
                Bu süreçte edindiğim tecrübeler beni 'semptom odaklı' değil, 'kaynak odaklı' bir yaklaşıma yöneltti. Bugün
                kliniğimde; bir diz ağrısının arkasındaki çene eklemi (TME) düzensizliğini veya kronik bir bel ağrısının
                temelindeki solunum mekaniği bozukluğunu analiz ederek, hastalarımı bir bütün olarak değerlendiriyorum.
              </p>

              <dl className="hk-bilgi">
                <div>
                  <dt>Eğitim</dt>
                  <dd>İstanbul Üniversitesi, Fizyoterapi ve Rehabilitasyon (2015)</dd>
                </div>
                <div>
                  <dt>Klinik</dt>
                  <dd>{NAP.adres}</dd>
                </div>
              </dl>

              <div className="hk-ozellik">
                <div>
                  <h2>Kanıta Dayalı</h2>
                  <p>Güncel fizyoterapi takibi</p>
                </div>
                <div>
                  <h2>Deneyim</h2>
                  <p>Bilimsel altyapı ve Klinik Deneyim</p>
                </div>
              </div>

              <blockquote className="hk-alinti">"Ağrı bir sonuçtur, biz kaynağı iyileştiriyoruz"</blockquote>
            </div>
          </div>
        </section>

        <KlinikGalerisi aciklama="Kozyatağı Gülbahar Sokak'taki kliniğimizden fotoğraflar." />

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <div className="cta-kutu">
              <h2>Randevu ve değerlendirme için</h2>
              <p>Şikayetinizi paylaşın, size uygun değerlendirme ve programı birlikte planlayalım.</p>
              <div style={{ display: 'flex', gap: '0.9rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <WhatsAppButton source="hakkimda" />
                <PhoneButton source="hakkimda" className="btn btn-outline hero-btn-outline">Telefonla Ara</PhoneButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

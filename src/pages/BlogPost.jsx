import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { getPostById, blogPosts } from '../data/blogPosts.js'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'
import { BRAND_KISA } from '../config/site.js'
import { useSectionNav } from '../hooks/useSectionNav.js'
import { blogSemasi, noindexSemasi } from '../lib/siteSchema.js'
import { OkIkon } from '../components/KartIkon.jsx'
import YazarKarti, { YazarSatiri, YazarMini } from '../components/YazarKarti.jsx'
import Icindekiler from '../components/Icindekiler.jsx'
import OkumaCubugu from '../components/OkumaCubugu.jsx'
import { baslikId, duzMetin, markdownBasliklari } from '../lib/baslikId.js'

// Dakikada ~200 kelime; en az 1 dk.
const okumaSuresi = (metin = '') => Math.max(1, Math.round(metin.split(/\s+/).filter(Boolean).length / 200))

// Yazı gövdesindeki site içi bağlantılar tam sayfa yenilemesi yapmasın diye
// router bağlantısına çevrilir. Dış bağlantılar (WhatsApp, kurum siteleri)
// olduğu gibi kalır ve yeni sekmede açılır.
const markdownBilesenleri = {
  // Ara başlıklar içindekiler listesinden bağlantı alabilsin diye kimlik taşır.
  h2: ({ children, node, ...rest }) => <h2 id={baslikId(duzMetin(children))} {...rest}>{children}</h2>,
  a: ({ href = '', children, ...rest }) => {
    if (href.startsWith('/')) {
      return <Link to={href} {...rest}>{children}</Link>
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>
  },
}

export default function BlogPost() {
  const { id } = useParams()
  const post = getPostById(id)
  const goToSection = useSectionNav()

  useSeo({
    title: post
      ? `${post.title} | ${BRAND_KISA}`
      : `Yazı bulunamadı | ${BRAND_KISA}`,
    description: post
      ? `${post.excerpt} Kadıköy Kozyatağı fizyoterapist Onur Yalçın.`
      : 'Aradığınız blog yazısı bulunamadı.',
    canonical: `${SITE_URL}/blog/${id}`,
    ogType: 'article',
    // Sayfa + BlogPosting (headline = H1) + kırıntı; prerender aynı fonksiyonu çağırır.
    jsonLd: post ? blogSemasi(post) : noindexSemasi(),
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '10rem 1.5rem 6rem', textAlign: 'center' }}>
          <h1>Yazı bulunamadı</h1>
          <p style={{ margin: '1rem 0 2rem' }}>Aradığınız blog yazısı mevcut değil.</p>
          <Link to="/" className="btn btn-primary">Ana Sayfaya Dön</Link>
        </div>
        <Footer />
      </>
    )
  }

  // Yazının kendi belirttiği kardeş yazılar varsa onlar gösterilir; yoksa eski
  // davranış korunur (listenin başındaki üç yazı).
  const secilmis = (post.ilgili || [])
    .map((pid) => blogPosts.find((p) => p.id === pid))
    .filter((p) => p && p.id !== post.id)
  const basliklar = markdownBasliklari(post.content)
  const related = secilmis.length > 0
    ? secilmis
    : blogPosts.filter((p) => p.id !== post.id).slice(0, 3)
  // Sol sütundaki "konuyla ilgili" listesi: önce yazının seçtikleri, sonra aynı kategoridekiler.
  const yakin = [...related, ...blogPosts.filter((p) => p.id !== post.id && p.category === post.category)]
    .filter((p, i, a) => a.findIndex((q) => q.id === p.id) === i)
    .slice(0, 5)

  return (
    <>
    <Navbar />
    <OkumaCubugu hedefId="yazi-metni" />
    <article className="yazi">
      {/* Başlık alanı */}
      <header className="yazi-ust">
        <div className="container yazi-izgara-ust">
          {/* Kırıntı: şemadaki BreadcrumbList ile aynı adımlar (Ana Sayfa / Blog / yazı) */}
          <nav className="yazi-kirinti" aria-label="Sayfa konumu">
            <Link to="/">Ana Sayfa</Link>
            <span aria-hidden="true">/</span>
            <a href="/" onClick={(e) => goToSection('blog', e)}>Blog</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <span className="yazi-kategori">{post.category}</span>
          <h1>{post.title}</h1>
          <YazarSatiri dk={okumaSuresi(post.content)} />
        </div>
      </header>

      {/* İçerik: geniş ekranda sağda sabit içindekiler, dar ekranda metnin üstünde */}
      <div className="container yazi-izgara yazi-govde">
        {/* Çok geniş ekranda sol sütun: yazar profili ve konuya yakın yazılar (dar ekranda gizli;
            aynı bilgiler yazının sonunda yazar kartı ve "Diğer Yazılar" olarak zaten var) */}
        <aside className="yazi-sol" aria-label="Yazar ve ilgili yazılar">
          <YazarMini />
          {yakin.length > 0 && (
            <nav className="yazi-yakin" aria-label="Konuyla ilgili yazılar">
              <p className="toc-baslik">Konuyla ilgili yazılar</p>
              <ul>
                {yakin.map((p) => (
                  <li key={p.id}>
                    <Link to={`/blog/${p.id}`}>
                      <span className="yazi-yakin-kat">{p.category}</span>
                      <span className="yazi-yakin-baslik">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>
        <aside className="yazi-yan">
          <Icindekiler basliklar={basliklar} />
        </aside>
        <div className="yazi-ana">
        <div className="blog-content" id="yazi-metni">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownBilesenleri}>{post.content}</ReactMarkdown>
        </div>

        <YazarKarti />

        <div className="cta-kutu yazi-cta">
          <h2>Randevu ve Bilgi İçin</h2>
          <p>Şikayetinizi paylaşın, değerlendirme ve programı birlikte planlayalım.</p>
          <a
            href="https://wa.me/905072949900?text=Merhaba,%20web%20sitenizden%20ulaşıyorum.%20Randevu/bilgi%20almak%20istiyorum."
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp ile İletişime Geç
          </a>
        </div>

        {/* İlgili yazılar */}
        {related.length > 0 && (
          <div className="yazi-ilgili">
            <h2>Diğer Yazılar</h2>
            <div className="kt-grid yazi-ilgili-grid">
              {related.map((p) => (
                <Link key={p.id} to={`/blog/${p.id}`} className="kt-card yazi-ilgili-kart">
                  <span className="kt-rozet">{p.category}</span>
                  <h3 className="kt-baslik">{p.title}</h3>
                  <span className="kt-alt">Yazıyı oku <OkIkon /></span>
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    </article>
    <Footer />
    </>
  )
}

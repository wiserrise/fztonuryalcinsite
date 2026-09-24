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

// Yazı gövdesindeki site içi bağlantılar tam sayfa yenilemesi yapmasın diye
// router bağlantısına çevrilir. Dış bağlantılar (WhatsApp, kurum siteleri)
// olduğu gibi kalır ve yeni sekmede açılır.
const markdownBilesenleri = {
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
    breadcrumbs: post
      ? [
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Blog', url: '/#blog' },
          { name: post.title, url: `/blog/${post.id}` },
        ]
      : undefined,
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
  const related = secilmis.length > 0
    ? secilmis
    : blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <>
    <Navbar />
    <article style={{ background: 'var(--background)' }}>
      {/* Başlık alanı */}
      <header
        style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
          color: '#fff',
          padding: '7rem 0 4rem',
        }}
      >
        <div className="container" style={{ maxWidth: 820 }}>
          <a href="/" onClick={(e) => goToSection('blog', e)} style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '.95rem', cursor: 'pointer' }}>
            ← Tüm Yazılar
          </a>
          <span
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              background: 'rgba(0,212,255,0.15)',
              color: 'var(--secondary)',
              padding: '.35rem 1rem',
              borderRadius: 30,
              fontSize: '.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '.5px',
            }}
          >
            {post.category}
          </span>
          <h1 style={{ color: '#fff', fontSize: '2.4rem', marginTop: '1rem', lineHeight: 1.2 }}>
            {post.title}
          </h1>
          <p style={{ marginTop: '1rem', opacity: 0.8 }}>{post.date}</p>
        </div>
      </header>

      {/* İçerik */}
      <div className="container" style={{ maxWidth: 820, padding: '4rem 1.5rem' }}>
        <div className="blog-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownBilesenleri}>{post.content}</ReactMarkdown>
        </div>

        <div
          style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'var(--surface)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow)',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '1.17rem', marginBottom: '1rem' }}>Randevu ve Bilgi İçin</h2>
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
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontSize: '1.17rem', marginBottom: '1.5rem' }}>Diğer Yazılar</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.id}`}
                  style={{
                    display: 'block',
                    padding: '1.25rem 1.5rem',
                    background: 'var(--surface)',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span style={{ color: 'var(--text-light)', fontSize: '.8rem' }}>{p.category}</span>
                  <div style={{ color: 'var(--primary)', fontWeight: 600, marginTop: '.25rem' }}>
                    {p.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
    <Footer />
    </>
  )
}

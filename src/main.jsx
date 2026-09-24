import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { getLandingBySlug, landingIcerikYukle } from './data/landings.js'
import { icerikOnbellekDoldur } from './lib/icerikOnbellek.js'
import './index.css'

const kok = document.getElementById('root')

// entry-server.jsx ile AYNI ağaç olmalı; aksi halde hidrasyonda uyuşmazlık olur.
const agac = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

const rotaNormal = (yol) => '/' + String(yol || '').replace(/^\/+|\/+$/g, '')

async function baslat() {
  // Gövde derleme sırasında sunucuda render edildiyse (scripts/prerender.mjs) mevcut
  // HTML hidrate edilir. createRoot().render() kullanılsaydı React sunucu HTML'ini
  // silip sıfırdan çizerdi: sayfa parçası tembel yüklendiği için arada Suspense yer
  // tutucusu (boş alan) görünür, içerik bir an kaybolup geri gelirdi.
  //
  // Yalnız gövde BU ADRES için render edildiyse hidrate edilir (data-rota). Cloudflare
  // bilinmeyen adresleri index.html'e düşürür; orada ana sayfanın gövdesi durur. O
  // gövde başka bir adreste hidrate edilseydi ağaçlar uyuşmaz, ziyaretçi bir an ana
  // sayfa içeriğini görüp boş sayfaya düşerdi.
  const renderEdilenRota = kok.getAttribute('data-rota')
  if (kok.hasChildNodes() && renderEdilenRota && rotaNormal(renderEdilenRota) === rotaNormal(window.location.pathname)) {
    // Hizmet sayfasında metin normalde useEffect içinde yüklenir. Hidrasyondan önce
    // buraya konmazsa ilk render metinsiz yapılır ve sunucu HTML'iyle uyuşmaz.
    // Metin modülü prerender tarafından modulepreload ile zaten indirilmiş olur.
    const slug = window.location.pathname.replace(/^\/+|\/+$/g, '')
    const landing = slug ? getLandingBySlug(slug) : null
    if (landing) {
      try {
        icerikOnbellekDoldur(slug, await landingIcerikYukle(landing))
      } catch {
        // Metin yüklenemezse hidrasyon uyuşmazlığı olur; React o alt ağacı istemcide
        // yeniden çizer. Sayfa çalışmaya devam eder.
      }
    }
    ReactDOM.hydrateRoot(kok, agac)
  } else {
    // Başka bir adres için render edilmiş gövde varsa (ör. bilinmeyen adreste ana
    // sayfanın gövdesi) önce temizlenir, sonra sıfırdan çizilir.
    kok.textContent = ''
    ReactDOM.createRoot(kok).render(agac)
  }
}

baslat()

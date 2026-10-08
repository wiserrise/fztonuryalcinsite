// Derleme sırasında sayfa gövdesini sunucuda render eden giriş noktası.
//
// scripts/prerender.mjs her adres için render(url) çağırır ve çıkan HTML'i
// <div id="root"> içine yazar. Böylece JavaScript çalıştırmayan istemciler (bazı
// arama motorları, bağlantı önizlemeleri, reklam politikası incelemesi) sayfanın
// başlıklarını ve metnini görür; tarayıcıda ise main.jsx aynı ağacı hidrate eder.
//
// renderToString KULLANILMAZ: sayfalar React.lazy ile yüklendiği için
// renderToString Suspense yer tutucusunu (boş bir div) basıp çıkar. Akışlı render'ın
// onAllReady olayı ise tüm tembel parçalar çözülene kadar bekler.

import React from 'react'
import { Writable } from 'node:stream'
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export { icerikOnbellekDoldur } from './lib/icerikOnbellek.js'

export function render(url) {
  return new Promise((coz, reddet) => {
    const parcalar = []
    const hatalar = []
    const yazici = new Writable({
      write(parca, _kodlama, bitti) {
        parcalar.push(Buffer.from(parca))
        bitti()
      },
    })
    yazici.on('finish', () => {
      // Render sırasında yakalanan hata varsa HTML yarımdır; sessizce yayınlanmasın.
      if (hatalar.length) return reddet(new Error(`${url}: ${hatalar.join(' | ')}`))
      // Parçalar tek seferde çözülür: çok baytlı bir karakter (ı, ş, ğ) iki parçaya
      // bölünürse ayrı ayrı çözmek onu bozar. Ayrıca React 18'in akışlı render'ı bu
      // sınırlarda çıktıya fazladan NUL baytı yazıyor ("ağrıy\0ı"); karakterlerin
      // kendisi sağlam olduğu için NUL'lar silinince metin aynen düzelir. Silinmezse
      // tarayıcı "�" gösterir, arama motoru da bozuk kelime okur.
      coz(Buffer.concat(parcalar).toString('utf8').replace(/\u0000/g, ''))
    })

    const { pipe } = renderToPipeableStream(
      // main.jsx ile AYNI ağaç: aksi halde hidrasyonda uyuşmazlık olur.
      <React.StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </React.StrictMode>,
      {
        onAllReady() {
          pipe(yazici)
        },
        onShellError(e) {
          reddet(e)
        },
        onError(e) {
          hatalar.push(e && e.message ? e.message : String(e))
        },
      },
    )
  })
}

// Reklam/hizmet sayfalarının İÇERİK DAHİL eşzamanlı listesi.
//
// Yalnızca Node betikleri (prerender, sitemap, seo-check) içindir: onlar tüm sayfaların
// metnine aynı anda ihtiyaç duyar ve paket boyutu diye bir dertleri yoktur. Tarayıcı
// tarafı bu dosyayı ASLA içe aktarmaz; aksi halde 16 sayfanın gövdesi ana pakete geri
// döner ve landings.js'teki tembel yükleme anlamını yitirir.

import { landings as meta } from './landings.js'
import * as landingContent from './landingContent.js'
import * as hizmetContent from './hizmetContent.js'
import * as bolgeContent from './bolgeContent.js'

const moduller = { landingContent, hizmetContent, bolgeContent }

export const landings = meta.map((l) => {
  const icerik = moduller[l.icerikModul]?.[l.icerikAdi]
  if (!icerik) throw new Error(`landings.js: /${l.slug} için içerik bulunamadı (${l.icerikModul}.${l.icerikAdi})`)
  return { ...l, icerik }
})

export const getLandingBySlug = (slug) => landings.find((l) => l.slug === slug)

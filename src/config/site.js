// Merkezi site / konum yapılandırması.
// VİZYON: İleride İstanbul geneline veya başka ilçelere yayılırken konum ifadelerini
// tek tek aramak yerine buradan yönetiyoruz. Yeni ilçe/bölge hedeflerken bu dosyayı
// ve (gerekirse) areaServed / district sayfalarını güncellemek yeterli olacak şekilde kuruldu.

export const BRAND = 'Fizyoterapist Onur Yalçın'
export const SITE_URL = 'https://fztonuryalcin.com'
export const PHONE = '+90 507 294 99 00'

// Fiziksel klinik konumu (schema adresi bu gerçek konuma sabit kalır)
export const LOCATION = {
  district: 'Kadıköy', // birincil yerel SEO hedefi
  neighborhood: 'Kozyatağı', // mahalle
  city: 'İstanbul',
}

// "Kadıköy Kozyatağı" gibi birleşik ifade
export const AREA = `${LOCATION.district} ${LOCATION.neighborhood}`

// İleride İstanbul geneli/ilçe hedefleri buraya eklenebilir (ör. areaServed genişletme,
// ilçe bazlı landing sayfaları). Şimdilik birincil hedef Kadıköy.
export const TARGET_DISTRICTS = ['Kadıköy']

// ---------------------------------------------------------------------------
// NAP: Google İşletme Profili'ndeki (GBP) yazımın BİREBİR aynısı.
//
// Neden karakter düzeyinde sabit: yerel SEO'da isim/adres/telefon alıntıları
// (citation) birbiriyle eşleştiği ölçüde tek bir işletmeye işaret eder. Kısaltmayı
// açmak ("Sk." -> "Sokak"), telefonu uluslararası biçime çevirmek ya da alan
// sırasını değiştirmek eşleşmeyi zayıflatır. Bu yüzden aşağıdaki dizeler
// GÖRÜNEN metin olarak olduğu gibi basılır; biçimlendirilmez.
//
// Makine tarafı ayrı: JSON-LD telefonu ve tel: bağlantısı uluslararası biçimde
// kalır (PHONE / PHONE_HREF), çünkü orası okuyucuya değil ayrıştırıcıya gider.
export const NAP = {
  isim: 'Fizyoterapist Onur Yalçın',
  adres: 'Kozyatağı Mah. Gülbahar Sk., Ege Yıldız Sitesi, No:15, Kadıköy, İstanbul, 34742',
  telefon: '0507 294 99 00',
}

export const WHATSAPP_URL = 'https://wa.me/905072949900'

// Çalışma saatleri GBP kaydıyla aynı olmalı; şema (openingHoursSpecification) ve
// görünen metin bu tek kaynaktan beslenir ki ikisi birbirinden ayrışmasın.
export const CALISMA_SAATLERI = {
  gunler: 'Pazartesi - Cumartesi',
  saat: '09:00 - 21:00',
  kapali: 'Pazar kapalı',
  acilis: '09:00',
  kapanis: '21:00',
}

// Harita gömme adresi GBP kaydına CID ile bağlanır. Elle adres yazıp arama yapan
// jenerik embed, profil kaydına bağlı olmadığı için işletme yerine sadece bir
// koordinat gösterir; CID biçimi doğrudan profilin kendisini açar.
export const GBP_CID = '7119445594866937943'
export const GBP_MAP_URL = `https://maps.google.com/maps?cid=${GBP_CID}`
export const GBP_MAP_EMBED = `https://maps.google.com/maps?cid=${GBP_CID}&output=embed`

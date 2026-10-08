// Reklam sayfalarındaki güven bloğunun verisi.
//
// Puan, yorum sayısı ve alıntılar Google İşletme Profili'nden 9 Ekim 2026'da okundu;
// sitede otomatik güncellenmez. Yeni yorum geldikçe sayı ve tarih elle güncellenir.
// Alıntılar yorumlardan BİREBİR alınır, yalnızca kısaltılır ("(…)" ile işaretlenir);
// kelime değiştirilmez. Yorumcu adı soyadın baş harfiyle kısaltılır.
//
// Fotoğraflar da aynı profilden alındı (klinik ve fizyoterapist).

export const GOOGLE_PUAN = {
  puan: '5,0',
  yorumSayisi: 28,
  okunduTarih: '9 Ekim 2026',
}

export const GOOGLE_YORUMLARI = {
  'hasan-d': {
    ad: 'Hasan D.',
    tarih: 'Eylül 2026',
    metin:
      'Bendeki durumun nereden kaynaklandığını ve nasıl çözeceğimizi hiç kafamı karıştırmadan adım adım çok net anlattı.',
  },
  'emre-e': {
    ad: 'Emre E.',
    tarih: 'Ağustos 2026',
    metin:
      'Sürecin başından itibaren gösterdiği profesyonel ve bütüncül yaklaşım, konuya olan derin hakimiyeti ve mahremiyete verdiği önem sayesinde tedavi sürecim çok konforlu geçti.',
  },
  'victor-p': {
    ad: 'Victor P.',
    tarih: 'Ağustos 2026',
    metin:
      'İlk andan itibaren beni gerçekten dinledi ve yaşadığım sorunların nedenlerini detaylı bir şekilde açıklamak için yaklaşık bir saatini ayırdı.',
  },
  cem: {
    ad: 'Cem',
    tarih: 'Mayıs 2026',
    metin:
      'Duruma çok profesyonel yaklaştı ve sadece bel ağrısı olarak değerlendirmeyip bu ağrıya sebep olacak diğer yanlışları da (…) tedavi etti şimdi hem günlük hayatta hem spor yaparken daha rahat hissediyorum ve doğru spor yapmayı öğreniyorum.',
  },
}

export const KLINIK_FOTOGRAFLARI = [
  {
    src: '/assets/klinik-onur-yalcin-kadikoy.jpg',
    alt: "Fizyoterapist Onur Yalçın, Kadıköy Kozyatağı'ndaki kliniğinde",
    baslik: 'Fzt. Onur Yalçın',
  },
  {
    src: '/assets/klinik-tedavi-odasi-kozyatagi.jpg',
    alt: "Kozyatağı'ndaki klinikte tedavi masası bulunan seans odası",
    baslik: 'Seans odası',
  },
  {
    src: '/assets/klinik-egzersiz-alani-kozyatagi.jpg',
    alt: 'Klinikte egzersiz ve hareket çalışmalarının yapıldığı alan',
    baslik: 'Egzersiz alanı',
  },
  {
    src: '/assets/klinik-girisi-kozyatagi-kadikoy.jpg',
    alt: "Kozyatağı Gülbahar Sokak'taki klinik binasının girişi",
    baslik: 'Bina girişi',
  },
]

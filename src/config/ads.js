// Google Ads ölçüm yapılandırması.
//
// Etiket (AW-...) index.html'de gtag.js ile yükleniyor. Buradaki dönüşüm
// etiketleri (conversion label) ise Google Ads panelinde üretilir:
//   Hedefler > Dönüşümler > Yeni dönüşüm işlemi > Web sitesi
//   > "Etiketi kendim ekleyeceğim" > Google etiketi zaten var
// Her dönüşüm için verilen "send_to" değeri şu biçimdedir: AW-18117600871/AbC-dEfGh12
// Bu değerin eğik çizgiden SONRAKİ kısmı aşağıya yazılır.
//
// Etiket boş bırakıldığı sürece o dönüşüm Google Ads'e GÖNDERİLMEZ; olay yine de
// dataLayer'a düşer, böylece etiketler sonradan girildiğinde kurulum bozulmaz ve
// eksik etiketle yanlış dönüşüm sayımı oluşmaz.

export const GOOGLE_ADS_ID = 'AW-18117600871'

// Panelde iki ayrı dönüşüm işlemi tanımlı, ikisi de "Kişi" hedefine bağlı:
//   "Site - Telefon ve WhatsApp Tiklamasi"  -> telefon + WhatsApp (tek etiket)
//   "Site - Randevu Formu"                  -> form gönderimi (ayrı etiket)
// Böylece raporda kanallar ayrı görünür, teklif optimizasyonu birleşik sinyalle çalışır.
export const CONVERSION_LABELS = {
  // WhatsApp butonuna tıklama (birincil dönüşüm)
  whatsapp_click: 'S3qhCIG0wuUcEOfMkr9D',
  // Telefon numarasına tıklama (mobilde arama başlatır)
  phone_click: 'S3qhCIG0wuUcEOfMkr9D',
  // İletişim / randevu formunun gönderilmesi.
  // Formlar formsubmit.co'ya POST edip `_next` ile /randevu-talebiniz-alindi
  // sayfasına döner; dönüşüm o sayfada (RandevuAlindi.jsx) bildirilir.
  form_submit: 'vOuoCMm79uYcEOfMkr9D',
}

// Dönüşüm değeri. Google Ads'te teklif optimizasyonu yapılacaksa bir randevunun
// tahmini değeri buraya girilir; 0 bırakılırsa değer gönderilmez.
export const CONVERSION_VALUE = 0
export const CONVERSION_CURRENCY = 'TRY'

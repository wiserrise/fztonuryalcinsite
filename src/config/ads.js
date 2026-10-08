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

// Google Analytics 4 ölçüm kimliği (G-XXXXXXXXXX). Boş bırakıldığı sürece GA4 çalışmaz;
// girildiğinde aynı gtag.js üzerinden başlar (bkz. tracking.js installAnalytics).
export const GA4_OLCUM_KIMLIGI = ''

// 2026-09-09 GÜNCELLEME: panelde telefon ve WhatsApp AYRI dönüşüm işlemleri olarak
// yeniden tanımlandı (ikisi de "Kişi" hedefi altında BİRİNCİL). Önceki kurulumda ikisi
// tek etiketi paylaşıyordu; artık ayrı etiketleri var, böylece raporda hangi kanalın
// dönüştürdüğü görünüyor. Kaynak: Google Ads hesabı 356-711-5672.
//   "WhatsApp Tıklaması"  -> a4AdCKqhw_EcEOfMkr9D
//   "Telefon Tıklaması"   -> KIAbCK2hw_EcEOfMkr9D
//   "Site - Randevu Formu" -> vOuoCMm79uYcEOfMkr9D (değişmedi)
export const CONVERSION_LABELS = {
  // WhatsApp butonuna tıklama (birincil dönüşüm)
  whatsapp_click: 'a4AdCKqhw_EcEOfMkr9D',
  // Telefon numarasına tıklama (mobilde arama başlatır)
  phone_click: 'KIAbCK2hw_EcEOfMkr9D',
  // İletişim / randevu formunun gönderilmesi.
  // Form formsubmit.co'ya arka planda gönderilir; dönüşüm başarı yanıtı geldiği anda
  // formda bildirilir (RandevuFormu.jsx). Arka plan gönderimi başarısız olursa form
  // klasik yolla gider ve dönüşümü teşekkür sayfası bildirir (RandevuAlindi.jsx).
  form_submit: 'vOuoCMm79uYcEOfMkr9D',
}

// Dönüşüm değeri. Google Ads'te teklif optimizasyonu yapılacaksa bir randevunun
// tahmini değeri buraya girilir; 0 bırakılırsa değer gönderilmez.
export const CONVERSION_VALUE = 0
export const CONVERSION_CURRENCY = 'TRY'

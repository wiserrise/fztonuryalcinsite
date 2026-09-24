# Google Ads Kurulum Notları

Bu dosya, sitede yapılan reklam hazırlığının **panelde tamamlanması gereken** kısmını anlatır.
Sitedeki kod tarafı hazırdır; aşağıdaki adımlar Google Ads arayüzünde yapılır.

---

## 0. Yayına başlamadan önce: mevzuat kontrolü

Hazırlık sırasında, doğrudan bu işi ilgilendiren bir düzenleme tespit edildi.
Karar müşterinin ve hukukçusunun; burada yalnızca metin aktarılmıştır.

**Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik**
(12 Kasım 2025, Resmî Gazete), MADDE 5/1-(j):

> "Sağlık tesisleri ve sağlık meslek mensupları, **ücretli sponsorlu ve öne çıkmaya
> yönelik olmamak şartıyla** sosyal medya platformları veya internet arama motorlarında
> kayıt yaptırabilir. Arama motorlarında kullanılacak anahtar kelimeler ve çıkan sonuç
> sayfasındaki bilgiler bu Yönetmelikteki ilkelere aykırı olamaz."

Aynı maddede tek istisna, sağlık tesisinin **açılışını takip eden ilk bir ay**tır.
Fizyoterapistler, 1219 sayılı Kanunun ek 13 üncü maddesi üzerinden "sağlık meslek
mensubu" tanımına dahildir.

Kaynak: https://www.resmigazete.gov.tr/eskiler/2025/11/20251112-2.htm

Google Ads'in kendi "Legal requirements" politikası da yerel hukuka uyum sorumluluğunu
reklamverene yükler. Bu nedenle **arama ağı reklamı yayınına başlamadan önce bu maddenin
müşterinin hukuk danışmanıyla değerlendirilmesi** önerilir.

Bu maddeden bağımsız olarak sitede yapılan çalışmanın tamamı (dönüşüm ölçümü, hız,
KVKK sayfası, iki derin hizmet sayfası, yapılandırılmış veri) **organik arama için de
aynen geçerlidir** ve reklam verilmese bile değerini korur.

---

## 1. Dönüşüm işlemlerini oluştur ve etiketleri siteye gir

Google etiketi (`AW-18117600871`) sitede zaten yüklü. Eksik olan, **dönüşüm işlemleri**.
Dönüşüm tanımlanmadan reklamlar hangi tıklamanın randevuya dönüştüğünü öğrenemez;
akıllı teklif stratejileri de çalışmaz.

Panelde: **Hedefler > Dönüşümler > Yeni dönüşüm işlemi > Web sitesi**
Sonra "Dönüşüm işlemlerini manuel olarak ekle" yolunu seçin ve şu üçünü oluşturun:

| Dönüşüm adı | Kategori | Sayma |
|---|---|---|
| WhatsApp Tıklaması | İletişim > Sohbet başlatma | Her biri |
| Telefon Tıklaması | İletişim > Telefon araması | Her biri |
| Randevu Formu | Gönder > Potansiyel müşteri formu | Bir |

Her dönüşüm için Google size şuna benzer bir `send_to` değeri verir:

```
AW-18117600871/AbC-dEfGhIjKlMnOp
```

Bu değerin **eğik çizgiden sonraki kısmını** şu dosyaya girin:

`src/config/ads.js`

```js
export const CONVERSION_LABELS = {
  whatsapp_click: 'BURAYA_WHATSAPP_ETIKETI',
  phone_click:    'BURAYA_TELEFON_ETIKETI',
  form_submit:    'BURAYA_FORM_ETIKETI',
}
```

> ✅ **DOLDURULDU · 2026-09-09.** Etiketler `src/config/ads.js` içinde girili.
> Google Ads hesabı 356-711-5672; WhatsApp ve Telefon panelde AYRI dönüşüm işlemi
> olarak tanımlı, ikisi de "Kişi" hedefi altında **birincil**.
> Ara dönemde ikisi tek etiketi paylaşıyordu; 2026-09-09'da ayrıldı, böylece raporda
> hangi kanalın dönüştürdüğü görünüyor.
>
> ⚠️ `CONVERSION_VALUE` bilinçli olarak **0** bırakıldı. Kurulum notundaki örnek
> `value: 1.0` gönderiyor; 1 TRY gerçek bir randevu değeri değil ve değer bazlı
> teklif stratejisini yanıltır. Bir randevunun tahmini değeri belirlenince buraya
> girilir; o zamana kadar değer gönderilmemesi daha doğru.

Etiketler boş bırakıldığı sürece o dönüşüm Google Ads'e gönderilmez (olay yine de
dataLayer'a düşer). Yani yanlış veya eksik etiketle hatalı sayım oluşmaz.

Etiketleri girdikten sonra yeniden derleyip yayına alın:

```bash
npm run build
npx wrangler deploy
```

### Alternatif: form dönüşümünü sayfa görüntülemeden say

Form gönderimi sonrası ziyaretçi `/randevu-talebiniz-alindi` sayfasına yönlendirilir.
İsterseniz form dönüşümünü kodla değil, bu sayfanın görüntülenmesiyle de
tanımlayabilirsiniz (Google Ads > Dönüşümler > URL'lere göre dönüşüm). İkisini aynı
anda kullanmayın, çift sayım olur.

---

## 2. Sitede hazır olan ölçüm

Aşağıdakiler kod tarafında tamamlandı, ek işlem gerekmez:

- **Tüm `tel:` ve WhatsApp bağlantıları** otomatik ölçülür. Sitenin herhangi bir
  yerindeki (ana sayfa, blog, sabit butonlar, reklam sayfaları) bağlantı buna dahildir.
  Dönüşüm olayına hangi bölümden tıklandığı da (`hero`, `ara-cta`, `sabit-buton`,
  `footer`, `menu`) bilgi olarak eklenir.
- **Form gönderimi**, teşekkür sayfasında ölçülür.
- **Sayfa görüntüleme**, tek sayfa uygulamasında rota değiştiğinde de bildirilir.
  Bu yapılmadığı sürece yeniden pazarlama listeleri eksik kalıyordu.

---

## 3. Reklam sayfaları (final URL)

Reklam gruplarının **son URL'i** aşağıdaki sayfalar olmalıdır. Ana sayfaya reklam
göndermeyin: ana sayfa altı farklı hizmeti birden anlatır, mesaj eşleşmesi düşük olur
ve tıklama başı maliyet artar.

| Reklam grubu | Son URL |
|---|---|
| Klinik pilates | `https://fztonuryalcin.com/klinik-pilates-kadikoy` |
| Skolyoz / Schroth | `https://fztonuryalcin.com/skolyoz-schroth-kadikoy` |
| Pelvik taban | `https://fztonuryalcin.com/pelvik-taban-kadikoy` |

Pelvik taban reklam grubunda ek dikkat: konu Google Ads'in hassas kategori kapsamındadır.
Reklam metni okuyucunun sağlık durumunu biliyormuş gibi konuşmamalıdır ("İdrar kaçırma
sorununuz mu var?" gibi). Hizmeti ve konumu tarif eden başlıklar kullanılmalıdır. Aynı
kategoride yeniden pazarlama ve Customer Match kitleleri de kullanılamaz.

Her iki sayfa da kendi başlığını, açıklamasını ve yapılandırılmış verisini sunucudan
dönen ilk HTML'de taşır (derleme sırasında `scripts/prerender.mjs` üretir). Bu,
politika incelemesinin sayfayı doğru görmesi için gereklidir.

---

## 4. Konum ve dil hedeflemesi

- **Konum:** Kadıköy merkezli, çevre ilçeleri kapsayan yarıçap hedeflemesi önerilir
  (Kadıköy, Ataşehir, Maltepe, Üsküdar). "İlgi alanı" değil, **"Varlık veya düzenli
  ziyaret"** seçeneğini kullanın; aksi halde İstanbul'la ilgilenen ama başka şehirde
  yaşayan kullanıcılara da gösterilir.
- **Dil:** Türkçe.
- **Reklam programı:** Klinik Pazartesi-Cumartesi 10:00-22:00 çalışıyor. Kapalı olunan
  saatlerde de reklam yayınlanabilir (form ve WhatsApp çalışır), ancak telefon
  tıklamalarının karşılıksız kalmaması için teklifleri çalışma saatlerinde artırmak
  daha verimlidir.

---

## 5. Sağlık reklamlarında dikkat edilecekler

Reklam metinleri ve sayfa içerikleri şu sınırlar içinde kalmalıdır:

- Sonuç veya iyileşme vaadi yok ("kesin çözüm", "ağrınızdan kurtulun", "garanti").
- Üstünlük iddiası yok ("en iyi", "lider", "1 numara").
- Hasta yorumu veya tanıklığı reklam sayfalarında yok.
- Fiyat, indirim, kampanya ifadesi yok.
- Reklam metninde kullanıcının sağlık durumuna doğrudan hitap etmeyin
  ("Skolyozunuz mu var?" gibi). Google Ads bunu hassas kategori kapsamında
  kişiselleştirilmiş reklam sayılabildiği için reddedebilir. Bunun yerine hizmeti
  tanımlayın: "Kadıköy'de Schroth metodu ile skolyoz fizyoterapisi".

---

## 6. Yayına alma

```bash
cd ~/Documents/Projects/fztonuryalcin-site
npm run build
npx wrangler deploy
```

Yayına aldıktan sonra:

1. `https://fztonuryalcin.com/klinik-pilates-kadikoy` ve
   `https://fztonuryalcin.com/skolyoz-schroth-kadikoy` adreslerini açıp kontrol edin.
2. Search Console'dan iki sayfa için de **URL denetimi > Dizine eklenmeyi iste** yapın.
3. Google Ads > Araçlar > **Etiket Yardımcısı** ile bir test tıklaması yapıp
   dönüşümün düştüğünü doğrulayın (etiketler girildikten sonra).

---

## 7. Reklam metni ve anahtar kelime önerileri

Aşağıdakiler sayfa içerikleriyle birlikte üretildi ve karakter sınırları doğrulandı.
Doğrudan Google Ads duyarlı arama reklamına girilebilir.

### Klinik Pilates reklam grubu

**Son URL:** `https://fztonuryalcin.com/klinik-pilates-kadikoy`

**Başlıklar** (sınır 30 karakter)

- Kadıköy Klinik Pilates _(22)_
- Kozyatağı'nda Klinik Pilates _(28)_
- Fizyoterapist Eşliğinde _(23)_
- Önce Değerlendiriyoruz _(22)_
- Reformer ve Mat Çalışması _(25)_
- Size Göre Egzersiz Programı _(27)_
- Bireysel Randevu Düzeni _(23)_
- Masa Başında Oturanlara _(23)_
- Bel ve Boyun Zorlanmasında _(26)_
- Fzt. Onur Yalçın _(16)_
- Kozyatağı Metroya Yakın _(23)_
- Pzt-Cmt 10:00-22:00 Açık _(24)_
- WhatsApp'tan Randevu Alın _(25)_

**Açıklamalar** (sınır 90 karakter)

- Seanslar fizyoterapist değerlendirmesiyle başlar; program size göre planlanır. _(78)_
- Kozyatağı'nda reformer ve mat çalışmaları bireysel randevu düzeniyle yürütülür. _(79)_
- İlk randevu değerlendirmeye ayrılır. Randevu için telefon veya WhatsApp. _(72)_
- Kadıköy Kozyatağı, metroya yakın. Pazartesi-Cumartesi 10:00-22:00 arası. _(72)_

**Anahtar kelimeler**

`kadıköy klinik pilates`, `klinik pilates kadıköy`, `kozyatağı klinik pilates`, `klinik pilates kozyatağı`, `kadıköy fizyoterapist eşliğinde pilates`, `kadıköy fizyoterapist pilates`, `kozyatağı fizyoterapist pilates`, `kadıköy reformer pilates fizyoterapist`, `kozyatağı reformer pilates`, `ataşehir klinik pilates`, `bostancı klinik pilates`, `erenköy klinik pilates`, `suadiye klinik pilates`, `göztepe klinik pilates`, `sahrayıcedit klinik pilates`, `anadolu yakası klinik pilates`, `kadıköy mat pilates fizyoterapist`, `kadıköy gövde kuvvetlendirme programı`, `kadıköy klinik pilates randevu`, `kozyatağı klinik pilates randevu`, `kozyatağı metro yakını klinik pilates`, `kadıköy klinik pilates fizyoterapist onur yalçın`

**Negatif anahtar kelimeler** (bilgi arayan ve eğitim arayan trafiği eler)

`ücretsiz`, `bedava`, `fiyat`, `ücret`, `ne kadar`, `kaç para`, `kampanya`, `indirim`, `taksit`, `kurs`, `kursu`, `eğitim`, `eğitmenlik`, `eğitmen`, `sertifika`, `sertifika programı`, `iş ilanı`, `iş ilanları`, `eleman aranıyor`, `maaş`, `kariyer`, `staj`, `üniversite`, `bölüm`, `taban puan`, `nedir`, `ne demek`, `nasıl yapılır`, `hareketleri`, `hareket isimleri`, `video`, `izle`, `youtube`, `online`, `uzaktan`, `evde`, `uygulama`, `app`, `pdf`, `indir`, `reformer fiyatları`, `reformer satın al`, `ikinci el reformer`, `pilates ekipmanları`, `stüdyo açmak`, `franchise`, `zayıflama`, `kilo verme`, `diyet`, `yoga`, `ödev`, `tez`, `makale`, `fizyoterapi kliniği`, `fizyoterapi merkezi`, `poliklinik`, `tıp merkezi`, `fizik tedavi`

### Skolyoz / Schroth reklam grubu

**Son URL:** `https://fztonuryalcin.com/skolyoz-schroth-kadikoy`

**Başlıklar** (sınır 30 karakter)

- Kadıköy Skolyoz Fizyoterapisi _(29)_
- Schroth Temelli Egzersiz _(24)_
- Kadıköy'de Skolyoz Egzersizi _(28)_
- Kozyatağı Fizyoterapi _(21)_
- Skolyoza Özgü Egzersiz _(22)_
- Fizyoterapist Onur Yalçın _(25)_
- İletişim ve Konum Bilgisi _(25)_
- Kozyatağı Metroya Yakın _(23)_
- Akşam 22:00'ye Kadar Açık _(25)_
- Cumartesi Günü de Açık _(22)_
- Birebir Egzersiz Programı _(25)_
- Kişiye Göre Planlanan Program _(29)_

**Açıklamalar** (sınır 90 karakter)

- Hekim tanısı ve yönlendirmesiyle yürütülen skolyoz fizyoterapisi hakkında bilgi. _(80)_
- Kozyatağı'ndaki çalışma alanında değerlendirme sonrası kişiye göre planlanan program. _(85)_
- Skolyoz tanısı konulmuş çocuk, ergen ve yetişkinlere yönelik fizyoterapi bilgisi. _(81)_
- Adres: Kozyatağı, Kadıköy. Pazartesi-Cumartesi 10:00-22:00 arası randevu ile çalışılır. _(87)_

**Anahtar kelimeler**

`kadıköy skolyoz fizyoterapisi`, `skolyoz fizyoterapisi kadıköy`, `kozyatağı skolyoz fizyoterapisi`, `schroth temelli egzersiz kadıköy`, `schroth temelli egzersiz kozyatağı`, `skolyoz egzersizi kadıköy`, `skolyoz egzersizi kozyatağı`, `skolyoza özgü egzersiz anadolu yakası`, `skolyoz rehabilitasyonu kadıköy`, `ataşehir skolyoz fizyoterapisi`, `bostancı skolyoz fizyoterapisi`, `erenköy skolyoz egzersizi`, `suadiye skolyoz fizyoterapisi`, `göztepe skolyoz fizyoterapisi`, `sahrayıcedit fizyoterapist skolyoz`, `çocuklarda skolyoz fizyoterapisi istanbul`, `ergen skolyoz egzersiz programı istanbul`, `skolyoz fizyoterapisti anadolu yakası`, `korse ile skolyoz egzersizi istanbul`, `yetişkin skolyoz fizyoterapisi istanbul`, `skolyoz değerlendirmesi kadıköy`, `skolyometre ölçümü kadıköy`

**Negatif anahtar kelimeler** (bilgi arayan ve eğitim arayan trafiği eler)

`ücretsiz`, `bedava`, `indirim`, `kampanya`, `kurs`, `schroth kursu ücreti`, `schroth sertifika programı`, `schroth eğitimi başvuru`, `fizyoterapist sertifika programı`, `iş ilanı`, `eleman aranıyor`, `personel alımı`, `maaş`, `kariyer`, `staj`, `fizyoterapi bölümü taban puanı`, `fizyoterapi bölümü üniversite`, `fizyoterapist nasıl olunur`, `skolyoz nedir ödev`, `skolyoz sunum`, `skolyoz tez`, `skolyoz ders notu`, `skolyoz egzersizleri pdf`, `skolyoz egzersizleri video izle`, `youtube`, `devlet hastanesi`, `sgk anlaşmalı`, `hastane randevu`, `mhrs`, `ameliyat fiyatı`, `korse fiyatı`, `korse satın al`, `reformer satın al`, `ikinci el`, `satılık`, `kiralık`, `oyun`, `forum`, `şikayet`, `yorumları`, `ankara`, `izmir`, `bursa`, `antalya`, `adana`, `konya`, `online ders`, `uzaktan eğitim`, `hayvan`, `köpek`, `at`

### Pelvik Taban reklam grubu

**Son URL:** `https://fztonuryalcin.com/pelvik-taban-kadikoy`

**Başlıklar** (sınır 30 karakter)

- Kadıköy Pelvik Taban _(20)_
- Pelvik Taban Fizyoterapisi _(26)_
- Pelvik Taban Rehabilitasyonu _(28)_
- Kozyatağı'nda Fizyoterapi _(25)_
- Fizyoterapist Onur Yalçın _(25)_
- İdrar Kaçırma Fizyoterapisi _(27)_
- Doğum Sonrası Fizyoterapi _(25)_
- Hamilelik Dönemi Fizyoterapi _(28)_
- Kadıköy'de Randevu Alın _(23)_
- WhatsApp'tan Randevu _(20)_
- Kozyatağı'nda Randevu _(21)_
- Pazartesi-Cumartesi Açık _(24)_
- Kadıköy'de Fizyoterapist _(24)_
- Süreç Hakkında Bilgi Alın _(25)_
- Kadıköy Kozyatağı _(17)_

**Açıklamalar** (sınır 90 karakter)

- Kozyatağı'nda pelvik taban fizyoterapisi. Randevu için telefonla ulaşabilirsiniz. _(81)_
- Kadıköy Kozyatağı. Pazartesi-Cumartesi 10:00-22:00. Randevu için arayın. _(72)_
- Pelvik taban fizyoterapisi süreci hakkında bilgi için WhatsApp'tan yazabilirsiniz. _(82)_
- Fizyoterapist Onur Yalçın, Kadıköy Kozyatağı. Randevu ve süreç bilgisi için yazın. _(82)_

**Anahtar kelimeler**

`kadıköy pelvik taban fizyoterapisi`, `pelvik taban fizyoterapisi kadıköy`, `pelvik taban rehabilitasyonu kadıköy`, `kozyatağı pelvik taban fizyoterapisi`, `kozyatağı pelvik taban rehabilitasyonu`, `idrar kaçırma fizyoterapisi kadıköy`, `idrar kaçırma fizyoterapisi kozyatağı`, `doğum sonrası fizyoterapi kadıköy`, `doğum sonrası pelvik taban kozyatağı`, `diastazis rekti fizyoterapi kadıköy`, `hamilelik dönemi fizyoterapisi kadıköy`, `gebelik dönemi pelvik taban fizyoterapisi kadıköy`, `kadıköy fizyoterapist pelvik taban`, `pelvik taban fizyoterapisti kadıköy`, `pelvik taban egzersizi fizyoterapist kadıköy`, `kadıköy pelvik taban fizyoterapisi randevu`

**Negatif anahtar kelimeler**

`nedir`, `neden olur`, `belirtileri`, `nasıl yapılır`, `kegel egzersizi nasıl yapılır`, `kegel hareketi videosu`, `video`, `izle`, `youtube`, `pdf`, `indir`, `ücretsiz`, `bedava`, `fiyat`, `ücret`, `kampanya`, `evde kendi kendine`, `mobil uygulama`, `uygulama indir`, `uygulama önerisi`, `app`, `program indir`, `ilaç`, `bitkisel`, `kür`, `doğal yöntem`, `kaç günde geçer`, `ekşi`, `forum`, `şikayetvar`, `ödev`, `tez`, `makale`, `sunum`, `ppt`, `kurs`, `sertifika programı`, `eğitim programı`, `seminer`, `fizyoterapist maaş`, `iş ilanı`, `eleman aranıyor`, `bölümü`, `üniversite`, `taban puanı`, `yüksek lisans`, `hemşirelik`, `ped`, `mesane pedi`, `alt bezi`, `hasta bezi`, `kegel topu`, `kegel aleti`, `kegel cihazı`, `vajinal ağırlık satın al`, `tvt ameliyatı`, `tot ameliyatı`, `idrar kaçırma ameliyatı fiyat`, `ameliyat fiyatı`, `prostat ilacı`, `botoks fiyat`, `mhrs`, `hastane randevu`, `devlet hastanesi`, `veteriner`, `köpek`, `kedi`

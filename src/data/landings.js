// Google Ads reklamlarının düştüğü hizmet sayfalarının yapılandırması.
//
// Sayfa metinleri landingContent.js / hizmetContent.js / bolgeContent.js dosyalarındadır;
// burada yalnızca sayfayı çevreleyen sabitler (görsel, WhatsApp mesajı, iç bağlantılar,
// güven maddeleri) tutulur. Yeni bir reklam sayfası açmak için buraya bir kayıt eklemek
// yeterlidir: rota (App.jsx) ve sitemap girdisi bu listeden otomatik üretilir.
//
// Metinler bu dosyadan STATİK olarak içe aktarılmaz. Önceden 16 sayfanın tüm gövdesi
// (yaklaşık 390 KB) ana pakete giriyor ve reklam sayfasının ilk boyaması bunun
// indirilmesini bekliyordu. Artık her kayıt yalnızca hangi modüldeki hangi dışa
// aktarımın kendisine ait olduğunu söyler (icerikModul + icerikAdi); tarayıcı
// yalnızca açılan sayfanın modülünü indirir (landingIcerikYukle). Node betikleri
// (prerender, sitemap, seo-check) eşzamanlı tam listeyi landingsTam.js'ten alır.
//
// `reklam: true` olan kayıtlar Google Ads'in düştüğü sayfalardır; mobil alt çubuk,
// mini form ve güven bloğu yalnızca bu sayfalarda açılır. Diğerleri organik sayfadır.

export const landings = [
  {
    slug: 'klinik-pilates-kadikoy',
    reklam: true,
    servisAdi: 'Klinik Pilates',
    breadcrumbAdi: 'Kadıköy Klinik Pilates',
    // scripts/seo-check.mjs bu kelimenin URL, title, meta, H1 ve ilk cümlede
    // birebir geçtiğini doğrular.
    odakKelime: 'Kadıköy klinik pilates',
    gorsel: '/assets/kart-klinik-pilates-kadikoy.jpg',
    gorselAlt: 'Kadıköy Klinik Pilates bilgi kartı: klinik pilates, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın',
    waMesaj: 'Merhaba, Kadıköy klinik pilates için randevu ve bilgi almak istiyorum.',
    // Hero'daki üç satırlık teklif (kim için / hangi ihtiyaç / ne yapılır). Reklam
    // metniyle aynı dili kullanır; vaat değil, sürecin tarifidir.
    teklif: {
      kimIcin: 'Gün içinde uzun süre oturan yetişkinler, egzersize nereden başlayacağını bilmeyenler ve geçmiş bir yaralanma sonrası kontrollü çalışmak isteyenler',
      neIcin: 'Bel, boyun ve sırt bölgesinde zorlanma; gövde kuvveti ve hareket kontrolü ihtiyacı',
      neYapilir: 'Fizyoterapist değerlendirmesi sonrası reformer ve mat çalışmalarıyla kişiye özel program',
    },
    guvenMaddeleri: [
      'Dersi fizyoterapist yönetir, program değerlendirme sonrası kurulur',
      'Reformer ve mat çalışmaları aynı klinikte',
      'Kozyatağı metrosuna yürüme mesafesi, randevu ile çalışılır',
    ],
    araCtaBaslik: 'Size uygun olup olmadığını birlikte değerlendirelim',
    araCtaMetin:
      'Ağrınız veya geçmiş bir yaralanmanız varsa hangi çalışmanın uygun olduğu değerlendirmeye bağlıdır. Kısa bir görüşmeyle durumunuzu konuşabiliriz.',
    konumMetni:
      'Klinik, Kadıköy Kozyatağı’nda Gülbahar Sokak üzerindedir. Ataşehir, Bostancı, Erenköy, Suadiye ve Göztepe çevresinden ulaşım kolaydır. Çalışmalar randevu ile planlanır.',
    ilgiliBaglantilar: [
      { to: '/kozyatagi-fizyoterapist', label: 'Kozyatağı fizyoterapist' },
      { to: '/tedavi-yaklasimlarimiz/pilates-salonu', label: 'Pilates hizmetlerinin tamamı' },
      { to: '/blog/klinik-pilates', label: 'Klinik pilates yazısı' },
      { to: '/skolyoz-schroth-kadikoy', label: 'Skolyoz fizyoterapisi' },
      { to: '/hakkimda', label: 'Fizyoterapist hakkında' },
      { "to": "/durus-bozuklugu-kifoz-lordoz-kadikoy", "label": "Duruş Bozukluğu, Kifoz ve Lordoz" },
      { "to": "/egzersiz-terapisi-ev-programi-kadikoy", "label": "Egzersiz Terapisi, Ev Programı ve Online Danışmanlık" },
      { "to": "/fibromiyalji-kronik-agri-kadikoy", "label": "Fibromiyalji ve Kronik Ağrı Yönetimi" },
      { "to": "/kalca-agrisi-fizyoterapisi-kadikoy", "label": "Kalça Ağrısı Fizyoterapisi" },
      { "to": "/mat-pilates-core-kuvvetlendirme-kadikoy", "label": "Mat Pilates ve Core Kuvvetlendirme" }
    ],
    icerikModul: 'landingContent',
    icerikAdi: 'klinikPilatesIcerik',
  },
  {
    slug: 'skolyoz-schroth-kadikoy',
    reklam: true,
    servisAdi: 'Skolyoz Fizyoterapisi (Schroth Metodu)',
    breadcrumbAdi: 'Kadıköy Skolyoz Fizyoterapisi',
    odakKelime: 'Kadıköy skolyoz fizyoterapisi',
    gorsel: '/assets/kart-skolyoz-schroth-kadikoy.jpg',
    gorselAlt: 'Kadıköy Skolyoz Fizyoterapisi bilgi kartı: skolyoz fizyoterapisi (schroth metodu), Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın',
    waMesaj: 'Merhaba, Kadıköy skolyoz fizyoterapisi ve Schroth metodu için bilgi almak istiyorum.',
    teklif: {
      kimIcin: 'Skolyoz tanısı konmuş çocuk, ergen ve yetişkinler ile omuz ya da bel simetrisinde farklılık fark eden aileler',
      neIcin: 'Eğriliğin takibi, duruş ve solunum farkındalığı, sırt ağrısı ve korse dönemi desteği',
      neYapilir: 'Değerlendirme ve ölçüm sonrası eğrilik tipine göre planlanan Schroth temelli egzersiz programı; evde uygulanacak biçimde öğretilir',
    },
    guvenMaddeleri: [
      'Sertifikalı Schroth yaklaşımıyla eğrilik tipine göre kurgulanan program',
      'Hekim tanısı ve radyolojik takiple birlikte yürütülür',
      'Çocuk, ergen ve yetişkin için ayrı hedeflerle planlama',
    ],
    araCtaBaslik: 'Elinizdeki raporla birlikte değerlendirelim',
    araCtaMetin:
      'Röntgen, Cobb açısı ölçümü veya hekim raporunuz varsa değerlendirme buradan başlar. Uygun programın ne olacağını görüşmede konuşabiliriz.',
    konumMetni:
      'Klinik, Kadıköy Kozyatağı’nda Gülbahar Sokak üzerindedir. Ataşehir, Bostancı, Erenköy, Suadiye ve Göztepe çevresinden ulaşım kolaydır. Skolyoz programları düzenli takip gerektirdiği için seanslar randevu ile planlanır.',
    ilgiliBaglantilar: [
      { to: '/sahrayicedit-fizyoterapist', label: 'Sahrayıcedit fizyoterapist' },
      { to: '/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi', label: 'Fizik tedavi hizmetleri' },
      { to: '/blog/schroth-metodu-skolyoz', label: 'Schroth metodu yazısı' },
      { to: '/klinik-pilates-kadikoy', label: 'Klinik pilates' },
      { to: '/hakkimda', label: 'Fizyoterapist hakkında' },
      { "to": "/durus-bozuklugu-kifoz-lordoz-kadikoy", "label": "Duruş Bozukluğu, Kifoz ve Lordoz" },
      { "to": "/pediatrik-fizyoterapi-bobath-kadikoy", "label": "Pediatrik Fizyoterapi, Bobath (NDT) ve Duyu Bütünleme" },
      { "to": "/solunum-fizyoterapisi-kadikoy", "label": "Solunum Fizyoterapisi" }
    ],
    icerikModul: 'landingContent',
    icerikAdi: 'skolyozSchrothIcerik',
  },
  {
    "slug": "bel-fitigi-kadikoy",
    "servisAdi": "Bel Fıtığı Fizyoterapisi",
    "breadcrumbAdi": "Bel Fıtığı Fizyoterapisi",
    "odakKelime": "Kadıköy bel fıtığı fizyoterapisi",
    "gorsel": "/assets/kart-bel-fitigi-kadikoy.jpg",
    "gorselAlt": "Bel Fıtığı Fizyoterapisi bilgi kartı: bel fıtığı fizyoterapisi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, bele ve bacağa vuran ağrım için Kadıköy Kozyatağı'ndaki klinikte randevu almak istiyorum.",
    "guvenMaddeleri": [
        "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu Fizyoterapist Onur Yalçın",
        "Manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
        "Sertifikalı Schroth uygulayıcısı",
        "Değerlendirme sonrası kişiye özel planlanan program ve yazılı ev egzersizleri",
        "Tanı ve tedavi kararı hekime aittir; gerekli görülen durumlarda hekime yönlendirme yapılır",
        "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu"
    ],
    "araCtaBaslik": "Bel ve bacak ağrınız için değerlendirme randevusu",
    "araCtaMetin": "Şikâyetinizin ne zaman arttığını ve hangi hareketlerde azaldığını birlikte inceleyelim. Kozyatağı'ndaki klinikte değerlendirme sonrası size uygun program planlanır ve evde yapacağınız hareketler yazılı olarak verilir. Randevu için 0507 294 99 00 numarasını arayabilirsiniz.",
    "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro çıkışına yürüme mesafesindedir. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00.",
    "ilgiliBaglantilar": [
        {
            "to": "/blog/bel-agrisi-ve-bel-fitigi",
            "label": "Bel ağrısı ve bel fıtığı"
        },
        {
            "to": "/blog/siyatik-ve-sinir-sikismasi",
            "label": "Siyatik ve sinir sıkışması"
        },
        {
            "to": "/klinik-pilates-kadikoy",
            "label": "Kadıköy klinik pilates"
        },
        {
            "to": "/blog/ameliyat-sonrasi-fizik-tedavi",
            "label": "Ameliyat sonrası fizyoterapi"
        },
        {
            "to": "/tedavi-yaklasimlarimiz",
            "label": "Tedavi yaklaşımları"
        },
    {
        "to": "/kozyatagi-fizyoterapist",
        "label": "Kozyatağı fizyoterapist"
      },
    
        {
            "to": "/iletisim",
            "label": "İletişim ve randevu"
        },
      { "to": "/kalca-agrisi-fizyoterapisi-kadikoy", "label": "Kalça Ağrısı Fizyoterapisi" },
      { "to": "/manuel-terapi-kadikoy", "label": "Manuel Terapi ve Mobilizasyon" },
      { "to": "/mat-pilates-core-kuvvetlendirme-kadikoy", "label": "Mat Pilates ve Core Kuvvetlendirme" }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'belFitigiIcerik',
  },
  {
    "slug": "boyun-fitigi-kadikoy",
    "servisAdi": "Boyun Fıtığı Fizyoterapisi",
    "breadcrumbAdi": "Boyun Fıtığı Fizyoterapisi",
    "odakKelime": "Kadıköy boyun fıtığı fizyoterapisi",
    "gorsel": "/assets/kart-boyun-fitigi-kadikoy.jpg",
    "gorselAlt": "Boyun Fıtığı Fizyoterapisi bilgi kartı: boyun fıtığı fizyoterapisi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Kadıköy boyun fıtığı fizyoterapisi için randevu almak istiyorum. Boynumdan koluma yayılan bir şikâyetim var, uygun gün ve saatleri öğrenebilir miyim?",
    "guvenMaddeleri": [
        "Süreç, İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu Fizyoterapist Onur Yalçın tarafından yürütülür.",
        "Program hazır bir paket olarak değil, öykü alma ve fiziksel değerlendirme sonrası kişiye özel planlanır.",
        "Tanı ve tedavi kararı hekime aittir; hekim değerlendirmesi gerektiren bulgularda yönlendirme yapılır.",
        "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları tek noktada yürütülür.",
        "Kadıköy Kozyatağı'nda, metro çıkışına yürüme mesafesinde; Pazartesi'den Cumartesi'ye 09:00-21:00 arasında randevu."
    ],
    "araCtaBaslik": "Şikâyetinizi değerlendirmeyle başlatın",
    "araCtaMetin": "Boyun ve kola yayılan şikâyetlerinizde süreç, Kozyatağı'ndaki klinikte öykü alma ve fiziksel değerlendirmeyle başlar; program değerlendirme sonrası kişiye özel planlanır. Varsa hekim notlarınızı ve görüntüleme raporlarınızı yanınızda getirebilirsiniz. Randevu için 0507 294 99 00 numarasından yazabilir veya arayabilirsiniz.",
    "konumMetni": "Kadıköy, Kozyatağı, Gülbahar Sokak, Ege Yıldız Sitesi No:15. Kozyatağı metro çıkışına yürüme mesafesinde; Ataşehir, Erenköy, Suadiye, Bostancı ve Göztepe çevresinden toplu taşımayla kolay ulaşım. Randevu saatleri Pazartesi'den Cumartesi'ye 09:00-21:00.",
    "ilgiliBaglantilar": [
        {
            "to": "/blog/boyun-fitigi-boyun-duzlesmesi-ve-kurek-kemigi-agrisi",
            "label": "Boyun fıtığı, boyun düzleşmesi ve kürek kemiği ağrısı"
        },
        {
            "to": "/blog/siyatik-ve-sinir-sikismasi",
            "label": "Sinir sıkışması nasıl değerlendirilir"
        },
        {
            "to": "/klinik-pilates-kadikoy",
            "label": "Kadıköy klinik pilates uygulaması"
        },
        {
            "to": "/blog/ameliyat-sonrasi-fizik-tedavi",
            "label": "Ameliyat sonrası fizyoterapi süreci"
        },
        {
            "to": "/tedavi-yaklasimlarimiz",
            "label": "Tedavi yaklaşımlarımız"
        },
    {
        "to": "/erenkoy-fizyoterapist",
        "label": "Erenköy fizyoterapist"
      },
    
        {
            "to": "/iletisim",
            "label": "Randevu ve iletişim"
        },
      { "to": "/bas-agrisi-migren-fizyoterapisi-kadikoy", "label": "Baş Ağrısı ve Migren" },
      { "to": "/karpal-tunel-tenisci-dirsegi-kadikoy", "label": "Karpal Tünel ve Tenisçi Dirseği" },
      { "to": "/manuel-terapi-kadikoy", "label": "Manuel Terapi ve Mobilizasyon" },
      { "to": "/omuz-agrisi-donuk-omuz-kadikoy", "label": "Omuz Ağrısı ve Donuk Omuz" }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'boyunFitigiIcerik',
  },
  {
    "slug": "norolojik-rehabilitasyon-kadikoy",
    "servisAdi": "Nörolojik Rehabilitasyon",
    "breadcrumbAdi": "Nörolojik Rehabilitasyon",
    "odakKelime": "Kadıköy nörolojik rehabilitasyon",
    "gorsel": "/assets/kart-norolojik-rehabilitasyon-kadikoy.jpg",
    "gorselAlt": "Nörolojik Rehabilitasyon bilgi kartı: nörolojik rehabilitasyon, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Kadıköy nörolojik rehabilitasyon hakkında bilgi almak ve değerlendirme randevusu oluşturmak istiyorum.",
    "guvenMaddeleri": [
        "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
        "Hekim tanısı ve yönlendirmesiyle uyumlu çalışma",
        "Değerlendirme sonrası kişiye özel program planlanır",
        "Ev programı ve yakınlara güvenli destek yöntemlerinin gösterilmesi",
        "Kozyatağı metrosuna yürüme mesafesi",
        "Pazartesi'den Cumartesi'ye 09:00-21:00 randevu"
    ],
    "araCtaBaslik": "Değerlendirme randevusu oluşturun",
    "araCtaMetin": "Kozyatağı'ndaki klinikte hangi çalışmaların size uygun olduğunu konuşmak için Pazartesi'den Cumartesi'ye 09:00 ile 21:00 arasında 0507 294 99 00 numarasından ulaşabilirsiniz.",
    "konumMetni": "Kozyatağı, Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kadıköy, İstanbul. Kozyatağı metro çıkışına yürüme mesafesinde.",
    "ilgiliBaglantilar": [
        {
            "to": "/blog/felc-inme-rehabilitasyonu",
            "label": "İnme (felç) rehabilitasyonu hakkında"
        },
        {
            "to": "/blog/parkinson-ve-denge",
            "label": "Parkinson ve denge çalışmaları"
        },
        {
            "to": "/blog/ms-multipl-skleroz-fizyoterapi",
            "label": "MS'te fizyoterapi yaklaşımı"
        },
        {
            "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi",
            "label": "Rehabilitasyon çalışmaları"
        },
        {
            "to": "/blog/serebral-palsi-rehabilitasyonu",
            "label": "Serebral palsi rehabilitasyonu"
        },
    {
        "to": "/bostanci-fizyoterapist",
        "label": "Bostancı fizyoterapist"
      },
    
        {
            "to": "/iletisim",
            "label": "Randevu ve iletişim"
        },
      { "to": "/geriatrik-fizyoterapi-osteoporoz-kadikoy", "label": "Geriatrik Fizyoterapi ve Osteoporoz Egzersizi" },
      { "to": "/pediatrik-fizyoterapi-bobath-kadikoy", "label": "Pediatrik Fizyoterapi, Bobath (NDT) ve Duyu Bütünleme" }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'norolojikRehabilitasyonIcerik',
  },
  {
    "slug": "ameliyat-sonrasi-rehabilitasyon-kadikoy",
    "servisAdi": "Ameliyat Sonrası Rehabilitasyon",
    "breadcrumbAdi": "Ameliyat Sonrası Rehabilitasyon",
    "odakKelime": "Kadıköy ameliyat sonrası rehabilitasyon",
    "gorsel": "/assets/kart-ameliyat-sonrasi-rehabilitasyon-kadikoy.jpg",
    "gorselAlt": "Ameliyat Sonrası Rehabilitasyon bilgi kartı: ameliyat sonrası rehabilitasyon, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, ameliyat sonrası rehabilitasyon için randevu almak istiyorum.",
    "guvenMaddeleri": [
        "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu Fizyoterapist Onur Yalçın tarafından yürütülür",
        "Program cerrahınızın protokolüne göre planlanır; tanı ve tedavi kararı hekime aittir",
        "Manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları klinik içinde yapılır",
        "Sertifikalı Schroth uygulayıcısı",
        "Kozyatağı metro durağına yürüme mesafesi, randevular Pazartesi ile Cumartesi arasında 09:00 ile 21:00 saatleri arasında"
    ],
    "araCtaBaslik": "Ameliyat sonrası programınızı birlikte planlayalım",
    "araCtaMetin": "Ameliyat raporunuzu ve varsa cerrahınızın yazılı protokolünü yanınızda getirin. Değerlendirme sonrası program kişiye özel planlanır ve süreç ilerledikçe güncellenir. Randevu için 0507 294 99 00 numarasından ulaşabilirsiniz.",
    "konumMetni": "Kozyatağı Mah. Gülbahar Sk., Ege Yıldız Sitesi No:15, Kadıköy, İstanbul. Kozyatağı metro durağına yürüme mesafesinde; Sahrayıcedit, Erenköy, Suadiye ve Bostancı çevresinden toplu taşımayla ulaşılabiliyor. Randevular Pazartesi ile Cumartesi arasında 09:00 ile 21:00 saatleri arasında planlanır.",
    "ilgiliBaglantilar": [
        {
            "to": "/blog/ameliyat-sonrasi-fizik-tedavi",
            "label": "Ameliyat sonrası fizik tedavi süreci"
        },
        {
            "to": "/blog/on-capraz-bag-ocb-sporcu-yaralanmalari",
            "label": "Ön çapraz bağ ve spor yaralanmaları"
        },
        {
            "to": "/klinik-pilates-kadikoy",
            "label": "Kadıköy klinik pilates"
        },
        {
            "to": "/blog/bel-agrisi-ve-bel-fitigi",
            "label": "Bel ağrısı ve bel fıtığı"
        },
        {
            "to": "/tedavi-yaklasimlarimiz",
            "label": "Tedavi yaklaşımlarımız"
        },
    {
        "to": "/bostanci-fizyoterapist",
        "label": "Bostancı fizyoterapist"
      },
    
        {
            "to": "/iletisim",
            "label": "Randevu ve iletişim"
        },
      { "to": "/diz-agrisi-rehabilitasyonu-kadikoy", "label": "Diz Ağrısı ve Diz Rehabilitasyonu" },
      { "to": "/geriatrik-fizyoterapi-osteoporoz-kadikoy", "label": "Geriatrik Fizyoterapi ve Osteoporoz Egzersizi" },
      { "to": "/kalca-agrisi-fizyoterapisi-kadikoy", "label": "Kalça Ağrısı Fizyoterapisi" },
      { "to": "/lenfodem-manuel-lenf-drenaji-kadikoy", "label": "Lenfödem ve Manuel Lenf Drenajı" },
      { "to": "/omuz-agrisi-donuk-omuz-kadikoy", "label": "Omuz Ağrısı ve Donuk Omuz" },
      { "to": "/ortopedik-rehabilitasyon-kadikoy", "label": "Ortopedik Rehabilitasyon" },
      { "to": "/solunum-fizyoterapisi-kadikoy", "label": "Solunum Fizyoterapisi" }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'ameliyatSonrasiRehabilitasyonIcerik',
  },
  {
    "slug": "dogum-sonrasi-fizyoterapi-kadikoy",
    "servisAdi": "Doğum Sonrası Fizyoterapi",
    "breadcrumbAdi": "Doğum Sonrası Fizyoterapi",
    "odakKelime": "Kadıköy doğum sonrası fizyoterapi",
    "gorsel": "/assets/kart-dogum-sonrasi-fizyoterapi-kadikoy.jpg",
    "gorselAlt": "Doğum Sonrası Fizyoterapi bilgi kartı: doğum sonrası fizyoterapi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Kadıköy doğum sonrası fizyoterapi hakkında bilgi almak ve randevu oluşturmak istiyorum.",
    "guvenMaddeleri": [
        "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
        "Sertifikalı Schroth uygulayıcısı",
        "Manuel terapi, klinik reformer pilates ve fasyal manipülasyon çalışmaları",
        "Süreç hekim onayı alındıktan sonra başlar; tanı ve tedavi kararı hekime aittir",
        "Değerlendirme sonrası kişiye özel planlanan, kademeli ilerleyen program",
        "Kozyatağı metro durağına yürüme mesafesinde klinik",
        "Pazartesi ile Cumartesi arası 09:00 ve 21:00 saatleri arasında randevu"
    ],
    "araCtaBaslik": "Değerlendirme için randevu oluşturun",
    "araCtaMetin": "Karın duvarı ve bel bölgesindeki şikayetleriniz hekim onayı alındıktan sonra ayrıntılı biçimde değerlendirilir, program doğum biçiminize ve günlük yaşamınıza göre planlanır. Kozyatağı'ndaki klinik Pazartesi ve Cumartesi arası 09:00 ile 21:00 saatleri arasında randevu ile çalışır.",
    "konumMetni": "Kozyatağı, Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kadıköy, İstanbul. Kozyatağı metro durağına yürüme mesafesinde. Randevu: Pazartesi ile Cumartesi arası 09:00 ile 21:00.",
    "ilgiliBaglantilar": [
        {
            "to": "/hamilelik-fizyoterapisi-kadikoy",
            "label": "Hamilelik fizyoterapisi"
        },
        {
            "to": "/klinik-pilates-kadikoy",
            "label": "Klinik pilates çalışmaları"
        },
        {
            "to": "/blog/bel-agrisi-ve-bel-fitigi",
            "label": "Bel ağrısı ve bel fıtığı"
        },
        {
            "to": "/tedavi-yaklasimlarimiz",
            "label": "Tedavi yaklaşımlarımız"
        },
    {
        "to": "/sahrayicedit-fizyoterapist",
        "label": "Sahrayıcedit fizyoterapist"
      },
    
        {
            "to": "/iletisim",
            "label": "Randevu ve iletişim"
        }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'dogumSonrasiFizyoterapiIcerik',
  },
  {
    "slug": "cene-eklemi-tme-kadikoy",
    "servisAdi": "Çene Eklemi (TME) Fizyoterapisi",
    "breadcrumbAdi": "Çene Eklemi (TME) Fizyoterapisi",
    "odakKelime": "Kadıköy çene eklemi fizyoterapisi",
    "gorsel": "/assets/kart-cene-eklemi-tme-kadikoy.jpg",
    "gorselAlt": "Çene Eklemi (TME) Fizyoterapisi bilgi kartı: çene eklemi (tme) fizyoterapisi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, çene eklemi (TME) şikâyetim için Kadıköy Kozyatağı'ndaki klinikte randevu almak istiyorum.",
    "guvenMaddeleri": [
        "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu Fizyoterapist Onur Yalçın tarafından yürütülür.",
        "Manuel terapi, fasyal manipülasyon ve klinik reformer pilates çalışmalarıyla desteklenen değerlendirme.",
        "Sertifikalı Schroth uygulayıcısı.",
        "Program değerlendirme sonrasında kişiye özel planlanır; önceden sabit seans sayısı verilmez.",
        "Tanı ve tedavi kararı hekime aittir; süreç diş hekimi takibiyle birlikte yürütülebilir.",
        "Kadıköy Kozyatağı, Kozyatağı metro durağına yürüme mesafesinde. Pazartesi ile Cumartesi arası 09:00-21:00."
    ],
    "araCtaBaslik": "Çene ağrısı ve kilitlenme için değerlendirme",
    "araCtaMetin": "Kozyatağı'ndaki klinikte çene ekleminiz, çiğneme kaslarınız ve boyun bölgeniz birlikte incelenir; program değerlendirme sonrasında kişiye özel planlanır. Randevu için Pazartesi ile Cumartesi arası 09:00 ile 21:00 saatleri arasında ulaşabilirsiniz.",
    "konumMetni": "Kadıköy Kozyatağı, Gülbahar Sokak, Ege Yıldız Sitesi No:15. Kozyatağı metro durağına yürüme mesafesinde. Randevu: Pazartesi ile Cumartesi arası 09:00-21:00, 0507 294 99 00.",
    "ilgiliBaglantilar": [
        {
            "to": "/blog/cene-eklemi-tme-tedavisi",
            "label": "Çene eklemi (TME) tedavisi hakkında yazı"
        },
        {
            "to": "/blog/boyun-fitigi-boyun-duzlesmesi-ve-kurek-kemigi-agrisi",
            "label": "Boyun fıtığı, boyun düzleşmesi ve kürek kemiği ağrısı"
        },
        {
            "to": "/klinik-pilates-kadikoy",
            "label": "Kadıköy klinik pilates"
        },
        {
            "to": "/tedavi-yaklasimlarimiz",
            "label": "Tedavi yaklaşımlarımız"
        },
    {
        "to": "/erenkoy-fizyoterapist",
        "label": "Erenköy fizyoterapist"
      },
    
        {
            "to": "/iletisim",
            "label": "İletişim ve randevu"
        },
      { "to": "/bas-agrisi-migren-fizyoterapisi-kadikoy", "label": "Baş Ağrısı ve Migren" },
      { "to": "/manuel-terapi-kadikoy", "label": "Manuel Terapi ve Mobilizasyon" }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'ceneEklemiTmeIcerik',
  },
  {
    "slug": "spor-yaralanmalari-kadikoy",
    "servisAdi": "Spor Yaralanmaları Rehabilitasyonu",
    "breadcrumbAdi": "Spor Yaralanmaları Rehabilitasyonu",
    "odakKelime": "Kadıköy spor yaralanmaları rehabilitasyonu",
    "gorsel": "/assets/kart-spor-yaralanmalari-kadikoy.jpg",
    "gorselAlt": "Spor Yaralanmaları Rehabilitasyonu bilgi kartı: spor yaralanmaları rehabilitasyonu, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Kadıköy spor yaralanmaları rehabilitasyonu hakkında bilgi almak ve randevu için uygun bir saat öğrenmek istiyorum.",
    "guvenMaddeleri": [
        "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
        "Sertifikalı Schroth uygulayıcısı",
        "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon alanlarında çalışma",
        "Değerlendirme sonrası kişiye özel planlanan ve her seansta gözden geçirilen program",
        "Seanslar birebir yürütülür, program yapılan spora göre uyarlanır",
        "Kozyatağı metrosuna yürüme mesafesi, Pazartesi'den Cumartesi'ye 09:00-21:00 randevu"
    ],
    "araCtaBaslik": "Şu an hangi hareketin güvenli olduğuna karar veremiyorsanız",
    "araCtaMetin": "Yaralanma sonrası ne kadar dinlenileceği ve ne zaman yüklenmeye geçileceği, zorlanan dokuya ve içinde bulunulan döneme göre değişir. Değerlendirme sonrasında mevcut durumunuzun nasıl göründüğünü ve programın hangi basamaklarla kurulacağını birlikte konuşabiliriz.",
    "konumMetni": "Kadıköy Kozyatağı, Gülbahar Sokak, Ege Yıldız Sitesi No:15, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde; Sahrayıcedit, Erenköy, Suadiye ve Bostancı çevresinden toplu taşımayla ulaşılabiliyor. Randevu için Pazartesi'den Cumartesi'ye 09:00-21:00 arasında 0507 294 99 00 numarasından ulaşabilirsiniz.",
    "ilgiliBaglantilar": [
        {
            "to": "/blog/on-capraz-bag-ocb-sporcu-yaralanmalari",
            "label": "Ön çapraz bağ ve sporcu yaralanmaları"
        },
        {
            "to": "/blog/ameliyat-sonrasi-fizik-tedavi",
            "label": "Ameliyat sonrası fizik tedavi"
        },
        {
            "to": "/tedavi-yaklasimlarimiz/spor-masaj-terapisti",
            "label": "Spor masajı yaklaşımı"
        },
        {
            "to": "/klinik-pilates-kadikoy",
            "label": "Kadıköy klinik pilates"
        },
        {
            "to": "/blog/duz-tabanlik-ve-ayak-agrilari",
            "label": "Düz tabanlık ve ayak ağrıları"
        },
        {
            "to": "/tedavi-yaklasimlarimiz",
            "label": "Tedavi yaklaşımlarımız"
        },
    {
        "to": "/suadiye-fizyoterapist",
        "label": "Suadiye fizyoterapist"
      },
    
        {
            "to": "/iletisim",
            "label": "İletişim ve randevu"
        },
      { "to": "/ayak-bilegi-burkulmasi-topuk-dikeni-kadikoy", "label": "Ayak Bileği Burkulması ve Topuk Dikeni" },
      { "to": "/diz-agrisi-rehabilitasyonu-kadikoy", "label": "Diz Ağrısı ve Diz Rehabilitasyonu" },
      { "to": "/miyofasyal-agri-kinesio-bantlama-kadikoy", "label": "Miyofasyal Ağrı, Tetik Nokta ve Kinesio Bantlama" },
      { "to": "/omuz-agrisi-donuk-omuz-kadikoy", "label": "Omuz Ağrısı ve Donuk Omuz" },
      { "to": "/ortopedik-rehabilitasyon-kadikoy", "label": "Ortopedik Rehabilitasyon" },
      { "to": "/spor-masaji-klinik-masaj-kadikoy", "label": "Spor Masajı ve Klinik Masaj" },
      { "to": "/sporcu-performans-degerlendirmesi-kadikoy", "label": "Sporcu Performans Değerlendirmesi" }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'sporYaralanmalariIcerik',
  },
  {
    "slug": "ofis-calisanlari-fizyoterapi-kadikoy",
    "servisAdi": "Ofis Çalışanları için Fizyoterapi",
    "breadcrumbAdi": "Ofis Çalışanları için Fizyoterapi",
    "odakKelime": "Kadıköy ofis çalışanları fizyoterapisi",
    "gorsel": "/assets/kart-ofis-calisanlari-fizyoterapi-kadikoy.jpg",
    "gorselAlt": "Ofis Çalışanları için Fizyoterapi bilgi kartı: ofis çalışanları için fizyoterapi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, masa başı çalışmaya bağlı boyun, omuz ve bel şikâyetlerim için değerlendirme randevusu almak istiyorum.",
    "guvenMaddeleri": [
        "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
        "Sertifikalı Schroth uygulayıcısı",
        "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
        "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
        "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
        "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
    ],
    "araCtaBaslik": "Masa başı şikâyetlerinizi birlikte değerlendirelim",
    "araCtaMetin": "Boyun, omuz veya bel şikâyetiniz mesai ilerledikçe artıyorsa Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, şikâyetin ne zaman ve hangi hareketle ortaya çıktığını anlamakla başlar.",
    "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
    "ilgiliBaglantilar": [
        {
            "to": "/klinik-pilates-kadikoy",
            "label": "Kadıköy klinik pilates"
        },
        {
            "to": "/blog/boyun-fitigi-boyun-duzlesmesi-ve-kurek-kemigi-agrisi",
            "label": "Boyun fıtığı, boyun düzleşmesi ve kürek kemiği ağrısı"
        },
        {
            "to": "/blog/bel-agrisi-ve-bel-fitigi",
            "label": "Bel ağrısı ve bel fıtığı"
        },
        {
            "to": "/erkek-pelvik-taban-kadikoy",
            "label": "Kadıköy erkek pelvik taban rehabilitasyonu"
        },
        {
            "to": "/tedavi-yaklasimlarimiz",
            "label": "Tedavi yaklaşımlarımız"
        },
    {
        "to": "/kozyatagi-fizyoterapist",
        "label": "Kozyatağı fizyoterapist"
      },
    
        {
            "to": "/iletisim",
            "label": "İletişim ve randevu"
        },
      { "to": "/bas-agrisi-migren-fizyoterapisi-kadikoy", "label": "Baş Ağrısı ve Migren" },
      { "to": "/butuncul-fizyoterapi-degerlendirme-kadikoy", "label": "Bütüncül Fizyoterapi, Değerlendirme ve Muayene" },
      { "to": "/durus-bozuklugu-kifoz-lordoz-kadikoy", "label": "Duruş Bozukluğu, Kifoz ve Lordoz" },
      { "to": "/karpal-tunel-tenisci-dirsegi-kadikoy", "label": "Karpal Tünel ve Tenisçi Dirseği" },
      { "to": "/miyofasyal-agri-kinesio-bantlama-kadikoy", "label": "Miyofasyal Ağrı, Tetik Nokta ve Kinesio Bantlama" },
      { "to": "/omuz-agrisi-donuk-omuz-kadikoy", "label": "Omuz Ağrısı ve Donuk Omuz" }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'ofisCalisanlariFizyoterapiIcerik',
  },
  {
      "slug": "visseral-terapi-kadikoy",
      "servisAdi": "Visseral Terapi",
      "breadcrumbAdi": "Mide ve Sindirim Sorunlarında Fizyoterapi (Visseral Terapi)",
      "odakKelime": "Kadıköy visseral terapi",
      "gorsel": "/assets/kart-visseral-terapi-kadikoy.jpg",
      "gorselAlt": "Kadıköy Visseral Terapi bilgi kartı: mide ve sindirim sistemi sorunlarında fizyoterapi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, mide ve sindirim şikayetlerim için visseral terapi hakkında bilgi almak ve randevu oluşturmak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Manuel terapi, fasyal ve visseral manipülasyon uygulamaları",
          "Süreç hekim teşhisi ve tetkik bulguları üzerine kurulur",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Sindirim şikayetlerinizi birlikte değerlendirelim",
      "araCtaMetin": "Reflü, mide ağrısı, şişkinlik ya da göbek düşmesi şikayetleriniz geçmiyorsa Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, doktor teşhisleriniz ve tetkik bulgularınızın incelenmesiyle başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-uzmani",
              "label": "Manuel terapi ve visseral manipülasyon"
          },
          {
              "to": "/ofis-calisanlari-fizyoterapi-kadikoy",
              "label": "Ofis çalışanları için fizyoterapi"
          },
          {
              "to": "/klinik-pilates-kadikoy",
              "label": "Kadıköy klinik pilates"
          },
          {
              "to": "/tedavi-yaklasimlarimiz",
              "label": "Tedavi yaklaşımlarımız"
          },
          {
              "to": "/kozyatagi-fizyoterapist",
              "label": "Kozyatağı fizyoterapist"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          },
      { "to": "/manuel-terapi-kadikoy", "label": "Manuel Terapi ve Mobilizasyon" }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'visseralTerapiIcerik',
  },
  {
    "slug": "kozyatagi-fizyoterapist",
    "semt": "Kozyatağı",
    "servisAdi": "Kozyatağı Fizyoterapist",
    "breadcrumbAdi": "Kozyatağı",
    "odakKelime": "Kozyatağı fizyoterapist",
    "gorsel": "/assets/kart-kozyatagi-fizyoterapist.jpg",
    "gorselAlt": "Kozyatağı fizyoterapist sayfa kartı: Kozyatağı Kadıköy'deki klinikten hizmet, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Kozyatağı'nda değerlendirme randevusu almak istiyorum.",
    "guvenMaddeleri": [
      "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
      "Sertifikalı Schroth uygulayıcısı",
      "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
      "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
      "Gülbahar Sokak, Ege Yıldız Sitesi No:15; Kozyatağı metrosuna yürüme mesafesi",
      "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
    ],
    "araCtaBaslik": "Kozyatağı'ndaki klinikte değerlendirme randevusu",
    "araCtaMetin": "Şikâyetinizin nereden geldiğini anlamak için bir değerlendirme görüşmesiyle başlayabilirsiniz. Program bu görüşmenin sonucuna göre kurulur; hazır bir egzersiz listesi üzerinden ilerlenmez.",
    "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
    "ilgiliBaglantilar": [
      {
        "to": "/ofis-calisanlari-fizyoterapi-kadikoy",
        "label": "Ofis çalışanları için fizyoterapi"
      },
      {
        "to": "/bel-fitigi-kadikoy",
        "label": "Bel fıtığı fizyoterapisi"
      },
      {
        "to": "/boyun-fitigi-kadikoy",
        "label": "Boyun fıtığı fizyoterapisi"
      },
      {
        "to": "/klinik-pilates-kadikoy",
        "label": "Klinik pilates"
      },
      {
        "to": "/skolyoz-schroth-kadikoy",
        "label": "Skolyoz fizyoterapisi"
      },
      {
        "to": "/tedavi-yaklasimlarimiz",
        "label": "Tedavi yaklaşımlarımız"
      },
      {
        "to": "/iletisim",
        "label": "İletişim ve randevu"
      },
      { "to": "/butuncul-fizyoterapi-degerlendirme-kadikoy", "label": "Bütüncül Fizyoterapi, Değerlendirme ve Muayene" },
      { "to": "/pediatrik-fizyoterapi-bobath-kadikoy", "label": "Pediatrik Fizyoterapi, Bobath (NDT) ve Duyu Bütünleme" },
      { "to": "/sporcu-performans-degerlendirmesi-kadikoy", "label": "Sporcu Performans Değerlendirmesi" }
    ],
    icerikModul: 'bolgeContent',
    icerikAdi: 'kozyatagiIcerik',
  },
  {
    "slug": "sahrayicedit-fizyoterapist",
    "semt": "Sahrayıcedit",
    "servisAdi": "Sahrayıcedit Fizyoterapist",
    "breadcrumbAdi": "Sahrayıcedit",
    "odakKelime": "Sahrayıcedit fizyoterapist",
    "gorsel": "/assets/kart-sahrayicedit-fizyoterapist.jpg",
    "gorselAlt": "Sahrayıcedit fizyoterapist sayfa kartı: Kozyatağı Kadıköy'deki klinikten hizmet, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Sahrayıcedit'ten değerlendirme randevusu almak istiyorum.",
    "guvenMaddeleri": [
      "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
      "Sertifikalı Schroth uygulayıcısı",
      "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
      "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
      "Komşu mahalle Kozyatağı'nda klinik; Pazartesi-Cumartesi 09:00-21:00 randevu",
      "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
    ],
    "araCtaBaslik": "Sahrayıcedit'ten kısa mesafede değerlendirme randevusu",
    "araCtaMetin": "Çocuğunuzun duruşu, doğum sonrası dönem ya da ev içi yüklenmelere bağlı şikâyetler için değerlendirme görüşmesiyle başlayabilirsiniz. Program bu görüşmenin sonucuna göre kurulur.",
    "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Sahrayıcedit'ten kısa mesafede, Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
    "ilgiliBaglantilar": [
      {
        "to": "/skolyoz-schroth-kadikoy",
        "label": "Skolyoz fizyoterapisi"
      },
      {
        "to": "/dogum-sonrasi-fizyoterapi-kadikoy",
        "label": "Doğum sonrası fizyoterapi"
      },
      {
        "to": "/erkek-pelvik-taban-kadikoy",
        "label": "Erkeklerde pelvik taban rehabilitasyonu"
      },
      {
        "to": "/norolojik-rehabilitasyon-kadikoy",
        "label": "Nörolojik rehabilitasyon"
      },
      {
        "to": "/kozyatagi-fizyoterapist",
        "label": "Kozyatağı fizyoterapist"
      },
      {
        "to": "/tedavi-yaklasimlarimiz",
        "label": "Tedavi yaklaşımlarımız"
      },
      {
        "to": "/iletisim",
        "label": "İletişim ve randevu"
      }
    ],
    icerikModul: 'bolgeContent',
    icerikAdi: 'sahrayiceditIcerik',
  },
  {
    "slug": "erenkoy-fizyoterapist",
    "semt": "Erenköy",
    "servisAdi": "Erenköy Fizyoterapist",
    "breadcrumbAdi": "Erenköy",
    "odakKelime": "Erenköy fizyoterapist",
    "gorsel": "/assets/kart-erenkoy-fizyoterapist.jpg",
    "gorselAlt": "Erenköy fizyoterapist sayfa kartı: Kozyatağı Kadıköy'deki klinikten hizmet, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Erenköy'den değerlendirme randevusu almak istiyorum.",
    "guvenMaddeleri": [
      "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
      "Manuel terapi ve fasyal manipülasyon uygulamaları",
      "Klinik reformer pilates ve gövde kontrolü çalışmaları",
      "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
      "Kozyatağı'ndaki klinik, metroya yürüme mesafesinde; Pazartesi-Cumartesi 09:00-21:00",
      "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
    ],
    "araCtaBaslik": "Boyun, bel veya çene şikâyetiniz için değerlendirme",
    "araCtaMetin": "Şikâyetinizin nereden geldiğini anlamak için bir değerlendirme görüşmesiyle başlayabilirsiniz. Program bu görüşmenin sonucuna göre kurulur; hazır bir egzersiz listesi üzerinden ilerlenmez.",
    "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
    "ilgiliBaglantilar": [
      {
        "to": "/boyun-fitigi-kadikoy",
        "label": "Boyun fıtığı fizyoterapisi"
      },
      {
        "to": "/cene-eklemi-tme-kadikoy",
        "label": "Çene eklemi fizyoterapisi"
      },
      {
        "to": "/bel-fitigi-kadikoy",
        "label": "Bel fıtığı fizyoterapisi"
      },
      {
        "to": "/ofis-calisanlari-fizyoterapi-kadikoy",
        "label": "Ofis çalışanları için fizyoterapi"
      },
      {
        "to": "/kozyatagi-fizyoterapist",
        "label": "Kozyatağı fizyoterapist"
      },
      {
        "to": "/tedavi-yaklasimlarimiz",
        "label": "Tedavi yaklaşımlarımız"
      },
      {
        "to": "/iletisim",
        "label": "İletişim ve randevu"
      }
    ],
    icerikModul: 'bolgeContent',
    icerikAdi: 'erenkoyIcerik',
  },
  {
    "slug": "suadiye-fizyoterapist",
    "semt": "Suadiye",
    "servisAdi": "Suadiye Fizyoterapist",
    "breadcrumbAdi": "Suadiye",
    "odakKelime": "Suadiye fizyoterapist",
    "gorsel": "/assets/kart-suadiye-fizyoterapist.jpg",
    "gorselAlt": "Suadiye fizyoterapist sayfa kartı: Kozyatağı Kadıköy'deki klinikten hizmet, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Suadiye'den spor kaynaklı bir şikâyet için değerlendirme randevusu almak istiyorum.",
    "guvenMaddeleri": [
      "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
      "Manuel terapi ve fasyal manipülasyon uygulamaları",
      "Spora kademeli dönüş planı ölçütlerle ilerler, takvimle değil",
      "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
      "Kozyatağı'ndaki klinik, metroya yürüme mesafesinde; Pazartesi-Cumartesi 09:00-21:00",
      "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
    ],
    "araCtaBaslik": "Spor kaynaklı şikâyetiniz için değerlendirme",
    "araCtaMetin": "Koşu, yürüyüş, tenis ya da salon çalışması sırasında ortaya çıkan bir şikâyet için değerlendirme görüşmesiyle başlayabilirsiniz. Dönüş planı ölçütlerle kurulur.",
    "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
    "ilgiliBaglantilar": [
      {
        "to": "/spor-yaralanmalari-kadikoy",
        "label": "Spor yaralanmaları rehabilitasyonu"
      },
      {
        "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy",
        "label": "Ameliyat sonrası rehabilitasyon"
      },
      {
        "to": "/klinik-pilates-kadikoy",
        "label": "Klinik pilates"
      },
      {
        "to": "/bel-fitigi-kadikoy",
        "label": "Bel fıtığı fizyoterapisi"
      },
      {
        "to": "/kozyatagi-fizyoterapist",
        "label": "Kozyatağı fizyoterapist"
      },
      {
        "to": "/tedavi-yaklasimlarimiz",
        "label": "Tedavi yaklaşımlarımız"
      },
      {
        "to": "/iletisim",
        "label": "İletişim ve randevu"
      }
    ],
    icerikModul: 'bolgeContent',
    icerikAdi: 'suadiyeIcerik',
  },
  {
    "slug": "bostanci-fizyoterapist",
    "semt": "Bostancı",
    "servisAdi": "Bostancı Fizyoterapist",
    "breadcrumbAdi": "Bostancı",
    "odakKelime": "Bostancı fizyoterapist",
    "gorsel": "/assets/kart-bostanci-fizyoterapist.jpg",
    "gorselAlt": "Bostancı fizyoterapist sayfa kartı: Kozyatağı Kadıköy'deki klinikten hizmet, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Bostancı'dan değerlendirme randevusu almak istiyorum.",
    "guvenMaddeleri": [
      "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
      "Nörolojik ve ortopedik rehabilitasyon uygulamaları",
      "Ameliyat sonrası programlar cerrahın protokolü çerçevesinde yürütülür",
      "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
      "Kozyatağı'ndaki klinik, metroya yürüme mesafesinde; Pazartesi-Cumartesi 09:00-21:00",
      "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
    ],
    "araCtaBaslik": "Uzun soluklu bir program için değerlendirme",
    "araCtaMetin": "Nörolojik rehabilitasyon ya da ameliyat sonrası dönem için değerlendirme görüşmesiyle başlayabilirsiniz. Hedefler günlük yaşamdaki somut hareketler üzerinden konur.",
    "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
    "ilgiliBaglantilar": [
      {
        "to": "/norolojik-rehabilitasyon-kadikoy",
        "label": "Nörolojik rehabilitasyon"
      },
      {
        "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy",
        "label": "Ameliyat sonrası rehabilitasyon"
      },
      {
        "to": "/klinik-pilates-kadikoy",
        "label": "Klinik pilates"
      },
      {
        "to": "/spor-yaralanmalari-kadikoy",
        "label": "Spor yaralanmaları rehabilitasyonu"
      },
      {
        "to": "/kozyatagi-fizyoterapist",
        "label": "Kozyatağı fizyoterapist"
      },
      {
        "to": "/tedavi-yaklasimlarimiz",
        "label": "Tedavi yaklaşımlarımız"
      },
      {
        "to": "/iletisim",
        "label": "İletişim ve randevu"
      }
    ],
    icerikModul: 'bolgeContent',
    icerikAdi: 'bostanciIcerik',
  },
  {
    "slug": "idrar-kacirma-kadikoy",
    "servisAdi": "İdrar Kaçırma Fizyoterapisi",
    "breadcrumbAdi": "İdrar Kaçırma Fizyoterapisi",
    "odakKelime": "Kadıköy idrar kaçırma fizyoterapisi",
    "gorsel": "/assets/kart-idrar-kacirma-kadikoy.jpg",
    "gorselAlt": "Kadıköy İdrar Kaçırma Fizyoterapisi bilgi kartı: pelvik taban değerlendirmesi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Kadıköy idrar kaçırma fizyoterapisi için bilgi almak istiyorum.",
    "teklif": {
      "kimIcin": "Hekim yönlendirmesiyle gelen, idrar kaçırma şikayeti olan erkekler; prostat cerrahisi sonrası dönem dahil",
      "neIcin": "Zorlanma tipi, ani sıkışma tipi ve karışık tip kaçırma ile pelvik taban işlev bozuklukları",
      "neYapilir": "Onayınızla yürütülen değerlendirme sonrası, hekim tanısı çerçevesinde planlanan kişiye özel program"
    },
    "guvenMaddeleri": [
      "Değerlendirmede ne yapılacağı önceden anlatılır, onayınız alınır",
      "Görüşmeye yanınızda bir yakınınızla gelebilirsiniz",
      "Program hekim tanısı ve yönlendirmesi çerçevesinde planlanır"
    ],
    "araCtaBaslik": "Sorularınızı randevu almadan da sorabilirsiniz",
    "araCtaMetin": "Sürecin nasıl ilerlediğini ve size uygun olup olmadığını konuşmak için önce yazabilirsiniz. Ayrıntı paylaşmak zorunda değilsiniz.",
    "konumMetni": "Klinik, Kadıköy Kozyatağı\u2019nda Gülbahar Sokak üzerindedir. Ataşehir, Bostancı, Erenköy, Suadiye ve Göztepe çevresinden ulaşım kolaydır. Görüşmeler randevu ile yapılır.",
    "ilgiliBaglantilar": [
      { "to": "/erkek-pelvik-taban-kadikoy", "label": "Erkeklerde pelvik taban" },
      { "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi", "label": "Rehabilitasyon hizmetleri" },
      { "to": "/blog/erkeklerde-pelvik-taban-sorunlari", "label": "Erkeklerde pelvik taban yazısı" }
    ],
    "icerikModul": "hizmetContent",
    "icerikAdi": "idrarKacirmaIcerik"
  },
  {
    "slug": "hamilelik-fizyoterapisi-kadikoy",
    "servisAdi": "Hamilelik Fizyoterapisi",
    "breadcrumbAdi": "Hamilelik Fizyoterapisi",
    "odakKelime": "Kadıköy hamilelik fizyoterapisi",
    "gorsel": "/assets/kart-hamilelik-fizyoterapisi-kadikoy.jpg",
    "gorselAlt": "Kadıköy Hamilelik Fizyoterapisi bilgi kartı: gebelik dönemi egzersiz programı, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Kadıköy hamilelik fizyoterapisi için bilgi almak istiyorum.",
    "teklif": {
      "kimIcin": "Takibi yürüten hekiminin onayını almış, gebeliğin herhangi bir döneminde olan kişiler",
      "neIcin": "Gebelikte bel ve kasık ağrısı, duruş zorlanmaları ve doğuma hazırlık",
      "neYapilir": "Hekim onayı çerçevesinde, gebelik haftasına göre uyarlanan değerlendirme ve kişiye özel program"
    },
    "guvenMaddeleri": [
      "Çalışma, takibi yürüten hekimin onayı alındıktan sonra başlar",
      "Değerlendirmede ne yapılacağı önceden anlatılır, onayınız alınır",
      "Görüşmeye yanınızda bir yakınınızla gelebilirsiniz"
    ],
    "araCtaBaslik": "Sorularınızı randevu almadan da sorabilirsiniz",
    "araCtaMetin": "Gebelik haftanıza uygun olup olmadığını ve sürecin nasıl ilerlediğini konuşmak için önce yazabilirsiniz.",
    "konumMetni": "Klinik, Kadıköy Kozyata\u011f\u0131'nda Gülbahar Sokak üzerindedir. Ataşehir, Bostancı, Erenköy, Suadiye ve Göztepe çevresinden ulaşım kolaydır. Görüşmeler randevu ile yapılır.",
    "ilgiliBaglantilar": [
      { "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi", "label": "Fizik tedavi kliniği hizmetleri" },
      { "to": "/dogum-sonrasi-fizyoterapi-kadikoy", "label": "Doğum sonrası fizyoterapi" }
    ],
    "icerikModul": "hizmetContent",
    "icerikAdi": "hamilelikFizyoterapisiIcerik"
  },
  {
    "slug": "erkek-pelvik-taban-kadikoy",
    "servisAdi": "Erkeklerde Pelvik Taban Rehabilitasyonu",
    "breadcrumbAdi": "Erkeklerde Pelvik Taban Rehabilitasyonu",
    "odakKelime": "Kadıköy erkek pelvik taban fizyoterapisi",
    "gorsel": "/assets/kart-erkek-pelvik-taban-kadikoy.jpg",
    "gorselAlt": "Kadıköy Erkek Pelvik Taban Fizyoterapisi bilgi kartı: erkeklerde pelvik taban rehabilitasyonu, Kozyatağı Kadıköy, Kadıköy Fizyoterapist Onur Yalçın",
    "waMesaj": "Merhaba, Kadıköy erkek pelvik taban fizyoterapisi için bilgi almak istiyorum.",
    "teklif": {
      "kimIcin": "Hekim tanısı ve yönlendirmesiyle gelen erkek danışanlar",
      "neIcin": "Prostat cerrahisi sonrası dönem, leğen bölgesinde süregelen ağrı ve pelvik taban işlev bozuklukları",
      "neYapilir": "Onayınızla yürütülen değerlendirme sonrası, hekim tanısı çerçevesinde planlanan kişiye özel program"
    },
    "guvenMaddeleri": [
      "Ne yapılacağı önceden anlatılır, onayınız her aşamada geri alınabilir",
      "Görüşmeye yanınızda bir yakınınızla gelebilirsiniz",
      "Program hekim tanısı ve yönlendirmesi çerçevesinde planlanır"
    ],
    "araCtaBaslik": "Sorularınızı randevu almadan da sorabilirsiniz",
    "araCtaMetin": "Sürecin nasıl ilerlediğini ve size uygun olup olmadığını konuşmak için önce yazabilirsiniz. Ayrıntı paylaşmak zorunda değilsiniz.",
    "konumMetni": "Klinik, Kadıköy Kozyatağı'nda Gülbahar Sokak üzerindedir. Ataşehir, Bostancı, Erenköy, Suadiye ve Göztepe çevresinden ulaşım kolaydır. Görüşmeler randevu ile yapılır.",
    "ilgiliBaglantilar": [
      { "to": "/idrar-kacirma-kadikoy", "label": "İdrar kaçırma fizyoterapisi" },
      { "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy", "label": "Ameliyat sonrası rehabilitasyon" },
      { "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi", "label": "Rehabilitasyon hizmetleri" },
      { "to": "/blog/erkeklerde-pelvik-taban-sorunlari", "label": "Erkeklerde pelvik taban yazısı" }
    ],
    "icerikModul": "hizmetContent",
    "icerikAdi": "erkekPelvikTabanIcerik"
  },
  {
      "slug": "ayak-bilegi-burkulmasi-topuk-dikeni-kadikoy",
      "servisAdi": "Ayak Bileği Burkulması ve Topuk Dikeni",
      "breadcrumbAdi": "Ayak Bileği Burkulması ve Topuk Dikeni",
      "odakKelime": "Kadıköy ayak bileği burkulması rehabilitasyonu",
      "gorsel": "/assets/kart-ayak-bilegi-burkulmasi-topuk-dikeni-kadikoy.jpg",
      "gorselAlt": "Ayak Bileği Burkulması ve Topuk Dikeni bilgi kartı: ayak bileği burkulması ve topuk dikeni, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, ayak bileği burkulması veya topuk ağrım için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Ayak bileği ve topuk şikâyetinizi birlikte değerlendirelim",
      "araCtaMetin": "Burkulma sonrası eklemine güvenemiyorsanız ya da sabah ilk adımlarda topuğunuz ağrıyorsa Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, şikâyetin nasıl başladığını ve ayağın yürürken nasıl çalıştığını anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/blog/duz-tabanlik-ve-ayak-agrilari",
              "label": "Düz tabanlık ve ayak ağrıları"
          },
          {
              "to": "/spor-yaralanmalari-kadikoy",
              "label": "Kadıköy spor yaralanmaları fizyoterapisi"
          },
          {
              "to": "/diz-agrisi-rehabilitasyonu-kadikoy",
              "label": "Kadıköy diz ağrısı fizyoterapisi"
          },
          {
              "to": "/blog/on-capraz-bag-ocb-sporcu-yaralanmalari",
              "label": "Ön çapraz bağ ve sporcu yaralanmaları"
          },
          {
              "to": "/ortopedik-rehabilitasyon-kadikoy",
              "label": "Kadıköy ortopedik rehabilitasyon"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi",
              "label": "Rehabilitasyon merkezi yaklaşımı"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          }
      ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "ayakBilegiBurkulmasiTopukDikeniIcerik"
  },
  {
      "slug": "bas-agrisi-migren-fizyoterapisi-kadikoy",
      "servisAdi": "Baş Ağrısı ve Migren",
      "breadcrumbAdi": "Baş Ağrısı ve Migren",
      "odakKelime": "Kadıköy baş ağrısı fizyoterapisi",
      "gorsel": "/assets/kart-bas-agrisi-migren-fizyoterapisi-kadikoy.jpg",
      "gorselAlt": "Baş Ağrısı ve Migren bilgi kartı: baş ağrısı ve migren, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, baş ağrısı ve boyun gerginliği şikâyetlerim için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Baş ağrınızın boyun ve çene ile ilişkisini birlikte değerlendirelim",
      "araCtaMetin": "Baş ağrınız ense gerginliği, uzun süreli ekran başı çalışma ya da çene sıkma ile birlikte seyrediyorsa Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, ağrının nerede başladığını ve hangi hareketle değiştiğini anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/boyun-fitigi-kadikoy",
              "label": "Kadıköy boyun fıtığı fizyoterapisi"
          },
          {
              "to": "/cene-eklemi-tme-kadikoy",
              "label": "Kadıköy çene eklemi (TME) fizyoterapisi"
          },
          {
              "to": "/blog/cene-eklemi-tme-tedavisi",
              "label": "Çene eklemi (TME) tedavisi"
          },
          {
              "to": "/blog/boyun-fitigi-boyun-duzlesmesi-ve-kurek-kemigi-agrisi",
              "label": "Boyun fıtığı, boyun düzleşmesi ve kürek kemiği ağrısı"
          },
          {
              "to": "/ofis-calisanlari-fizyoterapi-kadikoy",
              "label": "Kadıköy ofis çalışanları fizyoterapisi"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi",
              "label": "Fizik tedavi kliniği"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          }
      ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "basAgrisiMigrenFizyoterapisiIcerik"
  },
  {
      "slug": "butuncul-fizyoterapi-degerlendirme-kadikoy",
      "servisAdi": "Bütüncül Fizyoterapi, Değerlendirme ve Muayene",
      "breadcrumbAdi": "Bütüncül Fizyoterapi ve Değerlendirme",
      "odakKelime": "Kadıköy bütüncül fizyoterapi",
      "gorsel": "/assets/kart-butuncul-fizyoterapi-degerlendirme-kadikoy.jpg",
      "gorselAlt": "Bütüncül Fizyoterapi, Değerlendirme ve Muayene bilgi kartı: bütüncül fizyoterapi, değerlendirme ve muayene, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, bütüncül fizyoterapi değerlendirmesi için ilk seans randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Şikâyetinizi bütün olarak değerlendirelim",
      "araCtaMetin": "Şikâyetiniz birden fazla bölgeye yayılıyorsa ya da nereden başlayacağınızı bilmiyorsanız Kozyatağı'ndaki klinikten ilk seans için randevu alabilirsiniz. Süreç, öykünüzün dinlenmesi ve hareketlerinizin ayrıntılı incelenmesiyle başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/manuel-terapi-kadikoy",
              "label": "Kadıköy manuel terapi"
          },
          {
              "to": "/egzersiz-terapisi-ev-programi-kadikoy",
              "label": "Kadıköy egzersiz terapisi ve ev programı"
          },
          {
              "to": "/ofis-calisanlari-fizyoterapi-kadikoy",
              "label": "Kadıköy ofis çalışanları fizyoterapisi"
          },
          {
              "to": "/kozyatagi-fizyoterapist",
              "label": "Kozyatağı fizyoterapist"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi",
              "label": "Fizik tedavi kliniği"
          },
          {
              "to": "/blog/bel-agrisi-ve-bel-fitigi",
              "label": "Bel ağrısı ve bel fıtığı"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          },
      { "to": "/fibromiyalji-kronik-agri-kadikoy", "label": "Fibromiyalji ve Kronik Ağrı Yönetimi" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "butunculFizyoterapiDegerlendirmeIcerik"
  },
  {
      "slug": "diz-agrisi-rehabilitasyonu-kadikoy",
      "servisAdi": "Diz Ağrısı ve Diz Rehabilitasyonu",
      "breadcrumbAdi": "Diz Ağrısı ve Diz Rehabilitasyonu",
      "odakKelime": "Kadıköy diz ağrısı fizyoterapisi",
      "gorsel": "/assets/kart-diz-agrisi-rehabilitasyonu-kadikoy.jpg",
      "gorselAlt": "Diz Ağrısı ve Diz Rehabilitasyonu bilgi kartı: diz ağrısı ve diz rehabilitasyonu, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, diz ağrım ve diz hareketlerimdeki zorlanma için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Diz şikâyetinizi birlikte değerlendirelim",
      "araCtaMetin": "Merdiven çıkarken, çömelirken ya da yürürken dizinizde ağrı veya güvensizlik hissediyorsanız Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, ağrının hangi hareketle ve dizin hangi bölgesinde ortaya çıktığını anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/spor-yaralanmalari-kadikoy",
              "label": "Kadıköy spor yaralanmaları fizyoterapisi"
          },
          {
              "to": "/blog/on-capraz-bag-ocb-sporcu-yaralanmalari",
              "label": "Ön çapraz bağ (ÖÇB) ve sporcu yaralanmaları"
          },
          {
              "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy",
              "label": "Kadıköy ameliyat sonrası rehabilitasyon"
          },
          {
              "to": "/blog/ameliyat-sonrasi-fizik-tedavi",
              "label": "Ameliyat sonrası fizik tedavi"
          },
          {
              "to": "/ortopedik-rehabilitasyon-kadikoy",
              "label": "Kadıköy ortopedik rehabilitasyon"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi",
              "label": "Rehabilitasyon yaklaşımı"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          },
      { "to": "/ayak-bilegi-burkulmasi-topuk-dikeni-kadikoy", "label": "Ayak Bileği Burkulması ve Topuk Dikeni" },
      { "to": "/sporcu-performans-degerlendirmesi-kadikoy", "label": "Sporcu Performans Değerlendirmesi" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "dizAgrisiRehabilitasyonuIcerik"
  },
  {
      "slug": "durus-bozuklugu-kifoz-lordoz-kadikoy",
      "servisAdi": "Duruş Bozukluğu, Kifoz ve Lordoz",
      "breadcrumbAdi": "Duruş Bozukluğu, Kifoz ve Lordoz",
      "odakKelime": "Kadıköy duruş bozukluğu fizyoterapisi",
      "gorsel": "/assets/kart-durus-bozuklugu-kifoz-lordoz-kadikoy.jpg",
      "gorselAlt": "Duruş Bozukluğu, Kifoz ve Lordoz bilgi kartı: duruş bozukluğu, kifoz ve lordoz, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, duruş bozukluğu, kifoz veya lordoz şikâyetim için postür değerlendirmesi randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Duruşunuzu birlikte değerlendirelim",
      "araCtaMetin": "Omuzlarınızın öne düştüğünü, sırtınızın yuvarlaklaştığını ya da bel çukurunun arttığını düşünüyorsanız Kozyatağı'ndaki klinikten postür değerlendirmesi için randevu alabilirsiniz. Süreç, duruşun nedenini anlamak için ayrıntılı bir gözlem ve hareket incelemesiyle başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/skolyoz-schroth-kadikoy",
              "label": "Kadıköy skolyoz ve Schroth yaklaşımı"
          },
          {
              "to": "/blog/schroth-metodu-skolyoz",
              "label": "Schroth metodu ve skolyoz"
          },
          {
              "to": "/klinik-pilates-kadikoy",
              "label": "Kadıköy klinik pilates"
          },
          {
              "to": "/ofis-calisanlari-fizyoterapi-kadikoy",
              "label": "Kadıköy ofis çalışanları fizyoterapisi"
          },
          {
              "to": "/pediatrik-fizyoterapi-bobath-kadikoy",
              "label": "Kadıköy pediatrik fizyoterapi"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi",
              "label": "Fizik tedavi kliniği yaklaşımı"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          },
      { "to": "/mat-pilates-core-kuvvetlendirme-kadikoy", "label": "Mat Pilates ve Core Kuvvetlendirme" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "durusBozukluguKifozLordozIcerik"
  },
  {
      "slug": "egzersiz-terapisi-ev-programi-kadikoy",
      "servisAdi": "Egzersiz Terapisi, Ev Programı ve Online Danışmanlık",
      "breadcrumbAdi": "Egzersiz Terapisi ve Ev Programı",
      "odakKelime": "Kadıköy egzersiz terapisi",
      "gorsel": "/assets/kart-egzersiz-terapisi-ev-programi-kadikoy.jpg",
      "gorselAlt": "Egzersiz Terapisi, Ev Programı ve Online Danışmanlık bilgi kartı: egzersiz terapisi, ev programı ve online danışmanlık, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, kişiye özel egzersiz programı ve ev egzersizleri için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Egzersiz programınızı bulgularınıza göre planlayalım",
      "araCtaMetin": "Evde ne yapacağınızı bilmiyorsanız ya da internetten bulduğunuz hareketlerden emin değilseniz Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Program, hareketlerinizin ve gününüzün incelenmesinin ardından kişiye göre kurulur.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/klinik-pilates-kadikoy",
              "label": "Kadıköy klinik pilates"
          },
          {
              "to": "/blog/yoga-terapi",
              "label": "Yoga terapi"
          },
          {
              "to": "/butuncul-fizyoterapi-degerlendirme-kadikoy",
              "label": "Kadıköy bütüncül fizyoterapi ve değerlendirme"
          },
          {
              "to": "/fibromiyalji-kronik-agri-kadikoy",
              "label": "Kadıköy fibromiyalji ve kronik ağrı yönetimi"
          },
          {
              "to": "/blog/bel-agrisi-ve-bel-fitigi",
              "label": "Bel ağrısı ve bel fıtığı"
          },
          {
              "to": "/mat-pilates-core-kuvvetlendirme-kadikoy",
              "label": "Kadıköy mat pilates ve core kuvvetlendirme"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi",
              "label": "Fizik tedavi kliniği yaklaşımı"
          },
      { "to": "/geriatrik-fizyoterapi-osteoporoz-kadikoy", "label": "Geriatrik Fizyoterapi ve Osteoporoz Egzersizi" },
      { "to": "/lenfodem-manuel-lenf-drenaji-kadikoy", "label": "Lenfödem ve Manuel Lenf Drenajı" },
      { "to": "/manuel-terapi-kadikoy", "label": "Manuel Terapi ve Mobilizasyon" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "egzersizTerapisiEvProgramiIcerik"
  },
  {
      "slug": "fibromiyalji-kronik-agri-kadikoy",
      "servisAdi": "Fibromiyalji ve Kronik Ağrı Yönetimi",
      "breadcrumbAdi": "Fibromiyalji ve Kronik Ağrı Yönetimi",
      "odakKelime": "Kadıköy fibromiyalji fizyoterapisi",
      "gorsel": "/assets/kart-fibromiyalji-kronik-agri-kadikoy.jpg",
      "gorselAlt": "Fibromiyalji ve Kronik Ağrı Yönetimi bilgi kartı: fibromiyalji ve kronik ağrı yönetimi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, fibromiyalji ve yaygın kronik ağrı şikâyetlerim için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Yaygın ağrınızı birlikte değerlendirelim",
      "araCtaMetin": "Vücudun birçok bölgesinde süren ağrı, yorgunluk ve bozulan uyku düzeni günlük hayatı zorluyorsa Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, ağrının gün içindeki seyrini ve neleri zorlaştırdığını dinlemekle başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/klinik-pilates-kadikoy",
              "label": "Kadıköy klinik pilates"
          },
          {
              "to": "/blog/yoga-terapi",
              "label": "Yoga terapi"
          },
          {
              "to": "/egzersiz-terapisi-ev-programi-kadikoy",
              "label": "Kadıköy egzersiz terapisi ve ev programı"
          },
          {
              "to": "/miyofasyal-agri-kinesio-bantlama-kadikoy",
              "label": "Kadıköy miyofasyal ağrı tedavisi"
          },
          {
              "to": "/butuncul-fizyoterapi-degerlendirme-kadikoy",
              "label": "Kadıköy bütüncül fizyoterapi"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi",
              "label": "Fizik tedavi kliniği yaklaşımı"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          }
      ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "fibromiyaljiKronikAgriIcerik"
  },
  {
      "slug": "geriatrik-fizyoterapi-osteoporoz-kadikoy",
      "servisAdi": "Geriatrik Fizyoterapi ve Osteoporoz Egzersizi",
      "breadcrumbAdi": "Geriatrik Fizyoterapi ve Osteoporoz",
      "odakKelime": "Kadıköy geriatrik fizyoterapi",
      "gorsel": "/assets/kart-geriatrik-fizyoterapi-osteoporoz-kadikoy.jpg",
      "gorselAlt": "Geriatrik Fizyoterapi ve Osteoporoz Egzersizi bilgi kartı: geriatrik fizyoterapi ve osteoporoz egzersizi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, denge, düşme önleme ve osteoporoz egzersizi için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Hareket güvenini birlikte değerlendirelim",
      "araCtaMetin": "Kendiniz ya da yakınınız için denge, kas gücü veya osteoporoz egzersizi konusunda değerlendirme randevusu alabilirsiniz. Süreç, günlük yaşamda hangi hareketlerin zorlandığını anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/blog/parkinson-ve-denge",
              "label": "Parkinson ve denge"
          },
          {
              "to": "/norolojik-rehabilitasyon-kadikoy",
              "label": "Kadıköy nörolojik rehabilitasyon"
          },
          {
              "to": "/blog/felc-inme-rehabilitasyonu",
              "label": "Felç ve inme rehabilitasyonu"
          },
          {
              "to": "/egzersiz-terapisi-ev-programi-kadikoy",
              "label": "Kadıköy egzersiz terapisi ve ev programı"
          },
          {
              "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy",
              "label": "Kadıköy ameliyat sonrası rehabilitasyon"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi",
              "label": "Rehabilitasyon yaklaşımımız"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          },
      { "to": "/solunum-fizyoterapisi-kadikoy", "label": "Solunum Fizyoterapisi" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "geriatrikFizyoterapiOsteoporozIcerik"
  },
  {
      "slug": "kalca-agrisi-fizyoterapisi-kadikoy",
      "servisAdi": "Kalça Ağrısı Fizyoterapisi",
      "breadcrumbAdi": "Kalça Ağrısı Fizyoterapisi",
      "odakKelime": "Kadıköy kalça ağrısı fizyoterapisi",
      "gorsel": "/assets/kart-kalca-agrisi-fizyoterapisi-kadikoy.jpg",
      "gorselAlt": "Kalça Ağrısı Fizyoterapisi bilgi kartı: kalça ağrısı fizyoterapisi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, kalça ağrım için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Kalça şikâyetinizi birlikte değerlendirelim",
      "araCtaMetin": "Yürürken, merdiven çıkarken ya da yan yatarken artan kalça ağrısı için Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, ağrının hangi hareketle ve hangi bölgede ortaya çıktığını anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/bel-fitigi-kadikoy",
              "label": "Kadıköy bel fıtığı fizyoterapisi"
          },
          {
              "to": "/blog/siyatik-ve-sinir-sikismasi",
              "label": "Siyatik ve sinir sıkışması"
          },
          {
              "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy",
              "label": "Kadıköy ameliyat sonrası rehabilitasyon"
          },
          {
              "to": "/klinik-pilates-kadikoy",
              "label": "Kadıköy klinik pilates"
          },
          {
              "to": "/ortopedik-rehabilitasyon-kadikoy",
              "label": "Kadıköy ortopedik rehabilitasyon"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi",
              "label": "Rehabilitasyon merkezi yaklaşımı"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          }
      ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "kalcaAgrisiFizyoterapisiIcerik"
  },
  {
      "slug": "karpal-tunel-tenisci-dirsegi-kadikoy",
      "servisAdi": "Karpal Tünel ve Tenisçi Dirseği",
      "breadcrumbAdi": "Karpal Tünel ve Tenisçi Dirseği",
      "odakKelime": "Kadıköy karpal tünel fizyoterapisi",
      "gorsel": "/assets/kart-karpal-tunel-tenisci-dirsegi-kadikoy.jpg",
      "gorselAlt": "Karpal Tünel ve Tenisçi Dirseği bilgi kartı: karpal tünel ve tenisçi dirseği, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, el bileği, dirsek ve önkol yakınmalarım için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Bilek ve dirsek yakınmalarınızı birlikte değerlendirelim",
      "araCtaMetin": "Elinizde uyuşma, bilekte sızı ya da dirsek dış veya iç yüzünde ağrı varsa Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, yakınmanın hangi hareketle ve günün hangi saatinde belirginleştiğini anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/ofis-calisanlari-fizyoterapi-kadikoy",
              "label": "Kadıköy ofis çalışanları fizyoterapisi"
          },
          {
              "to": "/boyun-fitigi-kadikoy",
              "label": "Kadıköy boyun fıtığı fizyoterapisi"
          },
          {
              "to": "/omuz-agrisi-donuk-omuz-kadikoy",
              "label": "Kadıköy omuz ağrısı fizyoterapisi"
          },
          {
              "to": "/miyofasyal-agri-kinesio-bantlama-kadikoy",
              "label": "Kadıköy miyofasyal ağrı tedavisi"
          },
          {
              "to": "/blog/siyatik-ve-sinir-sikismasi",
              "label": "Siyatik ve sinir sıkışması"
          },
          {
              "to": "/blog/boyun-fitigi-boyun-duzlesmesi-ve-kurek-kemigi-agrisi",
              "label": "Boyun fıtığı, boyun düzleşmesi ve kürek kemiği ağrısı"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi",
              "label": "Fizik tedavi kliniği yaklaşımı"
          }
      ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "karpalTunelTenisciDirsegiIcerik"
  },
  {
      "slug": "lenfodem-manuel-lenf-drenaji-kadikoy",
      "servisAdi": "Lenfödem ve Manuel Lenf Drenajı",
      "breadcrumbAdi": "Lenfödem ve Manuel Lenf Drenajı",
      "odakKelime": "Kadıköy manuel lenf drenajı",
      "gorsel": "/assets/kart-lenfodem-manuel-lenf-drenaji-kadikoy.jpg",
      "gorselAlt": "Lenfödem ve Manuel Lenf Drenajı bilgi kartı: lenfödem ve manuel lenf drenajı, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, lenfödem veya ameliyat sonrası şişlik şikâyetim için manuel lenf drenajı değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Şişlik şikâyetinizi birlikte değerlendirelim",
      "araCtaMetin": "Kolunuzda ya da bacağınızda süren bir şişlik varsa, hekim raporunuzla birlikte Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, şişliğin ne zaman ve hangi olaydan sonra başladığını anlamakla açılır.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy",
              "label": "Kadıköy ameliyat sonrası rehabilitasyon"
          },
          {
              "to": "/blog/ameliyat-sonrasi-fizik-tedavi",
              "label": "Ameliyat sonrası fizik tedavi"
          },
          {
              "to": "/manuel-terapi-kadikoy",
              "label": "Kadıköy manuel terapi"
          },
          {
              "to": "/solunum-fizyoterapisi-kadikoy",
              "label": "Kadıköy solunum fizyoterapisi"
          },
          {
              "to": "/egzersiz-terapisi-ev-programi-kadikoy",
              "label": "Kadıköy egzersiz terapisi ve ev programı"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi",
              "label": "Rehabilitasyon merkezi yaklaşımı"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          }
      ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "lenfodemManuelLenfDrenajiIcerik"
  },
  {
      "slug": "manuel-terapi-kadikoy",
      "servisAdi": "Manuel Terapi ve Mobilizasyon",
      "breadcrumbAdi": "Manuel Terapi ve Mobilizasyon",
      "odakKelime": "Kadıköy manuel terapi",
      "gorsel": "/assets/kart-manuel-terapi-kadikoy.jpg",
      "gorselAlt": "Manuel Terapi ve Mobilizasyon bilgi kartı: manuel terapi ve mobilizasyon, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, eklem sertliği ve hareket kısıtlılığı şikâyetlerim için manuel terapi değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Hareket kısıtlılığınızı birlikte değerlendirelim",
      "araCtaMetin": "Boyun, bel, omuz ya da çene bölgesinde hareketin sınırlandığını hissediyorsanız Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Elle uygulama kararı, ancak ayrıntılı bir değerlendirmenin ardından verilir.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/bel-fitigi-kadikoy",
              "label": "Kadıköy bel fıtığı fizyoterapisi"
          },
          {
              "to": "/boyun-fitigi-kadikoy",
              "label": "Kadıköy boyun fıtığı fizyoterapisi"
          },
          {
              "to": "/cene-eklemi-tme-kadikoy",
              "label": "Kadıköy çene eklemi (TME) fizyoterapisi"
          },
          {
              "to": "/visseral-terapi-kadikoy",
              "label": "Kadıköy visseral terapi"
          },
          {
              "to": "/egzersiz-terapisi-ev-programi-kadikoy",
              "label": "Kadıköy egzersiz terapisi ve ev programı"
          },
          {
              "to": "/blog/bel-agrisi-ve-bel-fitigi",
              "label": "Bel ağrısı ve bel fıtığı"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-uzmani",
              "label": "Fizik tedavi yaklaşımları kategorisi"
          },
      { "to": "/butuncul-fizyoterapi-degerlendirme-kadikoy", "label": "Bütüncül Fizyoterapi, Değerlendirme ve Muayene" },
      { "to": "/lenfodem-manuel-lenf-drenaji-kadikoy", "label": "Lenfödem ve Manuel Lenf Drenajı" },
      { "to": "/miyofasyal-agri-kinesio-bantlama-kadikoy", "label": "Miyofasyal Ağrı, Tetik Nokta ve Kinesio Bantlama" },
      { "to": "/spor-masaji-klinik-masaj-kadikoy", "label": "Spor Masajı ve Klinik Masaj" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "manuelTerapiIcerik"
  },
  {
      "slug": "mat-pilates-core-kuvvetlendirme-kadikoy",
      "servisAdi": "Mat Pilates ve Core Kuvvetlendirme",
      "breadcrumbAdi": "Mat Pilates ve Core Kuvvetlendirme",
      "odakKelime": "Kadıköy mat pilates",
      "gorsel": "/assets/kart-mat-pilates-core-kuvvetlendirme-kadikoy.jpg",
      "gorselAlt": "Mat Pilates ve Core Kuvvetlendirme bilgi kartı: mat pilates ve core kuvvetlendirme, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, mat pilates ve core kuvvetlendirme programı için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Gövde kontrolünüzü birlikte değerlendirelim",
      "araCtaMetin": "Core kuvvetlendirme ve mat pilates programına başlamadan önce Kozyatağı'ndaki klinikte hareket kaliteniz ayrıntılı biçimde değerlendirilebilir. Program, bu değerlendirmenin bulgularına göre kişiye özel planlanır.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/klinik-pilates-kadikoy",
              "label": "Kadıköy klinik pilates"
          },
          {
              "to": "/blog/klinik-pilates",
              "label": "Klinik pilates nedir"
          },
          {
              "to": "/bel-fitigi-kadikoy",
              "label": "Kadıköy bel fıtığı fizyoterapisi"
          },
          {
              "to": "/durus-bozuklugu-kifoz-lordoz-kadikoy",
              "label": "Kadıköy duruş bozukluğu fizyoterapisi"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/pilates-salonu",
              "label": "Pilates salonu yaklaşımı"
          },
          {
              "to": "/blog/bel-agrisi-ve-bel-fitigi",
              "label": "Bel ağrısı ve bel fıtığı"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          },
      { "to": "/egzersiz-terapisi-ev-programi-kadikoy", "label": "Egzersiz Terapisi, Ev Programı ve Online Danışmanlık" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "matPilatesCoreKuvvetlendirmeIcerik"
  },
  {
      "slug": "miyofasyal-agri-kinesio-bantlama-kadikoy",
      "servisAdi": "Miyofasyal Ağrı, Tetik Nokta ve Kinesio Bantlama",
      "breadcrumbAdi": "Miyofasyal Ağrı ve Kinesio Bantlama",
      "odakKelime": "Kadıköy miyofasyal ağrı tedavisi",
      "gorsel": "/assets/kart-miyofasyal-agri-kinesio-bantlama-kadikoy.jpg",
      "gorselAlt": "Miyofasyal Ağrı, Tetik Nokta ve Kinesio Bantlama bilgi kartı: miyofasyal ağrı, tetik nokta ve kinesio bantlama, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, kas ve fasya kaynaklı ağrım, tetik nokta şikâyetim ve kinesio bantlama için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Kas ve fasya kaynaklı ağrınızı birlikte değerlendirelim",
      "araCtaMetin": "Dokunulduğunda belirli bir noktası sızlayan, hareketle ya da uzun oturmayla artan kas ağrınız varsa Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, ağrının hangi hareketle ve hangi bölgede ortaya çıktığını anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/manuel-terapi-kadikoy",
              "label": "Kadıköy manuel terapi"
          },
          {
              "to": "/omuz-agrisi-donuk-omuz-kadikoy",
              "label": "Kadıköy omuz ağrısı fizyoterapisi"
          },
          {
              "to": "/spor-yaralanmalari-kadikoy",
              "label": "Spor yaralanmaları fizyoterapisi"
          },
          {
              "to": "/ofis-calisanlari-fizyoterapi-kadikoy",
              "label": "Kadıköy ofis çalışanları fizyoterapisi"
          },
          {
              "to": "/blog/boyun-fitigi-boyun-duzlesmesi-ve-kurek-kemigi-agrisi",
              "label": "Boyun fıtığı, boyun düzleşmesi ve kürek kemiği ağrısı"
          },
          {
              "to": "/blog/bel-agrisi-ve-bel-fitigi",
              "label": "Bel ağrısı ve bel fıtığı"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi",
              "label": "Fizik tedavi kliniği yaklaşımı"
          },
      { "to": "/fibromiyalji-kronik-agri-kadikoy", "label": "Fibromiyalji ve Kronik Ağrı Yönetimi" },
      { "to": "/karpal-tunel-tenisci-dirsegi-kadikoy", "label": "Karpal Tünel ve Tenisçi Dirseği" },
      { "to": "/spor-masaji-klinik-masaj-kadikoy", "label": "Spor Masajı ve Klinik Masaj" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "miyofasyalAgriKinesioBantlamaIcerik"
  },
  {
      "slug": "omuz-agrisi-donuk-omuz-kadikoy",
      "servisAdi": "Omuz Ağrısı ve Donuk Omuz",
      "breadcrumbAdi": "Omuz Ağrısı ve Donuk Omuz",
      "odakKelime": "Kadıköy omuz ağrısı fizyoterapisi",
      "gorsel": "/assets/kart-omuz-agrisi-donuk-omuz-kadikoy.jpg",
      "gorselAlt": "Omuz Ağrısı ve Donuk Omuz bilgi kartı: omuz ağrısı ve donuk omuz, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, omuz ağrısı veya kol kaldırmada kısıtlılık şikâyetim için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Omuz şikâyetinizi birlikte değerlendirelim",
      "araCtaMetin": "Kolunuzu kaldırırken, saç tararken ya da gece yan yatarken omzunuz zorlanıyorsa Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, ağrının hangi harekette ve ne zaman ortaya çıktığını anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/boyun-fitigi-kadikoy",
              "label": "Kadıköy boyun fıtığı fizyoterapisi"
          },
          {
              "to": "/blog/boyun-fitigi-boyun-duzlesmesi-ve-kurek-kemigi-agrisi",
              "label": "Boyun fıtığı, boyun düzleşmesi ve kürek kemiği ağrısı"
          },
          {
              "to": "/ofis-calisanlari-fizyoterapi-kadikoy",
              "label": "Kadıköy ofis çalışanları fizyoterapisi"
          },
          {
              "to": "/spor-yaralanmalari-kadikoy",
              "label": "Kadıköy spor yaralanmaları fizyoterapisi"
          },
          {
              "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy",
              "label": "Kadıköy ameliyat sonrası rehabilitasyon"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/fizik-tedavi-klinigi",
              "label": "Kadıköy fizik tedavi kliniği"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          },
      { "to": "/karpal-tunel-tenisci-dirsegi-kadikoy", "label": "Karpal Tünel ve Tenisçi Dirseği" },
      { "to": "/miyofasyal-agri-kinesio-bantlama-kadikoy", "label": "Miyofasyal Ağrı, Tetik Nokta ve Kinesio Bantlama" },
      { "to": "/ortopedik-rehabilitasyon-kadikoy", "label": "Ortopedik Rehabilitasyon" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "omuzAgrisiDonukOmuzIcerik"
  },
  {
      "slug": "ortopedik-rehabilitasyon-kadikoy",
      "servisAdi": "Ortopedik Rehabilitasyon",
      "breadcrumbAdi": "Ortopedik Rehabilitasyon",
      "odakKelime": "Kadıköy ortopedik rehabilitasyon",
      "gorsel": "/assets/kart-ortopedik-rehabilitasyon-kadikoy.jpg",
      "gorselAlt": "Ortopedik Rehabilitasyon bilgi kartı: ortopedik rehabilitasyon, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, kırık, alçı, eklem protezi ya da bağ ve menisküs işlemi sonrası ortopedik rehabilitasyon için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Ortopedik sürecinizi cerrah protokolüyle birlikte planlayalım",
      "araCtaMetin": "Kırık, alçı, protez ya da bağ ve menisküs işlemi sonrasında hareketinizi güvenle geri kazanmak için Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Cerrahınızın verdiği kısıtlamalar ve talimatlar, planın başlangıç noktasıdır.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy",
              "label": "Kadıköy ameliyat sonrası rehabilitasyon"
          },
          {
              "to": "/spor-yaralanmalari-kadikoy",
              "label": "Kadıköy spor yaralanmaları fizyoterapisi"
          },
          {
              "to": "/diz-agrisi-rehabilitasyonu-kadikoy",
              "label": "Kadıköy diz ağrısı fizyoterapisi"
          },
          {
              "to": "/kalca-agrisi-fizyoterapisi-kadikoy",
              "label": "Kadıköy kalça ağrısı fizyoterapisi"
          },
          {
              "to": "/omuz-agrisi-donuk-omuz-kadikoy",
              "label": "Kadıköy omuz ağrısı fizyoterapisi"
          },
          {
              "to": "/blog/ameliyat-sonrasi-fizik-tedavi",
              "label": "Ameliyat sonrası fizik tedavi"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi",
              "label": "Rehabilitasyon yaklaşımımız"
          },
      { "to": "/ayak-bilegi-burkulmasi-topuk-dikeni-kadikoy", "label": "Ayak Bileği Burkulması ve Topuk Dikeni" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "ortopedikRehabilitasyonIcerik"
  },
  {
      "slug": "pediatrik-fizyoterapi-bobath-kadikoy",
      "servisAdi": "Pediatrik Fizyoterapi, Bobath (NDT) ve Duyu Bütünleme",
      "breadcrumbAdi": "Pediatrik Fizyoterapi ve Bobath (NDT)",
      "odakKelime": "Kadıköy pediatrik fizyoterapi",
      "gorsel": "/assets/kart-pediatrik-fizyoterapi-bobath-kadikoy.jpg",
      "gorselAlt": "Pediatrik Fizyoterapi, Bobath (NDT) ve Duyu Bütünleme bilgi kartı: pediatrik fizyoterapi, bobath (ndt) ve duyu bütünleme, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, çocuğumun motor gelişimi ve hareket becerileri için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Çocuğunuzun hareket gelişimini birlikte değerlendirelim",
      "araCtaMetin": "Çocuğunuzun oturma, yürüme, denge ya da duruşuyla ilgili bir sorunuz varsa Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, çocuğun gelişim öyküsünü ve günlük hareketlerini ailesiyle birlikte anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/blog/serebral-palsi-rehabilitasyonu",
              "label": "Serebral palsi rehabilitasyonu"
          },
          {
              "to": "/norolojik-rehabilitasyon-kadikoy",
              "label": "Kadıköy nörolojik rehabilitasyon"
          },
          {
              "to": "/durus-bozuklugu-kifoz-lordoz-kadikoy",
              "label": "Kadıköy duruş bozukluğu fizyoterapisi"
          },
          {
              "to": "/skolyoz-schroth-kadikoy",
              "label": "Kadıköy skolyoz ve Schroth egzersizleri"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi",
              "label": "Rehabilitasyon merkezi yaklaşımı"
          },
          {
              "to": "/kozyatagi-fizyoterapist",
              "label": "Kozyatağı fizyoterapist"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          }
      ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "pediatrikFizyoterapiBobathIcerik"
  },
  {
      "slug": "solunum-fizyoterapisi-kadikoy",
      "servisAdi": "Solunum Fizyoterapisi",
      "breadcrumbAdi": "Solunum Fizyoterapisi",
      "odakKelime": "Kadıköy solunum fizyoterapisi",
      "gorsel": "/assets/kart-solunum-fizyoterapisi-kadikoy.jpg",
      "gorselAlt": "Solunum Fizyoterapisi bilgi kartı: solunum fizyoterapisi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, nefes alma düzenim ve solunum egzersizleri için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Nefes düzeninizi birlikte değerlendirelim",
      "araCtaMetin": "Nefes alırken zorlanıyor, göğsünüzde sıkışma hissediyor ya da ameliyat sonrası solunum egzersizlerine ihtiyaç duyuyorsanız Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, nefesin nasıl kullanıldığını ve göğüs kafesinin nasıl hareket ettiğini anlamakla başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/skolyoz-schroth-kadikoy",
              "label": "Kadıköy skolyoz ve Schroth yöntemi"
          },
          {
              "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy",
              "label": "Kadıköy ameliyat sonrası rehabilitasyon"
          },
          {
              "to": "/geriatrik-fizyoterapi-osteoporoz-kadikoy",
              "label": "Kadıköy geriatrik fizyoterapi"
          },
          {
              "to": "/blog/ms-multipl-skleroz-fizyoterapi",
              "label": "MS ve fizyoterapi"
          },
          {
              "to": "/blog/ameliyat-sonrasi-fizik-tedavi",
              "label": "Ameliyat sonrası fizik tedavi"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi",
              "label": "Kadıköy rehabilitasyon merkezi"
          },
          {
              "to": "/iletisim",
              "label": "İletişim ve randevu"
          },
      { "to": "/lenfodem-manuel-lenf-drenaji-kadikoy", "label": "Lenfödem ve Manuel Lenf Drenajı" }
    ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "solunumFizyoterapisiIcerik"
  },
  {
      "slug": "spor-masaji-klinik-masaj-kadikoy",
      "servisAdi": "Spor Masajı ve Klinik Masaj",
      "breadcrumbAdi": "Spor Masajı ve Klinik Masaj",
      "odakKelime": "Kadıköy spor masajı",
      "gorsel": "/assets/kart-spor-masaji-klinik-masaj-kadikoy.jpg",
      "gorselAlt": "Spor Masajı ve Klinik Masaj bilgi kartı: spor masajı ve klinik masaj, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, kas gerginliği ve antrenman sonrası toparlanma için spor masajı ve klinik masaj değerlendirmesi randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Kas gerginliğinizi önce birlikte değerlendirelim",
      "araCtaMetin": "Antrenman sonrası geçmeyen sertlik ya da belirli bir kasta tekrarlayan gerginlik için Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Masaj, bulgulara göre planlanan programın bir parçası olarak ele alınır.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/spor-yaralanmalari-kadikoy",
              "label": "Kadıköy spor yaralanmaları fizyoterapisi"
          },
          {
              "to": "/sporcu-performans-degerlendirmesi-kadikoy",
              "label": "Kadıköy sporcu performans değerlendirmesi"
          },
          {
              "to": "/miyofasyal-agri-kinesio-bantlama-kadikoy",
              "label": "Kadıköy miyofasyal ağrı tedavisi"
          },
          {
              "to": "/manuel-terapi-kadikoy",
              "label": "Kadıköy manuel terapi"
          },
          {
              "to": "/blog/on-capraz-bag-ocb-sporcu-yaralanmalari",
              "label": "Ön çapraz bağ ve sporcu yaralanmaları"
          },
          {
              "to": "/blog/sporcu-kasik-agrisi-osteitis-pubis",
              "label": "Sporcu kasık ağrısı ve osteitis pubis"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/spor-masaj-terapisti",
              "label": "Spor masajı yaklaşımı"
          }
      ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "sporMasajiKlinikMasajIcerik"
  },
  {
      "slug": "sporcu-performans-degerlendirmesi-kadikoy",
      "servisAdi": "Sporcu Performans Değerlendirmesi",
      "breadcrumbAdi": "Sporcu Performans Değerlendirmesi",
      "odakKelime": "Kadıköy sporcu performans değerlendirmesi",
      "gorsel": "/assets/kart-sporcu-performans-degerlendirmesi-kadikoy.jpg",
      "gorselAlt": "Sporcu Performans Değerlendirmesi bilgi kartı: sporcu performans değerlendirmesi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın",
      "waMesaj": "Merhaba, spor performansım ve yaralanma riskim için değerlendirme randevusu almak istiyorum.",
      "guvenMaddeleri": [
          "İstanbul Üniversitesi Fizyoterapi ve Rehabilitasyon mezunu fizyoterapist",
          "Sertifikalı Schroth uygulayıcısı",
          "Erkek pelvik taban rehabilitasyonu, manuel terapi, klinik reformer pilates ve fasyal manipülasyon uygulamaları",
          "Değerlendirme sonrası kişiye özel planlanan program, ara kontrollerle güncellenir",
          "Kozyatağı metrosuna yürüme mesafesi, Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
          "İçerik bilgilendirme amaçlıdır; tanı ve tedavi kararı hekime aittir"
      ],
      "araCtaBaslik": "Hareketinizi sporunuza göre birlikte değerlendirelim",
      "araCtaMetin": "Antrenman düzeniniz, geçmiş yaralanmalarınız veya spora dönüş planınız için Kozyatağı'ndaki klinikten değerlendirme randevusu alabilirsiniz. Süreç, branşınızın gerektirdiği hareketlerin sağ ve sol tarafta nasıl yapıldığını gözlemlemekle başlar.",
      "konumMetni": "Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kozyatağı, Kadıköy, İstanbul. Kozyatağı metro istasyonuna yürüme mesafesinde. Randevu saatleri Pazartesi ile Cumartesi arası 09:00-21:00. Telefon: 0507 294 99 00.",
      "ilgiliBaglantilar": [
          {
              "to": "/spor-yaralanmalari-kadikoy",
              "label": "Kadıköy spor yaralanmaları fizyoterapisi"
          },
          {
              "to": "/blog/on-capraz-bag-ocb-sporcu-yaralanmalari",
              "label": "Ön çapraz bağ (ÖÇB) ve sporcu yaralanmaları"
          },
          {
              "to": "/blog/sporcu-kasik-agrisi-osteitis-pubis",
              "label": "Sporcu kasık ağrısı ve osteitis pubis"
          },
          {
              "to": "/spor-masaji-klinik-masaj-kadikoy",
              "label": "Kadıköy spor masajı ve klinik masaj"
          },
          {
              "to": "/diz-agrisi-rehabilitasyonu-kadikoy",
              "label": "Kadıköy diz ağrısı fizyoterapisi"
          },
          {
              "to": "/tedavi-yaklasimlarimiz/spor-masaj-terapisti",
              "label": "Spor masaj terapisti ve spor odaklı yaklaşım"
          },
          {
              "to": "/kozyatagi-fizyoterapist",
              "label": "Kozyatağı fizyoterapist"
          }
      ],
      "icerikModul": "hizmetContent",
      "icerikAdi": "sporcuPerformansDegerlendirmesiIcerik"
  },
]

export const getLandingBySlug = (slug) => landings.find((l) => l.slug === slug)

// İçerik modülleri: dinamik import ifadeleri Rollup'ın her modülü ayrı parçaya
// ayırabilmesi için burada sabit yazılır (değişkenle import edilemez).
const icerikModulleri = {
  landingContent: () => import('./landingContent.js'),
  hizmetContent: () => import('./hizmetContent.js'),
  bolgeContent: () => import('./bolgeContent.js'),
}

/** Sayfanın metinlerini (icerik nesnesi) tembel yükler. */
export async function landingIcerikYukle(landing) {
  const modul = await icerikModulleri[landing.icerikModul]()
  return modul[landing.icerikAdi]
}

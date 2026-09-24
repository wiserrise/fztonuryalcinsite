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
    ],
    icerikModul: 'landingContent',
    icerikAdi: 'skolyozSchrothIcerik',
  },
  {
    slug: 'pelvik-taban-kadikoy',
    reklam: true,
    servisAdi: 'Pelvik Taban Fizyoterapisi',
    breadcrumbAdi: 'Kadıköy Pelvik Taban Fizyoterapisi',
    odakKelime: 'Kadıköy pelvik taban fizyoterapisi',
    gorsel: '/assets/kart-pelvik-taban-kadikoy.jpg',
    gorselAlt: 'Kadıköy Pelvik Taban Fizyoterapisi bilgi kartı: pelvik taban fizyoterapisi, Kozyatağı Kadıköy, Fizyoterapist Onur Yalçın',
    waMesaj: 'Merhaba, Kadıköy pelvik taban fizyoterapisi için bilgi almak istiyorum.',
    teklif: {
      kimIcin: 'Hekim yönlendirmesiyle gelen kadın ve erkekler; doğum sonrası ve gebelik dönemindeki kişiler',
      neIcin: 'İdrar kaçırma, pelvik bölgede ağrı ve doğum sonrası gövde kontrolü gibi başlıklar',
      neYapilir: 'Onayınızla yürütülen değerlendirme sonrası, hekim tanısı çerçevesinde planlanan kişiye özel program',
    },
    // Bu sayfaya gelen kişinin ilk tereddüdü mahremiyet. Güven maddeleri bu yüzden
    // hizmet özelliği değil, sürecin nasıl yürüdüğü üzerine kuruldu.
    guvenMaddeleri: [
      'Değerlendirmede ne yapılacağı önceden anlatılır, onayınız alınır',
      'Görüşmeye yanınızda bir yakınınızla gelebilirsiniz',
      'Program hekim tanısı ve yönlendirmesi çerçevesinde planlanır',
    ],
    araCtaBaslik: 'Sorularınızı randevu almadan da sorabilirsiniz',
    araCtaMetin:
      'Sürecin nasıl ilerlediğini ve size uygun olup olmadığını konuşmak için önce yazabilirsiniz. Ayrıntı paylaşmak zorunda değilsiniz.',
    konumMetni:
      'Klinik, Kadıköy Kozyatağı’nda Gülbahar Sokak üzerindedir. Ataşehir, Bostancı, Erenköy, Suadiye ve Göztepe çevresinden ulaşım kolaydır. Görüşmeler randevu ile yapılır, bekleme salonunda yoğunluk oluşmayacak şekilde planlanır.',
    ilgiliBaglantilar: [
      { to: '/erkek-pelvik-taban-kadikoy', label: 'Erkeklerde pelvik taban' },
      { to: '/idrar-kacirma-kadikoy', label: 'İdrar kaçırma fizyoterapisi' },
      { to: '/hamilelik-fizyoterapisi-kadikoy', label: 'Hamilelik fizyoterapisi' },
      { to: '/dogum-sonrasi-fizyoterapi-kadikoy', label: 'Doğum sonrası fizyoterapi' },
      { to: '/klinik-pilates-kadikoy', label: 'Klinik pilates' },
      { to: '/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi', label: 'Rehabilitasyon hizmetleri' },
      { to: '/blog/kadin-erkek-pelvik-taban', label: 'Pelvik taban yazısı' },
    ],
    icerikModul: 'landingContent',
    icerikAdi: 'pelvikTabanIcerik',
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
        }
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
        "Manuel terapi, klinik reformer pilates, pelvik taban rehabilitasyonu ve fasyal manipülasyon uygulamaları tek noktada yürütülür.",
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
        }
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
        }
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
        }
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
        "Manuel terapi, klinik reformer pilates, pelvik taban rehabilitasyonu ve fasyal manipülasyon çalışmaları",
        "Süreç hekim onayı alındıktan sonra başlar; tanı ve tedavi kararı hekime aittir",
        "Değerlendirme sonrası kişiye özel planlanan, kademeli ilerleyen program",
        "Kozyatağı metro durağına yürüme mesafesinde klinik",
        "Pazartesi ile Cumartesi arası 09:00 ve 21:00 saatleri arasında randevu"
    ],
    "araCtaBaslik": "Değerlendirme için randevu oluşturun",
    "araCtaMetin": "Karın duvarı, pelvik taban ve bel bölgesindeki şikayetleriniz hekim onayı alındıktan sonra ayrıntılı biçimde değerlendirilir, program doğum biçiminize ve günlük yaşamınıza göre planlanır. Kozyatağı'ndaki klinik Pazartesi ve Cumartesi arası 09:00 ile 21:00 saatleri arasında randevu ile çalışır.",
    "konumMetni": "Kozyatağı, Gülbahar Sokak, Ege Yıldız Sitesi No:15, Kadıköy, İstanbul. Kozyatağı metro durağına yürüme mesafesinde. Randevu: Pazartesi ile Cumartesi arası 09:00 ile 21:00.",
    "ilgiliBaglantilar": [
        {
            "to": "/hamilelik-fizyoterapisi-kadikoy",
            "label": "Hamilelik fizyoterapisi"
        },
        {
            "to": "/idrar-kacirma-kadikoy",
            "label": "İdrar kaçırma fizyoterapisi"
        },
        {
            "to": "/pelvik-taban-kadikoy",
            "label": "Pelvik taban rehabilitasyonu"
        },
        {
            "to": "/blog/kadin-erkek-pelvik-taban",
            "label": "Kadın ve erkekte pelvik taban"
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
        }
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
        "Manuel terapi, klinik reformer pilates, pelvik taban rehabilitasyonu ve fasyal manipülasyon alanlarında çalışma",
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
        }
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
        "Manuel terapi, klinik reformer pilates, pelvik taban rehabilitasyonu ve fasyal manipülasyon uygulamaları",
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
            "to": "/pelvik-taban-kadikoy",
            "label": "Kadıköy pelvik taban rehabilitasyonu"
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
        }
    ],
    icerikModul: 'hizmetContent',
    icerikAdi: 'ofisCalisanlariFizyoterapiIcerik',
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
      "Manuel terapi, klinik reformer pilates, pelvik taban rehabilitasyonu ve fasyal manipülasyon uygulamaları",
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
      }
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
      "Manuel terapi, klinik reformer pilates, pelvik taban rehabilitasyonu ve fasyal manipülasyon uygulamaları",
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
        "to": "/pelvik-taban-kadikoy",
        "label": "Pelvik taban rehabilitasyonu"
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
      "kimIcin": "Hekim yönlendirmesiyle gelen, idrar kaçırma şikayeti olan kadın ve erkekler",
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
      { "to": "/pelvik-taban-kadikoy", "label": "Pelvik taban fizyoterapisi" },
      { "to": "/erkek-pelvik-taban-kadikoy", "label": "Erkeklerde pelvik taban" },
      { "to": "/dogum-sonrasi-fizyoterapi-kadikoy", "label": "Doğum sonrası fizyoterapi" },
      { "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi", "label": "Rehabilitasyon hizmetleri" },
      { "to": "/blog/kadin-erkek-pelvik-taban", "label": "Pelvik taban yazısı" }
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
      "neIcin": "Gebelikte bel ve kasık ağrısı, duruş zorlanmaları, pelvik taban farkındalığı ve doğuma hazırlık",
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
      { "to": "/pelvik-taban-kadikoy", "label": "Pelvik taban fizyoterapisi" },
      { "to": "/dogum-sonrasi-fizyoterapi-kadikoy", "label": "Doğum sonrası fizyoterapi" },
      { "to": "/idrar-kacirma-kadikoy", "label": "İdrar kaçırma fizyoterapisi" }
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
      { "to": "/pelvik-taban-kadikoy", "label": "Pelvik taban fizyoterapisi" },
      { "to": "/idrar-kacirma-kadikoy", "label": "İdrar kaçırma fizyoterapisi" },
      { "to": "/ameliyat-sonrasi-rehabilitasyon-kadikoy", "label": "Ameliyat sonrası rehabilitasyon" },
      { "to": "/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi", "label": "Rehabilitasyon hizmetleri" },
      { "to": "/blog/kadin-erkek-pelvik-taban", "label": "Pelvik taban yazısı" }
    ],
    "icerikModul": "hizmetContent",
    "icerikAdi": "erkekPelvikTabanIcerik"
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

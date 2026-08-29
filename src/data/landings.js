// Google Ads reklamlarının düştüğü hizmet sayfalarının yapılandırması.
//
// Sayfa metinleri landingContent.js dosyasındadır; burada yalnızca sayfayı
// çevreleyen sabitler (görsel, WhatsApp mesajı, iç bağlantılar, güven maddeleri)
// tutulur. Yeni bir reklam sayfası açmak için buraya bir kayıt eklemek yeterlidir:
// rota (App.jsx) ve sitemap girdisi bu listeden otomatik üretilir.

import { klinikPilatesIcerik, skolyozSchrothIcerik, pelvikTabanIcerik } from './landingContent.js'
import { kozyatagiIcerik, sahrayiceditIcerik, erenkoyIcerik, suadiyeIcerik, bostanciIcerik } from './bolgeContent.js'
import { belFitigiIcerik, boyunFitigiIcerik, norolojikRehabilitasyonIcerik, ameliyatSonrasiRehabilitasyonIcerik, dogumSonrasiFizyoterapiIcerik, ceneEklemiTmeIcerik, sporYaralanmalariIcerik, ofisCalisanlariFizyoterapiIcerik } from './hizmetContent.js'

export const landings = [
  {
    slug: 'klinik-pilates-kadikoy',
    servisAdi: 'Klinik Pilates',
    breadcrumbAdi: 'Kadıköy Klinik Pilates',
    // scripts/seo-check.mjs bu kelimenin URL, title, meta, H1 ve ilk cümlede
    // birebir geçtiğini doğrular.
    odakKelime: 'Kadıköy klinik pilates',
    gorsel: '/assets/service_pilates_1777414185694-D-Q3Xu1l.png',
    waMesaj: 'Merhaba, Kadıköy klinik pilates için randevu ve bilgi almak istiyorum.',
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
    icerik: klinikPilatesIcerik,
  },
  {
    slug: 'skolyoz-schroth-kadikoy',
    servisAdi: 'Skolyoz Fizyoterapisi (Schroth Metodu)',
    breadcrumbAdi: 'Kadıköy Skolyoz Fizyoterapisi',
    odakKelime: 'Kadıköy skolyoz fizyoterapisi',
    gorsel: '/assets/service_spine_1777414148222-DHpcF96f.png',
    waMesaj: 'Merhaba, Kadıköy skolyoz fizyoterapisi ve Schroth metodu için bilgi almak istiyorum.',
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
    icerik: skolyozSchrothIcerik,
  },
  {
    slug: 'pelvik-taban-kadikoy',
    servisAdi: 'Pelvik Taban Fizyoterapisi',
    breadcrumbAdi: 'Kadıköy Pelvik Taban Fizyoterapisi',
    odakKelime: 'Kadıköy pelvik taban fizyoterapisi',
    gorsel: '/assets/service_pelvis_1777414135511-D9MgfMHe.png',
    waMesaj: 'Merhaba, Kadıköy pelvik taban fizyoterapisi için bilgi almak istiyorum.',
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
      { to: '/sahrayicedit-fizyoterapist', label: 'Sahrayıcedit fizyoterapist' },
      { to: '/tedavi-yaklasimlarimiz/rehabilitasyon-merkezi', label: 'Rehabilitasyon hizmetleri' },
      { to: '/blog/kadin-erkek-pelvik-taban', label: 'Pelvik taban yazısı' },
      { to: '/klinik-pilates-kadikoy', label: 'Klinik pilates' },
      { to: '/hakkimda', label: 'Fizyoterapist hakkında' },
    ],
    icerik: pelvikTabanIcerik,
  },
  {
    "slug": "bel-fitigi-kadikoy",
    "servisAdi": "Bel Fıtığı Fizyoterapisi",
    "breadcrumbAdi": "Bel Fıtığı Fizyoterapisi",
    "odakKelime": "Kadıköy bel fıtığı fizyoterapisi",
    "gorsel": "/assets/service_spine_1777414148222-DHpcF96f.png",
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
    icerik: belFitigiIcerik,
  },
  {
    "slug": "boyun-fitigi-kadikoy",
    "servisAdi": "Boyun Fıtığı Fizyoterapisi",
    "breadcrumbAdi": "Boyun Fıtığı Fizyoterapisi",
    "odakKelime": "Kadıköy boyun fıtığı fizyoterapisi",
    "gorsel": "/assets/service_fascia_1777414111074-DajpwbWj.png",
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
    icerik: boyunFitigiIcerik,
  },
  {
    "slug": "norolojik-rehabilitasyon-kadikoy",
    "servisAdi": "Nörolojik Rehabilitasyon",
    "breadcrumbAdi": "Nörolojik Rehabilitasyon",
    "odakKelime": "Kadıköy nörolojik rehabilitasyon",
    "gorsel": "/assets/service_brain_1777414172516-CgYWeAD_.png",
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
    icerik: norolojikRehabilitasyonIcerik,
  },
  {
    "slug": "ameliyat-sonrasi-rehabilitasyon-kadikoy",
    "servisAdi": "Ameliyat Sonrası Rehabilitasyon",
    "breadcrumbAdi": "Ameliyat Sonrası Rehabilitasyon",
    "odakKelime": "Kadıköy ameliyat sonrası rehabilitasyon",
    "gorsel": "/assets/service_massage_1777414214813--M4NVrRI.png",
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
    icerik: ameliyatSonrasiRehabilitasyonIcerik,
  },
  {
    "slug": "dogum-sonrasi-fizyoterapi-kadikoy",
    "servisAdi": "Doğum Sonrası Fizyoterapi",
    "breadcrumbAdi": "Doğum Sonrası Fizyoterapi",
    "odakKelime": "Kadıköy doğum sonrası fizyoterapi",
    "gorsel": "/assets/service_pelvis_1777414135511-D9MgfMHe.png",
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
    icerik: dogumSonrasiFizyoterapiIcerik,
  },
  {
    "slug": "cene-eklemi-tme-kadikoy",
    "servisAdi": "Çene Eklemi (TME) Fizyoterapisi",
    "breadcrumbAdi": "Çene Eklemi (TME) Fizyoterapisi",
    "odakKelime": "Kadıköy çene eklemi fizyoterapisi",
    "gorsel": "/assets/service_jaw_1777414124523-DJBOEdbX.png",
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
    icerik: ceneEklemiTmeIcerik,
  },
  {
    "slug": "spor-yaralanmalari-kadikoy",
    "servisAdi": "Spor Yaralanmaları Rehabilitasyonu",
    "breadcrumbAdi": "Spor Yaralanmaları Rehabilitasyonu",
    "odakKelime": "Kadıköy spor yaralanmaları rehabilitasyonu",
    "gorsel": "/assets/service_lungs_1777414161253-Bzd3vuv0.png",
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
    icerik: sporYaralanmalariIcerik,
  },
  {
    "slug": "ofis-calisanlari-fizyoterapi-kadikoy",
    "servisAdi": "Ofis Çalışanları için Fizyoterapi",
    "breadcrumbAdi": "Ofis Çalışanları için Fizyoterapi",
    "odakKelime": "Kadıköy ofis çalışanları fizyoterapisi",
    "gorsel": "/assets/bright_spine_pelvis_bg_1777499565222-BelRaMM7.png",
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
    icerik: ofisCalisanlariFizyoterapiIcerik,
  },
  {
    "slug": "kozyatagi-fizyoterapist",
    "servisAdi": "Kozyatağı Fizyoterapist",
    "breadcrumbAdi": "Kozyatağı",
    "odakKelime": "Kozyatağı fizyoterapist",
    "gorsel": "/assets/service_spine_1777414148222-DHpcF96f.png",
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
    icerik: kozyatagiIcerik,
  },
  {
    "slug": "sahrayicedit-fizyoterapist",
    "servisAdi": "Sahrayıcedit Fizyoterapist",
    "breadcrumbAdi": "Sahrayıcedit",
    "odakKelime": "Sahrayıcedit fizyoterapist",
    "gorsel": "/assets/service_pelvis_1777414135511-D9MgfMHe.png",
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
    icerik: sahrayiceditIcerik,
  },
  {
    "slug": "erenkoy-fizyoterapist",
    "servisAdi": "Erenköy Fizyoterapist",
    "breadcrumbAdi": "Erenköy",
    "odakKelime": "Erenköy fizyoterapist",
    "gorsel": "/assets/service_jaw_1777414124523-DJBOEdbX.png",
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
    icerik: erenkoyIcerik,
  },
  {
    "slug": "suadiye-fizyoterapist",
    "servisAdi": "Suadiye Fizyoterapist",
    "breadcrumbAdi": "Suadiye",
    "odakKelime": "Suadiye fizyoterapist",
    "gorsel": "/assets/service_massage_1777414214813--M4NVrRI.png",
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
    icerik: suadiyeIcerik,
  },
  {
    "slug": "bostanci-fizyoterapist",
    "servisAdi": "Bostancı Fizyoterapist",
    "breadcrumbAdi": "Bostancı",
    "odakKelime": "Bostancı fizyoterapist",
    "gorsel": "/assets/service_brain_1777414172516-CgYWeAD_.png",
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
    icerik: bostanciIcerik,
  }
]

export const getLandingBySlug = (slug) => landings.find((l) => l.slug === slug)

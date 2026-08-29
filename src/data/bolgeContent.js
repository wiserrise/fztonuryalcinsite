// Bolge sayfalarinin metinleri.
//
// hizmetContent.js hizmet sayfalarini, landingContent.js reklam acilis
// sayfalarini tutar; bu dosya BOLGE (semt) sayfalarini tutar.
//
// Semt listesi MUSTERI TEYITLIDIR (2026-08-29): Kozyatagi, Sahrayicedit,
// Erenkoy, Suadiye, Bostanci. G5 kapisi bu teyitle acildi; teyit alinmadan
// bolge sayfasi acilmaz (CLAUDE.md §11).
//
// Her sayfa FARKLI bir yerel aci ve FARKLI bir hizmet agirligi tasir:
//   Kozyatagi     -> klinigin kendi mahallesi, ofis calisanlari, genel bakis
//   Sahrayicedit  -> yerlesik konut dokusu; skolyoz, dogum sonrasi, ileri yas
//   Erenkoy       -> ulasim/commute; boyun-bel, cene eklemi, manuel terapi
//   Suadiye       -> rekreatif spor; spor yaralanmalari, dize/ayak bilegi, spora donus
//   Bostanci      -> ulasim kavsagi; norolojik ve ameliyat sonrasi rehabilitasyon
// Bes sayfanin ayni metni tasimasi ince icerik uretir ve siteyi zayiflatir (§3.2).
//
// Icerik §1.2 (saglik reklam kisitlari) ve §2 (YMYL) suzgecinden gecirildi:
// iyilesme garantisi, seans sayisi, iyilesme suresi, basari orani ve danisan
// yorumu YOKTUR. Ulasim sureleri sayiyla verilmez.
//
// Mekanik denetim: node scripts/seo-check.mjs

export const kozyatagiIcerik = {
  "slug": "kozyatagi-fizyoterapist",
  "title": "Kozyatağı fizyoterapist | Fzt. Onur Yalçın",
  "metaDescription": "Kozyatağı fizyoterapist arayanlar için manuel terapi, klinik pilates, skolyoz ve pelvik taban çalışmaları. Gülbahar Sokak'ta, metroya yürüme mesafesinde.",
  "h1": "Kozyatağı fizyoterapist: mahallenin kendi kliniğinde değerlendirme ve program",
  "heroAltBaslik": "Gülbahar Sokak, Ege Yıldız Sitesi No:15; Kozyatağı metro istasyonuna yürüme mesafesinde",
  "heroParagraf": "Kozyatağı fizyoterapist arayışındaysanız klinik zaten bu mahallede: Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresinde çalışıyoruz. Süreç her zaman değerlendirmeyle başlar; şikâyetin ne zaman arttığı, hangi hareketle azaldığı ve günlük düzeninizin bunu nasıl etkilediği birlikte incelenir. Program bu değerlendirmenin sonucuna göre kurulur, hazır bir liste üzerinden ilerlenmez.",
  "primaryCtaMetni": "Randevu için arayın: 0507 294 99 00",
  "bolumler": [
    {
      "h2": "Kozyatağı fizyoterapist arayışında ilk adım neden değerlendirme",
      "paragraflar": [
        "Aynı adı taşıyan şikâyetler birbirinden çok farklı nedenlerden kaynaklanabilir. Bel ağrısıyla gelen iki kişiden birinde tablo uzun süreli oturmaya bağlı yüklenmeyle ilişkiliyken, diğerinde kalça çevresindeki kas dengesizliği ya da eski bir yaralanmanın bıraktığı hareket kısıtlılığı öne çıkabilir. İnternette bulunan bir egzersiz listesi bu ayrımı yapmaz.",
        "Bu yüzden Kozyatağı fizyoterapist arayışının ilk adımı egzersiz seçmek değil, şikâyetin nereden geldiğini anlamaktır. İlk görüşmede hareket değerlendirmesi yapılır, ağrının gün içindeki seyri konuşulur, hangi hareketin şikâyeti artırdığı ve hangisinin rahatlattığı tek tek denenir.",
        "Değerlendirme tamamlandığında bulgular size anlatılır: hangi bölgede hareket kısıtlı, hangi hareket kalıbı yerleşmiş ve program neyi hedefliyor. Ne yapıldığını anlamadan sürdürülen bir program, ilk yoğun haftada bırakılır. Bu yüzden anlatma kısmı sürecin gereksiz değil, ayrılmaz parçasıdır."
      ]
    },
    {
      "h2": "Klinik tam olarak nerede, nasıl ulaşılıyor",
      "paragraflar": [
        "Klinik Kadıköy Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresindedir. Kozyatağı metro istasyonuna yürüme mesafesinde olduğu için toplu taşımayla ulaşım pratiktir; çevredeki iş merkezlerinden yürüyerek gelmek de mümkündür.",
        "Randevular Pazartesi ile Cumartesi arası 09:00-21:00 aralığında planlanır. Bu geniş aralık, mesai başlamadan önceki erken saatlerde ya da çıkıştan sonraki akşam saatlerinde randevu almayı mümkün kılar. Programın düzenli sürdürülebilmesi açısından bu esneklik, çoğu kişi için belirleyici olur.",
        "Randevu için telefonla arayabilir veya WhatsApp üzerinden yazabilirsiniz. İlk görüşmeye hareketi kısıtlamayan rahat bir kıyafetle gelmeniz yeterlidir; varsa hekim raporunuzu ve görüntüleme sonuçlarınızı da getirebilirsiniz."
      ]
    },
    {
      "h2": "İş merkezlerinin yoğun olduğu bir mahallede hangi konular öne çıkıyor",
      "paragraflar": [
        "Kozyatağı, ofis yoğunluğunun yüksek olduğu bir bölge. Gün boyu oturarak çalışan bir kişide kalça önü ve göğüs bölgesi kısalma eğilimi gösterirken, kürek kemikleri arasındaki kaslar ve kalça yan bölgesi az kullanılır. Bu dengesizlik boyun, omuz ve bel bölgesinde gerginlik olarak hissedilir.",
        "Şikâyetin zamanlaması da tabloyu anlatır. Sabah dinlenmiş uyanıp öğleden sonra artan bir boyun gerginliği, gece boyunca süren ve sabah en şiddetli olan bir ağrıdan farklı bir tablodur. İlk görüşmede bu zamanlama ayrıntılı olarak konuşulur.",
        "Böyle bir tabloda program yalnız klinikte kalmaz. Çalışma masasının yüksekliği, ekranın göz hizasına göre konumu, klavye ve farenin uzaklığı ve gün içinde ayağa kalkma sıklığı, seansta kazanılanın korunup korunmadığını belirler. Masa başı düzeni, programın kendisi kadar belirleyicidir."
      ]
    },
    {
      "h2": "Manuel terapi hangi durumlarda programın parçası oluyor",
      "paragraflar": [
        "Manuel terapi, eklem ve yumuşak dokuya elle uygulanan tekniklerden oluşur. Hareket kısıtlılığı belirginse ve kişi ağrı nedeniyle egzersizi doğru kalıpta yapamıyorsa, manuel teknikler egzersize alan açmak için kullanılır. Amaç dokuyu zorlamak değil, hareketin yeniden mümkün hâle gelmesidir.",
        "Manuel terapi tek başına bir program değildir. Elle uygulanan tekniklerle sağlanan rahatlama, egzersizle desteklenmediğinde geçicidir; çünkü kısıtlılığı üreten günlük hareket kalıbı yerinde durmaya devam eder. Bu yüzden seans içinde manuel çalışma ve egzersiz birlikte planlanır.",
        "Fasyal manipülasyon da bu başlık altında değerlendirilir. Ağrının hissedildiği yer ile kaynağının farklı bölgeler olabildiği durumlarda, değerlendirme yalnız ağrıyan bölgeye değil, o bölgeye yük aktaran zincire bakar."
      ]
    },
    {
      "h2": "Klinik reformer pilates ve gövde kontrolü",
      "paragraflar": [
        "Klinik reformer pilates, gövdenin yük altında kontrolünü sürdürebilmesi üzerine kurulu bir çalışmadır. Yay direnci hareketi zorlaştırmak için değil, hareketin doğru kalıpta kalmasını sağlamak için seçilir; bazı hareketlerde yüksek direnç gövdeyi destekleyerek kalıbı kolaylaştırır, bazılarında düşük direnç kişinin kendi kontrolünü daha çok kullanmasını gerektirir.",
        "Bu çalışma stüdyo grup dersinden farklıdır: program değerlendirme sonrasında kişiye göre kurulur ve seanslar fizyoterapist eşliğinde yürütülür. Hareket seçimi kişinin şikâyetine ve o günkü toleransına göre değişir, sabit bir akış tekrarlanmaz.",
        "İlk seanslarda ağırlık tekrar sayısında değil, kişinin kendi kasılmasını fark etmesindedir. Fark edilemeyen bir kasılma, tekrar artırılsa da doğru kalıba dönüşmez. Gövde merkezi yerleştikçe kol ve bacak hareketleri programa kademeli olarak eklenir."
      ]
    },
    {
      "h2": "Skolyoz ve duruş konusunda Schroth temelli çalışma",
      "paragraflar": [
        "Skolyoza özgü çalışma, genel bir kuvvetlendirme programından farklıdır. Genel program gövdeyi bütün olarak çalıştırır ve simetrik bir yüklenme varsayar; skolyoza özgü çalışma ise eğriliğin yönünü ve dönme bileşenini hesaba katar, aynı hareket gövdenin iki yanına farklı biçimde uygulanabilir.",
        "Schroth temelli yaklaşımda nefes bir ısınma hareketi değil, egzersizin kendisidir. Hedeflenen bölgeye yönlendirilen nefes, o bölgedeki genişlemeyi çalışmanın yolu olarak kullanılır. Amaç gövde hareketliliğini korumak ve kişinin kendi duruşunu fark etmesini sağlamaktır.",
        "Okul çağındaki çocuklarda ve ergenlerde randevular ders saatleri dışına planlanabilir. Görüntüleme sonuçları ve varsa hekim raporu ilk görüşmeye getirildiğinde değerlendirme daha eksiksiz yapılır. Tanı ve takip kararı hekime aittir."
      ]
    },
    {
      "h2": "Pelvik taban rehabilitasyonu",
      "paragraflar": [
        "Pelvik taban kasları, karın içi basıncını düzenleyen yapının parçasıdır ve doğrudan gövde kontrolüyle ilişkilidir. Diyafram, karın duvarı, bel bölgesindeki derin kaslar ve pelvik taban birlikte çalıştığında omurga yük altında daha dengeli konumlanır.",
        "Bu bölgeye yönelik çalışma doğum sonrası dönemde, uzun süreli oturma düzenine bağlı şikâyetlerde ve hekim yönlendirmesiyle gelen durumlarda programın parçası olabilir. Değerlendirme ve program mahremiyete uygun bir düzende yürütülür.",
        "Pelvik taban çalışması yalnızca kasılma egzersizinden ibaret değildir. Gevşemenin de çalışılması gerekir; sürekli kasılı kalan bir pelvik taban, zayıf olan kadar sorun üretebilir. Hangi yönün öncelikli olduğu değerlendirme sonrasında belirlenir."
      ]
    },
    {
      "h2": "Nörolojik ve ortopedik rehabilitasyon başlıkları",
      "paragraflar": [
        "Nörolojik rehabilitasyonda denge, yürüme ve günlük yaşam hareketleri üzerine çalışılır. Süreç kişiye göre değişir ve genellikle uzun soluklu ilerler; hedefler günlük yaşamdaki somut hareketler üzerinden konur, soyut bir iyileşme tarifi üzerinden değil.",
        "Ortopedik tarafta ameliyat sonrası dönem, spor yaralanmaları ve aşırı kullanım kaynaklı şikâyetler gündeme gelir. Ameliyat sonrası programlarda çerçeveyi cerrahınızın protokolü belirler; hangi hareketin ne zaman başlayabileceği bu protokole ve ara değerlendirmelere göre planlanır.",
        "Her iki başlıkta da sabit bir takvim verilmez. İlerleme, gözlenebilir değişimlerle izlenir: hareket genişliği, kalıp bozulmadan yapılabilen tekrar aralığı ve günlük yaşamda zorlanılan hareketlerdeki değişim."
      ]
    },
    {
      "h2": "Hangi durumlarda önce hekime yönlendiriliyor",
      "paragraflar": [
        "Fizyoterapi uygulayıcı bir alandır; tanı koyma ve tedavi kararı verme yetkisi hekimdedir. Değerlendirme sırasında hekim görüşü gerektiren bir bulgu ortaya çıkarsa program başlatılmadan yönlendirme yapılır. Bu, sürecin geciktirilmesi değil doğru sıraya konmasıdır.",
        "Gece dinlenmeyle geçmeyen ve giderek artan ağrı, açıklanamayan kilo kaybı, ateşin eşlik ettiği tablo, ilerleyen güç kaybı ya da idrar ve dışkı kontrolünde değişiklik gibi durumlar bu kapsamdadır. Böyle bir tabloda öncelik hekim değerlendirmesidir.",
        "Hekim değerlendirmesi tamamlandıktan sonra fizyoterapi gündeme geldiğinde program, hekimin koyduğu çerçeveye göre kurulur. Bu sayfadaki bilgiler bilgilendirme amaçlıdır ve hekim değerlendirmesinin yerine geçmez."
      ]
    },
    {
      "h2": "Seans dışında ne yapılıyor",
      "paragraflar": [
        "Klinikte geçen süre haftanın toplamı içinde küçük bir dilimdir. Bu yüzden her program, evde ekipman gerektirmeden uygulanabilecek birkaç hareketle birlikte planlanır. Hareket sayısı bilinçli olarak sınırlı tutulur; uzun bir liste çoğu zaman uygulanmadan kalır.",
        "Ev programı klinikte birlikte çalışıldıktan sonra verilir. Kişi hareketi kendi bedeninde nasıl hissettiğini fark etmeden evde tekrarladığında kalıp yanlış yerleşebilir ve program ters yönde ilerler. Takıldığınız noktalar bir sonraki seansta birlikte gözden geçirilir.",
        "Egzersiz sırasında hissedilen keskin ya da yayılan ağrı ilerleme işareti değildir. Böyle bir durumda hareketin durdurulması ve bir sonraki görüşmede aktarılması gerekir; yaklaşımın gözden geçirilmesi gerektiğini gösterir."
      ]
    },
    {
      "h2": "Programın ilerleyip ilerlemediği nasıl anlaşılıyor",
      "paragraflar": [
        "İlerleme seans sayısıyla değil gözlenebilir değişimlerle izlenir. Bir hareketin kalıbı bozulmadan yapılabildiği tekrar aralığı, eklem hareket genişliği, denge gerektiren pozisyonlarda kalınabilen süre ve kişinin günlük yaşamda zorlandığı hareketlerdeki değişim ara değerlendirmelerde tekrar ölçülür.",
        "Bu ölçümler yalnız kayıt tutmak için yapılmaz; program bunlara göre güncellenir. Beklenen değişim görülmüyorsa yaklaşım gözden geçirilir, gerektiğinde hekim değerlendirmesi önerilir.",
        "Süre ve sonuç kişiye göre değişir. Bu sayfada bir süre taahhüdü verilmez ve önceden belirlenmiş bir seans paketi üzerinden ilerlenmez; sıklık ve süre değerlendirme sonrasında birlikte kararlaştırılır."
      ]
    },
    {
      "h2": "Bir programın yarıda kalmasının en sık nedeni",
      "paragraflar": [
        "Uygulamada en sık karşılaşılan sorun programın yanlış seçilmesi değil, yarıda kalmasıdır. Değerlendirme sonrasında kurulan bir program ancak düzenli sürdürüldüğünde anlamlı olur; ilk iki hafta içinde bırakılan bir program, doğru kurulmuş olsa bile sonuç üretmez.",
        "Bırakma nedenleri çoğu zaman motivasyonla ilgili değildir. Ulaşımın uzun sürmesi, randevu saatinin iş çıkışına denk gelmemesi ve ev programının günlük akışa oturmaması ilk sıralarda gelir. Bu yüzden program kurulurken haftalık düzeniniz de konuşulur.",
        "Kliniğin Kozyatağı'nda ve metro istasyonuna yürüme mesafesinde olması bu noktada pratik bir fark yaratır. Randevu aralığının Pazartesi ile Cumartesi arası 09:00-21:00 olması da aynı amaca hizmet eder: programın haftalık düzene sığması."
      ]
    },
    {
      "h2": "İlk seansla ikinci seans arasında ne oluyor",
      "paragraflar": [
        "İlk seansın ardından hafif bir kas yorgunluğu hissedilmesi olağandır; alışkın olunmayan bir hareket kalıbı çalışıldığında beklenen bir tepkidir. Bu his genellikle birkaç gün içinde geriler. Keskin, yayılan ya da giderek artan bir ağrı ise farklı bir durumdur ve bildirilmelidir.",
        "İki seans arasındaki dönem, programın gerçek sınavıdır. Klinikte doğru yapılan bir hareketin evde de aynı kalıpta tekrarlanıp tekrarlanmadığı, ikinci seansta birlikte kontrol edilir. Gerekirse hareket sadeleştirilir ya da değiştirilir.",
        "Bu dönemde şikâyetin gün içindeki seyrini not almanız faydalı olur. Hangi saatte, hangi hareketten sonra ve ne kadar sürdüğü gibi ayrıntılar, ikinci değerlendirmede programın yönünü belirler."
      ]
    },
    {
      "h2": "Ağrı geçtiğinde program bitmiş olur mu",
      "paragraflar": [
        "Ağrının azalması iyi bir işarettir ama tek başına programın tamamlandığı anlamına gelmez. Ağrı çoğu zaman, altta yatan hareket kısıtlılığı ya da kas dengesizliği düzelmeden önce geriler; bu noktada bırakılan bir programda şikâyet ilk yüklenmede geri dönebilir.",
        "Bu yüzden ağrının azaldığı dönem, programın bittiği değil yön değiştirdiği dönemdir. Odak ağrının yatıştırılmasından kademeli yüklenmeye ve dayanıklılığa kayar; günlük yaşamda ya da sporda zorlanılan hareketler programa taşınır.",
        "Ne zaman sonlandırılacağı ara değerlendirmelerle belirlenir. Hedeflenen hareketler kalıp bozulmadan yapılabiliyorsa ve günlük yaşamdaki kısıtlılık ortadan kalkmışsa program ev programına devredilerek sonlandırılır."
      ]
    },
    {
      "h2": "Hedefler nasıl konuluyor",
      "paragraflar": [
        "Hedef, soyut bir iyileşme tarifi üzerinden değil, sizin günlük yaşamınızda zorlandığınız somut hareketler üzerinden konur. Arabadan inerken zorlanmak, çocuğu kucağa almakta güçlük çekmek, uzun bir toplantıdan sonra ayağa kalkarken bel bölgesinde tutulma hissetmek gibi tarifler programın hedefini doğrudan belirler.",
        "Bu yaklaşımın pratik bir nedeni var: somut hedef ölçülebilir. Bir hareketin yapılabilir hâle gelip gelmediği ara değerlendirmede doğrudan denenir; oysa genel bir rahatlama tarifi üzerinden ilerleyip ilerlemediğinizi ölçmek mümkün olmaz.",
        "Hedefler süreç içinde değişebilir. Başlangıçtaki öncelik ağrının yatıştırılmasıyken, tablo değiştikçe odak dayanıklılığa ve zorlanılan hareketlere kayar. Bu değişim ara değerlendirmelerde birlikte konuşulur ve program buna göre güncellenir."
      ]
    }
  ],
  "sss": [
    {
      "soru": "Kozyatağı'nda oturuyorum, randevu için nasıl ilerlemeliyim?",
      "cevap": "Telefonla arayarak ya da WhatsApp üzerinden yazarak randevu talep edebilirsiniz. İlk randevu bir değerlendirme görüşmesidir; şikâyetiniz, gün içindeki seyri ve varsa görüntüleme sonuçlarınız birlikte ele alınır."
    },
    {
      "soru": "İlk görüşmeye ne getirmeliyim?",
      "cevap": "Hareketi kısıtlamayan rahat bir kıyafet yeterlidir. Varsa hekim raporunuzu ve görüntüleme sonuçlarınızı getirebilirsiniz. Şikâyetinizin gün içinde hangi saatlerde ve hangi hareketlerde arttığını birkaç gün gözlemleyip not almanız değerlendirmeyi kolaylaştırır."
    },
    {
      "soru": "Görüntüleme sonucum yok, yine de gelebilir miyim?",
      "cevap": "Gelebilirsiniz. Değerlendirme hareket muayenesiyle yapılır. Bulgular görüntüleme gerektiriyorsa ya da hekim görüşü gereken bir tablo çıkarsa yönlendirme yapılır."
    },
    {
      "soru": "Seanslar ne kadar sürüyor ve hangi sıklıkla planlanıyor?",
      "cevap": "Süre ve sıklık değerlendirme sonrasında kişiye göre belirlenir. Önceden belirlenmiş bir paket ya da sabit bir seans sayısı üzerinden ilerlenmez."
    },
    {
      "soru": "Randevu saatleri mesai düzenine uyuyor mu?",
      "cevap": "Randevular Pazartesi ile Cumartesi arası 09:00-21:00 aralığında planlanır. Bu aralık, mesai başlamadan önce ya da çıkıştan sonraki saatlerde randevu almayı mümkün kılar."
    },
    {
      "soru": "Kliniğe toplu taşımayla nasıl ulaşırım?",
      "cevap": "Klinik Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresinde, Kozyatağı metro istasyonuna yürüme mesafesindedir. Çevredeki iş merkezlerinden yürüyerek gelmek de mümkündür."
    },
    {
      "soru": "Fizyoterapist ile fiziksel tıp ve rehabilitasyon hekimi arasındaki fark nedir?",
      "cevap": "Fiziksel tıp ve rehabilitasyon hekimliği ayrı bir hekim ünvanıdır; tanı koyma ve tedavi kararı verme yetkisi hekimdedir. Fizyoterapist değerlendirme yaparak fizyoterapi ve rehabilitasyon uygulamalarını yürütür."
    },
    {
      "soru": "Ofiste geçirdiğim süre şikâyetimi etkiliyor mu?",
      "cevap": "Uzun süre aynı pozisyonda kalmak, seansta kazanılan hareket kalitesinin gün boyunca korunmasını zorlaştırabilir. Bu yüzden program, çalışma masası düzeni ve gün içindeki hareket aralarıyla birlikte planlanır."
    },
    {
      "soru": "Programın ilerleyip ilerlemediği nasıl anlaşılıyor?",
      "cevap": "İlerleme seans sayısıyla değil gözlenebilir değişimlerle izlenir: bir hareketin kalıbı bozulmadan yapılabildiği tekrar aralığı, eklem hareket genişliği ve günlük yaşamda zorlanılan hareketlerdeki değişim ara değerlendirmelerde tekrar ölçülür."
    },
    {
      "soru": "Egzersiz sırasında ağrı hissedersem ne yapmalıyım?",
      "cevap": "Keskin ya da yayılan bir ağrı ilerleme işareti değildir, yaklaşımın gözden geçirilmesi gerektiğini gösterir. Seans sırasında bunu bildirmeniz gerekir; ev programında karşılaşırsanız hareketi durdurup bir sonraki görüşmede aktarabilirsiniz."
    }
  ],
  "gorselAltMetinleri": [
    "Kozyatağı fizyoterapist değerlendirmesinde hareket muayenesi",
    "Kozyatağı Gülbahar Sokak'taki klinikte manuel terapi uygulaması",
    "Klinik reformer pilates ile gövde kontrolü çalışması",
    "Kozyatağı metro istasyonuna yürüme mesafesindeki kliniğe ulaşım"
  ]
}

export const sahrayiceditIcerik = {
  "slug": "sahrayicedit-fizyoterapist",
  "title": "Sahrayıcedit fizyoterapist | Fzt. Onur Yalçın",
  "metaDescription": "Sahrayıcedit fizyoterapist arayanlar için skolyoz takibi, doğum sonrası dönem ve denge çalışmaları. Komşu mahalle Kozyatağı'ndaki klinikte randevu.",
  "h1": "Sahrayıcedit fizyoterapist: komşu mahalledeki klinikte kişiye özel program",
  "heroAltBaslik": "Kozyatağı'ndaki klinik Sahrayıcedit'ten kısa mesafede; Pazartesi-Cumartesi 09:00-21:00",
  "heroParagraf": "Sahrayıcedit fizyoterapist arayışındaysanız klinik komşu mahallede, Kozyatağı Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresinde. Bu yakınlık pratik bir fark yaratır: haftada birden fazla seans gerektiren programlarda ulaşım, sürdürülebilirliğin en belirleyici kalemlerinden biridir. Süreç değerlendirmeyle başlar ve program o değerlendirmenin sonucuna göre kurulur.",
  "primaryCtaMetni": "Randevu için arayın: 0507 294 99 00",
  "bolumler": [
    {
      "h2": "Sahrayıcedit fizyoterapist arayışında yakınlık neden belirleyici",
      "paragraflar": [
        "Fizyoterapide en sık karşılaşılan sorun programın yanlış seçilmesi değil, yarıda kalmasıdır. Değerlendirme sonrasında kurulan bir program ancak düzenli sürdürüldüğünde anlamlı olur; ilk iki hafta içinde bırakılan bir program, doğru kurulmuş olsa bile sonuç üretmez.",
        "Bırakma nedenleri genellikle motivasyonla ilgili değildir. Ulaşımın uzun sürmesi, randevu saatinin okul çıkışına ya da iş çıkışına denk gelmemesi ve ev programının günlük akışa oturmaması ilk sıralarda gelir. Sahrayıcedit fizyoterapist arayan bir kişi için klinik komşu mahallede olduğundan bu kalemlerden biri baştan hafifler.",
        "Bu özellikle okul çağında çocuğu olan ailelerde fark yaratır. Haftalık düzeni sıkışık bir ailede, ulaşımın kısa olması randevunun ertelenmemesi anlamına gelir; ertelenmeyen randevu da programın sürmesi demektir."
      ]
    },
    {
      "h2": "Yerleşik bir konut dokusunda hangi başlıklar öne çıkıyor",
      "paragraflar": [
        "Sahrayıcedit ağırlıklı olarak yerleşik bir konut dokusuna sahip. Bu tür bir mahallede gündeme gelen başlıklar iş merkezi çevresinden farklılaşır: okul çağındaki çocuklarda duruş ve skolyoz takibi, doğum sonrası dönem, ev içi yüklenmelere bağlı bel ve omuz şikâyetleri ile ileri yaşta denge ve yürüme konuları öne çıkar.",
        "Bu başlıkların ortak yanı, programın aile düzeniyle birlikte planlanmasını gerektirmesidir. Bir ergene verilen ev programı, ailenin gün içindeki akışına oturmadığında uygulanmadan kalır; ileri yaştaki bir kişiye verilen denge programı da ev içindeki düzenleme yapılmadan eksik kalır.",
        "Bu yüzden ilk görüşmede yalnız şikâyet değil, günün nasıl geçtiği de konuşulur: kim ne zaman evde, hangi saatlerde egzersiz için yer açılabilir ve programı kim hatırlatacak."
      ]
    },
    {
      "h2": "Okul çağında duruş ve skolyoz takibi",
      "paragraflar": [
        "Ailelerin fark ettiği ilk işaretler genellikle omuz hizasındaki farklılık, tek tarafta belirginleşen bel çukuru ya da öne eğilirken sırtın bir yanının daha yüksek durmasıdır. Bu bulgular tek başına tanı anlamına gelmez; tanı ve takip kararı hekime aittir.",
        "Hekim değerlendirmesi sonrasında fizyoterapi gündeme geldiğinde çalışma skolyoza özgü biçimde kurulur. Genel bir kuvvetlendirme programı gövdeyi bütün olarak çalıştırır ve simetrik yüklenme varsayar; skolyoza özgü çalışma ise eğriliğin yönünü ve dönme bileşenini hesaba katar, aynı hareket gövdenin iki yanına farklı biçimde uygulanabilir.",
        "Schroth temelli yaklaşımda nefes bir ısınma hareketi değil, egzersizin kendisidir. Hedeflenen bölgeye yönlendirilen nefes, o bölgedeki genişlemeyi çalışmanın yolu olarak kullanılır. Randevular ders saatleri dışına planlanabilir."
      ]
    },
    {
      "h2": "Çanta, oturma düzeni ve ekran süresi",
      "paragraflar": [
        "Çanta kullanımının eğriliğin nedeni olduğu yönünde bir çıkarım yapılmaz. Ancak tek omuzda taşınan ağır bir çanta, zaten asimetrik olan bir duruşu gün boyunca pekiştirebilir; bu nedenle iki omuza dağıtılmış ve gövdeye yakın taşınan bir kullanım önerilir.",
        "Ders çalışırken masaya eğilerek oturmak ve uzun süre aynı pozisyonda kalmak, egzersizle kazanılanın korunmasını zorlaştırır. Evdeki çalışma köşesinin düzeni, sandalyenin yüksekliği ve ekranın göz hizasına göre konumu program kadar belirleyici olabilir.",
        "Bu düzenlemeler tek seferlik değildir. Çocuk büyüdükçe masa ve sandalye yüksekliği yeniden ayarlanmalı; ara kontrollerde bu da konuşulur."
      ]
    },
    {
      "h2": "Ergenlerde programın kabul görmesi ayrı bir konu",
      "paragraflar": [
        "Skolyoza özgü egzersizlerin evde tekrarlanması gerekir, çünkü kazanılan duruş farkındalığı yalnız klinikteki seanslarla korunmaz. Uygulamada en sık karşılaşılan zorluk zaman değil, hareketin doğru yapıldığından emin olamamaktır.",
        "Ergenlerde ikinci bir zorluk daha vardır: hareketlerin neden yapıldığı anlatılmadan verilen bir liste çoğu zaman uygulanmadan kalır. Bu yüzden değerlendirme sonuçları çocuğa da kendi anlayacağı biçimde anlatılır ve program birlikte kurulur.",
        "Ev programı kısa tutulur ve her hareket klinikte birlikte çalışıldıktan sonra verilir. Ara kontrollerde program hem içerik hem uygulanabilirlik açısından güncellenir."
      ]
    },
    {
      "h2": "Doğum sonrası dönemde program nasıl kuruluyor",
      "paragraflar": [
        "Doğum sonrası dönemde egzersize başlama kararı hekim değerlendirmesine bağlıdır ve kişiye göre değişir. Onay verildiğinde program, karın duvarındaki gerginlik değişimi ve pelvik taban yükü göz önünde tutularak uyarlanır.",
        "Karın kaslarında ayrışma bulunan bir kişide klasik mekik türü hareketler programın başında yer almaz. Bunun yerine karın içi basıncını kontrollü tutan çalışmalarla başlanır; yüklenme kişinin toleransına göre kademeli olarak değiştirilir. Ne zaman ilerleneceği takvimle değil ara değerlendirmelerle belirlenir.",
        "Pelvik taban çalışması yalnızca kasılma egzersizinden ibaret değildir. Gevşemenin de çalışılması gerekir; sürekli kasılı kalan bir pelvik taban, zayıf olan kadar sorun üretebilir. Hangi yönün öncelikli olduğu değerlendirme sonrasında belirlenir."
      ]
    },
    {
      "h2": "Bebek bakımının bedene bindirdiği yük",
      "paragraflar": [
        "Kucakta taşıma, emzirme pozisyonu ve gün içinde tekrarlanan eğilip kaldırma hareketleri boyun, omuz ve bel bölgesinde yüklenme yaratır. Bu yüklenme çoğu zaman tek bir hareketten değil, aynı hareketin gün boyunca onlarca kez tekrarlanmasından kaynaklanır.",
        "Program bu tekrarları hesaba katarak kurulur: yükün nasıl dağıtılacağı, hangi pozisyonların değiştirilebileceği ve gün içinde hangi aralıklarla pozisyon değişimi yapılabileceği birlikte çalışılır.",
        "Sezaryen sonrası iz bölgesindeki doku hareketliliği de bu başlığın parçasıdır. Hekim onayı sonrasında bu bölgeye yönelik çalışma programa eklenebilir; zamanlaması ve içeriği kişiye göre belirlenir."
      ]
    },
    {
      "h2": "İleri yaşta denge ve yürüme",
      "paragraflar": [
        "Denge ve yürüme konusundaki çalışmanın amacı, günlük yaşamdaki hareketleri güvenli biçimde sürdürebilmektir. Değerlendirmede yürüyüşün nasıl ilerlediği, dönüş hareketlerinde ne olduğu, ayağa kalkarken zorlanma olup olmadığı ve ev içindeki hangi durumların zorlandığı ele alınır.",
        "Program yalnız kuvvetlendirmeden ibaret değildir. Dengeyi kuran sistem görme, iç kulak ve bedenin kendi konum duyusunun birlikte çalışmasına dayanır; çalışma bu bileşenleri hesaba katarak kurulur.",
        "Ev içi düzenleme bu başlığın ayrılmaz parçasıdır. Halı kenarları, aydınlatma, banyo içindeki zemin ve tutunma noktaları egzersiz programı kadar belirleyici olabilir. Bu değişiklikler aileyle birlikte planlanır."
      ]
    },
    {
      "h2": "Ev içi yüklenmelere bağlı bel ve omuz şikâyetleri",
      "paragraflar": [
        "Ev içindeki işler çoğu zaman tek seferde ağır olmadıkları için hafife alınır. Oysa öne eğilerek yapılan uzun süreli işler, baş üstünde çalışma ve tek taraflı taşıma, tekrarlandıkça bel ve omuz bölgesinde yüklenme üretir.",
        "Bu tabloda önce şikâyetin nereden geldiği anlaşılır. Aynı adı taşıyan iki tablo farklı nedenlerden kaynaklanabilir; bu ayrım yapılmadan verilen bir egzersiz listesi çoğu zaman etkisiz kalır.",
        "Hareket kısıtlılığı belirginse manuel terapi egzersize alan açmak için kullanılır. Elle uygulanan tekniklerle sağlanan rahatlama egzersizle desteklenmediğinde kalıcı olmaz; bu yüzden ikisi birlikte planlanır."
      ]
    },
    {
      "h2": "Hangi durumlarda önce hekime yönlendiriliyor",
      "paragraflar": [
        "Fizyoterapi uygulayıcı bir alandır; tanı koyma ve tedavi kararı verme yetkisi hekimdedir. Değerlendirme sırasında hekim görüşü gerektiren bir bulgu ortaya çıkarsa program başlatılmadan yönlendirme yapılır.",
        "Gece dinlenmeyle geçmeyen ve giderek artan ağrı, açıklanamayan kilo kaybı, ateşin eşlik ettiği tablo, ilerleyen güç kaybı ya da idrar ve dışkı kontrolünde değişiklik gibi durumlar bu kapsamdadır.",
        "Çocuklarda ise hızlı ilerleyen bir duruş değişikliği, tek taraflı ve süreklilik gösteren ağrı ya da nörolojik belirtiler hekim değerlendirmesini gerektirir. Bu sayfadaki bilgiler bilgilendirme amaçlıdır ve hekim değerlendirmesinin yerine geçmez."
      ]
    },
    {
      "h2": "Programın ilerleyip ilerlemediği nasıl anlaşılıyor",
      "paragraflar": [
        "İlerleme seans sayısıyla değil gözlenebilir değişimlerle izlenir. Bir hareketin kalıbı bozulmadan yapılabildiği tekrar aralığı, eklem hareket genişliği, denge gerektiren pozisyonlarda kalınabilen süre ve günlük yaşamda zorlanılan hareketlerdeki değişim ara değerlendirmelerde tekrar ölçülür.",
        "Bu ölçümler yalnız kayıt tutmak için yapılmaz; program bunlara göre güncellenir. Beklenen değişim görülmüyorsa yaklaşım gözden geçirilir, gerektiğinde hekim değerlendirmesi önerilir.",
        "Süre ve sonuç kişiye göre değişir. Bu sayfada bir süre taahhüdü verilmez ve önceden belirlenmiş bir seans paketi üzerinden ilerlenmez."
      ]
    },
    {
      "h2": "Randevu, ulaşım ve pratik bilgiler",
      "paragraflar": [
        "Klinik Kadıköy Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresindedir ve Kozyatağı metro istasyonuna yürüme mesafesindedir. Sahrayıcedit'ten kısa bir mesafededir.",
        "Randevular Pazartesi ile Cumartesi arası 09:00-21:00 aralığında planlanır; okul ve mesai saatleri dışında randevu almak bu aralıkta mümkündür. Randevu için telefonla arayabilir veya WhatsApp üzerinden yazabilirsiniz.",
        "İlk görüşmeye hareketi kısıtlamayan rahat bir kıyafetle gelmeniz yeterlidir. Görüntüleme sonuçlarınız ve varsa hekim raporunuz getirildiğinde değerlendirme daha eksiksiz yapılır."
      ]
    },
    {
      "h2": "Kliniğe gelmeden önce evde neler gözlemlenebilir",
      "paragraflar": [
        "İlk görüşmenin verimi, gözlemle gelmenize bağlıdır. Şikâyetin gün içinde hangi saatlerde arttığı, hangi hareketten sonra ortaya çıktığı ve ne kadar sürdüğü birkaç gün not alındığında, değerlendirmede doğrudan kullanılabilir bir tablo oluşur.",
        "Çocuğunuzun duruşu için gözlem farklıdır: sırtın öne eğildiği anda iki yanının aynı yükseklikte durup durmadığı, omuz hizası ve bel çukurunun iki yanı basit bir bakışla görülebilir. Bu gözlem tanı değildir, yalnızca değerlendirmeye girdi sağlar.",
        "İleri yaştaki bir yakınınız için ise gün içinde hangi hareketlerde zorlandığı ve ev içinde nerede tutunma ihtiyacı duyduğu not edilebilir. Bu ayrıntılar, egzersiz programının yanı sıra ev düzenlemesinin de yönünü belirler."
      ]
    },
    {
      "h2": "Programı evde kim takip edecek",
      "paragraflar": [
        "Ev programının uygulanıp uygulanmaması çoğu zaman hareketlerin zorluğuyla değil, sorumluluğun net olmamasıyla ilgilidir. Çocuklarda ve ileri yaştaki kişilerde bu sorumluluğun aile içinde kime ait olduğu belirlenmediğinde program birkaç gün içinde seyrelir.",
        "Bu yüzden ilk görüşmede programın hangi saatte, nerede ve kimin eşliğinde yapılacağı da konuşulur. Sabit bir saate bağlanan kısa bir program, günün belirsiz bir anına bırakılan uzun bir programdan daha çok uygulanır.",
        "Ara kontrollerde yalnız hareketler değil bu düzen de gözden geçirilir. Uygulanmayan bir hareket varsa nedeni sorulur; çoğu zaman çözüm hareketi zorlaştırmak değil, uygulanabilir hâle getirmektir."
      ]
    },
    {
      "h2": "Egzersizden ne beklenir, ne beklenmez",
      "paragraflar": [
        "Alışkın olunmayan bir hareket kalıbı çalışıldığında ertesi gün hafif bir kas yorgunluğu hissedilmesi olağandır ve genellikle birkaç gün içinde geriler. Bu, programın işlediğine dair bir işaret değildir; yalnızca yeni bir yüklenmeye verilen olağan tepkidir.",
        "Buna karşılık egzersiz sırasında ya da sonrasında ortaya çıkan keskin, yayılan ya da giderek artan bir ağrı farklı bir durumdur. Böyle bir durumda hareket durdurulur ve bir sonraki görüşmede aktarılır; yaklaşımın gözden geçirilmesi gerektiğini gösterir.",
        "Ağrının azalması da tek başına programın tamamlandığı anlamına gelmez. Ağrı çoğu zaman altta yatan hareket kısıtlılığı düzelmeden önce geriler; bu noktada bırakılan bir programda şikâyet ilk yüklenmede geri dönebilir."
      ]
    },
    {
      "h2": "Klinik pilates bu programların neresinde",
      "paragraflar": [
        "Klinik reformer pilates, gövdenin yük altında kontrolünü sürdürebilmesi üzerine kurulu bir çalışmadır ve bu sayfadaki başlıkların çoğuyla kesişir. Doğum sonrası dönemde, ev içi yüklenmelere bağlı bel şikâyetlerinde ve duruş çalışmalarında programın parçası olabilir.",
        "Bu çalışma stüdyo grup dersinden farklıdır: program değerlendirme sonrasında kişiye göre kurulur ve seanslar fizyoterapist eşliğinde yürütülür. Yay direnci hareketi zorlaştırmak için değil, hareketin doğru kalıpta kalmasını sağlamak için seçilir.",
        "Skolyozda ise klinik pilates skolyoza özgü çalışmanın yerine geçmez, yanında yer alabilir. Hangi çalışmanın öne alınacağı değerlendirme sonucuna ve kişinin hedefine göre belirlenir; karar görüntüleme ve hekim değerlendirmesiyle birlikte ele alınır."
      ]
    }
  ],
  "sss": [
    {
      "soru": "Sahrayıcedit'ten kliniğe nasıl gelinir?",
      "cevap": "Klinik komşu mahalle Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresindedir. Süre çıkış noktanıza ve ulaşım tercihinize göre değişir; toplu taşıma için Kozyatağı metro istasyonu yürüme mesafesindedir."
    },
    {
      "soru": "Çocuğum için değerlendirme randevusu alabilir miyim?",
      "cevap": "Alabilirsiniz. Duruşla ilgili bir kaygınız varsa değerlendirme görüşmesiyle başlanır. Tanı ve takip kararı hekime aittir; bulgular hekim görüşü gerektiriyorsa yönlendirme yapılır."
    },
    {
      "soru": "Randevular ders saatleri dışına planlanabiliyor mu?",
      "cevap": "Planlanabilir. Randevu aralığı Pazartesi ile Cumartesi arası 09:00-21:00 olduğu için okul saatleri dışında randevu almak mümkündür."
    },
    {
      "soru": "Doğum sonrası egzersize ne zaman başlayabilirim?",
      "cevap": "Başlama zamanı hekim değerlendirmesine bağlıdır ve kişiye göre değişir. Onay verildikten sonra program karın duvarı ve pelvik taban yükü göz önünde tutularak uyarlanır."
    },
    {
      "soru": "Karın kaslarımda ayrışma olduğu söylendi, egzersiz yapabilir miyim?",
      "cevap": "Bu durumda klasik mekik türü hareketler programın başında yer almaz. Karın içi basıncını kontrollü tutan çalışmalarla başlanır ve yüklenme ara değerlendirmelere göre kademeli olarak değiştirilir."
    },
    {
      "soru": "İleri yaştaki bir yakınım için ev programı verilebiliyor mu?",
      "cevap": "Verilebilir. Ev programı klinikte birlikte çalışıldıktan sonra verilir ve hareket sayısı bilinçli olarak sınırlı tutulur. Ev içi düzenleme önerileri de programın parçasıdır."
    },
    {
      "soru": "Görüntüleme sonucu olmadan gelmek mümkün mü?",
      "cevap": "Mümkündür. Değerlendirme hareket muayenesiyle yapılır; bulgular görüntüleme ya da hekim görüşü gerektiriyorsa yönlendirme yapılır."
    },
    {
      "soru": "Program ne kadar sürer?",
      "cevap": "Süre kişiye göre değişir ve önceden bir takvim verilmez. İlerleme ara değerlendirmelerle izlenir; beklenen değişim görülmüyorsa yaklaşım gözden geçirilir."
    },
    {
      "soru": "Seanslar grup halinde mi yapılıyor?",
      "cevap": "Program değerlendirme sonrasında kişiye özel kurulur ve seanslar fizyoterapist eşliğinde yürütülür."
    },
    {
      "soru": "Ev programını yaparken emin olamıyorum, ne yapmalıyım?",
      "cevap": "Her hareket klinikte birlikte çalışıldıktan sonra verilir. Yine de takıldığınız bir nokta olursa bir sonraki seansta birlikte gözden geçirilir; emin olunmadan tekrarlanan bir hareket yanlış kalıp yerleştirebilir."
    }
  ],
  "gorselAltMetinleri": [
    "Sahrayıcedit fizyoterapist değerlendirmesinde duruş analizi",
    "Okul çağında skolyoza özgü egzersiz çalışması",
    "Doğum sonrası dönemde pelvik taban ve gövde çalışması",
    "İleri yaşta denge ve yürüme çalışması"
  ]
}

export const erenkoyIcerik = {
  "slug": "erenkoy-fizyoterapist",
  "title": "Erenköy fizyoterapist | Fzt. Onur Yalçın",
  "metaDescription": "Erenköy fizyoterapist arayanlar için boyun ve bel şikâyetleri, çene eklemi ve manuel terapi. Kozyatağı'ndaki klinikte değerlendirme ve kişiye özel program.",
  "h1": "Erenköy fizyoterapist: boyun, bel ve çene şikâyetlerinde değerlendirme",
  "heroAltBaslik": "Kozyatağı'ndaki klinik; Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
  "heroParagraf": "Erenköy fizyoterapist arayışındaysanız klinik Kadıköy Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresinde. Süreç değerlendirmeyle başlar: şikâyetin ne zaman arttığı, hangi hareketle azaldığı ve gün içindeki düzeninizin bunu nasıl etkilediği birlikte incelenir. Program bu değerlendirmenin sonucuna göre kurulur, hazır bir egzersiz listesi üzerinden ilerlenmez.",
  "primaryCtaMetni": "Randevu için arayın: 0507 294 99 00",
  "bolumler": [
    {
      "h2": "Erenköy fizyoterapist arayışında ilk adım neden değerlendirme",
      "paragraflar": [
        "Aynı adı taşıyan şikâyetler birbirinden çok farklı nedenlerden kaynaklanabilir. Boyun ağrısıyla gelen iki kişiden birinde tablo uzun süreli ekran kullanımına bağlı yüklenmeyle ilişkiliyken, diğerinde çene bölgesindeki gerginlik ya da omuz kuşağındaki hareket kısıtlılığı öne çıkabilir.",
        "Erenköy fizyoterapist arayışının ilk adımı bu yüzden egzersiz seçmek değil, şikâyetin nereden geldiğini anlamaktır. İlk görüşmede hareket değerlendirmesi yapılır, ağrının gün içindeki seyri konuşulur ve hangi hareketin şikâyeti artırdığı tek tek denenir.",
        "Değerlendirme tamamlandığında bulgular size anlatılır. Ne yapıldığını anlamadan sürdürülen bir program ilk yoğun haftada bırakılır; bu yüzden anlatma kısmı sürecin ayrılmaz parçasıdır."
      ]
    },
    {
      "h2": "Gidiş gelişin uzun sürdüğü bir günün bedene yansıması",
      "paragraflar": [
        "Erenköy, günün önemli bir bölümünü yolda geçiren kişilerin yaşadığı bir bölge. Toplu taşımada ya da araçta geçirilen süre, masa başındaki süreye eklendiğinde toplam oturma zamanı beklenenden uzun olur.",
        "Araçta ya da vagonda oturma pozisyonu çoğu zaman masadakinden daha kötüdür: baş öne eğik, kollar telefonda, sırt destekten kopmuş. Bu pozisyonda geçen zaman, boyun ve kürek arası bölgede gerginlik olarak birikir.",
        "Program bu toplamı hesaba katarak kurulur. Yalnız masa düzeni değil, yolda geçen sürede pozisyon değiştirme aralıkları ve telefon kullanım yüksekliği de konuşulur."
      ]
    },
    {
      "h2": "Boyun şikâyetleri ve kola yayılan uyuşma",
      "paragraflar": [
        "Boyun bölgesindeki şikâyetin kola yayılması, bası altında kalan bir sinir kökünü akla getirir. Ancak yayılan her uyuşma aynı anlama gelmez; kas kaynaklı gerginlikler de benzer bir dağılım gösterebilir.",
        "Değerlendirmede uyuşmanın hangi parmaklara kadar indiği, hangi baş pozisyonunda arttığı ve güç kaybının eşlik edip etmediği ele alınır. Bu ayrım programın yönünü doğrudan belirler.",
        "İlerleyen güç kaybı, elde beceri kaybı ya da her iki kolu birden ilgilendiren bulgular varsa program başlatılmadan hekim değerlendirmesine yönlendirme yapılır."
      ]
    },
    {
      "h2": "Boyun düzleşmesi ile boyun şikâyetleri arasındaki bağ",
      "paragraflar": [
        "Görüntülemede boyun düzleşmesi görülmesi tek başına ağrının nedeni anlamına gelmez. Düzleşme bulunan birçok kişide şikâyet yoktur; şikâyeti olan birçok kişide ise düzleşme görülmez.",
        "Bu yüzden değerlendirme görüntülemeye değil, hareketin kendisine bakar: boyun hangi yöne dönerken kısıtlı, hangi pozisyonda şikâyet artıyor ve omuz kuşağı bu tabloya nasıl katılıyor.",
        "Program da buna göre kurulur. Amaç bir görüntüleme bulgusunu değiştirmek değil, kısıtlı olan hareketi geri kazandırmak ve gün içindeki yüklenmeyi azaltmaktır."
      ]
    },
    {
      "h2": "Çene eklemi şikâyetleri neden bu sayfada",
      "paragraflar": [
        "Çene eklemi ile boyun bölgesi birbirinden bağımsız değildir. Baş öne eğik geçirilen uzun süreler çene ekleminin çalışma açısını değiştirebilir; benzer biçimde çene bölgesindeki gerginlik boyun kaslarına yansıyabilir.",
        "Şikâyetler ağız açarken ses gelmesi, çiğnerken zorlanma, kulak çevresinde ya da şakakta hissedilen ağrı biçiminde ortaya çıkar. Sabah uyanınca çenede yorgunluk hissi de sık bildirilen bir tablodur.",
        "Değerlendirmede ağız açıklığı, çenenin açılırken izlediği yol, çiğneme kaslarındaki hassasiyet ve boyun bölgesinin katkısı birlikte ele alınır."
      ]
    },
    {
      "h2": "Diş sıkma ve gıcırdatma çeneyi nasıl zorluyor",
      "paragraflar": [
        "Gece boyunca süren diş sıkma, çiğneme kaslarını dinlenme fırsatı bulmadan çalıştırır. Bu yüzden şikâyet çoğu zaman sabah en belirgin hâldedir ve gün içinde bir miktar geriler.",
        "Fizyoterapi bu tabloda çiğneme kaslarına ve çene ekleminin hareketine yönelir; boyun bölgesinin katkısı da programa dahil edilir. Gece plağı kullanımı ve diş tarafını ilgilendiren kararlar diş hekimine aittir.",
        "Bu yüzden çene şikâyetlerinde diş hekimiyle iş birliği önemlidir. Fizyoterapi programı, diş hekiminin koyduğu çerçeveyle çelişmeyecek biçimde planlanır."
      ]
    },
    {
      "h2": "Manuel terapi ve fasyal manipülasyon",
      "paragraflar": [
        "Manuel terapi, eklem ve yumuşak dokuya elle uygulanan tekniklerden oluşur. Hareket kısıtlılığı belirginse ve kişi ağrı nedeniyle egzersizi doğru kalıpta yapamıyorsa, manuel teknikler egzersize alan açmak için kullanılır.",
        "Fasyal manipülasyon ise ağrının hissedildiği yer ile kaynağının farklı bölgeler olabildiği durumlarda gündeme gelir. Değerlendirme yalnız ağrıyan bölgeye değil, o bölgeye yük aktaran zincire bakar.",
        "İkisi de tek başına bir program değildir. Elle uygulanan tekniklerle sağlanan rahatlama, egzersizle desteklenmediğinde kalıcı olmaz; çünkü kısıtlılığı üreten günlük hareket kalıbı yerinde kalır."
      ]
    },
    {
      "h2": "Bel şikâyetlerinde uzun süreli oturmanın payı",
      "paragraflar": [
        "Oturma pozisyonunda bel bölgesindeki diskler üzerindeki yük, ayakta durmaya kıyasla artar. Bu tek başına sorun üretmez; sorun, aynı pozisyonun saatlerce değiştirilmeden sürdürülmesinden doğar.",
        "Değerlendirmede şikâyetin oturma süresiyle ilişkisi, ayağa kalkarken ne olduğu ve öne eğilme hareketinin tabloyu nasıl etkilediği ele alınır. Bacağa yayılan uyuşma varsa yayılımın sınırı belirlenir.",
        "Program hem yüklenmeyi azaltmayı hem de belin yük taşıma kapasitesini artırmayı hedefler. İkincisi olmadan yalnız pozisyon düzenlemesi, ilk yoğun dönemde yetersiz kalır."
      ]
    },
    {
      "h2": "Gövde kontrolü ve klinik reformer pilates",
      "paragraflar": [
        "Klinik reformer pilates, gövdenin yük altında kontrolünü sürdürebilmesi üzerine kurulu bir çalışmadır. Yay direnci hareketi zorlaştırmak için değil, hareketin doğru kalıpta kalmasını sağlamak için seçilir.",
        "Boyun ve bel şikâyetlerinde bu çalışma, gövdenin yükü daha dengeli dağıtmasını hedefler. Program değerlendirme sonrasında kişiye göre kurulur ve seanslar fizyoterapist eşliğinde yürütülür.",
        "İlk seanslarda ağırlık tekrar sayısında değil, kişinin kendi kasılmasını fark etmesindedir. Gövde merkezi yerleştikçe kol ve bacak hareketleri programa kademeli olarak eklenir."
      ]
    },
    {
      "h2": "Ekran ve telefon kullanımının payı",
      "paragraflar": [
        "Telefonun göğüs hizasının altında tutulduğu her dakika, boyun bölgesindeki yükü artırır. Bu yükün tek seferde büyük olması gerekmez; gün içinde toplam süre uzadıkça birikir.",
        "Çözüm telefonu bırakmak değil, tutuş yüksekliğini ve kullanım aralıklarını değiştirmektir. Ekranı göz hizasına yaklaştırmak ve belirli aralıklarla pozisyon değiştirmek, uygulanabilir bir düzenlemedir.",
        "Bu düzenlemeler ev programının parçası olarak verilir. Klinikte kazanılan hareket kalitesinin gün boyunca korunup korunmadığını doğrudan bu alışkanlıklar belirler."
      ]
    },
    {
      "h2": "Hangi durumlarda önce hekime yönlendiriliyor",
      "paragraflar": [
        "Fizyoterapi uygulayıcı bir alandır; tanı koyma ve tedavi kararı verme yetkisi hekimdedir. Değerlendirme sırasında hekim görüşü gerektiren bir bulgu ortaya çıkarsa program başlatılmadan yönlendirme yapılır.",
        "Gece dinlenmeyle geçmeyen ve giderek artan ağrı, açıklanamayan kilo kaybı, ateşin eşlik ettiği tablo, ilerleyen güç kaybı ya da idrar ve dışkı kontrolünde değişiklik bu kapsamdadır.",
        "Çene şikâyetlerinde ise çenenin kilitlenmesi, ağzın açılıp kapanmaması ya da yutkunmayı etkileyen bulgular hekim ve diş hekimi değerlendirmesini gerektirir."
      ]
    },
    {
      "h2": "Seans dışında ne yapılıyor",
      "paragraflar": [
        "Klinikte geçen süre haftanın toplamı içinde küçük bir dilimdir. Bu yüzden her program, evde ekipman gerektirmeden uygulanabilecek birkaç hareketle birlikte planlanır. Hareket sayısı bilinçli olarak sınırlı tutulur.",
        "Ev programı klinikte birlikte çalışıldıktan sonra verilir. Kişi hareketi kendi bedeninde nasıl hissettiğini fark etmeden evde tekrarladığında kalıp yanlış yerleşebilir.",
        "Yolda geçen sürede uygulanabilecek küçük düzenlemeler de bu programın parçasıdır: oturuşta destek noktası, telefon yüksekliği ve varış öncesinde pozisyon değişimi."
      ]
    },
    {
      "h2": "İlk seansla ikinci seans arasında ne oluyor",
      "paragraflar": [
        "İlk seansın ardından hafif bir kas yorgunluğu hissedilmesi olağandır ve genellikle birkaç gün içinde geriler. Keskin, yayılan ya da giderek artan bir ağrı ise farklı bir durumdur ve bildirilmelidir.",
        "İki seans arasındaki dönem programın gerçek sınavıdır. Klinikte doğru yapılan bir hareketin evde de aynı kalıpta tekrarlanıp tekrarlanmadığı ikinci seansta birlikte kontrol edilir.",
        "Bu dönemde şikâyetin gün içindeki seyrini not almanız faydalı olur. Hangi saatte, hangi hareketten sonra ve ne kadar sürdüğü gibi ayrıntılar ikinci değerlendirmede programın yönünü belirler."
      ]
    },
    {
      "h2": "Programın ilerleyip ilerlemediği nasıl anlaşılıyor",
      "paragraflar": [
        "İlerleme seans sayısıyla değil gözlenebilir değişimlerle izlenir. Boyun ve çene şikâyetlerinde hareket genişliği, ağız açıklığı, kalıp bozulmadan yapılabilen tekrar aralığı ve günlük yaşamda zorlanılan hareketlerdeki değişim ara değerlendirmelerde ölçülür.",
        "Bu ölçümler yalnız kayıt tutmak için yapılmaz; program bunlara göre güncellenir. Beklenen değişim görülmüyorsa yaklaşım gözden geçirilir, gerektiğinde hekim değerlendirmesi önerilir.",
        "Süre ve sonuç kişiye göre değişir. Bu sayfada bir süre taahhüdü verilmez ve önceden belirlenmiş bir seans paketi üzerinden ilerlenmez."
      ]
    },
    {
      "h2": "Ağrı geçtiğinde program bitmiş olur mu",
      "paragraflar": [
        "Ağrının azalması iyi bir işarettir ama tek başına programın tamamlandığı anlamına gelmez. Ağrı çoğu zaman altta yatan hareket kısıtlılığı düzelmeden önce geriler.",
        "Bu noktada bırakılan bir programda şikâyet ilk yoğun dönemde geri dönebilir. Ağrının azaldığı dönem programın bittiği değil, yön değiştirdiği dönemdir.",
        "Odak ağrının yatıştırılmasından kademeli yüklenmeye ve dayanıklılığa kayar; günlük yaşamda zorlanılan hareketler programa taşınır ve süreç ev programına devredilerek sonlandırılır."
      ]
    },
    {
      "h2": "Randevu, ulaşım ve pratik bilgiler",
      "paragraflar": [
        "Klinik Kadıköy Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresindedir ve Kozyatağı metro istasyonuna yürüme mesafesindedir.",
        "Randevular Pazartesi ile Cumartesi arası 09:00-21:00 aralığında planlanır. Bu aralık, işe gitmeden önce ya da dönüş yolunda randevu almayı mümkün kılar. Randevu için telefonla arayabilir veya WhatsApp üzerinden yazabilirsiniz.",
        "İlk görüşmeye hareketi kısıtlamayan rahat bir kıyafetle gelmeniz yeterlidir. Görüntüleme sonuçlarınız ve varsa hekim raporunuz getirildiğinde değerlendirme daha eksiksiz yapılır."
      ]
    },
    {
      "h2": "Omuz kuşağı ve kürek kemiği çevresindeki gerginlik",
      "paragraflar": [
        "Boyun şikâyetleriyle gelen kişilerde gerginliğin asıl hissedildiği yer çoğu zaman kürek kemikleri arasıdır. Bu bölge, kolun ve başın ağırlığını taşıyan kas grubunun buluştuğu yerdir; gün boyunca öne eğik bir duruşta kalındığında sürekli çalışır durumda kalır.",
        "Değerlendirmede kürek kemiğinin kol hareketiyle birlikte nasıl kaydığı incelenir. Kürek kemiği hareketi kısıtlıysa, kolun yukarı kalkması için boyun bölgesindeki kaslar devreye girer ve yük oraya kayar.",
        "Program bu yüzden yalnız ağrının hissedildiği bölgeye değil, o bölgeye yük aktaran omuz kuşağına da yönelir. Kürek kemiği kontrolü yerleştikçe boyun bölgesindeki yüklenme azalır."
      ]
    },
    {
      "h2": "Baş ağrısının boyun kaynaklı olabildiği durumlar",
      "paragraflar": [
        "Bazı baş ağrıları boyun bölgesindeki eklem ve kas yapılarından kaynaklanabilir. Bu tabloda ağrı genellikle ensede başlar, tek tarafta belirginleşir ve boyun hareketleriyle ya da uzun süreli sabit duruşla ilişkilidir.",
        "Bu, her baş ağrısının boyundan geldiği anlamına gelmez. Baş ağrılarının tanısı hekime aittir; ani başlayan, alışılmadık şiddette ya da nörolojik belirtilerin eşlik ettiği bir baş ağrısında öncelik hekim değerlendirmesidir.",
        "Hekim değerlendirmesi sonrasında boyun kaynaklı bir tablo düşünülüyorsa fizyoterapi programa dahil olabilir. Çalışma boyun hareketliliğine, omuz kuşağına ve gün içindeki duruş alışkanlıklarına yönelir."
      ]
    },
    {
      "h2": "Uyku pozisyonu ve yastık düzeni",
      "paragraflar": [
        "Sabah en şiddetli hissedilen bir boyun gerginliğinde uyku pozisyonu değerlendirmenin parçası olur. Yüzüstü uyumak boynu uzun süre döndürülmüş bir pozisyonda tutar; bu, gece boyunca süren bir yüklenme anlamına gelir.",
        "Yastık seçiminde tek bir doğru yükseklik yoktur. Belirleyici olan, yastığın uyku pozisyonuna göre başı gövdeyle aynı hizada tutup tutmadığıdır; sırt üstü ve yan yatışta bu yükseklik farklıdır.",
        "Bu düzenlemeler tek başına şikâyeti çözmez ama programın kazandırdığının gece boyunca korunmasını sağlar. Değişikliğin etkisi ara değerlendirmede birlikte gözden geçirilir."
      ]
    }
  ],
  "sss": [
    {
      "soru": "Erenköy'den kliniğe nasıl ulaşırım?",
      "cevap": "Klinik Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresindedir ve Kozyatağı metro istasyonuna yürüme mesafesindedir. Süre çıkış noktanıza ve ulaşım tercihinize göre değişir."
    },
    {
      "soru": "Boynumdan kolun içine doğru uyuşma iniyor, ne yapmalıyım?",
      "cevap": "Değerlendirmede uyuşmanın hangi parmaklara kadar indiği, hangi baş pozisyonunda arttığı ve güç kaybının eşlik edip etmediği incelenir. İlerleyen güç kaybı ya da elde beceri kaybı varsa program başlatılmadan hekim değerlendirmesine yönlendirilirsiniz."
    },
    {
      "soru": "Boyun düzleşmesi tanısı aldım, egzersiz işe yarar mı?",
      "cevap": "Düzleşme tek başına ağrının nedeni anlamına gelmez. Program bir görüntüleme bulgusunu değiştirmeyi değil, kısıtlı olan hareketi geri kazandırmayı ve gün içindeki yüklenmeyi azaltmayı hedefler."
    },
    {
      "soru": "Çene şikâyetim için diş hekimine mi gitmeliyim, fizyoterapiste mi?",
      "cevap": "İkisi birbirinin yerine geçmez. Diş tarafını ilgilendiren kararlar ve gece plağı diş hekimine aittir; fizyoterapi çiğneme kaslarına, çene ekleminin hareketine ve boyun bölgesinin katkısına yönelir."
    },
    {
      "soru": "Ağzımı açarken ses geliyor, bu sorun mu?",
      "cevap": "Ses tek başına bir sorun anlamına gelmeyebilir. Ağrı, çiğnemede zorlanma ya da ağız açıklığında kısıtlılık eşlik ediyorsa değerlendirme yapılması uygun olur. Çene kilitlenmesi varsa hekim değerlendirmesi gerekir."
    },
    {
      "soru": "Gün içinde yolda çok vakit geçiriyorum, program buna göre kurulabiliyor mu?",
      "cevap": "Kurulabilir. Yolda geçen süredeki oturuş, telefon tutuş yüksekliği ve pozisyon değiştirme aralıkları program planlanırken konuşulur ve ev programının parçası olur."
    },
    {
      "soru": "Görüntüleme sonucum yok, yine de gelebilir miyim?",
      "cevap": "Gelebilirsiniz. Değerlendirme hareket muayenesiyle yapılır. Bulgular görüntüleme ya da hekim görüşü gerektiriyorsa yönlendirme yapılır."
    },
    {
      "soru": "Randevu saatleri iş düzenime uyar mı?",
      "cevap": "Randevular Pazartesi ile Cumartesi arası 09:00-21:00 aralığında planlanır; işe gitmeden önce ya da dönüş yolunda randevu almak bu aralıkta mümkündür."
    },
    {
      "soru": "Manuel terapi tek başına yeterli olur mu?",
      "cevap": "Elle uygulanan tekniklerle sağlanan rahatlama, egzersizle desteklenmediğinde kalıcı olmaz; çünkü kısıtlılığı üreten günlük hareket kalıbı yerinde kalır. Bu yüzden ikisi birlikte planlanır."
    },
    {
      "soru": "Program ne kadar sürer?",
      "cevap": "Süre kişiye göre değişir ve önceden bir takvim verilmez. İlerleme ara değerlendirmelerle izlenir; beklenen değişim görülmüyorsa yaklaşım gözden geçirilir."
    }
  ],
  "gorselAltMetinleri": [
    "Erenköy fizyoterapist değerlendirmesinde boyun hareket muayenesi",
    "Kozyatağı'ndaki klinikte boyun ve omuz bölgesine manuel terapi",
    "Çene eklemi değerlendirmesinde ağız açıklığının ölçülmesi",
    "Klinik reformer pilates ile gövde kontrolü çalışması"
  ]
}

export const suadiyeIcerik = {
  "slug": "suadiye-fizyoterapist",
  "title": "Suadiye fizyoterapist | Fzt. Onur Yalçın",
  "metaDescription": "Suadiye fizyoterapist arayanlar için spor yaralanmaları, diz ve ayak bileği şikâyetleri, sporla ilgili kademeli dönüş. Kozyatağı'ndaki klinikte randevu.",
  "h1": "Suadiye fizyoterapist: spor yaralanmaları ve kademeli dönüş programı",
  "heroAltBaslik": "Kozyatağı'ndaki klinik; Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
  "heroParagraf": "Suadiye fizyoterapist arayışındaysanız klinik Kadıköy Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresinde. Koşu, yürüyüş, tenis ya da salon çalışması sırasında ortaya çıkan şikâyetlerde süreç değerlendirmeyle başlar: yaralanmanın nasıl olduğu, o günden bu yana neyin değiştiği ve hangi harekette şikâyetin ortaya çıktığı birlikte incelenir.",
  "primaryCtaMetni": "Randevu için arayın: 0507 294 99 00",
  "bolumler": [
    {
      "h2": "Suadiye fizyoterapist arayışında ilk adım neden değerlendirme",
      "paragraflar": [
        "Spor kaynaklı şikâyetlerde en sık yapılan hata, ağrının geçmesini bekleyip aynı yüklenmeye geri dönmektir. Ağrı çoğu zaman doku toparlanmadan önce geriler; bu noktada eski tempoya dönüldüğünde şikâyet ilk zorlanmada geri gelir.",
        "Suadiye fizyoterapist arayışının ilk adımı bu yüzden egzersiz seçmek değil, yaralanmanın nasıl olduğunu ve o günden bu yana neyin değiştiğini anlamaktır. Değerlendirmede hangi harekette şikâyetin ortaya çıktığı, hangi yüklenmenin tolere edilebildiği ve şişlik ya da güç kaybının eşlik edip etmediği incelenir.",
        "Bulgular size anlatılır ve program bunun üzerine kurulur. Ne yapıldığını anlamadan sürdürülen bir program, spora dönüş isteği arttığı anda terk edilir."
      ]
    },
    {
      "h2": "Rekreatif spor yapan kişilerde tablo neden farklı",
      "paragraflar": [
        "Suadiye ve çevresi, düzenli yürüyüş ve koşu yapan kişilerin yoğun olduğu bir bölge. Bu grubun profesyonel sporcudan farkı, yüklenmenin planlı olmamasıdır: haftalarca ara verilip sonra uzun bir koşuya çıkmak, kademeli bir programdan çok farklı bir yüklenme üretir.",
        "Aşırı kullanım kaynaklı şikâyetler çoğu zaman tek bir olaydan değil, bu düzensiz artıştan doğar. Doku belirli bir yüklenmeye uyum sağlarken, ani sıçramalar bu uyum süresini aşar.",
        "Program bu yüzden yalnız iyileşme dönemini değil, dönüş planını da kapsar. Haftalık yüklenmenin nasıl artırılacağı, hangi zeminde ve hangi tempoyla başlanacağı birlikte belirlenir."
      ]
    },
    {
      "h2": "Ayak bileği burkulması neden tekrarlama eğiliminde",
      "paragraflar": [
        "Ayak bileği burkulması sonrasında ağrı ve şişlik gerilediğinde tablo bitmiş görünür. Oysa burkulma sırasında zedelenen yapılar arasında bedenin eklem konumunu algılama duyusu da vardır; bu duyu geri kazandırılmadığında aynı hareket yeniden burkulmaya yol açabilir.",
        "Bu yüzden programda denge ve konum duyusu çalışmaları belirgin yer tutar. Tek ayak üzerinde denge, farklı zeminlerde yüklenme ve yön değiştirme hareketleri kademeli olarak eklenir.",
        "Değerlendirmede burkulmanın kaçıncı kez olduğu, iyileşme sürecinde ne yapıldığı ve hâlâ hangi hareketlerde güvensizlik hissedildiği sorulur. Tekrarlayan burkulmalarda hekim değerlendirmesi gerekebilir."
      ]
    },
    {
      "h2": "Diz şikâyetleri ve koşuya bağlı zorlanmalar",
      "paragraflar": [
        "Koşuyla ilişkili diz şikâyetlerinde ağrının yeri tabloyu anlatır. Diz kapağı çevresinde hissedilen bir şikâyet ile dizin dış yanında, koşu ilerledikçe artan bir şikâyet farklı yüklenme tablolarına işaret eder.",
        "Değerlendirmede yalnız dize bakılmaz. Kalça çevresindeki kas dengesizliği ve ayak bileği hareketliliği, dizin koşu sırasında nasıl konumlandığını doğrudan etkiler; şikâyetin kaynağı çoğu zaman bu zincirdedir.",
        "Program kalça ve gövde kontrolünü, ayak bileği hareketliliğini ve kademeli koşu yüklenmesini birlikte ele alır. Yalnız diz çevresine yönelen bir program bu tabloda eksik kalır."
      ]
    },
    {
      "h2": "Ön çapraz bağ yaralanmaları ve dizin güven kaybı",
      "paragraflar": [
        "Ön çapraz bağ yaralanmalarından sonra sık bildirilen şikâyet ağrı değil, güven kaybıdır: diz yön değiştirirken ya da inişte boşluğa düşecekmiş gibi hissedilir. Bu his, kas kuvvetinden ayrı olarak eklem konum duyusuyla ilişkilidir.",
        "Ameliyat kararı verilmişse çerçeveyi cerrahınızın protokolü belirler; hangi hareketin ne zaman başlayabileceği bu protokole göre planlanır. Ameliyatsız izlenen durumlarda ise program hekim değerlendirmesi doğrultusunda kurulur.",
        "Her iki durumda da spora dönüş bir tarih üzerinden değil, ölçülebilir ölçütler üzerinden planlanır: kuvvet farkı, denge, sıçrama ve iniş kontrolü ile yön değiştirme becerisi birlikte değerlendirilir."
      ]
    },
    {
      "h2": "Tenisçi dirseği ve aşırı kullanım kaynaklı şikâyetler",
      "paragraflar": [
        "Dirseğin dış yanında hissedilen ve kavrama sırasında artan şikâyet, tekrarlayan yüklenmeyle ilişkilendirilir. Ad tenisi çağrıştırsa da tablo tenis oynamayan kişilerde de görülür; belirleyici olan sporun kendisi değil tekrarlanan hareketin biçimidir.",
        "Programda önce yüklenmenin geçici olarak düzenlenmesi, ardından kademeli yüklenme ile dokunun taşıma kapasitesinin artırılması hedeflenir. Tümüyle dinlenme çoğu durumda tek başına çözüm üretmez.",
        "Raket tutuşu, sap kalınlığı ve vuruş tekniği gibi ayrıntılar tabloyu etkileyebilir. Bu konular programın yanında konuşulur; teknik değişiklik gerekiyorsa antrenörle birlikte planlanması uygun olur."
      ]
    },
    {
      "h2": "Kas zorlanmaları ve ilk günlerde ne yapılmalı",
      "paragraflar": [
        "Ani bir zorlanma sonrasında ilk günlerdeki yaklaşım, sürecin geri kalanını etkiler. Bölgenin korunması, ağrı sınırları içinde hareketin sürdürülmesi ve şişliğin izlenmesi bu dönemin temel başlıklarıdır.",
        "Tam hareketsizlik çoğu durumda önerilmez; ağrı sınırları içinde yapılan kontrollü hareket, dokunun düzenli biçimde toparlanmasına katkı sağlar. Ancak bunun sınırı kişiye göre değişir ve değerlendirmeyle belirlenir.",
        "Belirgin güç kaybı, yürüyememe, hızla artan şişlik ya da şekil bozukluğu varsa öncelik hekim değerlendirmesidir. Bu sayfadaki bilgiler bilgilendirme amaçlıdır."
      ]
    },
    {
      "h2": "Spora dönüş nasıl planlanıyor",
      "paragraflar": [
        "Spora dönüş tek bir karar değil, kademeli bir süreçtir. Ağrının geçmiş olması dönüş için yeterli bir ölçüt değildir; dokunun yüklenmeyi taşıyabildiğinin gösterilmesi gerekir.",
        "Kademeler genellikle şöyle ilerler: ağrısız günlük hareket, kontrollü kuvvet çalışması, doğrusal koşu ya da tempo, yön değiştirme ve sıçrama, ardından spora özgü hareketler. Her kademeye geçiş bir öncekinin sorunsuz tamamlanmasına bağlıdır.",
        "Bu plan takvimle değil ölçütlerle ilerler. Bir kademede şikâyet ortaya çıkarsa bir önceki kademeye dönülür; bu gerileme değil, planın kendi işleyişidir."
      ]
    },
    {
      "h2": "Gövde kontrolü ve klinik reformer pilates",
      "paragraflar": [
        "Spor kaynaklı şikâyetlerin bir bölümünde sorun, zorlanan bölgenin kendisinde değil gövdenin yükü dağıtma biçimindedir. Gövde kontrolü zayıf olduğunda diz, kalça ve ayak bileği beklenenden fazla yük taşır.",
        "Klinik reformer pilates bu noktada programın parçası olabilir. Yay direnci hareketi zorlaştırmak için değil, hareketin doğru kalıpta kalmasını sağlamak için seçilir; program değerlendirme sonrasında kişiye göre kurulur.",
        "Bu çalışma sporun yerine geçmez, sporu sürdürebilmeyi hedefler. Hangi hareketlerin programa gireceği spor dalına ve değerlendirmede çıkan bulgulara göre belirlenir."
      ]
    },
    {
      "h2": "Manuel terapi hangi durumlarda kullanılıyor",
      "paragraflar": [
        "Manuel terapi, eklem ve yumuşak dokuya elle uygulanan tekniklerden oluşur. Hareket kısıtlılığı belirginse ve kişi ağrı nedeniyle egzersizi doğru kalıpta yapamıyorsa, manuel teknikler egzersize alan açmak için kullanılır.",
        "Spor kaynaklı tablolarda manuel çalışma genellikle sürecin erken döneminde daha çok yer tutar; yüklenme kademesi ilerledikçe ağırlık egzersize kayar.",
        "Manuel terapi tek başına bir program değildir. Elle sağlanan rahatlama, egzersizle desteklenmediğinde kalıcı olmaz; çünkü zorlanmayı üreten hareket biçimi yerinde kalır."
      ]
    },
    {
      "h2": "Hangi durumlarda önce hekime yönlendiriliyor",
      "paragraflar": [
        "Fizyoterapi uygulayıcı bir alandır; tanı koyma ve tedavi kararı verme yetkisi hekimdedir. Değerlendirme sırasında hekim görüşü gerektiren bir bulgu ortaya çıkarsa program başlatılmadan yönlendirme yapılır.",
        "Yaralanma anında duyulan bir kopma hissi, eklemin boşalması, üzerine basılamaması, hızla artan şişlik ya da şekil bozukluğu bu kapsamdadır.",
        "Ayrıca gece dinlenmeyle geçmeyen ve giderek artan ağrı, ateşin eşlik ettiği tablo ve ilerleyen güç kaybı hekim değerlendirmesini gerektirir."
      ]
    },
    {
      "h2": "Isınma ve toparlanma programın parçası mı",
      "paragraflar": [
        "Isınmanın amacı yalnız kas sıcaklığını artırmak değil, o gün yapılacak harekete özgü kalıpları hazırlamaktır. Bu yüzden ısınma genel bir koşudan ibaret kalmaz; spora özgü hareketlerin hafif yüklenmeyle tekrarını içerir.",
        "Toparlanma tarafında ise uyku, iki antrenman arasındaki süre ve haftalık toplam yüklenme belirleyicidir. Bunlar programın dışında kalan ama sonucunu doğrudan etkileyen kalemlerdir.",
        "Bu konular değerlendirmede konuşulur ve haftalık plan buna göre kurulur. Ne kadar dinlenileceği kişiye ve yüklenmenin türüne göre değişir."
      ]
    },
    {
      "h2": "Seans dışında ne yapılıyor",
      "paragraflar": [
        "Klinikte geçen süre haftanın toplamı içinde küçük bir dilimdir. Bu yüzden her program, evde ekipman gerektirmeden uygulanabilecek birkaç hareketle birlikte planlanır. Hareket sayısı bilinçli olarak sınırlı tutulur.",
        "Ev programı klinikte birlikte çalışıldıktan sonra verilir. Kişi hareketi kendi bedeninde nasıl hissettiğini fark etmeden evde tekrarladığında kalıp yanlış yerleşebilir.",
        "Spor yapan kişilerde ev programı, antrenman planıyla çakışmayacak biçimde düzenlenir; aynı gün hem yüksek yüklenme hem yoğun bir ev programı planlanmaz."
      ]
    },
    {
      "h2": "Programın ilerleyip ilerlemediği nasıl anlaşılıyor",
      "paragraflar": [
        "İlerleme seans sayısıyla değil ölçülebilir değişimlerle izlenir. Kuvvet farkı, eklem hareket genişliği, tek ayak dengesinde kalınabilen süre, sıçrama ve iniş kontrolü ile tolere edilebilen koşu mesafesi ara değerlendirmelerde tekrar ölçülür.",
        "Bu ölçümler dönüş kademelerinin ölçütüdür. Bir kademeye geçiş, bir önceki kademedeki ölçütlerin karşılanmasına bağlıdır.",
        "Süre ve sonuç kişiye göre değişir. Bu sayfada bir süre taahhüdü verilmez ve önceden belirlenmiş bir seans paketi üzerinden ilerlenmez."
      ]
    },
    {
      "h2": "Ağrı geçtiğinde program bitmiş olur mu",
      "paragraflar": [
        "Ağrının azalması iyi bir işarettir ama tek başına programın tamamlandığı anlamına gelmez. Spor kaynaklı tablolarda bu, en sık tekrar yaralanma nedenidir.",
        "Ağrının azaldığı dönem programın bittiği değil, yön değiştirdiği dönemdir. Odak ağrının yatıştırılmasından kademeli yüklenmeye, dayanıklılığa ve spora özgü hareketlere kayar.",
        "Program, hedeflenen spor hareketleri sorunsuz yapılabildiğinde ve ölçütler karşılandığında ev programına devredilerek sonlandırılır."
      ]
    },
    {
      "h2": "Randevu, ulaşım ve pratik bilgiler",
      "paragraflar": [
        "Klinik Kadıköy Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresindedir ve Kozyatağı metro istasyonuna yürüme mesafesindedir.",
        "Randevular Pazartesi ile Cumartesi arası 09:00-21:00 aralığında planlanır; antrenman düzeninize göre saat seçmek bu aralıkta mümkündür. Randevu için telefonla arayabilir veya WhatsApp üzerinden yazabilirsiniz.",
        "İlk görüşmeye hareketi kısıtlamayan rahat bir kıyafetle gelmeniz yeterlidir. Varsa görüntüleme sonuçlarınızı, hekim raporunuzu ve kullandığınız spor ayakkabısını getirmeniz değerlendirmeye katkı sağlar."
      ]
    },
    {
      "h2": "Yürüyüş ve koşu için zemin, ayakkabı ve tempo",
      "paragraflar": [
        "Deniz kıyısındaki düz ve uzun parkurlar, tempoyu farkında olmadan artırmayı kolaylaştırır. Manzaralı bir güzergâhta planlanan mesafenin aşılması sık karşılaşılan bir durumdur; asıl yüklenme artışı çoğu zaman burada olur.",
        "Zemin sertliği de tabloyu etkiler. Aynı mesafe, sert bir zeminde daha yüksek tekrarlı yüklenme üretir; zeminin değişmesi tek başına şikâyetin ortaya çıkmasına ya da gerilemesine yol açabilir.",
        "Ayakkabı seçiminde tek bir doğru model yoktur. Belirleyici olan ayakkabının o kişinin ayak yapısına ve alışkın olduğu yüklenmeye uygun olmasıdır; ayakkabı değişimi de kademeli yapılmalıdır, çünkü yeni bir model farklı bir yüklenme kalıbı üretir."
      ]
    },
    {
      "h2": "Kalça çevresinin dize ve ayak bileğine etkisi",
      "paragraflar": [
        "Koşu ve yürüyüş sırasında gövdenin dengesini kalça çevresindeki kaslar sağlar. Bu bölge yeterince çalışmadığında diz içe doğru kayabilir; bu kayma dizin ve ayak bileğinin taşıdığı yükü değiştirir.",
        "Bu yüzden diz ya da ayak bileği şikâyetiyle gelen bir kişide değerlendirme kalçayı da kapsar. Tek ayak üzerinde durma, çömelme ve iniş hareketlerinde gövdenin nasıl konumlandığı incelenir.",
        "Program bu bulgulara göre kurulur. Yalnız şikâyetin hissedildiği bölgeye yönelen bir çalışma, yüklenmeyi üreten zincir yerinde kaldığı sürece eksik kalır."
      ]
    },
    {
      "h2": "Yaş ilerledikçe spor sürdürülebilir mi",
      "paragraflar": [
        "Düzenli spor yapan kişilerde yıllar içinde toparlanma süresi uzayabilir ve aynı yüklenme farklı hissedilebilir. Bu, sporu bırakmayı gerektiren bir tablo değildir; planın buna göre uyarlanmasını gerektirir.",
        "Uyarlama genellikle üç başlıkta olur: haftalık yüklenmenin dağılımı, iki yoğun gün arasındaki dinlenme süresi ve kuvvet çalışmasının programdaki payı. Bu üçü değiştiğinde aynı spor sürdürülebilir hâle gelir.",
        "Bu konular değerlendirmede konuşulur ve program buna göre kurulur. Hedefler kişinin kendi spor düzeni üzerinden konur, genel bir tarif üzerinden değil."
      ]
    }
  ],
  "sss": [
    {
      "soru": "Suadiye'den kliniğe nasıl ulaşırım?",
      "cevap": "Klinik Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresindedir ve Kozyatağı metro istasyonuna yürüme mesafesindedir. Süre çıkış noktanıza ve ulaşım tercihinize göre değişir."
    },
    {
      "soru": "Koşarken dizim ağrıyor, koşmayı bırakmalı mıyım?",
      "cevap": "Karar değerlendirme sonrasında verilir. Tümüyle bırakmak çoğu durumda tek başına çözüm üretmez; genellikle yüklenmenin geçici olarak düzenlenmesi ve ardından kademeli artırılması planlanır."
    },
    {
      "soru": "Ayak bileğim sık burkuluyor, bunun nedeni ne olabilir?",
      "cevap": "Burkulma sırasında eklem konum duyusu da etkilenir. Bu duyu geri kazandırılmadığında aynı hareket yeniden burkulmaya yol açabilir. Tekrarlayan burkulmalarda hekim değerlendirmesi gerekebilir."
    },
    {
      "soru": "Spora ne zaman dönebilirim?",
      "cevap": "Dönüş bir tarih üzerinden değil ölçütler üzerinden planlanır: kuvvet farkı, denge, sıçrama ve iniş kontrolü ile yön değiştirme becerisi birlikte değerlendirilir. Süre kişiye göre değişir."
    },
    {
      "soru": "Ameliyat oldum, program nasıl kurulacak?",
      "cevap": "Çerçeveyi cerrahınızın protokolü belirler. Hangi hareketin ne zaman başlayabileceği bu protokole ve ara değerlendirmelere göre planlanır."
    },
    {
      "soru": "Yaralanmanın hemen ardından ne yapmalıyım?",
      "cevap": "Bölgenin korunması, ağrı sınırları içinde hareketin sürdürülmesi ve şişliğin izlenmesi bu dönemin temel başlıklarıdır. Belirgin güç kaybı, yürüyememe ya da hızla artan şişlik varsa öncelik hekim değerlendirmesidir."
    },
    {
      "soru": "Görüntüleme sonucum yok, yine de gelebilir miyim?",
      "cevap": "Gelebilirsiniz. Değerlendirme hareket muayenesiyle yapılır. Bulgular görüntüleme ya da hekim görüşü gerektiriyorsa yönlendirme yapılır."
    },
    {
      "soru": "Antrenman günlerimle seansları nasıl planlarım?",
      "cevap": "Program antrenman planınızla çakışmayacak biçimde düzenlenir; aynı gün hem yüksek yüklenme hem yoğun bir ev programı planlanmaz. Randevu aralığı Pazartesi ile Cumartesi arası 09:00-21:00'dir."
    },
    {
      "soru": "Klinik pilates spor performansı için gerekli mi?",
      "cevap": "Gerekli olup olmadığı değerlendirmeye bağlıdır. Gövde kontrolü zayıfsa diz, kalça ve ayak bileği beklenenden fazla yük taşır; bu durumda gövde çalışması programın parçası olabilir."
    },
    {
      "soru": "Program ne kadar sürer?",
      "cevap": "Süre kişiye göre değişir ve önceden bir takvim verilmez. İlerleme ara değerlendirmelerle izlenir; kademeye geçiş bir önceki kademedeki ölçütlerin karşılanmasına bağlıdır."
    }
  ],
  "gorselAltMetinleri": [
    "Suadiye fizyoterapist değerlendirmesinde diz ve kalça muayenesi",
    "Ayak bileği için denge ve konum duyusu çalışması",
    "Spora kademeli dönüşte kontrollü kuvvet çalışması",
    "Kozyatağı'ndaki klinikte manuel terapi uygulaması"
  ]
}

export const bostanciIcerik = {
  "slug": "bostanci-fizyoterapist",
  "title": "Bostancı fizyoterapist | Fzt. Onur Yalçın",
  "metaDescription": "Bostancı fizyoterapist arayanlar için nörolojik rehabilitasyon, ameliyat sonrası program ve denge çalışmaları. Kozyatağı'ndaki klinikte değerlendirme.",
  "h1": "Bostancı fizyoterapist: nörolojik ve ameliyat sonrası rehabilitasyon",
  "heroAltBaslik": "Kozyatağı'ndaki klinik; Pazartesi ile Cumartesi arası 09:00-21:00 randevu",
  "heroParagraf": "Bostancı fizyoterapist arayışındaysanız klinik Kadıköy Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresinde. Uzun soluklu ilerleyen programlarda, örneğin nörolojik rehabilitasyonda ve ameliyat sonrası dönemde, ulaşımın öngörülebilir olması programın sürdürülebilirliğini doğrudan etkiler. Süreç her zaman değerlendirmeyle başlar ve hedefler günlük yaşamdaki somut hareketler üzerinden konur.",
  "primaryCtaMetni": "Randevu için arayın: 0507 294 99 00",
  "bolumler": [
    {
      "h2": "Bostancı fizyoterapist arayışında süreklilik neden belirleyici",
      "paragraflar": [
        "Nörolojik rehabilitasyon ve ameliyat sonrası programlar tek seferlik işler değildir; haftalar süren ve düzenli tekrar gerektiren süreçlerdir. Böyle bir programda en büyük risk yanlış egzersiz değil, devamlılığın kopmasıdır.",
        "Bostancı fizyoterapist arayan bir kişi için önemli olan, kliniğe ulaşımın hafta içi düzenle çakışmadan tekrarlanabilmesidir. Bostancı, Anadolu yakasının ulaşım bağlantılarının yoğunlaştığı bir noktada; bu, düzenli gidiş gelişi öngörülebilir kılar.",
        "Randevuların Pazartesi ile Cumartesi arası 09:00-21:00 aralığında planlanabilmesi de aynı amaca hizmet eder. Refakatçiyle gelen kişilerde saat seçiminin esnek olması, programın sürdürülebilmesinde belirleyici olur."
      ]
    },
    {
      "h2": "Nörolojik rehabilitasyon hangi durumlarda gündeme geliyor",
      "paragraflar": [
        "Nörolojik rehabilitasyon, sinir sistemini ilgilendiren bir tablo sonrasında hareket, denge ve günlük yaşam becerilerinin yeniden düzenlenmesini kapsar. İnme sonrası dönem, multipl skleroz ve Parkinson gibi durumlar bu başlık altında değerlendirilir.",
        "Bu programlarda hedefler soyut bir iyileşme tarifi üzerinden değil, günlük yaşamdaki somut hareketler üzerinden konur: yataktan kalkabilmek, dengeyi kaybetmeden dönebilmek, merdivende tutunmadan basabilmek gibi.",
        "Süreç kişiye göre değişir ve çoğu zaman uzun soluklu ilerler. Bir süre taahhüdü verilmez; ilerleme ara değerlendirmelerle izlenir ve program buna göre güncellenir."
      ]
    },
    {
      "h2": "İnme sonrası dönemde neler çalışılıyor",
      "paragraflar": [
        "İnme sonrası dönemde program, etkilenen tarafın hareketini geri kazandırmaya ve iki tarafın birlikte çalışmasına yönelir. Değerlendirmede kas tonusu, hareketin hangi kalıpta ortaya çıktığı, denge ve yürüyüşün nasıl ilerlediği incelenir.",
        "Bobath yaklaşımında hedef, hareketi zorla ortaya çıkarmak değil, doğru kalıpta ortaya çıkmasına imkân veren bir ortam kurmaktır. Bu yüzden pozisyonlama ve destek verilen noktalar programın parçasıdır.",
        "Ailenin sürece katılımı bu tabloda ayrı bir başlıktır. Gün içinde nasıl destek verileceği, hangi hareketlerde yardım edileceği ve hangilerinde kişinin kendi başına denemesine izin verileceği birlikte çalışılır."
      ]
    },
    {
      "h2": "Multipl skleroz ve Parkinson'da fizyoterapinin yeri",
      "paragraflar": [
        "Multipl skleroz ile yaşayan kişilerde program, yorgunluğun yönetimini gözeterek kurulur. Aynı egzersiz, yorgunluğun yüksek olduğu bir günde farklı bir yüklenme anlamına gelir; bu yüzden günlük değişkenlik programın parçası olarak ele alınır.",
        "Parkinson'da ise hareketin başlatılması, adım uzunluğunun korunması, dönüş hareketleri ve denge öne çıkar. Çalışma bu başlıklara yönelir ve günlük yaşamdaki hareketlere taşınır.",
        "Her iki durumda da tanı, ilaç ve tedavi kararları hekime aittir. Fizyoterapi hekimin koyduğu çerçeve içinde, hareket ve bağımsızlık tarafına yönelen bir uygulamadır."
      ]
    },
    {
      "h2": "Denge, yürüme ve düşme riskinin azaltılması",
      "paragraflar": [
        "Dengeyi kuran sistem görme, iç kulak ve bedenin kendi konum duyusunun birlikte çalışmasına dayanır. Değerlendirmede bu bileşenlerden hangisinin öne çıktığı ve hangi durumlarda dengenin bozulduğu incelenir.",
        "Yürüme değerlendirmesinde adım uzunluğu, iki adım arasındaki genişlik, dönüş sırasında ne olduğu ve zemin değiştiğinde yürüyüşün nasıl etkilendiği ele alınır. Bu bulgular programın yönünü doğrudan belirler.",
        "Ev içi düzenleme bu başlığın ayrılmaz parçasıdır. Halı kenarları, aydınlatma, banyo zemini ve tutunma noktaları, egzersiz programı kadar belirleyici olabilir."
      ]
    },
    {
      "h2": "Baş dönmesi ve vestibüler değerlendirme",
      "paragraflar": [
        "Baş dönmesi tek bir nedene bağlanamayacak kadar geniş bir başlıktır. İç kulak kaynaklı tablolar, kan basıncıyla ilişkili durumlar ve boyun bölgesinden kaynaklanan şikâyetler benzer biçimde tarif edilebilir.",
        "Bu yüzden değerlendirme ve tanı önce hekim tarafından yapılır. Hekim değerlendirmesi sonrasında vestibüler kaynaklı bir tablo düşünülüyorsa fizyoterapi programa dahil olabilir.",
        "Vestibüler çalışmada göz, baş ve gövde hareketlerinin birlikte düzenlenmesi hedeflenir. Program kademeli ilerler; hangi hareketin ne zaman ekleneceği kişinin tolerans düzeyine göre belirlenir."
      ]
    },
    {
      "h2": "Ameliyat sonrası rehabilitasyonda çerçeveyi kim belirliyor",
      "paragraflar": [
        "Ameliyat sonrası programlarda çerçeveyi cerrahınızın protokolü belirler. Hangi hareketin ne zaman başlayabileceği, ne kadar yük verilebileceği ve hangi pozisyonlardan kaçınılacağı bu protokolde tanımlıdır.",
        "Fizyoterapi bu çerçevenin içinde çalışır. Protokolde tanımlı olmayan bir hareketin programa alınması için hekim onayı gerekir; bu, süreci yavaşlatmak değil güvenli tutmaktır.",
        "İlk görüşmeye ameliyat raporunuzu ve varsa cerrahınızın verdiği protokolü getirmeniz, programın doğru kurulması için önemlidir."
      ]
    },
    {
      "h2": "Diz, omuz, kalça ve omurga ameliyatları sonrası",
      "paragraflar": [
        "Diz ameliyatlarından sonra hareket genişliğinin geri kazanılması ve uyluk ön kaslarının yeniden devreye girmesi erken dönemin başlıklarıdır. Omuz ameliyatlarında ise korunması gereken hareket yönleri protokolde tanımlıdır ve bunlara uyulur.",
        "Kalça ameliyatlarından sonra belirli pozisyonlardan kaçınılması gerekebilir; günlük yaşamda oturma yüksekliği ve ayakkabı giyme gibi hareketler bu nedenle programın parçası olur.",
        "Omurga ameliyatlarında ise gövde kontrolü ve günlük hareketlerin nasıl yapılacağı öne çıkar. Her dört başlıkta da program protokole ve ara değerlendirmelere göre ilerler."
      ]
    },
    {
      "h2": "Prehabilitasyon: ameliyat öncesi hazırlık",
      "paragraflar": [
        "Ameliyat kararı verilmiş ve tarihe kadar zaman varsa, bu dönem hazırlık için kullanılabilir. Ameliyat öncesinde korunan hareket genişliği ve kas kuvveti, sonrasındaki sürecin başlangıç noktasını belirler.",
        "Hazırlık programı ağır bir çalışma anlamına gelmez. Amaç mevcut durumu korumak ve ameliyat sonrasında yapılacak hareketleri önceden öğrenmektir; koltuk değneği kullanımı gibi başlıklar da bu döneme girer.",
        "Bu programın içeriği de cerrahınızın görüşüyle birlikte belirlenir ve hekim değerlendirmesinin yerine geçmez."
      ]
    },
    {
      "h2": "Refakatçiyle gelen kişilerde program nasıl planlanıyor",
      "paragraflar": [
        "Nörolojik ve ameliyat sonrası programlarda kişi çoğu zaman bir yakınıyla birlikte gelir. Bu durumda program yalnız kişiye değil, gün içinde destek verecek kişiye de anlatılır.",
        "Evde hangi hareketlerde yardım edileceği, hangilerinde kişinin kendi başına denemesine izin verileceği ve transfer hareketlerinin nasıl yapılacağı klinikte birlikte çalışılır. Yanlış destek, kazanılan bağımsızlığı geri alabilir.",
        "Randevu saatinin refakatçinin düzenine uyması da pratik bir gerekliliktir. Randevu aralığının geniş tutulmasının nedenlerinden biri budur."
      ]
    },
    {
      "h2": "Ev programı ve ailenin rolü",
      "paragraflar": [
        "Klinikte geçen süre haftanın toplamı içinde küçük bir dilimdir. Uzun soluklu programlarda ev çalışması bu yüzden tamamlayıcı değil, sürecin ana taşıyıcısıdır.",
        "Ev programı kısa tutulur ve her hareket klinikte birlikte çalışıldıktan sonra verilir. Uzun bir liste çoğu zaman uygulanmadan kalır; sabit bir saate bağlanan kısa bir program daha çok uygulanır.",
        "Ara kontrollerde yalnız hareketler değil bu düzen de gözden geçirilir. Uygulanmayan bir hareket varsa nedeni sorulur; çözüm çoğu zaman hareketi zorlaştırmak değil, uygulanabilir hâle getirmektir."
      ]
    },
    {
      "h2": "Hangi durumlarda önce hekime yönlendiriliyor",
      "paragraflar": [
        "Fizyoterapi uygulayıcı bir alandır; tanı koyma ve tedavi kararı verme yetkisi hekimdedir. Değerlendirme sırasında hekim görüşü gerektiren bir bulgu ortaya çıkarsa program başlatılmadan yönlendirme yapılır.",
        "Yeni ortaya çıkan güç kaybı, konuşma ya da yutma güçlüğü, görme değişikliği, ani başlayan denge kaybı ve bilinç değişikliği acil hekim değerlendirmesi gerektirir.",
        "Ameliyat sonrası dönemde ise yara yerinde artan kızarıklık, akıntı, ateş ya da beklenmedik şişlik durumunda program duraklatılır ve cerrahınıza yönlendirme yapılır."
      ]
    },
    {
      "h2": "İlerleme nasıl ölçülüyor",
      "paragraflar": [
        "Uzun soluklu programlarda ilerleme yavaş olabilir; bu yüzden ölçüm daha da önemlidir. Günlük yaşamdaki somut hareketler üzerinden konan hedefler, ilerlemenin görülebilmesini sağlar.",
        "Yataktan kalkma, ayağa geçiş, belirli bir mesafeyi yürüyebilme, dengeyi kaybetmeden dönebilme gibi hareketler ara değerlendirmelerde tekrar denenir ve karşılaştırılır.",
        "Beklenen değişim görülmüyorsa yaklaşım gözden geçirilir ve gerektiğinde hekim değerlendirmesi önerilir. Süre ve sonuç kişiye göre değişir; bu sayfada bir süre taahhüdü verilmez."
      ]
    },
    {
      "h2": "Programın sıklığı ve süresi nasıl belirleniyor",
      "paragraflar": [
        "Seans sıklığı ve süresi değerlendirme sonrasında belirlenir; önceden belirlenmiş bir paket ya da sabit bir seans sayısı üzerinden ilerlenmez. Sıklık, kişinin toleransına ve programın hangi aşamasında olunduğuna göre değişir.",
        "Erken dönemde daha sık, ilerleyen dönemde daha seyrek bir düzen kurulması sık karşılaşılan bir seyirdir. Seyreltme, ev programının yerleşmesiyle birlikte planlanır.",
        "Bu düzen sabit değildir. Tablo değiştiğinde sıklık yeniden ayarlanır; kararlar ara değerlendirmelerde birlikte alınır."
      ]
    },
    {
      "h2": "Gövde kontrolü ve klinik reformer pilates",
      "paragraflar": [
        "Denge ve yürüme çalışmalarının bir bölümünde gövde kontrolü belirleyicidir. Gövde yükü dengeli dağıtamadığında, denge çalışmaları beklenen katkıyı vermez.",
        "Klinik reformer pilates bu noktada programın parçası olabilir. Yay direnci hareketi zorlaştırmak için değil, hareketin doğru kalıpta kalmasını sağlamak için seçilir; destekli bir ortamda çalışmayı mümkün kılar.",
        "Uygun olup olmadığı değerlendirme sonrasında belirlenir. Nörolojik tablolarda bu karar hekim değerlendirmesiyle birlikte ele alınır."
      ]
    },
    {
      "h2": "Randevu, ulaşım ve pratik bilgiler",
      "paragraflar": [
        "Klinik Kadıköy Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresindedir ve Kozyatağı metro istasyonuna yürüme mesafesindedir.",
        "Randevular Pazartesi ile Cumartesi arası 09:00-21:00 aralığında planlanır. Refakatçiyle gelen kişilerde saat seçimi bu aralıkta esnek biçimde yapılabilir. Randevu için telefonla arayabilir veya WhatsApp üzerinden yazabilirsiniz.",
        "İlk görüşmeye hareketi kısıtlamayan rahat bir kıyafetle gelmeniz yeterlidir. Ameliyat raporu, cerrahınızın protokolü, hekim raporları ve görüntüleme sonuçları getirildiğinde değerlendirme daha eksiksiz yapılır."
      ]
    },
    {
      "h2": "Uzun soluklu programda beklentinin doğru kurulması",
      "paragraflar": [
        "Nörolojik rehabilitasyonda ve büyük ameliyatların ardından ilerleme düz bir çizgi izlemez. İyi geçen bir haftayı daha durağan bir hafta izleyebilir; bu, programın işlemediği anlamına gelmez.",
        "Beklentinin baştan doğru kurulması bu yüzden sürecin parçasıdır. Neyin ne kadar sürede beklenebileceği değil, neyin ölçüleceği konuşulur; ölçülen bir hedef, durağan dönemlerde bile ilerlemenin görülmesini sağlar.",
        "Gerçekçi olmayan bir beklenti, ilerleme olduğu hâlde programın erken bırakılmasına yol açabilir. Ara değerlendirmelerde bulgular karşılaştırmalı olarak paylaşılır."
      ]
    },
    {
      "h2": "Yorgunluğun programa etkisi",
      "paragraflar": [
        "Uzun soluklu programlarda yorgunluk, egzersizin kendisi kadar belirleyicidir. Aynı hareket, yorgunluğun yüksek olduğu bir günde farklı bir yüklenme anlamına gelir ve hareket kalıbı bozulabilir.",
        "Bu yüzden program günlük değişkenliği hesaba katarak kurulur. Yoğun bir günde kısaltılmış bir seçenek, hiç yapmamaktan daha iyidir; ev programı bu esneklikle birlikte verilir.",
        "Yorgunluğun gün içindeki seyrini not almanız faydalı olur. Hangi saatte daha iyi hissedildiği, egzersiz saatinin belirlenmesinde doğrudan kullanılır."
      ]
    },
    {
      "h2": "Ağrı yönetimi programın neresinde",
      "paragraflar": [
        "Ameliyat sonrası dönemde ve bazı nörolojik tablolarda ağrı, hareketin önündeki ilk engeldir. Ağrının tümüyle geçmesini beklemek çoğu zaman süreci uzatır; hedef, hareketin ağrı sınırları içinde sürdürülebilmesidir.",
        "Bu sınır kişiye göre değişir ve değerlendirmeyle belirlenir. Egzersiz sırasında hissedilen hafif zorlanma ile keskin ya da yayılan bir ağrı birbirinden ayrılır; ikincisi bildirilmelidir.",
        "Ağrı kesici kullanımı ve ilaç kararları hekime aittir. Fizyoterapi programı bu kararlarla çelişmeyecek biçimde planlanır."
      ]
    },
    {
      "h2": "Klinik dışındaki hareket: yürüyüş ve günlük etkinlik",
      "paragraflar": [
        "Uzun soluklu programlarda seans dışındaki hareketin toplamı, seansın kendisinden daha büyük bir yer tutar. Gün içinde ne kadar ayakta kalındığı, kaç kez oturup kalkıldığı ve kısa yürüyüşlerin yapılıp yapılmadığı programın seyrini etkiler.",
        "Bu nedenle günlük etkinlik de değerlendirmenin parçasıdır. Amaç bir hedef adım sayısı koymak değil, kişinin mevcut düzeyini görmek ve oradan kademeli olarak artırmaktır; ani artışlar yorgunluğu ve şikâyeti tetikleyebilir.",
        "Yürüyüş güvenliği ayrı bir başlıktır. Denge sorunu bulunan kişilerde yürüyüşün nerede, hangi zeminde ve gerekiyorsa hangi destekle yapılacağı birlikte planlanır."
      ]
    }
  ],
  "sss": [
    {
      "soru": "Bostancı'dan kliniğe nasıl ulaşırım?",
      "cevap": "Klinik Kozyatağı'nda, Gülbahar Sokak üzerindeki Ege Yıldız Sitesi No:15 adresindedir ve Kozyatağı metro istasyonuna yürüme mesafesindedir. Süre çıkış noktanıza ve ulaşım tercihinize göre değişir."
    },
    {
      "soru": "Ameliyat oldum, programa ne zaman başlayabilirim?",
      "cevap": "Başlama zamanını cerrahınızın protokolü belirler. İlk görüşmeye ameliyat raporunuzu ve varsa protokolü getirmeniz, programın doğru kurulması için önemlidir."
    },
    {
      "soru": "İnme sonrası fizyoterapiden ne beklenebilir?",
      "cevap": "Hedefler günlük yaşamdaki somut hareketler üzerinden konur: yataktan kalkabilmek, dengeyi kaybetmeden dönebilmek gibi. Süreç kişiye göre değişir ve bir süre taahhüdü verilmez."
    },
    {
      "soru": "Refakatçiyle gelebilir miyim?",
      "cevap": "Gelebilirsiniz. Program yalnız size değil, gün içinde destek verecek yakınınıza da anlatılır; transfer hareketleri ve evde nasıl destek verileceği klinikte birlikte çalışılır."
    },
    {
      "soru": "Baş dönmem var, doğrudan fizyoterapiye gelebilir miyim?",
      "cevap": "Baş dönmesinin nedeni birden fazla olabilir; değerlendirme ve tanı önce hekim tarafından yapılır. Vestibüler kaynaklı bir tablo düşünülüyorsa fizyoterapi programa dahil olabilir."
    },
    {
      "soru": "Seanslar hangi sıklıkla planlanıyor?",
      "cevap": "Sıklık ve süre değerlendirme sonrasında belirlenir. Erken dönemde daha sık, ilerleyen dönemde daha seyrek bir düzen sık karşılaşılan bir seyirdir; önceden belirlenmiş bir paket üzerinden ilerlenmez."
    },
    {
      "soru": "Ameliyat öncesinde hazırlık yapılabilir mi?",
      "cevap": "Yapılabilir. Ameliyat öncesinde korunan hareket genişliği ve kas kuvveti, sonrasındaki sürecin başlangıç noktasını belirler. Programın içeriği cerrahınızın görüşüyle birlikte belirlenir."
    },
    {
      "soru": "Düşme riskini azaltmak için neler yapılıyor?",
      "cevap": "Denge ve yürüme çalışmalarının yanında ev içi düzenleme programın parçasıdır: halı kenarları, aydınlatma, banyo zemini ve tutunma noktaları birlikte gözden geçirilir."
    },
    {
      "soru": "Uzun süreli bir programı sürdürebilecek miyim?",
      "cevap": "Sürdürülebilirlik program kurulurken hesaba katılır: ulaşım, randevu saati ve ev programının günlük düzene oturması birlikte planlanır. Uygulanmayan bir hareket varsa nedeni sorulur ve program uygulanabilir hâle getirilir."
    },
    {
      "soru": "Görüntüleme ve raporlarımı getirmem gerekir mi?",
      "cevap": "Getirmeniz değerlendirmeyi eksiksiz kılar. Ameliyat raporu, cerrah protokolü, hekim raporları ve görüntüleme sonuçları programın doğru kurulmasına doğrudan katkı sağlar."
    }
  ],
  "gorselAltMetinleri": [
    "Bostancı fizyoterapist değerlendirmesinde yürüyüş analizi",
    "Nörolojik rehabilitasyonda denge ve transfer çalışması",
    "Ameliyat sonrası dönemde kontrollü hareket çalışması",
    "Kozyatağı'ndaki klinikte kişiye özel program planlaması"
  ]
}

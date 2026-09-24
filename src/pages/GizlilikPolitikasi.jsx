// KVKK aydınlatma metni + gizlilik ve çerez politikası.
//
// Google Ads, reklamın düştüğü sayfada kişisel veri toplanıyorsa (iletişim formu)
// ve ölçüm çerezleri kullanılıyorsa erişilebilir bir gizlilik politikası bekler.
// Metin aynı zamanda 6698 sayılı KVKK'nın aydınlatma yükümlülüğünü karşılamak
// üzere yazılmıştır.

import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useSeo, SITE_URL } from '../hooks/useSeo.js'
import { BRAND, BRAND_KISA, NAP } from '../config/site.js'

const ADRES = NAP.adres
const EPOSTA = 'fztonuryalcin@gmail.com'

const bolumler = [
  {
    baslik: '1. Veri Sorumlusu',
    icerik: [
      `Bu internet sitesi ${BRAND} tarafından işletilmektedir. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatını taşıyan taraf aşağıda belirtilmiştir.`,
    ],
    liste: [
      `Veri sorumlusu: ${BRAND}`,
      `Adres: ${ADRES}`,
      `Telefon: ${NAP.telefon}`,
      `E-posta: ${EPOSTA}`,
    ],
  },
  {
    baslik: '2. Hangi Verileri Topluyoruz',
    icerik: [
      'Sitede iki tür veri işlenir. Birincisi sizin doğrudan ilettiğiniz iletişim bilgileri, ikincisi site kullanımına ilişkin teknik ve ölçüm verileridir.',
    ],
    liste: [
      'İletişim formu üzerinden: ad soyad, telefon numarası ve isteğe bağlı olarak yazdığınız mesaj.',
      'Telefon veya WhatsApp üzerinden bize ulaştığınızda: telefon numaranız ve görüşme sırasında paylaştığınız bilgiler.',
      'Site kullanımına ilişkin: ziyaret edilen sayfalar, siteye hangi bağlantı üzerinden gelindiği, tarayıcı ve cihaz bilgisi, IP adresi kaynaklı yaklaşık konum bilgisi.',
    ],
  },
  {
    baslik: '3. Sağlık Bilgileriniz Hakkında Önemli Uyarı',
    icerik: [
      'Sağlık verileri, KVKK kapsamında özel nitelikli kişisel veri sayılır ve daha yüksek koruma gerektirir. Bu nedenle internet sitesindeki iletişim formu, sağlık bilgisi toplamak için tasarlanmamıştır.',
      'Şikayetinizin ayrıntılarını, tanınızı, kullandığınız ilaçları veya tetkik sonuçlarınızı form alanına yazmamanızı öneririz. Bu bilgileri randevu sırasında klinikte ya da telefonda paylaşmanız hem gizliliğiniz hem de doğru değerlendirme açısından daha uygundur.',
      'Formun mesaj alanına kendi isteğinizle sağlık bilgisi yazmanız halinde bu bilgi, yalnızca size dönüş yapabilmek amacıyla işlenir ve randevu süreci tamamlandıktan sonra silinir.',
    ],
  },
  {
    baslik: '4. Verileri Hangi Amaçla İşliyoruz',
    icerik: [],
    liste: [
      'İlettiğiniz randevu ve bilgi taleplerine dönüş yapmak.',
      'Randevu planlaması yapmak ve size uygun zamanı belirlemek.',
      'Klinik hizmetinin yürütülmesi ve yasal kayıt yükümlülüklerinin yerine getirilmesi.',
      'Sitenin kullanımını ölçmek, hangi sayfaların işe yaradığını anlamak ve reklam çalışmalarının performansını değerlendirmek.',
    ],
  },
  {
    baslik: '5. Hukuki Sebep',
    icerik: [
      'İletişim ve randevu talebiniz üzerine işlenen veriler, KVKK madde 5/2-c uyarınca bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması ve madde 5/2-f uyarınca meşru menfaat kapsamında işlenir.',
      'Zorunlu olmayan ölçüm ve reklam çerezleri ise açık rızanıza dayanır. Tarayıcı ayarlarınızdan bu çerezleri engelleyebilirsiniz.',
    ],
  },
  {
    baslik: '6. Çerezler ve Ölçüm Araçları',
    icerik: [
      'Sitede aşağıdaki üçüncü taraf hizmetleri kullanılmaktadır. Bu hizmetler kendi çerezlerini yerleştirebilir ve verileri kendi gizlilik politikaları çerçevesinde işler.',
    ],
    liste: [
      'Google Ads etiketi (gtag.js): reklamların hangi ziyaretçi eylemleriyle sonuçlandığını ölçmek için kullanılır. Ölçülen eylemler; WhatsApp bağlantısına tıklama, telefon numarasına tıklama ve iletişim formunun gönderilmesidir.',
      'Google Haritalar: iletişim sayfasındaki ve alt bilgideki harita, Google sunucularından yüklenir.',
      'FormSubmit: iletişim formunun gönderimini e-postaya ileten üçüncü taraf hizmettir. Form gönderdiğinizde girdiğiniz bilgiler bu hizmet üzerinden iletilir ve hizmetin sunucuları yurt dışında bulunur.',
    ],
  },
  {
    baslik: '7. Verilerin Aktarımı',
    icerik: [
      'Kişisel verileriniz pazarlama amacıyla üçüncü kişilere satılmaz veya devredilmez.',
      'Yukarıda sayılan teknik hizmetlerin kullanılması nedeniyle bazı veriler, hizmet sağlayıcıların yurt dışındaki sunucularında işlenebilir. Bunun dışında veriler yalnızca yasal olarak yetkili kamu kurum ve kuruluşlarına, mevzuatın zorunlu kıldığı hallerde aktarılır.',
    ],
  },
  {
    baslik: '8. Saklama Süresi',
    icerik: [
      'İletişim formu üzerinden gelen talepler, talebin sonuçlandırılmasının ardından makul bir süre içinde silinir. Klinikte tedavi süreci başlamışsa sağlık hizmetine ilişkin kayıtlar, ilgili sağlık mevzuatının öngördüğü süre boyunca saklanır.',
      'Ölçüm ve reklam çerezlerinin saklama süresi, ilgili hizmet sağlayıcının politikasına tabidir.',
    ],
  },
  {
    baslik: '9. KVKK Kapsamındaki Haklarınız',
    icerik: [
      'KVKK madde 11 uyarınca aşağıdaki haklara sahipsiniz:',
    ],
    liste: [
      'Kişisel verinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme.',
      'İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme.',
      'Yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri bilme.',
      'Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme.',
      'Verilerin silinmesini veya yok edilmesini isteme.',
      'İşlemenin hukuka aykırı olması sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.',
    ],
  },
  {
    baslik: '10. Başvuru',
    icerik: [
      `Yukarıdaki haklarınıza ilişkin taleplerinizi ${EPOSTA} adresine e-posta göndererek veya ${ADRES} adresine yazılı olarak ileterek kullanabilirsiniz. Başvurunuz, talebin niteliğine göre en geç otuz gün içinde sonuçlandırılır.`,
    ],
  },
]

export default function GizlilikPolitikasi() {
  useSeo({
    title: `Gizlilik Politikası ve KVKK Aydınlatma Metni | ${BRAND_KISA}`,
    description:
      'Fizyoterapist Onur Yalçın internet sitesinde toplanan kişisel verilerin işlenmesi, çerez kullanımı ve KVKK kapsamındaki haklarınıza ilişkin aydınlatma metni.',
    canonical: `${SITE_URL}/gizlilik-politikasi`,
    breadcrumbs: [
      { name: 'Ana Sayfa', url: '/' },
      { name: 'Gizlilik Politikası', url: '/gizlilik-politikasi' },
    ],
  })

  return (
    <>
      <Navbar />
      <main>
        <header style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: '#fff', padding: '7.5rem 0 3.5rem' }}>
          <div className="container" style={{ maxWidth: 820 }}>
            <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, lineHeight: 1.25 }}>
              Gizlilik Politikası ve KVKK Aydınlatma Metni
            </h1>
            <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75 }}>
              Bu sayfa, internet sitemiz üzerinden hangi bilgilerin toplandığını, bu bilgilerin
              neden işlendiğini ve verileriniz üzerindeki haklarınızı açıklar.
            </p>
          </div>
        </header>

        <section className="section" style={{ padding: '3.5rem 0 4.5rem' }}>
          <div className="container" style={{ maxWidth: 820 }}>
            {bolumler.map((b) => (
              <div key={b.baslik} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '0.9rem' }}>{b.baslik}</h2>
                {b.icerik.map((p, i) => (
                  <p key={i} style={{ color: 'var(--text-light)', lineHeight: 1.85, marginBottom: '0.9rem' }}>
                    {p}
                  </p>
                ))}
                {b.liste && (
                  <ul style={{ listStyle: 'disc', margin: '0 0 0 1.4rem', color: 'var(--text-light)', lineHeight: 1.85 }}>
                    {b.liste.map((l, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>{l}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

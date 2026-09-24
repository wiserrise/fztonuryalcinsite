// Hizmet sayfası metinlerinin önbelleği (slug -> içerik).
//
// Ayrı bir modülde tutulmasının nedeni: hem LandingPage hem de main.jsx buna erişir.
// Önbellek LandingPage.jsx içinde dursaydı main.jsx onu içe aktarmak zorunda kalır,
// bu da tembel yüklenen sayfa parçasını ana pakete çekip kod bölmesini bozardı.
//
// Neden önceden doldurulur: sayfa gövdesi derleme sırasında sunucuda render edilir
// (scripts/prerender.mjs). Metin normalde useEffect içinde yüklendiği için sunucuda
// hiç yüklenmez ve hizmet sayfaları boş render olurdu. Önbellek önceden doldurulunca
// ilk render metni eşzamanlı olarak bulur. Aynı nedenle istemci de hidrasyondan önce
// bu sayfanın metnini buraya koyar; yoksa ilk render sunucu HTML'iyle uyuşmaz.
export const icerikOnbellek = {}

export function icerikOnbellekDoldur(slug, icerik) {
  icerikOnbellek[slug] = icerik
}

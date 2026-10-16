// Başlık metninden sayfa içi bağlantı kimliği üretir: "Bel fıtığı nasıl oluşur" -> "bel-fitigi-nasil-olusur".
// Sunucu ve tarayıcı aynı sonucu üretir (hidrasyonda kimlikler değişmez).
const HARF = { ç: 'c', ğ: 'g', ı: 'i', i̇: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u' }

export function baslikId(metin = '') {
  return String(metin)
    .toLocaleLowerCase('tr-TR')
    .replace(/[çğıöşüâîû]|i̇/g, (h) => HARF[h] || h)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

/** React çocuklarından düz metin. */
export function duzMetin(cocuk) {
  if (cocuk == null || cocuk === false) return ''
  if (typeof cocuk === 'string' || typeof cocuk === 'number') return String(cocuk)
  if (Array.isArray(cocuk)) return cocuk.map(duzMetin).join('')
  if (cocuk.props) return duzMetin(cocuk.props.children)
  return ''
}

/** Markdown metnindeki "## " başlıkları (bağlantı ve vurgu işaretleri temizlenmiş). */
export function markdownBasliklari(md = '') {
  return md
    .split('\n')
    .filter((s) => /^##\s+/.test(s))
    .map((s) => s.replace(/^##\s+/, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').trim())
    .map((metin) => ({ metin, id: baslikId(metin) }))
}

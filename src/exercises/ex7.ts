export const meta = {
  id: 'ex7',
  title: 'Verificar Palíndrome',
  description: 'Implementa la función `isPalindrome(s)` que verifica si una cadena es un palíndrome (se lee igual al revés, ignorando espacios y mayúsculas).',
}

/**
 * EXPLICACIÓN DEL EJERCICIO:
 * 
 * Un palíndrome es una palabra o frase que se lee igual hacia adelante y hacia atrás.
 * Ignorar espacios y NO diferenciar entre mayúsculas y minúsculas.
 * 
 * Ejemplos:
 *  - isPalindrome('racecar')       = true
 *  - isPalindrome('hello')         = false
 *  - isPalindrome('A man a plan a canal Panama') = true (ignorar espacios y mayúsculas)
 *  - isPalindrome('noon')          = true
 *  - isPalindrome('a')             = true (una letra siempre es palíndrome)
 *  - isPalindrome('')              = true (cadena vacía es palíndrome)
 */
export function isPalindrome(s: string): boolean {
  throw new Error('Implementa la función `isPalindrome` en src/exercises/ex7.ts')
}

export default { meta, isPalindrome }

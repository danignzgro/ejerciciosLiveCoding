export const meta = {
  id: 'ex5',
  title: 'Contar Vocales',
  description: 'Implementa la función `countVowels(s)` que cuenta cuántas vocales contiene una cadena (a, e, i, o, u, mayúsculas y minúsculas).',
}

/**
 * EXPLICACIÓN DEL EJERCICIO:
 * 
 * Debes contar todas las vocales en una cadena de texto.
 * Las vocales son: a, e, i, o, u
 * Se deben contar tanto mayúsculas como minúsculas.
 * 
 * Ejemplos:
 *  - countVowels('hello')     = 2  (e, o)
 *  - countVowels('AEIOU')     = 5  (todas)
 *  - countVowels('xyz')       = 0  (sin vocales)
 *  - countVowels('Education') = 5  (E, u, a, i, o)
 *  - countVowels('')          = 0  (cadena vacía)
 */
export function countVowels(s: string): number {
  throw new Error('Implementa la función `countVowels` en src/exercises/ex5.ts')
}

export default { meta, countVowels }

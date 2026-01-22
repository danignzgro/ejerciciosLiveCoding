export const meta = {
  id: 'ex6',
  title: 'Máximo de un Arreglo',
  description: 'Implementa la función `max(arr)` que devuelve el número más grande en un arreglo.',
}

/**
 * EXPLICACIÓN DEL EJERCICIO:
 * 
 * Debes encontrar el valor máximo (el más grande) en un arreglo de números.
 * 
 * Ejemplos:
 *  - max([1, 5, 3])      = 5
 *  - max([10, 20, 15])   = 20
 *  - max([-5, -2, -10])  = -2  (el menos negativo es el más grande)
 *  - max([42])           = 42  (un solo elemento)
 *  - max([3.5, 2.1])     = 3.5 (con decimales)
 */
export function max(arr: number[]): number {
  throw new Error('Implementa la función `max` en src/exercises/ex6.ts')
}

export default { meta, max }

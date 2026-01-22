export const meta = {
  id: 'ex8',
  title: 'Ordenar Descendente',
  description: 'Implementa la función `sortDesc(arr)` que devuelve un arreglo ordenado de mayor a menor.',
}

/**
 * EXPLICACIÓN DEL EJERCICIO:
 * 
 * Debes ordenar un arreglo de números en orden descendente (mayor a menor).
 * No modifiques el arreglo original, devuelve uno nuevo.
 * 
 * Ejemplos:
 *  - sortDesc([3, 1, 4, 1, 5])     = [5, 4, 3, 1, 1]
 *  - sortDesc([10, 20, 15])        = [20, 15, 10]
 *  - sortDesc([-5, 0, 5])          = [5, 0, -5]
 *  - sortDesc([42])                = [42]
 *  - sortDesc([])                  = []
 */
export function sortDesc(arr: number[]): number[] {
  throw new Error('Implementa la función `sortDesc` en src/exercises/ex8.ts')
}

export default { meta, sortDesc }

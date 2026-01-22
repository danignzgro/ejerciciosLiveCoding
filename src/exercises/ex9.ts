export const meta = {
  id: 'ex9',
  title: 'Filtrar Pares e Impares',
  description: 'Implementa la función `filterParity(arr, parity)` que filtra números pares (parity="even") o impares (parity="odd").',
}

/**
 * EXPLICACIÓN DEL EJERCICIO:
 * 
 * Debes filtrar un arreglo según si los números son pares o impares.
 * - parity="even": devuelve solo números pares (divisibles por 2, resto 0)
 * - parity="odd": devuelve solo números impares (resto 1 al dividir por 2)
 * 
 * Ejemplos:
 *  - filterParity([1, 2, 3, 4, 5], "even")  = [2, 4]
 *  - filterParity([1, 2, 3, 4, 5], "odd")   = [1, 3, 5]
 *  - filterParity([10, 20], "even")         = [10, 20]
 *  - filterParity([1, 3, 5], "odd")         = [1, 3, 5]
 *  - filterParity([], "even")               = []
 */
export function filterParity(arr: number[], parity: 'even' | 'odd'): number[] {
  throw new Error('Implementa la función `filterParity` en src/exercises/ex9.ts')
}

export default { meta, filterParity }

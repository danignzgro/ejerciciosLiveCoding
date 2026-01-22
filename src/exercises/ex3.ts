export const meta = {
  id: 'ex3',
  title: 'Fibonacci (n-ésimo)',
  description: 'Implementa la función `fib(n)` que devuelve el n-ésimo número de Fibonacci (0-based).',
}

/**
 * EXPLICACIÓN DEL EJERCICIO:
 * 
 * La serie de Fibonacci es una secuencia donde cada número es la suma de los dos anteriores.
 * Comienza con 0 y 1.
 * 
 * Serie: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * 
 * Como es "0-based", la indexación comienza en 0:
 *  - fib(0) = 0   (primer número)
 *  - fib(1) = 1   (segundo número)
 *  - fib(2) = 1   (0 + 1)
 *  - fib(3) = 2   (1 + 1)
 *  - fib(4) = 3   (1 + 2)
 *  - fib(5) = 5   (2 + 3)
 *  - fib(6) = 8   (3 + 5)
 *  - fib(7) = 13  (5 + 8)
 *  - fib(10) = 55
 * 
 * Debes implementar una función que devuelva el n-ésimo número de la serie.
 */
export function fib(n: number): number {
  let a = 0, b = 1, temp;
  for (let i = 0; i < n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }
  console.log(a);
  return a;
}

export default { meta, fib }

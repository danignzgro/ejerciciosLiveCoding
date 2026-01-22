export const meta = {
  id: 'ex2',
  title: 'Revertir una cadena',
  description: 'Implementa la función `reverse(s)` que devuelve la cadena invertida.',
}

// Empieza aquí: desde la línea 6 puedes implementar tu código.

// Implementa la función `reverse` debajo de este comentario.
export function reverse(s: string) {
    return s.split('').reverse().join('')
}

export default { meta, reverse }

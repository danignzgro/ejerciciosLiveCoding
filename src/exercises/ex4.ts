export const meta = {
  id: 'ex4',
  title: 'Aplanar arreglo (un nivel)',
  description: 'Implementa la función `flatten(arr)` que aplana un arreglo un nivel: [[1,2],3] → [1,2,3].',
}

// Empieza aquí: desde la línea 6 puedes implementar tu código.
// Implementa la función `flatten` debajo de este comentario.
export function flatten(arr: any[]): any[] {
  let result: any[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }
  return result;
}

export default { meta, flatten }

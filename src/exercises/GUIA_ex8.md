# 📋 Guía de Resolución - Ejercicio 8: Ordenar Descendente

## 📌 Objetivo
Implementar una función que ordene un arreglo de números de mayor a menor.

---

## 🎯 Descripción del Problema

Necesitas crear una función llamada `sortDesc` que:
- Reciba un **arreglo de números**
- Devuelva un **arreglo ordenado de mayor a menor** (descendente)
- **NO modifique** el arreglo original
- Devuelva un nuevo arreglo

---

## 📊 Ejemplos de Entrada y Salida

```typescript
sortDesc([3, 1, 4, 1, 5])   // → [5, 4, 3, 1, 1]
sortDesc([10, 20, 15])      // → [20, 15, 10]
sortDesc([-5, 0, 5])        // → [5, 0, -5]
sortDesc([42])              // → [42]
sortDesc([])                // → []
```

### Desglose:
| Entrada | Ordenado descendente | Salida |
|---------|-----|--------|
| [3, 1, 4, 1, 5] | 5 → 4 → 3 → 1 → 1 | [5, 4, 3, 1, 1] |
| [10, 20, 15] | 20 → 15 → 10 | [20, 15, 10] |
| [-5, 0, 5] | 5 → 0 → -5 | [5, 0, -5] |

---

## 🔍 Análisis Paso a Paso

Para ordenar un arreglo:

1. **Crear una copia** del arreglo (no modificar original)
2. **Aplicar ordenamiento** de mayor a menor
3. **Devolver el arreglo ordenado**

---

## 💡 Estrategias de Resolución

### Estrategia 1: Usar sort con comparador (Recomendada)
```typescript
export function sortDesc(arr: number[]): number[] {
  // Crear copia
  const copy = [...arr]
  
  // Ordenar de mayor a menor
  copy.sort((a, b) => b - a)
  
  return copy
}
```

**Explicación:**
- `[...arr]`: Crea una copia con spread operator
  - NO modifica el original
- `sort((a, b) => b - a)`: Ordenamiento personalizado
  - `b - a` ordena descendente (si > 0, b va primero)
  - `a - b` sería ascendente

**¿Cómo funciona sort()?**
```
El comparador devuelve:
- Número negativo: a va ANTES que b
- Número positivo: b va ANTES que a
- 0: no cambia orden

Para descendente: b - a
Si b > a: b - a > 0 → b va primero ✓
Si b < a: b - a < 0 → a va primero ✓
```

**Simulación con [3, 1, 4, 1, 5]:**
```
Comparaciones:
3 vs 1: 1 - 3 = -2 → 3 va primero
4 vs 1: 1 - 4 = -3 → 4 va primero
5 vs 4: 4 - 5 = -1 → 5 va primero
Resultado: [5, 4, 3, 1, 1] ✓
```

---

### Estrategia 2: Usar Array.from()
```typescript
export function sortDesc(arr: number[]): number[] {
  return Array.from(arr).sort((a, b) => b - a)
}
```

**Explicación:**
- `Array.from(arr)`: Crea una nueva copia
- El resto es igual

---

### Estrategia 3: slice() (Alternativa)
```typescript
export function sortDesc(arr: number[]): number[] {
  return arr.slice().sort((a, b) => b - a)
}
```

**Explicación:**
- `arr.slice()`: Copia sin argumentos
- Menos código pero igualmente eficiente

---

## ✅ Pasos para Implementar

1. Abre `ex8.ts`
2. **Recomendado:** Estrategia 1
3. Implementa el código
4. Guarda y prueba

---

## 🧪 Casos de Prueba

| Entrada | Salida |
|---------|--------|
| [3, 1, 4, 1, 5] | [5, 4, 3, 1, 1] |
| [10, 20, 15] | [20, 15, 10] |
| [-5, 0, 5] | [5, 0, -5] |
| [42] | [42] |
| [] | [] |

---

## 🚨 Posibles Errores

### ❌ Error: Modificar el arreglo original
```typescript
// INCORRECTO - Modifica original
export function sortDesc(arr: number[]) {
  arr.sort((a, b) => b - a)
  return arr
}

const original = [3, 1, 4]
const result = sortDesc(original)
console.log(original)  // ¡Cambió a [4, 3, 1]!
```
**Solución:** Copia primero con `[...arr]`

### ❌ Error: Orden incorrecto (ascendente)
```typescript
// INCORRECTO - Ordena de menor a mayor
sort((a, b) => a - b)  // [1, 1, 3, 4, 5]

// CORRECTO - Ordena de mayor a menor
sort((a, b) => b - a)  // [5, 4, 3, 1, 1]
```

---

## 📚 Conceptos Involucrados

- **Array.sort()**: Ordena un arreglo
- **Spread operator (...)**: Copia arreglos
- **Comparadores**: Funciones que definen orden
- **Mutabilidad**: sort() modifica el original
- **Copia superficial**: [...arr] no copia objetos internos

---

## 🎓 Puntos Clave

✓ `sort()` modifica el original: SIEMPRE copia primero
✓ Descendente: `(a, b) => b - a`
✓ Ascendente: `(a, b) => a - b`
✓ Usa `[...arr]`, `.slice()`, o `Array.from()` para copiar
✓ El comparador devuelve un número (negativo, 0, positivo)

---

## 📊 Comparación de Métodos Copia

| Método | Sintaxis | Eficiencia |
|--------|----------|-----------|
| Spread | `[...arr]` | ⭐⭐⭐⭐⭐ |
| slice() | `arr.slice()` | ⭐⭐⭐⭐⭐ |
| Array.from() | `Array.from(arr)` | ⭐⭐⭐⭐ |

---

## 🎉 ¡Listo! 

Tendrás una función que ordena arreglos descendentemente sin modificar el original.

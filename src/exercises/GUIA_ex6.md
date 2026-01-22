# 📋 Guía de Resolución - Ejercicio 6: Máximo de un Arreglo

## 📌 Objetivo
Implementar una función que encuentre el número más grande en un arreglo.

---

## 🎯 Descripción del Problema

Necesitas crear una función llamada `max` que:
- Reciba un **arreglo de números**
- Devuelva el **número más grande**
- Funcione con números negativos
- Funcione con un solo elemento

---

## 📊 Ejemplos de Entrada y Salida

```typescript
max([1, 5, 3])      // → 5
max([10, 20, 15])   // → 20
max([-5, -2, -10])  // → -2
max([42])           // → 42
max([3.5, 2.1])     // → 3.5
```

### Desglose:
| Entrada | Valor máximo | Salida |
|---------|------|--------|
| [1, 5, 3] | 5 es el mayor | 5 |
| [10, 20, 15] | 20 es el mayor | 20 |
| [-5, -2, -10] | -2 es mayor que -5 y -10 | -2 |
| [42] | Único elemento | 42 |

---

## 🔍 Análisis Paso a Paso

Para encontrar el máximo:

1. **Asumir que el primero es el máximo**
2. **Comparar con cada siguiente elemento**
3. **Actualizar si encontras uno mayor**
4. **Devolver el resultado**

---

## 💡 Estrategias de Resolución

### Estrategia 1: Bucle for (Recomendada)
```typescript
export function max(arr: number[]): number {
  let maximum = arr[0]  // Asumir el primero
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i]  // Actualizar si es mayor
    }
  }
  
  return maximum
}
```

**Explicación:**
- `maximum = arr[0]`: Comienza con el primer elemento
- `for (let i = 1; ...)`: Comienza desde el segundo
- `if (arr[i] > maximum)`: Si es mayor, actualiza
- Devuelve el máximo encontrado

**Simulación con [1, 5, 3]:**
```
Inicio: maximum = 1
i=1: arr[1]=5 > 1? Sí → maximum = 5
i=2: arr[2]=3 > 5? No → sin cambios
Retorna: 5 ✓
```

---

### Estrategia 2: Usar Math.max (Más simple)
```typescript
export function max(arr: number[]): number {
  return Math.max(...arr)
}
```

**Explicación:**
- `Math.max()`: Función nativa que devuelve el máximo
- `...arr`: Spread operator expande el arreglo en argumentos

**¿Cómo funciona?**
```typescript
Math.max(1, 5, 3)  // Devuelve 5
Math.max(...[1, 5, 3])  // Lo mismo (spread expande)
```

---

### Estrategia 3: Usar reduce (Funcional)
```typescript
export function max(arr: number[]): number {
  return arr.reduce((max, current) => 
    current > max ? current : max
  )
}
```

**Explicación:**
- `reduce()`: Acumula en un valor
- Comparar y mantener el mayor

---

## ✅ Pasos para Implementar

1. Abre `ex6.ts`
2. **Recomendado:** Estrategia 1 (entiendes la lógica)
3. O usa Estrategia 2 (más simple)
4. Guarda y prueba

---

## 🧪 Casos de Prueba

| Entrada | Salida |
|---------|--------|
| [1, 5, 3] | 5 |
| [10, 20, 15] | 20 |
| [-5, -2, -10] | -2 |
| [42] | 42 |
| [3.5, 2.1] | 3.5 |

---

## 🚨 Posibles Errores

### ❌ Error: Asumir 0 como máximo inicial
```typescript
// INCORRECTO
let maximum = 0
for (const num of arr) {
  if (num > maximum) maximum = num
}
// Si todos son negativos: [-5, -2, -10]
// Retorna 0, pero debería ser -2
```
**Solución:** Comienza con `arr[0]`

### ❌ Error: Olvidar el spread operator
```typescript
// INCORRECTO
Math.max(arr)  // Devuelve NaN, arr no es un número

// CORRECTO
Math.max(...arr)  // Expande: Math.max(1, 5, 3)
```

---

## 📚 Conceptos Involucrados

- **Comparación**: Operador `>`
- **Bucles**: Iterar arreglo
- **Acumuladores**: Variable que se actualiza
- **Math.max()**: Función nativa
- **Spread operator**: `...arr`

---

## 🎓 Puntos Clave

✓ El máximo de un arreglo es el número más grande
✓ Comienza comparación desde el primer elemento
✓ Con negativos: -2 > -5 > -10
✓ `Math.max(...arr)` es la forma más simple
✓ Bucle manual te enseña la lógica

---

## 🎉 ¡Listo! 

Tendrás una función para encontrar el máximo en cualquier arreglo.

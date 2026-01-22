# 📋 Guía de Resolución - Ejercicio 4: Aplanar Arreglo (un nivel)

## 📌 Objetivo
Implementar una función que "aplane" (flatten) un arreglo un nivel: convierte arreglos anidados en arreglos planos.

---

## 🎯 Descripción del Problema

Necesitas crear una función llamada `flatten` que:
- Reciba un **arreglo que puede contener elementos y subarreglos**
- Devuelva un **nuevo arreglo con los elementos "desagrupados un nivel"**
- Solo aplana **un nivel de profundidad** (no de forma recursiva)
- Devuelva un arreglo

---

## 📊 Ejemplos de Entrada y Salida

```typescript
flatten([[1, 2], 3])        // → [1, 2, 3]
flatten([1, [2, [3]]])      // → [1, 2, [3]]
flatten([])                 // → []
```

### Desglose de los ejemplos:

| Entrada | Proceso | Salida | Explicación |
|---------|---------|--------|-------------|
| `[[1, 2], 3]` | Aplana `[1, 2]` | `[1, 2, 3]` | El arreglo anidado se "desempaquet" |
| `[1, [2, [3]]]` | Aplana solo 1 nivel | `[1, 2, [3]]` | `[3]` sigue siendo un arreglo |
| `[]` | (vacío) | `[]` | Arreglo vacío retorna arreglo vacío |

---

## 🔍 Análisis Paso a Paso

### ¿Qué significa "aplanar un nivel"?

```
Nivel 0:  [[1, 2], 3]           ← Entrada (2 elementos: un arreglo y un número)
           ↓ aplana 1 nivel
Nivel 1:  [1, 2, 3]             ← Salida (3 elementos: todos números)

Pero si hubiera más niveles:
[1, [2, [3]]]
   ↓ aplana 1 nivel
[1, 2, [3]]                     ← Solo se desempaqueta UN nivel
   (el [3] sigue siendo un arreglo)
```

### Lógica simple:
1. Para cada elemento del arreglo:
   - Si es un arreglo, **desempaqueta sus elementos**
   - Si NO es un arreglo, **añádelo directamente**
2. Retorna el nuevo arreglo

---

## 💡 Estrategias de Resolución

### Estrategia 1: Bucle for con comprobación de tipo (Recomendada)
```typescript
export function flatten(arr: any[]): any[] {
  let result: any[] = []
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Si es un arreglo, desempaqueta sus elementos
      result.push(...item)
    } else {
      // Si no es un arreglo, añádelo directamente
      result.push(item)
    }
  }
  
  return result
}
```

**Explicación:**
- `for (const item of arr)`: Itera sobre cada elemento
- `Array.isArray(item)`: Verifica si el elemento es un arreglo
- `result.push(...item)`: El **spread operator** `...` desempaqueta el arreglo
  - `push(...[1, 2])` es lo mismo que `push(1, 2)`
- `result.push(item)`: Añade el elemento directamente si no es un arreglo

**Visualización del spread operator:**
```typescript
const arr = [1, 2, 3]
const result = []

result.push(...arr)  // Equivalente a: result.push(1, 2, 3)
console.log(result)  // [1, 2, 3]
```

---

### Estrategia 2: Usar flatMap (Alternativa moderna)
```typescript
export function flatten(arr: any[]): any[] {
  return arr.flatMap(item => 
    Array.isArray(item) ? item : [item]
  )
}
```

**Explicación:**
- `flatMap()`: Combina `map()` + `flatten(1)`
- Para cada elemento:
  - Si es un arreglo, retorna el arreglo (se aplana)
  - Si no, retorna un arreglo con ese elemento

**Ventajas:**
- Una sola línea
- Muy idiomática en JavaScript moderno

---

### Estrategia 3: Usar reduce
```typescript
export function flatten(arr: any[]): any[] {
  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      return result.concat(item)
    } else {
      return result.concat([item])
    }
  }, [])
}
```

**Explicación:**
- `reduce()`: Acumula valores en un resultado
- `concat()`: Combina arreglos sin mutar el original

---

## ✅ Pasos para Implementar

1. Abre el archivo `ex4.ts`
2. **Recomendado:** Usa la Estrategia 1 (fácil de entender y eficiente)
3. Implementa el código
4. Guarda el archivo
5. Ejecuta las pruebas para verificar que funciona

---

## 🧪 Casos de Prueba (Tests)

El archivo de pruebas (`ex4.test.ts`) incluye estos casos:

| Entrada | Salida esperada | Descripción |
|---------|-----------------|-------------|
| `[[1, 2], 3]` | `[1, 2, 3]` | Arreglos y números mezclados |
| `[1, [2, [3]]]` | `[1, 2, [3]]` | Múltiples niveles (solo aplana 1) |
| `[]` | `[]` | Arreglo vacío |

---

## 🚨 Posibles Errores

### ❌ Error: Aplanar más de un nivel (recursivo)
```typescript
// INCORRECTO - Aplana TODO
export function flatten(arr: any[]): any[] {
  return arr.flat()  // .flat() sin parámetro aplana completamente
  // Resultado: [1, 2, 3] en lugar de [1, 2, [3]]
}

// CORRECTO
export function flatten(arr: any[]): any[] {
  return arr.flat(1)  // .flat(1) aplana exactamente 1 nivel
}
```

### ❌ Error: Olvidar el spread operator
```typescript
// INCORRECTO
export function flatten(arr: any[]) {
  let result: any[] = []
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(item)  // Añade el arreglo completo como elemento
    } else {
      result.push(item)
    }
  }
  return result
}
// flatten([[1, 2], 3]) → [[1, 2], 3]  (sin aplanar)
```

**Solución:** Usa `push(...item)` para desempaquetar:
```typescript
result.push(...item)  // Añade los elementos individuales
```

### ❌ Error: Mutar el arreglo original
```typescript
// Bien (no mutamos)
const result = []
result.push(item)

// Problema (mutamos)
arr.push(item)  // Estamos modificando el original
```

---

## 📚 Conceptos Involucrados

- **Array.isArray()**: Verifica si algo es un arreglo
- **Spread operator (...)**: Desempaqueta arrays
- **Array.push()**: Añade elementos
- **Arreglos anidados**: Arrays dentro de arrays
- **Profundidad de anidamiento**: Cuántos niveles de arrays hay

---

## 🎓 Puntos Clave para Recordar

✓ `Array.isArray(item)` verifica si algo es un arreglo
✓ `push(...item)` desempaqueta un arreglo (spread operator)
✓ Solo aplana **1 nivel**, no recursivamente
✓ Crea un nuevo arreglo, no modifiques el original
✓ Funciona con cualquier tipo de elemento (números, strings, etc.)

---

## 📊 Comparación de Métodos

| Método | Claridad | Rendimiento | Recomendado |
|--------|----------|-------------|------------|
| Bucle for | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✓ Para aprender |
| flatMap | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✓ Para producción |
| reduce | ⭐⭐⭐ | ⭐⭐⭐⭐ | - Funcional |

---

## 💡 Diferencia: .flat(1) vs Nuestra Implementación

```typescript
// JavaScript nativo (no usamos en este ejercicio)
arr.flat(1)  // Aplana 1 nivel

// Nuestra implementación manual
flatten(arr)  // Exactamente lo mismo, pero lo entiendes mejor
```

---

## 🎉 ¡Listo! 

Una vez implementada correctamente, tendrás una función que aplana arreglos anidados un nivel, sin usar el método `.flat()` nativo.

---

## 🔥 Bonus: Entender el Spread Operator

```typescript
// Ejemplo visual del spread operator
const arr1 = [1, 2]
const arr2 = [3, 4]

// SIN spread: mete el arreglo como elemento
const result1 = []
result1.push(arr1)
console.log(result1)  // [[1, 2]]

// CON spread: desempaqueta los elementos
const result2 = []
result2.push(...arr1)
console.log(result2)  // [1, 2]

// Es muy útil para combinar arreglos
const combined = [...arr1, ...arr2]
console.log(combined)  // [1, 2, 3, 4]
```

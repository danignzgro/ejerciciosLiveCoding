# 📋 Guía de Resolución - Ejercicio 5: Contar Vocales

## 📌 Objetivo
Implementar una función que cuente cuántas vocales contiene una cadena de texto.

---

## 🎯 Descripción del Problema

Necesitas crear una función llamada `countVowels` que:
- Reciba una **cadena de texto**
- Cuente todas las **vocales** (a, e, i, o, u)
- Considere tanto **mayúsculas como minúsculas**
- Devuelva el **número total de vocales**

---

## 📊 Ejemplos de Entrada y Salida

```typescript
countVowels('hello')        // → 2  (e, o)
countVowels('AEIOU')        // → 5  (todas las vocales)
countVowels('xyz')          // → 0  (sin vocales)
countVowels('Education')    // → 5  (E, u, a, i, o)
countVowels('')             // → 0  (cadena vacía)
```

### Desglose de los ejemplos:
| Entrada | Análisis | Salida |
|---------|----------|--------|
| 'hello' | h-e(✓)-l-l-o(✓) | 2 |
| 'AEIOU' | A(✓)-E(✓)-I(✓)-O(✓)-U(✓) | 5 |
| 'xyz' | x-y-z | 0 |
| 'Education' | E(✓)-d-u(✓)-c-a(✓)-t-i(✓)-o(✓)-n | 5 |

---

## 🔍 Análisis Paso a Paso

Para contar vocales, necesitas:

1. **Definir qué son las vocales**: a, e, i, o, u (mayúsculas y minúsculas)
2. **Iterar sobre cada carácter** de la cadena
3. **Verificar si es una vocal**
4. **Contar los encontrados**

---

## 💡 Estrategias de Resolución

### Estrategia 1: Bucle for con includes (Recomendada)
```typescript
export function countVowels(s: string): number {
  let count = 0
  const vowels = 'aeiouAEIOU'
  
  for (const char of s) {
    if (vowels.includes(char)) {
      count++
    }
  }
  
  return count
}
```

**Explicación:**
- `vowels = 'aeiouAEIOU'`: Define todas las vocales
- `for (const char of s)`: Itera cada carácter
- `vowels.includes(char)`: Verifica si es una vocal
- `count++`: Incrementa el contador

---

### Estrategia 2: Usar filter (Funcional)
```typescript
export function countVowels(s: string): number {
  const vowels = 'aeiouAEIOU'
  return s.split('').filter(char => vowels.includes(char)).length
}
```

**Explicación:**
- `split('')`: Convierte la cadena en un arreglo
- `filter()`: Mantiene solo los caracteres que son vocales
- `length`: Cuenta cuántos quedaron

---

### Estrategia 3: Expresión regular (Avanzada)
```typescript
export function countVowels(s: string): number {
  const matches = s.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}
```

**Explicación:**
- `/[aeiou]/gi`: Busca vocales
  - `g`: global (todas las coincidencias)
  - `i`: case-insensitive (mayúsculas y minúsculas)
- `match()`: Devuelve un arreglo de coincidencias o null

---

## ✅ Pasos para Implementar

1. Abre el archivo `ex5.ts`
2. **Recomendado:** Usa la Estrategia 1
3. Implementa el código
4. Guarda el archivo
5. Ejecuta las pruebas

---

## 🧪 Casos de Prueba

| Entrada | Salida |
|---------|--------|
| 'hello' | 2 |
| 'AEIOU' | 5 |
| 'xyz' | 0 |
| 'Education' | 5 |
| '' | 0 |

---

## 🚨 Posibles Errores

### ❌ Error: No contar mayúsculas
```typescript
// INCORRECTO
const vowels = 'aeiou'  // Solo minúsculas
```
**Solución:** Incluye tanto mayúsculas como minúsculas
```typescript
const vowels = 'aeiouAEIOU'
```

### ❌ Error: Contar consonantes por error
```typescript
// INCORRECTO
if (char > 'a' && char < 'z') count++  // Cuenta todas las letras
```
**Solución:** Verifica específicamente las vocales

---

## 📚 Conceptos Involucrados

- **String.includes()**: Verifica si una cadena contiene un carácter
- **Bucles for...of**: Itera sobre caracteres
- **Contadores**: Variable que se incrementa
- **Case-insensitive**: No diferenciar mayúsculas/minúsculas

---

## 🎓 Puntos Clave

✓ Las vocales son: a, e, i, o, u
✓ Contar MAYÚSCULAS Y minúsculas
✓ Un contador comienza en 0 y se incrementa
✓ `includes()` es útil para verificar pertenencia
✓ Una cadena vacía tiene 0 vocales

---

## 🎉 ¡Listo! 

Una vez implementada, tendrás una función que cuenta vocales en cualquier cadena.

# 📋 Guía de Resolución - Ejercicio 9: Filtrar Pares e Impares

## 📌 Objetivo
Implementar una función que filtre números pares o impares de un arreglo.

---

## 🎯 Descripción del Problema

Necesitas crear una función llamada `filterParity` que:
- Reciba un **arreglo de números** y un **tipo de paridad**
- Si `parity="even"`: devuelva solo **números pares**
- Si `parity="odd"`: devuelva solo **números impares**
- Devuelva un **nuevo arreglo** filtrado

---

## 📊 Pares e Impares

### ¿Qué es par? (even)
Un número **par** es divisible por 2 (resto 0 al dividir).
```
2, 4, 6, 8, 10, 20, 100...
Verificación: número % 2 === 0
```

### ¿Qué es impar? (odd)
Un número **impar** NO es divisible por 2 (resto 1).
```
1, 3, 5, 7, 9, 11, 21...
Verificación: número % 2 === 1 (o !== 0)
```

---

## 📊 Ejemplos de Entrada y Salida

```typescript
filterParity([1, 2, 3, 4, 5], 'even')   // → [2, 4]
filterParity([1, 2, 3, 4, 5], 'odd')    // → [1, 3, 5]
filterParity([10, 20], 'even')          // → [10, 20]
filterParity([1, 3, 5], 'odd')          // → [1, 3, 5]
filterParity([], 'even')                // → []
```

### Desglose:
| Entrada | Paridad | Análisis | Salida |
|---------|---------|----------|--------|
| [1, 2, 3, 4, 5] | 'even' | 1(no), 2✓, 3(no), 4✓, 5(no) | [2, 4] |
| [1, 2, 3, 4, 5] | 'odd' | 1✓, 2(no), 3✓, 4(no), 5✓ | [1, 3, 5] |
| [10, 20] | 'even' | 10✓, 20✓ | [10, 20] |
| [1, 3, 5] | 'odd' | 1✓, 3✓, 5✓ | [1, 3, 5] |
| [] | 'even' | (vacío) | [] |

---

## 🔍 Análisis Paso a Paso

Para filtrar por paridad:

1. **Iterar sobre el arreglo**
2. **Verificar si es par o impar**
   - Par: `número % 2 === 0`
   - Impar: `número % 2 !== 0` (o `=== 1`)
3. **Mantener según la paridad pedida**
4. **Devolver el nuevo arreglo**

---

## 💡 Estrategias de Resolución

### Estrategia 1: Usar filter() (Recomendada)
```typescript
export function filterParity(arr: number[], parity: 'even' | 'odd'): number[] {
  if (parity === 'even') {
    return arr.filter(num => num % 2 === 0)
  } else {
    return arr.filter(num => num % 2 !== 0)
  }
}
```

**Explicación:**
- `arr.filter(condición)`: Mantiene elementos donde condición es true
- Para pares: `num % 2 === 0`
- Para impares: `num % 2 !== 0`

**¿Qué es %?**
```
% = módulo (resto de la división)
5 % 2 = 1 (impar)
4 % 2 = 0 (par)
10 % 2 = 0 (par)
```

**Simulación con [1, 2, 3, 4, 5], 'even':**
```
filter(num => num % 2 === 0)
1 % 2 = 1 !== 0? No
2 % 2 = 0 === 0? Sí → mantener 2
3 % 2 = 1 !== 0? No
4 % 2 = 0 === 0? Sí → mantener 4
5 % 2 = 1 !== 0? No
Resultado: [2, 4] ✓
```

---

### Estrategia 2: Versión más compacta
```typescript
export function filterParity(arr: number[], parity: 'even' | 'odd'): number[] {
  const isTarget = parity === 'even' 
    ? (num: number) => num % 2 === 0
    : (num: number) => num % 2 !== 0
  
  return arr.filter(isTarget)
}
```

**Explicación:**
- Define la función de validación según paridad
- Luego usa filter() con esa función

---

### Estrategia 3: Bucle for tradicional
```typescript
export function filterParity(arr: number[], parity: 'even' | 'odd'): number[] {
  const result = []
  
  for (const num of arr) {
    if (parity === 'even' && num % 2 === 0) {
      result.push(num)
    } else if (parity === 'odd' && num % 2 !== 0) {
      result.push(num)
    }
  }
  
  return result
}
```

**Ventajas:**
- Más explícito
- Útil si necesitas modificaciones adicionales

---

## ✅ Pasos para Implementar

1. Abre `ex9.ts`
2. **Recomendado:** Estrategia 1 (concisa y clara)
3. Implementa el código
4. Guarda y prueba

---

## 🧪 Casos de Prueba

| Entrada | Paridad | Salida |
|---------|---------|--------|
| [1, 2, 3, 4, 5] | 'even' | [2, 4] |
| [1, 2, 3, 4, 5] | 'odd' | [1, 3, 5] |
| [10, 20] | 'even' | [10, 20] |
| [1, 3, 5] | 'odd' | [1, 3, 5] |
| [] | 'even' | [] |

---

## 🚨 Posibles Errores

### ❌ Error: Confundir condiciones
```typescript
// INCORRECTO - Condición al revés
filter(num => num % 2 === 1)  // Para 'even' (mal)

// CORRECTO - Pares
filter(num => num % 2 === 0)

// CORRECTO - Impares
filter(num => num % 2 !== 0)  // o === 1
```

### ❌ Error: No considerar ambas opciones de paridad
```typescript
// INCORRECTO - Solo funciona para uno
export function filterParity(arr: number[], parity: 'even' | 'odd') {
  return arr.filter(num => num % 2 === 0)  // Siempre pares
}

// CORRECTO - Verifica paridad
if (parity === 'even') {
  return arr.filter(num => num % 2 === 0)
} else {
  return arr.filter(num => num % 2 !== 0)
}
```

---

## 📚 Conceptos Involucrados

- **Operador módulo (%)**: Resto de división
- **Array.filter()**: Mantiene elementos que cumplen condición
- **Condicionales**: if/else para verificar paridad
- **Números pares e impares**: Divisibilidad por 2
- **Tipado TypeScript**: `'even' | 'odd'`

---

## 🎓 Puntos Clave

✓ Par: `número % 2 === 0`
✓ Impar: `número % 2 !== 0` (o `=== 1`)
✓ `filter()` mantiene elementos que cumplen condición
✓ Verifica ambas opciones de paridad
✓ Un arreglo vacío retorna un arreglo vacío

---

## 📊 Tabla de Referencia - Módulo

| Número | % 2 | ¿Tipo? |
|--------|-----|--------|
| 0 | 0 | Par |
| 1 | 1 | Impar |
| 2 | 0 | Par |
| 3 | 1 | Impar |
| 4 | 0 | Par |
| 5 | 1 | Impar |
| 10 | 0 | Par |
| 11 | 1 | Impar |

---

## 🎉 ¡Listo! 

Tendrás una función que filtra números por paridad de forma simple y eficiente.

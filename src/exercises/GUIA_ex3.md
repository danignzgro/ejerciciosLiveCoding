# 📋 Guía de Resolución - Ejercicio 3: Fibonacci (n-ésimo)

## 📌 Objetivo
Implementar una función que devuelva el n-ésimo número de la secuencia de Fibonacci.

---

## 🎯 Descripción del Problema

Necesitas crear una función llamada `fib` que:
- Reciba un **índice numérico** `n` (0-based)
- Devuelva el **número de Fibonacci en esa posición**
- Funcione para cualquier índice válido
- Devuelva un número entero

---

## 📊 La Secuencia de Fibonacci

La serie de Fibonacci es una secuencia donde **cada número es la suma de los dos anteriores**:

```
Índice:  0  1  2  3  4  5   6   7   8   9   10
Valor:   0  1  1  2  3  5   8  13  21  34  55
```

### Fórmula matemática:
```
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)  para n > 1
```

### Visualización:
```
F(2) = F(1) + F(0) = 1 + 0 = 1
F(3) = F(2) + F(1) = 1 + 1 = 2
F(4) = F(3) + F(2) = 2 + 1 = 3
F(5) = F(4) + F(3) = 3 + 2 = 5
F(6) = F(5) + F(4) = 5 + 3 = 8
```

---

## 📊 Ejemplos de Entrada y Salida

```typescript
fib(0)   // → 0
fib(1)   // → 1
fib(2)   // → 1
fib(3)   // → 2
fib(5)   // → 5
fib(10)  // → 55
```

---

## 🔍 Análisis Paso a Paso

Hay varias formas de resolver esto. Analicemos las principales:

### Enfoque 1: Recursivo (Simple pero lento)
```typescript
export function fib(n: number): number {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}
```

**Ventajas:**
- Directa, refleja la definición matemática
- Fácil de entender

**Desventajas:**
- **MUY LENTA** para números grandes
- Realiza muchos cálculos repetidos
- No recomendada en producción

**¿Por qué es lenta?**
Para `fib(5)` calcula `fib(4)` y `fib(3)`, pero `fib(4)` también calcula `fib(3)` de nuevo.

---

### Enfoque 2: Iterativo (Recomendado)
```typescript
export function fib(n: number): number {
  let a = 0, b = 1
  
  for (let i = 0; i < n; i++) {
    const temp = a
    a = b
    b = temp + b
  }
  
  return a
}
```

**Ventajas:**
- ⚡ **MUY RÁPIDO** incluso para números grandes
- Usa menos memoria
- Recomendada para producción

**Desventajas:**
- Requiere entender la lógica del bucle

---

## 💡 Explicación Detallada del Enfoque Iterativo

El truco está en mantener siempre **dos valores consecutivos** y **actualizar solo dos variables**:

```typescript
let a = 0, b = 1  // Comienza: a=F(0), b=F(1)

// Para cada iteración, "avanzamos" en la serie
// El valor nuevo de a siempre es el valor viejo de b
// El valor nuevo de b es la suma de ambos
```

**Simulación paso a paso para `fib(5)`:**

```
Inicio:     a=0, b=1
Iteración 1: a=1, b=0+1=1      (ahora en F(2))
Iteración 2: a=1, b=1+1=2      (ahora en F(3))
Iteración 3: a=2, b=1+2=3      (ahora en F(4))
Iteración 4: a=3, b=2+3=5      (ahora en F(5))
Iteración 5: a=5, b=3+5=8      (ahora en F(6))
Retorna: a = 5 ✓
```

**¿Por qué `temp`?**
```typescript
const temp = a    // Guardar valor viejo de a
a = b             // a ahora es b
b = temp + b      // b es suma del a anterior + b anterior
```

Sin `temp` perderíamos el valor viejo de `a` cuando lo sobrescribimos.

---

### Enfoque 3: Iterativo con Array (Alternativa)
```typescript
export function fib(n: number): number {
  if (n === 0) return 0
  if (n === 1) return 1
  
  const fib_array = [0, 1]
  for (let i = 2; i <= n; i++) {
    fib_array[i] = fib_array[i - 1] + fib_array[i - 2]
  }
  
  return fib_array[n]
}
```

**Ventajas:**
- Fácil de entender
- Puedes ver todos los valores generados

**Desventajas:**
- Usa más memoria (guarda todos los valores)
- Más lento que solo mantener dos valores

---

## ✅ Pasos para Implementar

1. Abre el archivo `ex3.ts`
2. **Recomendado:** Usa el enfoque iterativo (Enfoque 2)
3. Implementa el código
4. Guarda el archivo
5. Ejecuta las pruebas para verificar que funciona

---

## 🧪 Casos de Prueba (Tests)

El archivo de pruebas incluye casos para verificar que devuelves los valores correctos de la serie.

---

## 🚨 Posibles Errores

### ❌ Error: Devolver un arreglo en lugar de un número
```typescript
// INCORRECTO
export function fib(n: number) {
  return [0, 1, 1, 2, 3, 5, 8, 13, 21]  // Arreglo
}
```
**Solución:** Devuelve solo el valor en la posición `n`

### ❌ Error: Olvidar el caso base para n=0
```typescript
// INCORRECTO (falla para fib(0))
export function fib(n: number) {
  let a = 0, b = 1
  for (let i = 0; i < n; i++) {  // Si n=0, no entra al bucle
    // ...
  }
  return a  // Retorna 0 ✓ (en realidad esto es correcto!)
}
```

### ❌ Error: Usar recursión sin límite
```typescript
// Lentísimo para números grandes
export function fib(n: number): number {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}
// fib(50) tarda MUCHO tiempo
```

---

## 📚 Conceptos Involucrados

- **Secuencias matemáticas**: Fibonacci
- **Iteración**: Bucles for
- **Variables auxiliares**: temp para intercambio
- **Complejidad algorítmica**: O(n) vs O(2^n)

---

## 🎓 Puntos Clave para Recordar

✓ Fibonacci: cada número es suma de los dos anteriores
✓ Usa iteración (bucle) para eficiencia
✓ Mantén dos variables: el valor anterior y actual
✓ `temp` es necesario para no perder valores
✓ Índice 0 devuelve 0, índice 1 devuelve 1

---

## 📊 Comparación de Rendimiento

| Método | Tiempo (fib(40)) | Espacio |
|--------|-----------------|---------|
| Recursivo | ~1 segundo | Muy alto |
| Iterativo | ~0.001s | Muy bajo |
| Array | ~0.001s | Alto |

**Conclusión:** ¡Usa iterativo!

---

## 🎉 ¡Listo! 

Una vez implementada correctamente con el enfoque iterativo, tendrás una solución rápida y elegante.

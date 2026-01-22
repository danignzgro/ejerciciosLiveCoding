# 📚 Live-coding Ejercicios de Programación

Una colección de ejercicios de programación organizados por nivel de dificultad, con guías detalladas de resolución.

---

## 📋 Tabla de Contenidos

- [🎯 Objetivo](#objetivo)
- [🚀 Cómo Usar](#cómo-usar)
- [📚 Ejercicios](#ejercicios)
  - [Básico](#básico)
  - [Intermedio](#intermedio)
- [🏗️ Estructura del Proyecto](#estructura-del-proyecto)
- [🛠️ Tecnologías](#tecnologías)

---

## 🎯 Objetivo

Este proyecto proporciona una plataforma interactiva para aprender y practicar programación con JavaScript/TypeScript. Cada ejercicio incluye:

✅ Descripción clara del problema
✅ Ejemplos de entrada/salida
✅ Tests automáticos para verificar tu solución
✅ Guía de resolución paso a paso
✅ Múltiples estrategias de solución

---

## 🚀 Cómo Usar

### 1. Selecciona un Ejercicio
En la página principal, verás los ejercicios organizados por dificultad.

### 2. Edita el Archivo
Abre el archivo correspondiente en `src/exercises/exN.ts` y reemplaza la función con tu solución:

```typescript
// src/exercises/ex1.ts
export function sum(a: number, b: number): number {
  return a + b  // Tu código aquí
}
```

### 3. Ejecuta los Tests
Haz clic en **"Run tests"** para verificar tu solución contra los casos de prueba.

### 4. Lee la Guía (opcional)
Si necesitas ayuda, abre el archivo `GUIA_exN.md` en la misma carpeta.

---

## 📚 Ejercicios

### Básico

#### 1️⃣ **Sumar dos números**
- **ID:** ex1
- **Archivo:** `src/exercises/ex1.ts`
- **Descripción:** Implementa una función que devuelve la suma de dos números
- **Dificultad:** ⭐ Básico
- **Guía:** [GUIA_ex1.md](src/exercises/GUIA_ex1.md)

**Ejemplo:**
```typescript
sum(1, 2)      // → 3
sum(-1, 1)     // → 0
sum(2.5, 0.5)  // → 3
```

---

#### 2️⃣ **Revertir una cadena**
- **ID:** ex2
- **Archivo:** `src/exercises/ex2.ts`
- **Descripción:** Implementa una función que invierte el orden de los caracteres
- **Dificultad:** ⭐ Básico
- **Guía:** [GUIA_ex2.md](src/exercises/GUIA_ex2.md)

**Ejemplo:**
```typescript
reverse('abc')  // → 'cba'
reverse('')]    // → ''
```

---

#### 5️⃣ **Contar Vocales**
- **ID:** ex5
- **Archivo:** `src/exercises/ex5.ts`
- **Descripción:** Implementa una función que cuenta vocales en una cadena
- **Dificultad:** ⭐ Básico
- **Guía:** [GUIA_ex5.md](src/exercises/GUIA_ex5.md)

**Ejemplo:**
```typescript
countVowels('hello')      // → 2
countVowels('AEIOU')      // → 5
countVowels('Education')  // → 5
```

---

#### 6️⃣ **Máximo de un Arreglo**
- **ID:** ex6
- **Archivo:** `src/exercises/ex6.ts`
- **Descripción:** Implementa una función que encuentra el número más grande
- **Dificultad:** ⭐ Básico
- **Guía:** [GUIA_ex6.md](src/exercises/GUIA_ex6.md)

**Ejemplo:**
```typescript
max([1, 5, 3])     // → 5
max([-5, -2, -10]) // → -2
```

---

#### 9️⃣ **Filtrar Pares e Impares**
- **ID:** ex9
- **Archivo:** `src/exercises/ex9.ts`
- **Descripción:** Implementa una función que filtra números por paridad
- **Dificultad:** ⭐ Básico
- **Guía:** [GUIA_ex9.md](src/exercises/GUIA_ex9.md)

**Ejemplo:**
```typescript
filterParity([1, 2, 3, 4, 5], 'even')  // → [2, 4]
filterParity([1, 2, 3, 4, 5], 'odd')   // → [1, 3, 5]
```

---

### Intermedio

#### 3️⃣ **Fibonacci (n-ésimo)**
- **ID:** ex3
- **Archivo:** `src/exercises/ex3.ts`
- **Descripción:** Implementa una función que devuelve el n-ésimo número de Fibonacci
- **Dificultad:** ⭐⭐ Intermedio
- **Guía:** [GUIA_ex3.md](src/exercises/GUIA_ex3.md)
- **Concepto clave:** Iteración vs recursión

**Ejemplo:**
```typescript
fib(0)   // → 0
fib(5)   // → 5
fib(10)  // → 55
```

---

#### 4️⃣ **Aplanar Arreglo (un nivel)**
- **ID:** ex4
- **Archivo:** `src/exercises/ex4.ts`
- **Descripción:** Implementa una función que aplana un arreglo un nivel
- **Dificultad:** ⭐⭐ Intermedio
- **Guía:** [GUIA_ex4.md](src/exercises/GUIA_ex4.md)
- **Concepto clave:** Spread operator

**Ejemplo:**
```typescript
flatten([[1, 2], 3])      // → [1, 2, 3]
flatten([1, [2, [3]]])    // → [1, 2, [3]]
```

---

#### 7️⃣ **Verificar Palíndrome**
- **ID:** ex7
- **Archivo:** `src/exercises/ex7.ts`
- **Descripción:** Implementa una función que verifica si una cadena es palíndrome
- **Dificultad:** ⭐⭐ Intermedio
- **Guía:** [GUIA_ex7.md](src/exercises/GUIA_ex7.md)

**Ejemplo:**
```typescript
isPalindrome('racecar')                       // → true
isPalindrome('A man a plan a canal Panama')   // → true
isPalindrome('hello')                         // → false
```

---

#### 8️⃣ **Ordenar Descendente**
- **ID:** ex8
- **Archivo:** `src/exercises/ex8.ts`
- **Descripción:** Implementa una función que ordena un arreglo de mayor a menor
- **Dificultad:** ⭐⭐ Intermedio
- **Guía:** [GUIA_ex8.md](src/exercises/GUIA_ex8.md)
- **Concepto clave:** Comparadores en sort()

**Ejemplo:**
```typescript
sortDesc([3, 1, 4, 1, 5])  // → [5, 4, 3, 1, 1]
sortDesc([-5, 0, 5])       // → [5, 0, -5]
```

---

## 🏗️ Estructura del Proyecto

```
src/
├── exercises/
│   ├── ex1.ts          # Archivo con la función a implementar
│   ├── ex1.test.ts     # Tests del ejercicio
│   ├── GUIA_ex1.md     # Guía de resolución
│   ├── ex2.ts
│   ├── ex2.test.ts
│   ├── GUIA_ex2.md
│   ├── ... (más ejercicios)
│   └── index.ts        # Índice de ejercicios
├── App.tsx             # Componente principal
├── App.css             # Estilos
└── main.tsx            # Punto de entrada
```

---

## 🛠️ Tecnologías

- **Frontend:** React + TypeScript
- **Build:** Vite
- **Linting:** ESLint
- **Testing:** Tests incluidos en cada ejercicio

---

## 📊 Recursos Aprendidos por Ejercicio

| Ejercicio | Conceptos | Métodos Clave |
|-----------|-----------|---------------|
| ex1 | Suma, operadores | `+` |
| ex2 | Strings, arreglos | `split()`, `reverse()`, `join()` |
| ex3 | Iteración, secuencias | Bucles, variables |
| ex4 | Arreglos anidados | Spread operator `...` |
| ex5 | Contadores, strings | `includes()`, bucles |
| ex6 | Comparación, Math | `Math.max()`, `>` |
| ex7 | Strings, normalización | `replace()`, `toLowerCase()` |
| ex8 | Ordenamiento | `sort()`, comparadores |
| ex9 | Filtrado, módulo | `filter()`, `%` |

---

## 💡 Consejos

✅ **Lee la descripción** antes de empezar
✅ **Estudia los ejemplos** para entender el patrón
✅ **Intenta resolver primero** sin ver la guía
✅ **Usa los tests** para verificar tu solución
✅ **Lee la guía** si necesitas ayuda
✅ **Explora múltiples estrategias** en la guía

---

## 🎓 Niveles de Dificultad

- **⭐ Básico:** 1-3 minutos para resolver
- **⭐⭐ Intermedio:** 5-15 minutos para resolver
- **⭐⭐⭐ Avanzado:** 20+ minutos para resolver

---

## 🤝 Contribuir

Si tienes sugerencias para nuevos ejercicios o mejoras, ¡son bienvenidas!

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

---

**¡Feliz codificación! 🚀**

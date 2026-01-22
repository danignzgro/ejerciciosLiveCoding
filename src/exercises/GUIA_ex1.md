# 📋 Guía de Resolución - Ejercicio 1: Sumar dos números

## 📌 Objetivo
Implementar una función que reciba dos números y devuelva su suma.

---

## 🎯 Descripción del Problema

Necesitas crear una función llamada `sum` que:
- Reciba **dos parámetros numéricos**: `a` y `b`
- Devuelva el **resultado de su suma**
- Funcione con números enteros y decimales
- Funcione con números negativos

---

## 📊 Ejemplos de Entrada y Salida

```typescript
sum(1, 2)      // → 3
sum(-1, 1)     // → 0
sum(2.5, 0.5)  // → 3
```

### Desglose de los ejemplos:
| Entrada | Cálculo | Salida |
|---------|---------|--------|
| sum(1, 2) | 1 + 2 | 3 |
| sum(-1, 1) | -1 + 1 | 0 |
| sum(2.5, 0.5) | 2.5 + 0.5 | 3 |

---

## 🔍 Análisis Paso a Paso

Este es uno de los ejercicios más simples. Solo necesitas:

1. **Definir la función** con dos parámetros
2. **Sumar los parámetros** usando el operador `+`
3. **Retornar el resultado**

---

## 💡 Estrategias de Resolución

### Estrategia 1: Una línea (La más simple)
```typescript
export function sum(a: number, b: number): number {
  return a + b
}
```

**Ventajas:**
- Muy conciso y fácil de leer
- Es la forma más directa
- Perfecto para este problema sencillo

---

## ✅ Pasos para Implementar

1. Abre el archivo `ex1.ts`
2. Reemplaza el contenido de la función `sum`
3. Asegúrate de que devuelva `a + b`
4. Guarda el archivo
5. Ejecuta las pruebas para verificar que funciona

---

## 🧪 Casos de Prueba (Tests)

El archivo de pruebas (`ex1.test.ts`) incluye estos casos:

| Caso | Descripción |
|------|-------------|
| `sum(1, 2) === 3` | Suma básica de positivos |
| `sum(-1, 1) === 0` | Números con signo opuesto |
| `sum(2.5, 0.5) === 3` | Suma de decimales |

---

## 🚨 Posibles Errores

### ❌ Error: No retorna nada
```typescript
// INCORRECTO
export function sum(a: number, b: number) {
  a + b  // Falta return
}
```
**Solución:** Añade `return` antes de `a + b`

### ❌ Error: Modifica los parámetros
```typescript
// INCORRECTO (pero funciona)
export function sum(a: number, b: number) {
  a = a + b
  return a
}
```
**Solución:** Simplemente retorna la suma sin modificar los parámetros

---

## 📚 Conceptos Involucrados

- **Funciones en TypeScript**: Definir una función con tipos
- **Operador suma (`+`)**: Realiza la adición de dos números
- **Return**: Devuelve un valor de una función
- **Tipos de datos**: `number` para números

---

## 🎓 Puntos Clave para Recordar

✓ TypeScript requiere que especifiques los tipos (`number`)
✓ El operador `+` suma dos números
✓ Siempre devuelve el resultado con `return`
✓ La función debe retornar un `number`

---

## 🎉 ¡Listo! 

Una vez implementada correctamente, la función debería pasar todas las pruebas.

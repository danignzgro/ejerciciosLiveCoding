# 📋 Guía de Resolución - Ejercicio 2: Revertir una Cadena

## 📌 Objetivo
Implementar una función que invierta el orden de los caracteres en una cadena de texto.

---

## 🎯 Descripción del Problema

Necesitas crear una función llamada `reverse` que:
- Reciba una **cadena de texto** (string)
- Devuelva la **cadena invertida** (caracteres en orden inverso)
- Funcione con cadenas vacías
- Funcione con caracteres especiales y acentos

---

## 📊 Ejemplos de Entrada y Salida

```typescript
reverse('abc')    // → 'cba'
reverse('')       // → ''
reverse('añ')     // → 'ña'
```

### Desglose de los ejemplos:
| Entrada | Proceso | Salida |
|---------|---------|--------|
| 'abc' | a,b,c → c,b,a | 'cba' |
| '' | (vacío) | '' |
| 'añ' | a,ñ → ñ,a | 'ña' |

---

## 🔍 Análisis Paso a Paso

Para invertir una cadena, necesitas:

1. **Convertir la cadena en un arreglo de caracteres**
   - `'abc'` → `['a', 'b', 'c']`
   
2. **Invertir el orden del arreglo**
   - `['a', 'b', 'c']` → `['c', 'b', 'a']`
   
3. **Convertir el arreglo de vuelta a una cadena**
   - `['c', 'b', 'a']` → `'cba'`

---

## 💡 Estrategias de Resolución

### Estrategia 1: Usar métodos de String y Array (Recomendada)
```typescript
export function reverse(s: string): string {
  return s.split('').reverse().join('')
}
```

**Explicación:**
- `split('')`: Convierte la cadena en un arreglo de caracteres
  - `'abc'.split('')` → `['a', 'b', 'c']`
  
- `reverse()`: Invierte el arreglo
  - `['a', 'b', 'c'].reverse()` → `['c', 'b', 'a']`
  
- `join('')`: Une el arreglo de vuelta en una cadena
  - `['c', 'b', 'a'].join('')` → `'cba'`

**Ventajas:**
- Muy concisa y legible
- Aprovecha métodos nativos de JavaScript
- Funciona con todos los caracteres Unicode

---

### Estrategia 2: Usar un bucle (Alternativa)
```typescript
export function reverse(s: string): string {
  let result = ''
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i]
  }
  return result
}
```

**Explicación:**
- Comienza desde el último carácter (`s.length - 1`)
- Retrocede hasta el primero (`i >= 0`)
- Añade cada carácter a un resultado vacío

**Ventajas:**
- Más control explícito
- Útil para entender la lógica

---

### Estrategia 3: Usar spread operator
```typescript
export function reverse(s: string): string {
  return [...s].reverse().join('')
}
```

**Explicación:**
- `[...s]`: Expande la cadena en un arreglo (igual que `split('')`)
- El resto es igual: `reverse()` e `join('')`

---

## ✅ Pasos para Implementar

1. Abre el archivo `ex2.ts`
2. Elige una de las estrategias (recomendada la 1)
3. Implementa el código en la función `reverse`
4. Guarda el archivo
5. Ejecuta las pruebas para verificar que funciona

---

## 🧪 Casos de Prueba (Tests)

El archivo de pruebas (`ex2.test.ts`) incluye estos casos:

| Caso | Descripción |
|------|-------------|
| `reverse('abc') === 'cba'` | Cadena simple |
| `reverse('') === ''` | Cadena vacía |
| `reverse('añ') === 'ña'` | Caracteres con tilde (acentos) |

---

## 🚨 Posibles Errores

### ❌ Error: Olvidar el segundo `join('')`
```typescript
// INCORRECTO
export function reverse(s: string) {
  return s.split('').reverse()  // Retorna un arreglo, no una cadena
}
```
**Resultado:** `['c', 'b', 'a']` en lugar de `'cba'`
**Solución:** Añade `.join('')` al final

### ❌ Error: No verificar cadena vacía
```typescript
// CORRECTO (funciona incluso con '')
export function reverse(s: string) {
  return s.split('').reverse().join('')
}
// reverse('') → [].reverse().join('') → ''  ✓
```

---

## 📚 Conceptos Involucrados

- **split()**: Divide una cadena en un arreglo de caracteres
- **reverse()**: Invierte el orden de los elementos en un arreglo
- **join()**: Une elementos de un arreglo en una cadena
- **Encadenamiento de métodos**: Usar un método después de otro

---

## 🎓 Puntos Clave para Recordar

✓ `split('')` convierte cadena → arreglo
✓ `reverse()` invierte un arreglo
✓ `join('')` convierte arreglo → cadena
✓ Puedes encadenar estos métodos con puntos (.)
✓ Funciona con caracteres especiales y acentos

---

## 🎉 ¡Listo! 

Una vez implementada correctamente, la función debería pasar todas las pruebas, incluyendo cadenas vacías y caracteres con acentos.

# 📋 Guía de Resolución - Ejercicio 7: Verificar Palíndrome

## 📌 Objetivo
Implementar una función que verifique si una cadena es un palíndrome.

---

## 🎯 Descripción del Problema

Necesitas crear una función llamada `isPalindrome` que:
- Reciba una **cadena de texto**
- Devuelva **true** si es un palíndrome, **false** si no
- **Ignores espacios**
- **NO diferencie mayúsculas y minúsculas**

---

## 📊 ¿Qué es un Palíndrome?

Un **palíndrome** es una palabra, frase o número que se lee igual hacia adelante y hacia atrás.

**Ejemplos:**
- `racecar` → r-a-c-e-c-a-r (igual al revés)
- `A man a plan a canal Panama` → Igual sin espacios ni mayúsculas
- `noon` → n-o-o-n (igual al revés)

---

## 📊 Ejemplos de Entrada y Salida

```typescript
isPalindrome('racecar')                         // → true
isPalindrome('hello')                           // → false
isPalindrome('A man a plan a canal Panama')     // → true
isPalindrome('noon')                            // → true
isPalindrome('a')                               // → true
isPalindrome('')                                // → true
```

### Desglose:
| Entrada | Procesado | ¿Palíndrome? | Salida |
|---------|-----------|-------------|--------|
| 'racecar' | 'racecar' | r-a-c-e-c-a-r | true |
| 'hello' | 'hello' | h-e-l-l-o vs o-l-l-e-h | false |
| 'A man a plan a canal Panama' | 'amanaplanacanalpanama' | a-m-a-n-a-p-l-a-n-a-c-a-n-a-l-p-a-n-a-m-a | true |
| 'noon' | 'noon' | n-o-o-n | true |

---

## 🔍 Análisis Paso a Paso

Para verificar un palíndrome:

1. **Normalizar la cadena**
   - Convertir a minúsculas
   - Remover espacios

2. **Invertir la cadena normalizada**

3. **Comparar original vs invertida**

4. **Devolver true si son iguales**

---

## 💡 Estrategias de Resolución

### Estrategia 1: Invertir y Comparar (Recomendada)
```typescript
export function isPalindrome(s: string): boolean {
  // Normalizar: minúsculas y sin espacios
  const cleaned = s.toLowerCase().replace(/ /g, '')
  
  // Invertir
  const reversed = cleaned.split('').reverse().join('')
  
  // Comparar
  return cleaned === reversed
}
```

**Explicación:**
- `toLowerCase()`: Convierte todo a minúsculas
- `replace(/ /g, '')`: Elimina espacios
  - ` ` espacio
  - `g` global (todos)
- `split('').reverse().join('')`: Invierte la cadena
- `===`: Compara si son iguales

**Simulación con 'A man a plan a canal Panama':**
```
Paso 1: 'A man a plan a canal Panama'
Paso 2: 'amanaplanacanalpanama' (minúsculas, sin espacios)
Paso 3: Invertir: 'amanaplanacanalpanama'
Paso 4: '==' amanaplanacanalpanama'? Sí!
Retorna: true ✓
```

---

### Estrategia 2: Dos Punteros (Más eficiente)
```typescript
export function isPalindrome(s: string): boolean {
  const cleaned = s.toLowerCase().replace(/ /g, '')
  let left = 0
  let right = cleaned.length - 1
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false
    }
    left++
    right--
  }
  
  return true
}
```

**Explicación:**
- Comparar desde ambos extremos hacia el centro
- Si encuentra una diferencia, no es palíndrome
- Más eficiente (no invierte toda la cadena)

**Simulación con 'racecar':**
```
cleaned = 'racecar' (longitud 7)
left=0, right=6: r === r? Sí → left++, right--
left=1, right=5: a === a? Sí → left++, right--
left=2, right=4: c === c? Sí → left++, right--
left=3, right=3: left >= right, salir
Retorna: true ✓
```

---

### Estrategia 3: Una Línea (Compacta)
```typescript
export function isPalindrome(s: string): boolean {
  const c = s.toLowerCase().replace(/ /g, '')
  return c === c.split('').reverse().join('')
}
```

**Ventajas:**
- Muy concisa
- Fácil de leer una vez que entiendes el patrón

---

## ✅ Pasos para Implementar

1. Abre `ex7.ts`
2. **Recomendado:** Estrategia 1 (clara y eficiente)
3. Implementa el código
4. Guarda y prueba

---

## 🧪 Casos de Prueba

| Entrada | Salida |
|---------|--------|
| 'racecar' | true |
| 'hello' | false |
| 'A man a plan a canal Panama' | true |
| 'noon' | true |
| 'a' | true |
| '' | true |

---

## 🚨 Posibles Errores

### ❌ Error: Olvidar normalizar (espacios y mayúsculas)
```typescript
// INCORRECTO
export function isPalindrome(s: string) {
  const reversed = s.split('').reverse().join('')
  return s === reversed
}
// isPalindrome('A man a plan a canal Panama')
// 'A man a plan a canal Panama' !== 'amanaplanaCanalpanAanamAalpa'
// Retorna: false (¡pero es palíndrome!)
```
**Solución:** Normaliza antes de comparar

### ❌ Error: No eliminar espacios
```typescript
// INCORRECTO
const cleaned = s.toLowerCase()  // Solo minúsculas, espacios quedan

// CORRECTO
const cleaned = s.toLowerCase().replace(/ /g, '')
```

---

## 📚 Conceptos Involucrados

- **String.replace()**: Reemplaza caracteres
- **Expresiones regulares**: `/pattern/flags`
- **toLowerCase()**: Convierte a minúsculas
- **Invertir cadenas**: split → reverse → join
- **Comparación de cadenas**: `===`

---

## 🎓 Puntos Clave

✓ Un palíndrome se lee igual adelante y atrás
✓ SIEMPRE normaliza: minúsculas y sin espacios
✓ `.split('').reverse().join('')` invierte una cadena
✓ `/g` en regex = global (todas las coincidencias)
✓ Cadena vacía y cadena de 1 carácter son palíndromes

---

## 📊 Comparación de Estrategias

| Estrategia | Claridad | Rendimiento | Recomendado |
|-----------|----------|-------------|------------|
| Invertir | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✓ Para aprender |
| Dos punteros | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✓ Para producción |
| Una línea | ⭐⭐⭐ | ⭐⭐⭐⭐ | - Compacta |

---

## 🎉 ¡Listo! 

Tendrás una función que detecta palíndromes en cualquier cadena.

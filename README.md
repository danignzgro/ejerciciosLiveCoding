# 💻 Live-coding: Ejercicios de Programación

Una **plataforma interactiva** para aprender y practicar programación con **9 ejercicios** organizados por dificultad, con guías detalladas, tests automáticos y múltiples estrategias de resolución.

![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square)

---

## 🚀 Inicio Rápido

### 1. Instala dependencias
```bash
npm install
```

### 2. Inicia el servidor de desarrollo
```bash
npm run dev
```

### 3. Abre en tu navegador
```
http://localhost:5173
```

---

## 📚 Contenido

### 9 Ejercicios Completos
- **5 Ejercicios Básico** ⭐
- **4 Ejercicios Intermedio** ⭐⭐

### Cada Ejercicio Incluye
✅ Descripción clara del problema
✅ Ejemplos de entrada/salida
✅ Tests automáticos
✅ Guía detallada de resolución
✅ Múltiples estrategias de solución
✅ Análisis paso a paso

---

## 📖 Documentación

| Archivo | Descripción |
|---------|-------------|
| [QUICK_START.md](QUICK_START.md) | ⚡ Guía de inicio rápido |
| [EJERCICIOS.md](EJERCICIOS.md) | 📋 Tabla completa de ejercicios |
| [CAMBIOS.md](CAMBIOS.md) | 🔧 Resumen de cambios y creaciones |
| [MAPA_VISUAL.md](MAPA_VISUAL.md) | 📊 Estructura visual de la plataforma |
| [src/exercises/README.md](src/exercises/README.md) | 📚 Mapa rápido de ejercicios |

---

## 🎓 Ejercicios

### Básico (⭐)

| ID | Ejercicio | Conceptos |
|----|-----------|-----------|
| ex1 | [Sumar dos números](src/exercises/GUIA_ex1.md) | Operadores `+` |
| ex2 | [Revertir una cadena](src/exercises/GUIA_ex2.md) | `split()`, `reverse()`, `join()` |
| ex5 | [Contar Vocales](src/exercises/GUIA_ex5.md) | `includes()`, bucles |
| ex6 | [Máximo de un Arreglo](src/exercises/GUIA_ex6.md) | `Math.max()`, comparación |
| ex9 | [Filtrar Pares e Impares](src/exercises/GUIA_ex9.md) | `filter()`, módulo `%` |

### Intermedio (⭐⭐)

| ID | Ejercicio | Conceptos |
|----|-----------|-----------|
| ex3 | [Fibonacci (n-ésimo)](src/exercises/GUIA_ex3.md) | Iteración, secuencias |
| ex4 | [Aplanar Arreglo](src/exercises/GUIA_ex4.md) | Spread operator `...` |
| ex7 | [Verificar Palíndrome](src/exercises/GUIA_ex7.md) | Normalización, strings |
| ex8 | [Ordenar Descendente](src/exercises/GUIA_ex8.md) | `sort()`, comparadores |

---

## 🎯 Cómo Usar

### Para Estudiantes

1. **Abre la aplicación** en http://localhost:5173
2. **Selecciona un ejercicio** (recomendado empezar por Básico)
3. **Lee su descripción** y ejemplos
4. **Edita el archivo** `src/exercises/exN.ts`
5. **Implementa la función** 
6. **Haz clic "Run tests"** para verificar
7. **Si necesitas ayuda**, abre `GUIA_exN.md`

### Para Instructores

- ✅ Ejercicios listos para enseñar
- ✅ Guías pedagogicamente estructuradas
- ✅ Tests automáticos para evaluar
- ✅ Fácil agregar más ejercicios

---

## 🎨 Características UI/UX

- 🌈 **Interfaz moderna** con gradientes y colores
- 📂 **Organización clara** por dificultad
- 🔄 **Hover effects** y animaciones suaves
- 📱 **Responsive design** para móviles
- ✨ **Tests inmediatos** con feedback visual
- 🎯 **Instrucciones integradas** en la página

---

## 📁 Estructura del Proyecto

```
src/exercises/
├── ex1.ts, ex1.test.ts, GUIA_ex1.md
├── ex2.ts, ex2.test.ts, GUIA_ex2.md
├── ex3.ts, ex3.test.ts, GUIA_ex3.md
├── ex4.ts, ex4.test.ts, GUIA_ex4.md
├── ex5.ts, ex5.test.ts, GUIA_ex5.md  ✨ NUEVO
├── ex6.ts, ex6.test.ts, GUIA_ex6.md  ✨ NUEVO
├── ex7.ts, ex7.test.ts, GUIA_ex7.md  ✨ NUEVO
├── ex8.ts, ex8.test.ts, GUIA_ex8.md  ✨ NUEVO
├── ex9.ts, ex9.test.ts, GUIA_ex9.md  ✨ NUEVO
├── index.ts (actualizado)
└── README.md
```

---

## 🛠️ Tecnologías

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool rápido
- **ESLint** - Linting
- **CSS moderno** - Estilos sin frameworks

---

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| Ejercicios | 9 |
| Guías | 9 |
| Tests | 40+ |
| Líneas de documentación | 3000+ |
| Estrategias incluidas | 20+ |
| Conceptos cubiertos | 15+ |

---

## ✨ Lo Que Hace Especial Esta Plataforma

### Pedagogía
- Ejercicios progresivos de fácil a difícil
- Múltiples estrategias para cada problema
- Explicaciones detalladas y visuales
- Tests para verificar aprendizaje

### Usabilidad  
- Interfaz intuitiva y moderna
- Código limpio y bien documentado
- Fácil de extender con nuevos ejercicios
- Tests automáticos inmediatos

### Contenido
- 3000+ líneas de documentación
- Guías con ejemplos y simulaciones
- Errores comunes y cómo evitarlos
- Comparativas de rendimiento

---

## 🚀 Próximos Pasos

### Para Empezar
1. Lee [QUICK_START.md](QUICK_START.md)
2. Abre la aplicación (`npm run dev`)
3. ¡Elige un ejercicio y comienza!

### Para Extender
1. Crea `exN.ts` y `exN.test.ts`
2. Crea `GUIA_exN.md` siguiendo el template
3. Actualiza `src/exercises/index.ts`
4. ¡Listo! El ejercicio aparecerá automáticamente

---

## 📞 Contacto & Contribuciones

Si tienes sugerencias para nuevos ejercicios o mejoras, ¡son bienvenidas!

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

---

<div align="center">

### **¡Feliz codificación! 🚀**

[QUICK_START](QUICK_START.md) • [EJERCICIOS](EJERCICIOS.md) • [CAMBIOS](CAMBIOS.md) • [MAPA VISUAL](MAPA_VISUAL.md)

</div>
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Instrucciones para ejercicios (Live-coding)

1. Levanta la app en modo dev:

```bash
npm install
npm run dev
```

2. Abre la app en el navegador (normalmente `http://localhost:5173`).
3. Verás la lista de ejercicios; cada ejercicio tiene un archivo en `src/exercises`.
4. Edita el archivo del ejercicio (por ejemplo `src/exercises/ex1.ts`) y implementa la función indicada.
5. Vuelve a la app y pulsa `Run tests` para ejecutar el verificador en el navegador; verás los resultados de los casos de prueba.

Estructura básica creada:
- `src/exercises/ex1.ts` — ejercicio de ejemplo (implementa `sum`).
- `src/exercises/ex1.test.ts` — tests que el runner ejecuta en la app.
- `src/exerciseRunner.ts` — pequeño runner dinámico que importa ejercicio y tests.

Si quieres que añada más ejercicios, generadores automáticos de ejercicios, o un editor en la propia UI, dime y lo implemento.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

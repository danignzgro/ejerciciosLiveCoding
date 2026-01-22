# 📊 Mapa Visual de la Plataforma

## 🎯 Estructura General

```
┌─────────────────────────────────────────────────────────────┐
│          PLATAFORMA DE EJERCICIOS DE PROGRAMACIÓN            │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  PÁGINA PRINCIPAL                                    │  │
│  │  (Header con gradiente, instrucciones claras)        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  BÁSICO (⭐) - 5 EJERCICIOS                          │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ ✓ ex1: Sumar dos números                            │  │
│  │ ✓ ex2: Revertir una cadena                          │  │
│  │ ✓ ex5: Contar Vocales                               │  │
│  │ ✓ ex6: Máximo de un Arreglo                         │  │
│  │ ✓ ex9: Filtrar Pares e Impares                      │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  INTERMEDIO (⭐⭐) - 4 EJERCICIOS                     │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ ✓ ex3: Fibonacci (n-ésimo)                          │  │
│  │ ✓ ex4: Aplanar Arreglo                              │  │
│  │ ✓ ex7: Verificar Palíndrome                         │  │
│  │ ✓ ex8: Ordenar Descendente                          │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Estructura de Carpetas

```
ejercicios/
│
├── 📄 README.md                    (Documentación original)
├── 📄 EJERCICIOS.md                (Tabla completa de ejercicios)
├── 📄 QUICK_START.md               (Guía de inicio rápido)
├── 📄 CAMBIOS.md                   (Resumen de cambios)
│
├── src/
│   ├── 🎨 App.tsx                  (Componente principal - MEJORADO)
│   ├── 🎨 App.css                  (Estilos modernos - MEJORADO)
│   ├── main.tsx                    (Punto de entrada)
│   ├── exerciseRunner.ts           (Cargador de ejercicios)
│   ├── index.css                   (Estilos globales)
│   │
│   └── exercises/
│       ├── 📖 README.md            (Mapa de ejercicios)
│       │
│       ├── 🎓 BÁSICO
│       │   ├── ex1.ts              (Sumar)
│       │   ├── ex1.test.ts
│       │   ├── GUIA_ex1.md         (Guía detallada)
│       │   │
│       │   ├── ex2.ts              (Revertir)
│       │   ├── ex2.test.ts
│       │   ├── GUIA_ex2.md
│       │   │
│       │   ├── ex5.ts              (Contar vocales)
│       │   ├── ex5.test.ts
│       │   ├── GUIA_ex5.md
│       │   │
│       │   ├── ex6.ts              (Máximo)
│       │   ├── ex6.test.ts
│       │   ├── GUIA_ex6.md
│       │   │
│       │   ├── ex9.ts              (Filtrar)
│       │   ├── ex9.test.ts
│       │   └── GUIA_ex9.md
│       │
│       ├── 🎓 INTERMEDIO
│       │   ├── ex3.ts              (Fibonacci)
│       │   ├── ex3.test.ts
│       │   ├── GUIA_ex3.md
│       │   │
│       │   ├── ex4.ts              (Flatten)
│       │   ├── ex4.test.ts
│       │   ├── GUIA_ex4.md
│       │   │
│       │   ├── ex7.ts              (Palíndrome)
│       │   ├── ex7.test.ts
│       │   ├── GUIA_ex7.md
│       │   │
│       │   ├── ex8.ts              (Ordenar)
│       │   ├── ex8.test.ts
│       │   └── GUIA_ex8.md
│       │
│       └── index.ts                (Índice de ejercicios)
│
├── public/                         (Archivos estáticos)
├── package.json                    (Dependencias)
├── tsconfig.json                   (Configuración TypeScript)
├── vite.config.ts                  (Configuración Vite)
└── eslint.config.js                (Configuración ESLint)
```

---

## 🔄 Flujo de Usuario

```
┌─────────────┐
│   Inicio    │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Ver página principal                │
│  (ejercicios organizados por         │
│   dificultad con colores)            │
└──────┬──────────────────────────────┘
       │
       ├─────────────────────┬─────────────────────┐
       │                     │                     │
       ▼                     ▼                     ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  Lee ejercicio  │ │  Lee guía si    │ │  Abre archivo   │
│  (descripción   │ │  necesita ayuda │ │  en el editor   │
│   + ejemplos)   │ │ (GUIA_exN.md)   │ │ (exN.ts)        │
└──────┬──────────┘ └────────┬────────┘ └────────┬────────┘
       │                    │                    │
       └────────────────────┼────────────────────┘
                            │
                            ▼
                    ┌──────────────────┐
                    │  Implementa la   │
                    │  función en el   │
                    │  archivo         │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Haz clic en     │
                    │  "Run tests"     │
                    └────────┬─────────┘
                             │
                    ┌────────┴─────────┐
                    │                  │
                    ▼                  ▼
            ┌──────────────┐  ┌──────────────┐
            │  ✅ Pasó     │  │  ❌ Falló    │
            │  todos       │  │  algunos     │
            └──────┬───────┘  └──────┬───────┘
                   │                 │
                   ▼                 ▼
            ┌──────────────┐  ┌──────────────────┐
            │  ¡Siguiente  │  │  Lee guía más    │
            │  ejercicio!  │  │  detenidamente   │
            └──────────────┘  │  o intenta otra  │
                              │  estrategia      │
                              └────────┬─────────┘
                                       │
                                       ▼
                              ┌──────────────────┐
                              │  Intenta otra    │
                              │  vez             │
                              └────────┬─────────┘
                                       │
                                       └──► (volver a "Implementa")
```

---

## 🎨 Diseño de Interfaz

### Header
```
┌─────────────────────────────────────────────┐
│  💻 Live-coding Ejercicios                  │
│  Resuelve ejercicios y verifica tu solución │
├─────────────────────────────────────────────┤
```

### Sección de Ejercicios
```
┌──────────────────────────────────────────────┐
│  🟢 BÁSICO                     5 ejercicios  │
├──────────────────────────────────────────────┤
│  ┌────────────────┐ ┌────────────────┐      │
│  │ ex1: Sumar     │ │ ex2: Revertir  │      │
│  │Descripción...  │ │Descripción...  │      │
│  │▶ Run tests     │ │▶ Run tests     │      │
│  └────────────────┘ └────────────────┘      │
│  ... (más tarjetas)                         │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│  🟠 INTERMEDIO                 4 ejercicios  │
├──────────────────────────────────────────────┤
│  ┌────────────────┐ ┌────────────────┐      │
│  │ ex3: Fibonacci │ │ ex4: Flatten   │      │
│  │Descripción...  │ │Descripción...  │      │
│  │▶ Run tests     │ │▶ Run tests     │      │
│  └────────────────┘ └────────────────┘      │
│  ... (más tarjetas)                         │
└──────────────────────────────────────────────┘
```

### Tarjeta de Ejercicio
```
┌─────────────────────────────────┐
│ Título del Ejercicio        ex1 │
├─────────────────────────────────┤
│ Descripción del ejercicio...    │
│ (texto explicativo)             │
│                                 │
│         [▶ Run tests]           │
└─────────────────────────────────┘
```

### Resultados
```
┌────────────────────────────────────┐
│  📊 Resultados                     │
├────────────────────────────────────┤
│  ✓ sum está definida y es función │
│  ✓ sum(1, 2) === 3                │
│  ✓ sum(-1, 1) === 0               │
│  ✓ sum(2.5, 0.5) === 3            │
└────────────────────────────────────┘
```

---

## 📚 Contenido de Cada Guía

```
GUIA_exN.md
│
├── 📌 Objetivo
│   (qué debes lograr)
│
├── 🎯 Descripción del Problema
│   (qué hace la función)
│
├── 📊 Ejemplos
│   (entrada → salida esperada)
│
├── 🔍 Análisis Paso a Paso
│   (cómo funciona la lógica)
│
├── 💡 Estrategias de Resolución (2-3)
│   - Estrategia 1: [código]
│   - Estrategia 2: [código]
│   - Estrategia 3: [código]
│
├── ✅ Pasos para Implementar
│   (pasos claros)
│
├── 🧪 Casos de Prueba
│   (todos los tests)
│
├── 🚨 Posibles Errores
│   (qué puede salir mal y cómo evitarlo)
│
├── 📚 Conceptos Involucrados
│   (qué aprenderás)
│
├── 🎓 Puntos Clave
│   (lo más importante)
│
└── 🎉 ¡Listo!
    (conclusión)
```

---

## 🎓 Matriz de Conceptos

```
OPERADORES Y VARIABLES
├── ex1: Suma (+)
└── ex9: Módulo (%)

STRINGS
├── ex2: split, reverse, join
├── ex5: includes, bucles
├── ex7: replace, toLowerCase

ARREGLOS
├── ex3: Acceso a índices
├── ex4: Spread operator, push
├── ex6: Math.max, comparación
├── ex8: sort, comparadores
└── ex9: filter

ALGORITMOS
├── ex3: Fibonacci (iteración)
├── ex7: Palíndrome (normalización)
└── ex8: Ordenamiento (sort)

FUNCIONALES
├── ex4: spread operator
├── ex6: Math.max
├── ex8: sort + comparador
└── ex9: filter
```

---

## 📈 Gráfico de Progresión

```
Dificultad
     │
  ⭐⭐│      ex3  ex4  ex7  ex8
     │     /  \  /  \  /  \
  ⭐ │   ex1 ex2 ex5 ex6  ex9
     │    ▬▬▬▬▬▬▬▬▬▬▬▬▬▬
     └────────────────────────── Ejercicio
       1   2   3   4   5   6   7  8   9

Complejidad de Conceptos
⭐⭐ (Intermedio):    Fibonacci, Algoritmos complejos
⭐ (Básico):         Operaciones simples
```

---

## ✨ Características Destacadas

### Para Estudiantes
```
✅ Interfaz amigable y moderna
✅ Ejercicios bien documentados
✅ Tests inmediatos
✅ Guías con múltiples estrategias
✅ Ejemplos paso a paso
✅ Visualización de errores
```

### Para Instructores
```
✅ Fácil agregar ejercicios
✅ Contenido pedagógico
✅ Evaluación automática
✅ Código limpio y extensible
✅ Documentación completa
```

---

## 🚀 Cómo Iniciar

```bash
# 1. Ir a la carpeta del proyecto
cd c:\Users\PC\Desktop\Live-coding\ejercicios

# 2. Instalar dependencias (si no las tienes)
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

---

## 📞 Próximos Pasos

### Agregar Más Ejercicios
```typescript
// 1. Crear exN.ts
export const meta = {
  id: 'exN',
  title: 'Título',
  description: 'Descripción',
}
export function myFunction(params) { ... }

// 2. Crear exN.test.ts
export default function runTests(exports) { ... }

// 3. Crear GUIA_exN.md
// Sigue el template de otras guías

// 4. Actualizar src/exercises/index.ts
import * as exN from './exN'
// Agregar a exercises array
```

### Personalizar Temas
- Edita `src/App.tsx` para cambiar colores
- Modifica `src/App.css` para nuevos estilos
- Actualiza el texto del header

---

**¡Plataforma lista para usar! 🎉**


import './App.css'
import { useState } from 'react'
import { exercises } from './exercises'
import { runExercise } from './exerciseRunner'

function App() {
  const [running, setRunning] = useState(false)
  const [results, setResults] = useState<any[] | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  async function handleRun(id: string) {
    setRunning(true)
    setResults(null)
    setSelectedId(id)
    const res = await runExercise(id)
    setResults(res)
    setRunning(false)
  }

  // Agrupar por dificultad
  const groupedExercises = exercises.reduce((acc, ex) => {
    const difficulty = ex.difficulty || 'Otro'
    if (!acc[difficulty]) acc[difficulty] = []
    acc[difficulty].push(ex)
    return acc
  }, {} as Record<string, typeof exercises>)

  const difficultyOrder = ['Básico', 'Intermedio', 'Avanzado']
  const orderedDifficulties = Object.keys(groupedExercises).sort((a, b) => 
    difficultyOrder.indexOf(a) - difficultyOrder.indexOf(b)
  )

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Básico': return '#4CAF50'
      case 'Intermedio': return '#FF9800'
      case 'Avanzado': return '#F44336'
      default: return '#2196F3'
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5em' }}>💻 Live-coding Ejercicios</h1>
        <p style={{ margin: '0', fontSize: '1.1em', opacity: 0.95 }}>
          Resuelve ejercicios de programación y verifica tu solución
        </p>
      </div>

      <div style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Instrucciones */}
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
          border: '1px solid #e0e0e0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>📖 Cómo usar:</h2>
          <ol style={{ margin: '0', paddingLeft: '20px', color: '#666', lineHeight: '1.8' }}>
            <li>Selecciona un ejercicio de abajo</li>
            <li>Edita el archivo correspondiente en <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>src/exercises/exN.ts</code></li>
            <li>Haz clic en <strong>"Run tests"</strong> para verificar tu solución</li>
            <li>Lee la <strong>guía de resolución</strong> (GUIA_exN.md) si necesitas ayuda</li>
          </ol>
        </div>

        {/* Ejercicios por dificultad */}
        {orderedDifficulties.map(difficulty => (
          <div key={difficulty} style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              paddingBottom: '10px',
              borderBottom: `3px solid ${getDifficultyColor(difficulty)}`
            }}>
              <span style={{
                display: 'inline-block',
                background: getDifficultyColor(difficulty),
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: '0.95em'
              }}>
                {difficulty}
              </span>
              <span style={{
                marginLeft: '15px',
                color: '#999',
                fontSize: '0.95em'
              }}>
                {groupedExercises[difficulty].length} ejercicio{groupedExercises[difficulty].length !== 1 ? 's' : ''}
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '20px'
            }}>
              {groupedExercises[difficulty].map((ex) => (
                <div
                  key={ex.id}
                  style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    border: selectedId === ex.id ? `2px solid ${getDifficultyColor(difficulty)}` : '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '12px'
                  }}>
                    <h3 style={{ margin: '0', color: '#333', flex: 1 }}>
                      {ex.title}
                    </h3>
                    <span style={{
                      background: getDifficultyColor(difficulty),
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8em',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                      marginLeft: '10px'
                    }}>
                      {ex.id}
                    </span>
                  </div>
                  
                  <p style={{
                    margin: '0 0 16px 0',
                    color: '#666',
                    fontSize: '0.95em',
                    lineHeight: '1.5'
                  }}>
                    {ex.description}
                  </p>

                  <button
                    onClick={() => handleRun(ex.id)}
                    disabled={running}
                    style={{
                      background: getDifficultyColor(difficulty),
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      cursor: running ? 'not-allowed' : 'pointer',
                      fontWeight: 'bold',
                      fontSize: '0.95em',
                      width: '100%',
                      transition: 'all 0.2s ease',
                      opacity: running ? 0.6 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!running) {
                        e.currentTarget.style.opacity = '0.9'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!running) {
                        e.currentTarget.style.opacity = '1'
                      }
                    }}
                  >
                    {running && selectedId === ex.id ? '⏳ Ejecutando...' : '▶ Run tests'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Resultados */}
        {results && (
          <div style={{
            background: 'white',
            padding: '24px',
            borderRadius: '8px',
            marginTop: '30px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>📊 Resultados</h2>
            <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
              {results.map((r, i) => (
                <li
                  key={i}
                  style={{
                    padding: '12px',
                    marginBottom: '8px',
                    borderRadius: '6px',
                    background: r.ok ? '#f1f8f4' : '#fef1f1',
                    borderLeft: `4px solid ${r.ok ? '#4CAF50' : '#F44336'}`,
                    color: r.ok ? '#2e7d32' : '#c62828',
                    fontFamily: 'monospace',
                    fontSize: '0.95em'
                  }}
                >
                  <span style={{ marginRight: '10px', fontSize: '1.2em' }}>
                    {r.ok ? '✓' : '✕'}
                  </span>
                  {r.message}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

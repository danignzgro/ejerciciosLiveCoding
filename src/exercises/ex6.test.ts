export default function runTests(exports: any) {
  const results: { ok: boolean; message: string }[] = []
  results.push({ ok: typeof exports.max === 'function', message: '`max` está definida y es una función' })

  const cases = [
    { in: [1, 5, 3], expected: 5 },
    { in: [10, 20, 15], expected: 20 },
    { in: [-5, -2, -10], expected: -2 },
    { in: [42], expected: 42 },
    { in: [3.5, 2.1], expected: 3.5 },
  ]

  for (const c of cases) {
    try {
      const got = exports.max(c.in)
      results.push({ ok: got === c.expected, message: `max(${JSON.stringify(c.in)}) → espera ${c.expected}, obtuvo ${got}` })
    } catch (e: any) {
      results.push({ ok: false, message: `max(${JSON.stringify(c.in)}) lanzó: ${String(e)}` })
    }
  }

  return results
}

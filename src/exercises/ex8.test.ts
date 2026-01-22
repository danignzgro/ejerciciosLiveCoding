export default function runTests(exports: any) {
  const results: { ok: boolean; message: string }[] = []
  results.push({ ok: typeof exports.sortDesc === 'function', message: '`sortDesc` está definida y es una función' })

  const cases = [
    { in: [3, 1, 4, 1, 5], expected: [5, 4, 3, 1, 1] },
    { in: [10, 20, 15], expected: [20, 15, 10] },
    { in: [-5, 0, 5], expected: [5, 0, -5] },
    { in: [42], expected: [42] },
    { in: [], expected: [] },
  ]

  for (const c of cases) {
    try {
      const got = exports.sortDesc(c.in)
      const ok = Array.isArray(got) && JSON.stringify(got) === JSON.stringify(c.expected)
      results.push({ ok, message: `sortDesc(${JSON.stringify(c.in)}) → espera ${JSON.stringify(c.expected)}, obtuvo ${JSON.stringify(got)}` })
    } catch (e: any) {
      results.push({ ok: false, message: `sortDesc(${JSON.stringify(c.in)}) lanzó: ${String(e)}` })
    }
  }

  return results
}

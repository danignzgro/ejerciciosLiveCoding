export default function runTests(exports: any) {
  const results: { ok: boolean; message: string }[] = []

  // Check presence
  results.push({ ok: typeof exports.sum === 'function', message: '`sum` está definida y es una función' })

  const cases = [
    { a: 1, b: 2, expected: 3 },
    { a: -1, b: 1, expected: 0 },
    { a: 2.5, b: 0.5, expected: 3 },
  ]

  for (const c of cases) {
    try {
      const out = exports.sum(c.a, c.b)
      const ok = out === c.expected
      results.push({ ok, message: `sum(${c.a}, ${c.b}) === ${c.expected} → got ${out}` })
    } catch (e: any) {
      results.push({ ok: false, message: `sum(${c.a}, ${c.b}) lanzó: ${String(e)}` })
    }
  }

  return results
}

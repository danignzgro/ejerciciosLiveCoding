export default function runTests(exports: any) {
  const results: { ok: boolean; message: string }[] = []
  results.push({ ok: typeof exports.filterParity === 'function', message: '`filterParity` está definida y es una función' })

  const cases = [
    { arr: [1, 2, 3, 4, 5], parity: 'even', expected: [2, 4] },
    { arr: [1, 2, 3, 4, 5], parity: 'odd', expected: [1, 3, 5] },
    { arr: [10, 20], parity: 'even', expected: [10, 20] },
    { arr: [1, 3, 5], parity: 'odd', expected: [1, 3, 5] },
    { arr: [], parity: 'even', expected: [] },
  ]

  for (const c of cases) {
    try {
      const got = exports.filterParity(c.arr, c.parity)
      const ok = Array.isArray(got) && JSON.stringify(got) === JSON.stringify(c.expected)
      results.push({ ok, message: `filterParity(${JSON.stringify(c.arr)}, "${c.parity}") → espera ${JSON.stringify(c.expected)}, obtuvo ${JSON.stringify(got)}` })
    } catch (e: any) {
      results.push({ ok: false, message: `filterParity(${JSON.stringify(c.arr)}, "${c.parity}") lanzó: ${String(e)}` })
    }
  }

  return results
}

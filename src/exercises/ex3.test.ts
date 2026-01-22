export default function runTests(exports: any) {
  const results: { ok: boolean; message: string }[] = []
  results.push({ ok: typeof exports.fib === 'function', message: '`fib` está definida y es una función' })

  const cases = [
    { n: 0, expect: 0 },
    { n: 1, expect: 1 },
    { n: 5, expect: 5 },
    { n: 10, expect: 55 },
  ]

  for (const c of cases) {
    try {
      const got = exports.fib(c.n)
      results.push({ ok: got === c.expect, message: `fib(${c.n}) → espera ${c.expect}, obtuvo ${got}` })
    } catch (e: any) {
      results.push({ ok: false, message: `fib(${c.n}) lanzó: ${String(e)}` })
    }
  }

  return results
}

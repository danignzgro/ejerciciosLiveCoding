export default function runTests(exports: any) {
  const results: { ok: boolean; message: string }[] = []
  results.push({ ok: typeof exports.reverse === 'function', message: '`reverse` está definida y es una función' })

  const cases = [
    { in: 'abc', out: 'cba' },
    { in: '', out: '' },
    { in: 'añ', out: 'ña' },
  ]

  for (const c of cases) {
    try {
      const got = exports.reverse(c.in)
      results.push({ ok: got === c.out, message: `reverse(${JSON.stringify(c.in)}) → espera ${JSON.stringify(c.out)}, obtuvo ${JSON.stringify(got)}` })
    } catch (e: any) {
      results.push({ ok: false, message: `reverse(${JSON.stringify(c.in)}) lanzó: ${String(e)}` })
    }
  }

  return results
}

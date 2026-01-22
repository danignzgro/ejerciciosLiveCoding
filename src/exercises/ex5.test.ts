export default function runTests(exports: any) {
  const results: { ok: boolean; message: string }[] = []
  results.push({ ok: typeof exports.countVowels === 'function', message: '`countVowels` está definida y es una función' })

  const cases = [
    { in: 'hello', expected: 2 },
    { in: 'AEIOU', expected: 5 },
    { in: 'xyz', expected: 0 },
    { in: 'Education', expected: 5 },
    { in: '', expected: 0 },
  ]

  for (const c of cases) {
    try {
      const got = exports.countVowels(c.in)
      results.push({ ok: got === c.expected, message: `countVowels(${JSON.stringify(c.in)}) → espera ${c.expected}, obtuvo ${got}` })
    } catch (e: any) {
      results.push({ ok: false, message: `countVowels(${JSON.stringify(c.in)}) lanzó: ${String(e)}` })
    }
  }

  return results
}

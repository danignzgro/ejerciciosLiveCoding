export default function runTests(exports: any) {
  const results: { ok: boolean; message: string }[] = []
  results.push({ ok: typeof exports.isPalindrome === 'function', message: '`isPalindrome` está definida y es una función' })

  const cases = [
    { in: 'racecar', expected: true },
    { in: 'hello', expected: false },
    { in: 'A man a plan a canal Panama', expected: true },
    { in: 'noon', expected: true },
    { in: 'a', expected: true },
    { in: '', expected: true },
  ]

  for (const c of cases) {
    try {
      const got = exports.isPalindrome(c.in)
      results.push({ ok: got === c.expected, message: `isPalindrome(${JSON.stringify(c.in)}) → espera ${c.expected}, obtuvo ${got}` })
    } catch (e: any) {
      results.push({ ok: false, message: `isPalindrome(${JSON.stringify(c.in)}) lanzó: ${String(e)}` })
    }
  }

  return results
}

export default function runTests(exports: any) {
  const results: { ok: boolean; message: string }[] = []
  results.push({ ok: typeof exports.flatten === 'function', message: '`flatten` está definida y es una función' })

  const cases = [
    { in: [[1,2],3], out: [1,2,3] },
    { in: [1,[2,[3]]], out: [1,2,[3]] },
    { in: [], out: [] },
  ]

  for (const c of cases) {
    try {
      const got = exports.flatten(c.in)
      const ok = Array.isArray(got) && JSON.stringify(got) === JSON.stringify(c.out)
      results.push({ ok, message: `flatten(${JSON.stringify(c.in)}) → espera ${JSON.stringify(c.out)}, obtuvo ${JSON.stringify(got)}` })
    } catch (e: any) {
      results.push({ ok: false, message: `flatten(${JSON.stringify(c.in)}) lanzó: ${String(e)}` })
    }
  }

  return results
}

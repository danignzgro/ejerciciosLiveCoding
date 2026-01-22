export async function runExercise(id: string) {
  try {
    const exModule = await import(`./exercises/${id}.ts`)
    const testModule = await import(`./exercises/${id}.test.ts`)
    const res = testModule.default(exModule)
    return res
  } catch (e: any) {
    return [{ ok: false, message: String(e?.message || e) }]
  }
}

export default runExercise

import { existsSync, readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { License } from '@groupdocs/groupdocs.total'

if (!globalThis.__groupdocsLicenseApplied) {
  globalThis.__groupdocsLicenseApplied = true

  const examplesDir = dirname(fileURLToPath(import.meta.url))
  const licensePath = resolveLicensePath(examplesDir)

  if (licensePath) {
    License.setLicense(licensePath)
    console.log(`License set from: ${licensePath}`)
  }
}

function resolveLicensePath(examplesDir) {
  for (const candidate of [
    process.env.GROUPDOCS_LICENSE_PATH,
    process.env.GROUPDOCS_LIC_PATH
  ]) {
    if (candidate && existsSync(candidate)) {
      return candidate
    }
  }

  const licFile = readdirSync(examplesDir).find(f => f.toLowerCase().endsWith('.lic'))
  return licFile ? join(examplesDir, licFile) : null
}

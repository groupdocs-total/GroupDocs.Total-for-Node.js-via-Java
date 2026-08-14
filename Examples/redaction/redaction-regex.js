import '../set-license.js'
import { Redactor } from '@groupdocs/groupdocs.total'
import java from 'java'

const RegexRedaction = java.import('com.groupdocs.redaction.redactions.RegexRedaction')
const ReplacementOptions = java.import('com.groupdocs.redaction.redactions.ReplacementOptions')
const RasterizationOptions = java.import('com.groupdocs.redaction.options.RasterizationOptions')
const RedactionStatus = java.import('com.groupdocs.redaction.RedactionStatus')
const FileOutputStream = java.import('java.io.FileOutputStream')

const redactor = new Redactor('contract.docx')

// Any currency amount such as "120,000 USD"
const result = redactor.apply(
  new RegexRedaction('\\d{1,3}(,\\d{3})*\\s?USD', new ReplacementOptions('[AMOUNT]'))
)

console.log('Status: ' + result.getStatus())

if (result.getStatus() !== RedactionStatus.Failed) {
  const rasterizationOptions = new RasterizationOptions()
  rasterizationOptions.setEnabled(false)
  const output = new FileOutputStream('redaction-regex.docx')
  redactor.save(output, rasterizationOptions)
  output.close()
}

redactor.close()

process.exit(0)

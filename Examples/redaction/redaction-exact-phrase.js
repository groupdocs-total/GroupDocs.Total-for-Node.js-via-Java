import '../set-license.js'
import { Redactor } from '@groupdocs/groupdocs.total'
import java from 'java'

const ExactPhraseRedaction = java.import('com.groupdocs.redaction.redactions.ExactPhraseRedaction')
const ReplacementOptions = java.import('com.groupdocs.redaction.redactions.ReplacementOptions')
const RasterizationOptions = java.import('com.groupdocs.redaction.options.RasterizationOptions')
const RedactionStatus = java.import('com.groupdocs.redaction.RedactionStatus')
const FileOutputStream = java.import('java.io.FileOutputStream')

const redactor = new Redactor('contract.docx')
const result = redactor.apply(
  new ExactPhraseRedaction('Project Northlight', new ReplacementOptions('[REDACTED]'))
)

console.log('Status: ' + result.getStatus())

if (result.getStatus() !== RedactionStatus.Failed) {
  // save() with no path overwrites the source, so write to a new file via a stream.
  // Rasterization stays off to keep the result an editable DOCX.
  const rasterizationOptions = new RasterizationOptions()
  rasterizationOptions.setEnabled(false)
  const output = new FileOutputStream('redaction-exact-phrase.docx')
  redactor.save(output, rasterizationOptions)
  output.close()
}

redactor.close()

process.exit(0)

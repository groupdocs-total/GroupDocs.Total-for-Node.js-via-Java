import '../set-license.js'
import { Redactor } from '@groupdocs/groupdocs.total'
import java from 'java'

const EraseMetadataRedaction = java.import('com.groupdocs.redaction.redactions.EraseMetadataRedaction')
const MetadataFilters = java.import('com.groupdocs.redaction.redactions.MetadataFilters')
const RasterizationOptions = java.import('com.groupdocs.redaction.options.RasterizationOptions')
const RedactionStatus = java.import('com.groupdocs.redaction.RedactionStatus')
const FileOutputStream = java.import('java.io.FileOutputStream')

const redactor = new Redactor('contract.docx')
const result = redactor.apply(
  new EraseMetadataRedaction(MetadataFilters.All)
)

console.log('Status: ' + result.getStatus())

if (result.getStatus() !== RedactionStatus.Failed) {
  const rasterizationOptions = new RasterizationOptions()
  rasterizationOptions.setEnabled(false)
  const output = new FileOutputStream('redaction-metadata.docx')
  redactor.save(output, rasterizationOptions)
  output.close()
}

redactor.close()

process.exit(0)

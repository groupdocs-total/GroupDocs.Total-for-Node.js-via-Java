import '../set-license.js'
import { Parser } from '@groupdocs/groupdocs.total'

const parser = new Parser('contract.docx')
const reader = parser.getText()

if (reader == null) {
  console.log('Text extraction is not supported for this format.')
} else {
  console.log(reader.readToEnd())
  reader.close()
}

parser.close()

process.exit(0)

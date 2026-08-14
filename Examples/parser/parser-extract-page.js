import '../set-license.js'
import { Parser } from '@groupdocs/groupdocs.total'

const parser = new Parser('contract.docx')

// Read the first page only; the page index is zero-based
const reader = parser.getText(0)

if (reader == null) {
  console.log('Text extraction is not supported for this format.')
} else {
  console.log(reader.readToEnd())
  reader.close()
}

parser.close()

process.exit(0)

import '../set-license.js'
import { Parser } from '@groupdocs/groupdocs.total'

const parser = new Parser('contract.docx')
const info = parser.getDocumentInfo()

console.log('File type: ' + info.getFileType().getFileFormat())
console.log('Pages: ' + info.getPageCount())
console.log('Size: ' + info.getSize() + ' bytes')

parser.close()

process.exit(0)

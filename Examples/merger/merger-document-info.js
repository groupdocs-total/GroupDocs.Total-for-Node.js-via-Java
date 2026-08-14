import '../set-license.js'
import { Merger } from '@groupdocs/groupdocs.total'

const merger = new Merger('contract.docx')
const info = merger.getDocumentInfo()

console.log('File type: ' + info.getType().getFileFormat())
console.log('Pages: ' + info.getPageCount())
console.log('Size: ' + info.getSize() + ' bytes')

process.exit(0)

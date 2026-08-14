import '../set-license.js'
import { Metadata } from '@groupdocs/groupdocs.total'

const metadata = new Metadata('contract.docx')
const info = metadata.getDocumentInfo()

console.log('File format: ' + info.getFileType().getFileFormat())
console.log('Extension: ' + info.getFileType().getExtension())
console.log('MIME type: ' + info.getFileType().getMimeType())
console.log('Pages: ' + info.getPageCount())
console.log('Size: ' + info.getSize() + ' bytes')
console.log('Encrypted: ' + info.isEncrypted())

metadata.close()

process.exit(0)

import '../set-license.js'
import { Converter } from '@groupdocs/groupdocs.total'

const converter = new Converter('contract.pdf')
const info = converter.getDocumentInfo()

console.log('Format: ' + info.getFormat())
console.log('Pages: ' + info.getPagesCount())
console.log('Size: ' + info.getSize() + ' bytes')

converter.close()

process.exit(0)

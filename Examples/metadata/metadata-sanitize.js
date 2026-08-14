import '../set-license.js'
import { Metadata } from '@groupdocs/groupdocs.total'

const metadata = new Metadata('contract.docx')
const removed = metadata.sanitize()
console.log('Properties removed: ' + removed)

metadata.save('metadata-sanitize.docx')
metadata.close()

process.exit(0)

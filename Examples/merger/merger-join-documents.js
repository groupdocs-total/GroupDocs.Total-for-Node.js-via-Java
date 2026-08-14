import '../set-license.js'
import { Merger } from '@groupdocs/groupdocs.total'
import { resolve } from 'path'

const merger = new Merger('contract.docx')

merger.join('statement-of-work.docx')

// Merger.save resolves a bare relative name oddly, so pass an absolute path
merger.save(resolve('merger-join-documents.docx'))

process.exit(0)

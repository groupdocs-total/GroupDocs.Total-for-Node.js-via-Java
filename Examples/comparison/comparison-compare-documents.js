import '../set-license.js'
import { Comparer } from '@groupdocs/groupdocs.total'

const comparer = new Comparer('contract-v1.docx')
comparer.add('contract-v2.docx')

comparer.compare('comparison-compare-documents.docx')
comparer.close()

process.exit(0)

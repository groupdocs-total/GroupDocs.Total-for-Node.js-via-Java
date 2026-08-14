import '../set-license.js'
import { Viewer } from '@groupdocs/groupdocs.total'
import java from 'java'

const PdfViewOptions = java.import('com.groupdocs.viewer.options.PdfViewOptions')

const viewer = new Viewer('contract.docx')
const viewOptions = new PdfViewOptions('viewer-render-to-pdf.pdf')

viewer.view(viewOptions)
viewer.close()

process.exit(0)

import '../set-license.js'
import { Viewer } from '@groupdocs/groupdocs.total'
import java from 'java'

const PngViewOptions = java.import('com.groupdocs.viewer.options.PngViewOptions')

const viewer = new Viewer('contract.docx')
const viewOptions = new PngViewOptions('viewer-render-to-png/page_{0}.png')

viewer.view(viewOptions)
viewer.close()

process.exit(0)

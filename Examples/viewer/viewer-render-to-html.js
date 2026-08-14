import '../set-license.js'
import { Viewer } from '@groupdocs/groupdocs.total'
import java from 'java'

const HtmlViewOptions = java.import('com.groupdocs.viewer.options.HtmlViewOptions')

const viewer = new Viewer('contract.docx')
// {0} is replaced with the page number, so page 1 becomes page_1.html
const viewOptions = HtmlViewOptions.forEmbeddedResources(
  'viewer-render-to-html/page_{0}.html'
)

viewer.view(viewOptions)
viewer.close()

process.exit(0)

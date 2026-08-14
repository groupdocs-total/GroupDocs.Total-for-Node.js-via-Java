import '../set-license.js'
import { Viewer } from '@groupdocs/groupdocs.total'
import java from 'java'

const ViewInfoOptions = java.import('com.groupdocs.viewer.options.ViewInfoOptions')

const viewer = new Viewer('contract.docx')
const viewInfoOptions = ViewInfoOptions.forHtmlView()
const viewInfo = viewer.getViewInfo(viewInfoOptions)

console.log('File type: ' + viewInfo.getFileType())
console.log('Pages: ' + viewInfo.getPages().size())

const pages = viewInfo.getPages()
for (let i = 0; i < pages.size(); i++) {
  const page = pages.get(i)
  console.log('Page ' + page.getNumber() + ': ' + page.getWidth() + 'x' + page.getHeight())
}

viewer.close()

process.exit(0)

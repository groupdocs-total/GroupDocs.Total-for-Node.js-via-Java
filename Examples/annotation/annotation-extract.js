import '../set-license.js'
import { Annotator } from '@groupdocs/groupdocs.total'
import java from 'java'

const AreaAnnotation = java.import('com.groupdocs.annotation.models.annotationmodels.AreaAnnotation')
const Rectangle = java.import('com.groupdocs.annotation.models.Rectangle')

// Annotate first, so there is something to read back
const annotator = new Annotator('contract.docx')
const area = new AreaAnnotation()
area.setBox(new Rectangle(100, 100, 200, 100))
area.setMessage('Please confirm these figures')
area.setPageNumber(0)

annotator.add(area)
annotator.save('annotation-extract.pdf')
annotator.close()

const reader = new Annotator('annotation-extract.pdf')
const annotations = reader.get()

console.log('Annotations found: ' + annotations.size())

for (let i = 0; i < annotations.size(); i++) {
  const item = annotations.get(i)
  console.log(item.getClass().getSimpleName()
    + ' on page ' + item.getPageNumber()
    + ': ' + item.getMessage())
}

reader.close()

process.exit(0)

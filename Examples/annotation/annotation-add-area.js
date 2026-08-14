import '../set-license.js'
import { Annotator } from '@groupdocs/groupdocs.total'
import java from 'java'

const AreaAnnotation = java.import('com.groupdocs.annotation.models.annotationmodels.AreaAnnotation')
const Rectangle = java.import('com.groupdocs.annotation.models.Rectangle')

const annotator = new Annotator('contract.docx')

const area = new AreaAnnotation()
area.setBox(new Rectangle(100, 100, 200, 100))
area.setBackgroundColor(65535)
area.setMessage('Please confirm these figures')
area.setPageNumber(0)
area.setOpacity(0.7)

annotator.add(area)
annotator.save('annotation-add-area.pdf')
annotator.close()

process.exit(0)

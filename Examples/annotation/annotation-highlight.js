import '../set-license.js'
import { Annotator } from '@groupdocs/groupdocs.total'
import java from 'java'

const HighlightAnnotation = java.import('com.groupdocs.annotation.models.annotationmodels.HighlightAnnotation')
const Point = java.import('com.groupdocs.annotation.models.Point')
const ArrayList = java.import('java.util.ArrayList')

const annotator = new Annotator('contract.docx')

// Corner points of the region to highlight
const points = new ArrayList()
points.add(new Point(80, 730))
points.add(new Point(240, 730))
points.add(new Point(80, 710))
points.add(new Point(240, 710))

const highlight = new HighlightAnnotation()
highlight.setPoints(points)
highlight.setBackgroundColor(65535)
highlight.setMessage('Check this clause against the contract')
highlight.setPageNumber(0)
highlight.setOpacity(0.5)

annotator.add(highlight)
annotator.save('annotation-highlight.pdf')
annotator.close()

process.exit(0)

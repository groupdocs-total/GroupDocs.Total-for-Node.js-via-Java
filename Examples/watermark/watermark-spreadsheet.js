import '../set-license.js'
import { Watermarker } from '@groupdocs/groupdocs.total'
import java from 'java'

const TextWatermark = java.import('com.groupdocs.watermark.watermarks.TextWatermark')
const Font = java.import('com.groupdocs.watermark.watermarks.Font')
const FontStyle = java.import('com.groupdocs.watermark.watermarks.FontStyle')

const watermarker = new Watermarker('rate-card.xlsx')

const textWatermark = new TextWatermark(
  'DRAFT',
  new Font('Calibri', 36, FontStyle.Bold)
)

textWatermark.setOpacity(0.3)
textWatermark.setRotateAngle(-30)

watermarker.add(textWatermark)
watermarker.save('watermark-spreadsheet.xlsx')
watermarker.close()

process.exit(0)

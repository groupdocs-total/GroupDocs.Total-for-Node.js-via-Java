import '../set-license.js'
import { Watermarker } from '@groupdocs/groupdocs.total'
import java from 'java'

const TextWatermark = java.import('com.groupdocs.watermark.watermarks.TextWatermark')
const Font = java.import('com.groupdocs.watermark.watermarks.Font')
const FontStyle = java.import('com.groupdocs.watermark.watermarks.FontStyle')
const Color = java.import('com.groupdocs.watermark.watermarks.Color')
const HorizontalAlignment = java.import('com.groupdocs.watermark.common.HorizontalAlignment')
const VerticalAlignment = java.import('com.groupdocs.watermark.common.VerticalAlignment')

const watermarker = new Watermarker('contract.docx')

const textWatermark = new TextWatermark(
  'CONFIDENTIAL',
  new Font('Arial', 42, FontStyle.Bold)
)

textWatermark.setForegroundColor(Color.getRed())
textWatermark.setOpacity(0.4)
textWatermark.setRotateAngle(-45)
textWatermark.setHorizontalAlignment(HorizontalAlignment.Center)
textWatermark.setVerticalAlignment(VerticalAlignment.Center)

watermarker.add(textWatermark)
watermarker.save('watermark-add-text.docx')
watermarker.close()

process.exit(0)

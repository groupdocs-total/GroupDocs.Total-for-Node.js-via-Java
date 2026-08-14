import '../set-license.js'
import { Watermarker } from '@groupdocs/groupdocs.total'
import java from 'java'

const ImageWatermark = java.import('com.groupdocs.watermark.watermarks.ImageWatermark')
const HorizontalAlignment = java.import('com.groupdocs.watermark.common.HorizontalAlignment')
const VerticalAlignment = java.import('com.groupdocs.watermark.common.VerticalAlignment')

const watermarker = new Watermarker('contract.pdf')
const imageWatermark = new ImageWatermark('logo.png')

imageWatermark.setOpacity(0.5)
imageWatermark.setHorizontalAlignment(HorizontalAlignment.Center)
imageWatermark.setVerticalAlignment(VerticalAlignment.Center)

watermarker.add(imageWatermark)
imageWatermark.close()

watermarker.save('watermark-add-image.pdf')
watermarker.close()

process.exit(0)

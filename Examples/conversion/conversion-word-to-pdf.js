import '../set-license.js'
import { Converter } from '@groupdocs/groupdocs.total'
import java from 'java'

const PdfConvertOptions = java.import('com.groupdocs.conversion.options.convert.PdfConvertOptions')

const converter = new Converter('contract.docx')
const convertOptions = new PdfConvertOptions()

converter.convert('conversion-word-to-pdf.pdf', convertOptions)
converter.close()

process.exit(0)

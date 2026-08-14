import '../set-license.js'
import { Converter } from '@groupdocs/groupdocs.total'
import java from 'java'

const WordProcessingConvertOptions = java.import('com.groupdocs.conversion.options.convert.WordProcessingConvertOptions')

const converter = new Converter('contract.pdf')
const convertOptions = new WordProcessingConvertOptions()

converter.convert('conversion-pdf-to-word.docx', convertOptions)
converter.close()

process.exit(0)

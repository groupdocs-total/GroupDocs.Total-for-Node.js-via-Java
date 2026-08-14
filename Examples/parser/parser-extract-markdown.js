import '../set-license.js'
import { Parser } from '@groupdocs/groupdocs.total'
import java from 'java'
import { writeFileSync } from 'fs'

const FormattedTextOptions = java.import('com.groupdocs.parser.options.FormattedTextOptions')
const FormattedTextMode = java.import('com.groupdocs.parser.options.FormattedTextMode')

const parser = new Parser('contract.docx')
const reader = parser.getFormattedText(
  new FormattedTextOptions(FormattedTextMode.Markdown)
)

if (reader == null) {
  console.log('Formatted extraction is not supported for this format.')
} else {
  writeFileSync('parser-extract-markdown.md', reader.readToEnd())
  reader.close()
}

parser.close()

process.exit(0)

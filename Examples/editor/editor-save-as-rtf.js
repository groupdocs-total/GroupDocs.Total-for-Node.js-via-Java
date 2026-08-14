import '../set-license.js'
import { Editor } from '@groupdocs/groupdocs.total'
import java from 'java'

const WordProcessingEditOptions = java.import('com.groupdocs.editor.options.WordProcessingEditOptions')
const WordProcessingSaveOptions = java.import('com.groupdocs.editor.options.WordProcessingSaveOptions')
const WordProcessingFormats = java.import('com.groupdocs.editor.formats.WordProcessingFormats')

const editor = new Editor('contract.docx')

const document = editor.edit(new WordProcessingEditOptions())

editor.save(
  document,
  'editor-save-as-rtf.rtf',
  new WordProcessingSaveOptions(WordProcessingFormats.Rtf)
)

console.log('Saved editor-save-as-rtf.rtf')

editor.dispose()

process.exit(0)

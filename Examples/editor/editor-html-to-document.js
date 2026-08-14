import '../set-license.js'
import { Editor, EditableDocument } from '@groupdocs/groupdocs.total'
import java from 'java'

const WordProcessingEditOptions = java.import('com.groupdocs.editor.options.WordProcessingEditOptions')
const WordProcessingSaveOptions = java.import('com.groupdocs.editor.options.WordProcessingSaveOptions')
const WordProcessingFormats = java.import('com.groupdocs.editor.formats.WordProcessingFormats')

const editor = new Editor('contract.docx')

const original = editor.edit(new WordProcessingEditOptions())

// Stand in for the user's edit in a web editor
const editedHtml = original.getBodyContent()
  .replace('Consulting Services Agreement', 'Consulting Services Agreement (revised)')

const edited = EditableDocument.fromMarkup(editedHtml, null)

editor.save(
  edited,
  'editor-html-to-document.docx',
  new WordProcessingSaveOptions(WordProcessingFormats.Docx)
)

console.log('Saved editor-html-to-document.docx')

editor.dispose()

process.exit(0)

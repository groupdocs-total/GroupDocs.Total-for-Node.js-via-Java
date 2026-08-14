import '../set-license.js'
import { Editor } from '@groupdocs/groupdocs.total'
import java from 'java'
import { writeFileSync } from 'fs'

const WordProcessingEditOptions = java.import('com.groupdocs.editor.options.WordProcessingEditOptions')

const editor = new Editor('contract.docx')

// Stage 1: parse the document into an editable form
const document = editor.edit(new WordProcessingEditOptions())

// Stage 2: the HTML your web editor would load
const bodyHtml = document.getBodyContent()

// getEmbeddedHtml() is a self-contained page with images and styles inlined
writeFileSync('editor-document-to-html.html', document.getEmbeddedHtml())

console.log('Body HTML length: ' + bodyHtml.length + ' characters')

editor.dispose()

process.exit(0)

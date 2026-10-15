import '../set-license.js'
import '@groupdocs/groupdocs.total'
import java from 'java'

const DocumentAssembler = java.import('com.groupdocs.assembly.DocumentAssembler')
const JsonDataSource = java.import('com.groupdocs.assembly.JsonDataSource')
const DataSourceInfo = java.import('com.groupdocs.assembly.DataSourceInfo')

const managers = new JsonDataSource('ManagerData.json')
const assembler = new DocumentAssembler()
assembler.assembleDocument(
  'SimpleDatasetDemo.docx',
  'assembly-json.docx',
  new DataSourceInfo(managers, 'managers')
)

console.log('Saved assembly-json.docx')

process.exit(0)

import '../set-license.js'
import '@groupdocs/groupdocs.total'
import java from 'java'

const DocumentAssembler = java.import('com.groupdocs.assembly.DocumentAssembler')
const XmlDataSource = java.import('com.groupdocs.assembly.XmlDataSource')
const DataSourceInfo = java.import('com.groupdocs.assembly.DataSourceInfo')

const managers = new XmlDataSource('Managers.xml')
const assembler = new DocumentAssembler()
assembler.assembleDocument(
  'SimpleDatasetDemo.docx',
  'assembly-xml.docx',
  new DataSourceInfo(managers, 'managers')
)

console.log('Saved assembly-xml.docx')

process.exit(0)

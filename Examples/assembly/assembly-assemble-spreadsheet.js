import '../set-license.js'
import '@groupdocs/groupdocs.total'
import java from 'java'

const DocumentAssembler = java.import('com.groupdocs.assembly.DocumentAssembler')
const DocumentTable = java.import('com.groupdocs.assembly.DocumentTable')
const DocumentTableOptions = java.import('com.groupdocs.assembly.DocumentTableOptions')
const DataSourceInfo = java.import('com.groupdocs.assembly.DataSourceInfo')

const options = new DocumentTableOptions()
options.setFirstRowContainsColumnNames(true)

const contracts = new DocumentTable('Contracts Data.xlsx', 0, options)
const assembler = new DocumentAssembler()
assembler.assembleDocument(
  'Using Spreadsheet as Table of Data.docx',
  'assembly-spreadsheet.docx',
  new DataSourceInfo(contracts, 'contracts')
)

console.log('Saved assembly-spreadsheet.docx')

process.exit(0)

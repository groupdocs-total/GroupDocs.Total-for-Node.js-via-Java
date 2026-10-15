import '../set-license.js'
import '@groupdocs/groupdocs.total'
import java from 'java'

const DocumentAssembler = java.import('com.groupdocs.assembly.DocumentAssembler')
const CsvDataLoadOptions = java.import('com.groupdocs.assembly.CsvDataLoadOptions')
const CsvDataSource = java.import('com.groupdocs.assembly.CsvDataSource')
const DataSourceInfo = java.import('com.groupdocs.assembly.DataSourceInfo')

const options = new CsvDataLoadOptions(true)
const persons = new CsvDataSource('Person.csv', options)
const assembler = new DocumentAssembler()
assembler.assembleDocument(
  'CsvDatasetDemo.txt',
  'assembly-csv.docx',
  new DataSourceInfo(persons, 'persons')
)

console.log('Saved assembly-csv.docx')

process.exit(0)

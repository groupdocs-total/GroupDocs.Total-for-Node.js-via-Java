import './classpath.js'
import '../set-license.js'
import '@groupdocs/groupdocs.total'
import java from 'java'

const DocumentAssembler = java.import('com.groupdocs.assembly.DocumentAssembler')
const DataSourceInfo = java.import('com.groupdocs.assembly.DataSourceInfo')
const Manager = java.import('sample.Manager')

const manager = new Manager('John Smith', 37)
const assembler = new DocumentAssembler()
assembler.assembleDocument(
  'Single Row.txt',
  'assembly-object.txt',
  new DataSourceInfo(manager, 'manager')
)

console.log('Saved assembly-object.txt')

process.exit(0)

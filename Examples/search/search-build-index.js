import '../set-license.js'
import { Index } from '@groupdocs/groupdocs.total'
import { basename } from 'path'

// The index is a folder the library owns; keep it out of your documents folder
const index = new Index('search-build-index/index')

// Index every supported document in the folder
index.add('archive')

const result = index.search('throughput')

console.log('Documents found: ' + result.getDocumentCount())
console.log('Total occurrences: ' + result.getOccurrenceCount())

for (let i = 0; i < result.getDocumentCount(); i++) {
  const document = result.getFoundDocument(i)
  // getFilePath() is absolute; the file name is the useful part here
  const fileName = basename(document.getDocumentInfo().getFilePath())
  console.log('  ' + fileName + ' (' + document.getOccurrenceCount() + ' occurrences)')
}

index.close()

process.exit(0)

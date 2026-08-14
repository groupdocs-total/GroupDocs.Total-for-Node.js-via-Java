import '../set-license.js'
import { Index } from '@groupdocs/groupdocs.total'
import { basename } from 'path'

const index = new Index('search-boolean/index')
index.add('archive')

const result = index.search('throughput AND NOT forecast')

console.log('Documents found: ' + result.getDocumentCount())

for (let i = 0; i < result.getDocumentCount(); i++) {
  const document = result.getFoundDocument(i)
  console.log('  ' + basename(document.getDocumentInfo().getFilePath()))
}

index.close()

process.exit(0)

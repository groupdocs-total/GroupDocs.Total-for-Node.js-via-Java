import '../set-license.js'
import { Comparer } from '@groupdocs/groupdocs.total'

const comparer = new Comparer('contract-v1.docx')
comparer.add('contract-v2.docx')
comparer.compare()

const changes = comparer.getChanges()

console.log('Changes found: ' + changes.length)

for (const change of changes) {
  console.log(change.getId() + '. ' + change.getType()
    + ' | source: \'' + change.getSourceText() + '\''
    + ' | target: \'' + change.getTargetText() + '\'')
}

comparer.close()

process.exit(0)

import '../set-license.js'
import { Comparer } from '@groupdocs/groupdocs.total'
import java from 'java'

const ComparisonAction = java.import('com.groupdocs.comparison.result.ComparisonAction')
const ApplyChangeOptions = java.import('com.groupdocs.comparison.options.ApplyChangeOptions')

const comparer = new Comparer('contract-v1.docx')
comparer.add('contract-v2.docx')
comparer.compare()

const changes = comparer.getChanges()

// Accept everything except the first change, which we reject
for (const change of changes) {
  change.setComparisonAction(ComparisonAction.ACCEPT)
}
if (changes.length > 0) {
  changes[0].setComparisonAction(ComparisonAction.REJECT)
  console.log('Rejected: \'' + changes[0].getTargetText() + '\'')
}

const changeArray = java.newArray('com.groupdocs.comparison.result.ChangeInfo', changes)
const applyOptions = new ApplyChangeOptions(changeArray)

comparer.applyChanges('comparison-accept-reject.docx', applyOptions)
comparer.close()

process.exit(0)

import '../set-license.js'
import { Index } from '@groupdocs/groupdocs.total'
import java from 'java'

const SearchOptions = java.import('com.groupdocs.search.options.SearchOptions')
const TableDiscreteFunction = java.import('com.groupdocs.search.options.TableDiscreteFunction')

const index = new Index('search-fuzzy/index')
index.add('archive')

const options = new SearchOptions()
options.getFuzzySearch().setEnabled(true)
options.getFuzzySearch().setFuzzyAlgorithm(new TableDiscreteFunction(3))

// Matches "throughput" even when spelled "througput" or "throughtput"
const result = index.search('throughput', options)

console.log('Documents found: ' + result.getDocumentCount())
console.log('Total occurrences: ' + result.getOccurrenceCount())

index.close()

process.exit(0)

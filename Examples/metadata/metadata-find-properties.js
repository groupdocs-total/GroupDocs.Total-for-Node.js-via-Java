import '../set-license.js'
import { Metadata } from '@groupdocs/groupdocs.total'
import java from 'java'

const ContainsTagSpecification = java.import('com.groupdocs.metadata.search.ContainsTagSpecification')
const Tags = java.import('com.groupdocs.metadata.tagging.Tags')

const metadata = new Metadata('contract.docx')

// Every property tagged as identifying the person who created the document
const properties = metadata.findProperties(
  new ContainsTagSpecification(Tags.getPerson().getCreator())
)

for (let i = 0; i < properties.getCount(); i++) {
  const property = properties.get_Item(i)
  console.log(property.getName() + ' = ' + property.getValue())
}

metadata.close()

process.exit(0)

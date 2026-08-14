import '../set-license.js'
import { Merger } from '@groupdocs/groupdocs.total'
import java from 'java'

const SplitOptions = java.import('com.groupdocs.merger.domain.options.SplitOptions')
const SplitMode = java.import('com.groupdocs.merger.domain.options.SplitMode')

const merger = new Merger('contract.docx')

// contract.docx has two pages; {0} is replaced with the page number
const pageNumbers = java.newArray('int', [1, 2])
const splitOptions = new SplitOptions(
  'merger-split-pages/page_{0}.docx',
  pageNumbers,
  SplitMode.Pages
)

merger.split(splitOptions)

process.exit(0)

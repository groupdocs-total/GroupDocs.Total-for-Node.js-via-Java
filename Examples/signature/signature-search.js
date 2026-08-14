import '../set-license.js'
import { Signature } from '@groupdocs/groupdocs.total'
import java from 'java'

const QrCodeSignOptions = java.import('com.groupdocs.signature.options.sign.QrCodeSignOptions')
const QrCodeTypes = java.import('com.groupdocs.signature.domain.qrcodes.QrCodeTypes')
const QrCodeSearchOptions = java.import('com.groupdocs.signature.options.search.QrCodeSearchOptions')
const QrCodeSignature = java.import('com.groupdocs.signature.domain.signatures.QrCodeSignature')

// Sign first, so there is something to find
const signer = new Signature('contract.docx')
const signOptions = new QrCodeSignOptions('Approved by John Smith')
signOptions.setEncodeType(QrCodeTypes.QR)
signOptions.setLeft(100)
signOptions.setTop(100)
signer.sign('signature-search.docx', signOptions)
signer.dispose()

// Now search the signed document
const searcher = new Signature('signature-search.docx')
const searchOptions = new QrCodeSearchOptions()
const signatures = searcher.search(QrCodeSignature.class, searchOptions)

console.log('Signatures found: ' + signatures.size())

for (let i = 0; i < signatures.size(); i++) {
  const qrSignature = signatures.get(i)
  console.log('Text: ' + qrSignature.getText())
}

searcher.dispose()

process.exit(0)

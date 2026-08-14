import '../set-license.js'
import { Signature } from '@groupdocs/groupdocs.total'
import java from 'java'

const TextSignOptions = java.import('com.groupdocs.signature.options.sign.TextSignOptions')

const signer = new Signature('contract.docx')

const signOptions = new TextSignOptions('John Smith')
signOptions.setLeft(100)
signOptions.setTop(100)
signOptions.setWidth(200)
signOptions.setHeight(40)

signer.sign('signature-sign-with-text.docx', signOptions)
signer.dispose()

process.exit(0)

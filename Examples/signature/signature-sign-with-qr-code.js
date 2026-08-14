import '../set-license.js'
import { Signature } from '@groupdocs/groupdocs.total'
import java from 'java'

const QrCodeSignOptions = java.import('com.groupdocs.signature.options.sign.QrCodeSignOptions')
const QrCodeTypes = java.import('com.groupdocs.signature.domain.qrcodes.QrCodeTypes')

const signer = new Signature('contract.docx')

const signOptions = new QrCodeSignOptions('Approved by John Smith')
signOptions.setEncodeType(QrCodeTypes.QR)
signOptions.setLeft(100)
signOptions.setTop(100)
signOptions.setWidth(120)
signOptions.setHeight(120)

signer.sign('signature-sign-with-qr-code.docx', signOptions)
signer.dispose()

process.exit(0)

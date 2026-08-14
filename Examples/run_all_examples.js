import { fileURLToPath, pathToFileURL } from 'url'
import { dirname, join } from 'path'
import { execSync } from 'child_process'
import { existsSync, readdirSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Set license path (update this path to your license file location)
// process.env.GROUPDOCS_LICENSE_PATH = './GroupDocs.Total.lic'

const YELLOW = '\x1b[93m'
const GREEN = '\x1b[92m'
const RED = '\x1b[91m'
const RESET = '\x1b[0m'

const examples = {
  ConversionPdfToWord: 'conversion/conversion-pdf-to-word.js',
  ConversionWordToPdf: 'conversion/conversion-word-to-pdf.js',
  ConversionDocumentInfo: 'conversion/conversion-document-info.js',
  ViewerRenderToHtml: 'viewer/viewer-render-to-html.js',
  ViewerRenderToPdf: 'viewer/viewer-render-to-pdf.js',
  ViewerRenderToPng: 'viewer/viewer-render-to-png.js',
  ViewerDocumentInfo: 'viewer/viewer-document-info.js',
  ComparisonCompareDocuments: 'comparison/comparison-compare-documents.js',
  ComparisonListChanges: 'comparison/comparison-list-changes.js',
  ComparisonAcceptReject: 'comparison/comparison-accept-reject.js',
  WatermarkAddText: 'watermark/watermark-add-text.js',
  WatermarkAddImage: 'watermark/watermark-add-image.js',
  WatermarkSpreadsheet: 'watermark/watermark-spreadsheet.js',
  MetadataReadInfo: 'metadata/metadata-read-info.js',
  MetadataFindProperties: 'metadata/metadata-find-properties.js',
  MetadataSanitize: 'metadata/metadata-sanitize.js',
  ParserExtractText: 'parser/parser-extract-text.js',
  ParserExtractPage: 'parser/parser-extract-page.js',
  ParserExtractMarkdown: 'parser/parser-extract-markdown.js',
  ParserDocumentInfo: 'parser/parser-document-info.js',
  MergerJoinDocuments: 'merger/merger-join-documents.js',
  MergerSplitPages: 'merger/merger-split-pages.js',
  MergerDocumentInfo: 'merger/merger-document-info.js',
  RedactionExactPhrase: 'redaction/redaction-exact-phrase.js',
  RedactionRegex: 'redaction/redaction-regex.js',
  RedactionMetadata: 'redaction/redaction-metadata.js',
  SignatureSignWithText: 'signature/signature-sign-with-text.js',
  SignatureSignWithQrCode: 'signature/signature-sign-with-qr-code.js',
  SignatureSearch: 'signature/signature-search.js',
  SearchBuildIndex: 'search/search-build-index.js',
  SearchFuzzy: 'search/search-fuzzy.js',
  SearchBoolean: 'search/search-boolean.js',
  EditorDocumentToHtml: 'editor/editor-document-to-html.js',
  EditorHtmlToDocument: 'editor/editor-html-to-document.js',
  EditorSaveAsRtf: 'editor/editor-save-as-rtf.js',
  AnnotationAddArea: 'annotation/annotation-add-area.js',
  AnnotationHighlight: 'annotation/annotation-highlight.js',
  AnnotationExtract: 'annotation/annotation-extract.js'
}

function printIntro() {
  console.log(`
=================================================================
Welcome to the GroupDocs.Total for Node.js via Java Examples!
=================================================================

This script will run a series of examples showcasing the features of GroupDocs.Total for Node.js via Java.
Each example demonstrates a single product use case such as:

- Viewing documents as HTML, PDF or images
- Converting between document formats
- Comparing versions and accepting or rejecting changes
- Signing documents and searching signatures
- Editing documents through an HTML round trip
- Annotating documents and reading the markup back
- Reading and sanitizing metadata, parsing text, and redacting sensitive content
- Searching document collections
- Watermarking and merging or splitting files

Enjoy exploring the GroupDocs API!

=======================================================
`)
}

function findLicense() {
  let licensePath
  for (const candidate of [
    process.env.GROUPDOCS_LICENSE_PATH,
    process.env.GROUPDOCS_LIC_PATH
  ]) {
    if (candidate && existsSync(candidate)) {
      licensePath = candidate
      break
    }
  }

  if (!licensePath) {
    const licFile = readdirSync(__dirname).find(f => f.toLowerCase().endsWith('.lic'))
    if (licFile) {
      licensePath = join(__dirname, licFile)
    }
  }

  if (!licensePath) {
    console.log(`${YELLOW}No license file found. Running in evaluation mode.${RESET}\n`)
    return
  }

  // License is applied in each child process (new JVM). Setting it here would not carry over.
  console.log(`${GREEN}License file: ${licensePath}${RESET}\n`)
}

function runExample(name, relativePath) {
  const examplePath = join(__dirname, relativePath)
  const exampleDir = dirname(examplePath)
  const licenseLoader = pathToFileURL(join(__dirname, 'set-license.js')).href

  console.log(`${YELLOW}Running ${name}...${RESET}`)
  try {
    execSync(`node --import "${licenseLoader}" "${examplePath}"`, {
      cwd: exampleDir,
      stdio: 'inherit',
      env: process.env
    })
    console.log(`${GREEN}Completed ${name}${RESET}\n`)
    return true
  } catch (e) {
    console.log(`${RED}Error running ${name}: ${e.message}${RESET}\n`)
    return false
  }
}

const args = process.argv.slice(2)

if (args[0] === '--list') {
  for (const name of Object.keys(examples)) {
    console.log(name)
  }
  process.exit(0)
}

if (args[0] === '--example') {
  const name = args[1]
  const relativePath = examples[name]
  if (!relativePath) {
    console.error(`Unknown example: ${name}`)
    process.exit(1)
  }
  findLicense()
  const ok = runExample(name, relativePath)
  process.exit(ok ? 0 : 1)
}

printIntro()
findLicense()

let successfulExamples = 0
let failedExamples = 0

for (const [name, relativePath] of Object.entries(examples)) {
  if (runExample(name, relativePath)) {
    successfulExamples++
  } else {
    failedExamples++
  }
}

const totalExamples = Object.keys(examples).length
console.log('=================================================================')
console.log(`${GREEN}Summary:${RESET}`)
console.log(`  Total examples: ${totalExamples}`)
console.log(`  Successful: ${GREEN}${successfulExamples}${RESET}`)
if (failedExamples > 0) {
  console.log(`  Failed: ${RED}${failedExamples}${RESET}`)
} else {
  console.log(`  Failed: ${GREEN}${failedExamples}${RESET}`)
}
console.log('=================================================================')
console.log(`${GREEN}All examples completed${RESET}`)

process.exit(0)

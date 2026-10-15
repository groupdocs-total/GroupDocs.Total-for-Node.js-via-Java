import java from 'java'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

java.classpath.push(dirname(fileURLToPath(import.meta.url)))

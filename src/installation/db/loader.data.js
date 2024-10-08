import fs from 'node:fs'
import { parse } from 'csv-parse/sync'

export default {
  watch: ['./*.csv'],
  load(watchedFiles) {
    // watchedFiles will be an array of absolute paths of the matched files.
    // generate an array of blog post metadata that can be used to render
    // a list in the theme layout
    return watchedFiles.map((file) => {
      return parse(fs.readFileSync(file, 'utf-8'), {
      })
    })
  }
}
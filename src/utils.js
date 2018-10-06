import trim from 'lodash/trim'

export const splitSentences = (text = '') => text.replace(/\.+/g,'.|')
  .replace(/\?/g,'?|')
  .replace(/\!/g,'!|')
  .split("|")
  .map(sentence => trim(sentence))

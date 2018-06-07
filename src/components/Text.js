import system from 'system-components'

const Text = system(
  {
    is: 'span',
    display: 'inline-block',
    fontSize: 2,
    lineHeight: 'normal',
    color: 'gray9',
  },
  'space',
  'width',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing',
)

Text.displayName = 'Text'

export default Text

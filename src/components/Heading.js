import system from 'system-components'

const Heading = system(
  {
    is: 'h1',
    m: 0,
    fontSize: 5,
    fontWeight: 'normal',
    lineHeight: 'tight',
    color: 'gray9',
  },
  'width',
  'textAlign',
  'letterSpacing',
)

Heading.displayName = 'Heading'

export default Heading

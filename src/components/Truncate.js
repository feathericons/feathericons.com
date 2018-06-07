import Text from './Text'

const Truncate = Text.extend({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
})

Truncate.displayName = 'Truncate'

export default Truncate

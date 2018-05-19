import system from 'system-components'

const Link = system(
  {
    is: 'a',
    color: 'gray9',

    hover: {
      color: 'base',
    },
  },
  'space',
)

export default Link

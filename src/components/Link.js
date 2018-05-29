import system from 'system-components'

const Link = system(
  {
    is: 'a',
    fontSize: 2,
    fontWeight: 'normal',
    color: 'gray9',

    hover: {
      color: 'base',
    },
  },
  'space',
)

export default Link

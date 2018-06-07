import system from 'system-components'

const Image = system(
  {
    is: 'img',
  },
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  'space',
  'width',
  'color',
)

Image.displayName = 'Image'

export default Image

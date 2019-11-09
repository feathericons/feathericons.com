/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import Button from './Button'
import Icon from './Icon'

function ColorModeToggle(props) {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}
      sx={{
        padding: 1,
        lineHeight: 'none',
        color: 'icon',
        backgroundColor: 'transparent',
      }}
      {...props}
    >
      {colorMode === 'default' ? (
        <Icon name="moon" sx={{ fill: 'currentColor' }} />
      ) : (
        <Icon name="sun" sx={{ fill: 'currentColor' }} />
      )}
    </Button>
  )
}

export default ColorModeToggle

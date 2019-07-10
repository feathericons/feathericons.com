import theme from '../theme'

function Container(props) {
  return (
    <div
      css={{ maxWidth: 1200, margin: 'auto', padding: theme.space[4] }}
      {...props}
    />
  )
}

export default Container

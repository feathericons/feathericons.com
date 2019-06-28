import { icons } from 'feather-icons'
import { string } from 'prop-types'

function Icon({ name, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      stroke="currentColor"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      css={{ verticalAlign: 'text-bottom' }}
      dangerouslySetInnerHTML={{ __html: icons[name].contents }}
      {...props}
    />
  )
}

Icon.propTypes = {
  name: string.isRequired,
}

export default Icon

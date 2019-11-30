/** @jsx jsx */
import { jsx } from 'theme-ui'
import Customize from './Customize'
import CarbonAd from './CarbonAd'

function Sidebar() {
  return (
    <div sx={{ paddingY: 5, paddingX: 4 }}>
      <Customize />
      <CarbonAd sx={{ marginTop: 6 }} />
    </div>
  )
}

export default Sidebar

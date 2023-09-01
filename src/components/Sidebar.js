/** @jsx jsx */
import { jsx } from 'theme-ui'
import Customize from './Customize'
import StreamlineAd from './StreamlineAd'

function Sidebar() {
  return (
    <div sx={{ paddingY: 5, paddingX: 4, display: 'grid', gap: 6 }}>
      <Customize />
      <StreamlineAd />
    </div>
  )
}

export default Sidebar

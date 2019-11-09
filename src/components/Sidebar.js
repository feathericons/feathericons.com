/** @jsx jsx */
import { Input, Label, Select, Slider } from '@rebass/forms'
import { jsx } from 'theme-ui'

function Sidebar() {
  return (
    <div sx={{ paddingY: 5, paddingX: 5 }}>
      <form sx={{ display: 'grid', gridGap: 4 }}>
        <h2 sx={{ margin: 0, fontSize: 4, fontWeight: 'bold' }}>Customize</h2>
        <div>
          <Label htmlFor="size">Size</Label>
          <Slider id="size" min="12" max="100" step="4"></Slider>
        </div>
        <div>
          <Label htmlFor="strokeWidth">Stroke width</Label>
          <Slider id="strokeWidth" min="0.5" max="3" step="0.5"></Slider>
        </div>
        <div>
          <Label htmlFor="strokeColor">Stroke color</Label>
          <Input id="strokeColor" placeholder="#000000"></Input>
        </div>
        <div>
          <Label htmlFor="strokeLinecap">Stroke linecap</Label>
          <Select id="strokeLinecap">
            <option>butt</option>
            <option>round</option>
            <option>square</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="strokeLinejoin">Stroke linejoin</Label>
          <Select id="strokeLinejoin">
            <option>miter</option>
            <option>round</option>
            <option>bevel</option>
          </Select>
        </div>
      </form>
    </div>
  )
}

export default Sidebar

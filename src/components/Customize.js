/** @jsx jsx */
import { Input, Label, Select, Slider } from '@rebass/forms'
import { useFormik } from 'formik'
import isEqual from 'lodash.isequal'
import React from 'react'
import { jsx } from 'theme-ui'
import Button from './Button'
import { useOptions } from './OptionsContext'

const INITIAL_VALUES = {
  size: 24,
  strokeWidth: 2,
  strokeColor: 'currentColor',
}

function Customize() {
  const { values, handleChange, handleReset } = useFormik({
    initialValues: INITIAL_VALUES,
  })

  const { setOptions } = useOptions()

  React.useEffect(() => setOptions(values), [setOptions, values])

  return (
    <form sx={{ display: 'grid', gridGap: 4 }}>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h2 sx={{ margin: 0, fontSize: 4, fontWeight: 'bold' }}>Customize</h2>
        <Button
          onClick={handleReset}
          disabled={isEqual(values, INITIAL_VALUES)}
          sx={{
            variant: 'buttons.outline',
            paddingY: 1,
            paddingX: 2,
            fontSize: 1,
          }}
        >
          Reset
        </Button>
      </div>
      <div>
        <Label htmlFor="size">Size</Label>
        <div
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: '1fr 48px',
            justifyItems: 'end',
            alignItems: 'center',
          }}
        >
          <Slider
            id="size"
            min="12"
            max="100"
            step="4"
            value={values.size}
            onChange={handleChange}
          ></Slider>
          {values.size}px
        </div>
      </div>
      <div>
        <Label htmlFor="strokeWidth">Stroke width</Label>
        <div
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: '1fr 48px',
            justifyItems: 'end',
            alignItems: 'center',
          }}
        >
          <Slider
            id="strokeWidth"
            min="0.5"
            max="3"
            step="0.5"
            value={values.strokeWidth}
            onChange={handleChange}
          ></Slider>
          {values.strokeWidth}px
        </div>
      </div>
      <div>
        <Label htmlFor="strokeColor">Color</Label>
        <div
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: '1fr 48px',
          }}
        >
          <Input
            id="strokeColor"
            placeholder="#000000"
            value={values.strokeColor}
            onChange={handleChange}
          ></Input>
          <div sx={{ backgroundColor: values.strokeColor, borderRadius: 1 }} />
        </div>
      </div>
    </form>
  )
}

export default Customize

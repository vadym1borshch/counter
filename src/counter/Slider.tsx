import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import { FC, useEffect } from 'react'
import { SliderStyle } from './styles'

const initMarks = [
  {
    value: 1,
    label: ''
  },
  {
    value: 10,
    label: ''
  }
]

interface ISliderProps {
  onChange: (value: number) => void;
  value?: number;
  marks?: {
    value: number,
    label: string
  }[]
  min?: number,
  max?: number
}

export const CustomSlider: FC<ISliderProps> = (
  {
    onChange,
    value,
    marks,
    min = 1,
    max = 10
  }
) => {
  const [val, setVal] = React.useState<number>(value ? value : min)
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number)
  }

  useEffect(() => {
    onChange(val)
  }, [val])

  useEffect(() => {
    if (value === 1) setVal(min)
  }, [value])

  return (
    <Box sx={SliderStyle}>
      <Slider
        marks={marks || initMarks}
        step={1}
        value={val}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        onChange={handleChange}
      />
      <Box className="inputsContainer">
        <Typography onClick={() => setVal(min)}>
          {min} min
        </Typography>
        {val}
        <Typography onClick={() => setVal(max)}>
          {max} max
        </Typography>
      </Box>
    </Box>
  )
}

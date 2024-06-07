import React, { FC, useMemo } from 'react'
import { Box, TextField } from '@mui/material'
import { ContentHOC } from './contentHOC'
import { CustomSlider } from './Slider'
import { contentContainerStyle } from './styles'
import { convertStringToNumber, StepType } from './common'

interface IStepProps {
  value?: number;
  onClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onChange: (value: number) => void;
  type?: StepType
}

export const Step: FC<IStepProps> = (
  {
    onClick,
    value,
    type = 'default',
    onChange
  }
) => {
  const contentType = useMemo(() => {
    if (type === 'slider') {
      return ContentHOC(
        <CustomSlider onChange={onChange} value={value} />,
        onClick,
        type
      )
    }
    if (type === 'input') {
      return ContentHOC(
        <TextField
          variant="outlined"
          value={value}
          onChange={(e) =>
            onChange &&
            onChange(convertStringToNumber(e.currentTarget.value))
          }
        />,
        onClick
      )
    }
    if (type === 'default') {
      return ContentHOC(
        <>
          {value}
        </>,
        onClick
      )
    }
  }, [type, value, onClick, onChange])

  return (
    <Box sx={contentContainerStyle}>
      {contentType}
    </Box>
  )
}

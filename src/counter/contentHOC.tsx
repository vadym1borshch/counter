import React, { JSX } from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { hocComponentStyle } from './styles'

export const ContentHOC = (
  Component: JSX.Element,
  callback: (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  type?: 'default' | 'slider' | 'input'
): JSX.Element => {
  return (
    <>
      {type === 'slider' ? (
        Component
      ) : (
        <>
          <Button onClick={(e) => callback(e)} id="remove">
            <RemoveIcon />
          </Button>
          <Box sx={hocComponentStyle}>
            {Component}
          </Box>
          <Button onClick={(e) => callback(e)} id="add">
            <AddIcon />
          </Button>
        </>
      )}
    </>
  )
}

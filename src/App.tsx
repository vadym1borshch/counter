import React from 'react'
import './AppStyle'
import { Counter } from './counter/Counter'
import { Box } from '@mui/material'
import { style } from './AppStyle'

function App() {
  return (
    <Box sx={style}>
      <Counter />
    </Box>
  )
}

export default App

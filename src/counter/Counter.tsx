import { Button, Card } from '@mui/material'
import React, { useState } from 'react'
import { DateTime } from './DateTime'
import { Step } from './Step'
import { counterContainerStyle } from './styles'

export const Counter = () => {

  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const stepClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setStep(prevState => {
      if (e.currentTarget.id === 'remove') return prevState === 1 ? 1 : prevState - 1
      return prevState + 1
    })
  }
  const countClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount(prevState => {
      if (e.currentTarget.id === 'remove') return prevState - step
      return prevState + step
    })
  }

  const stepChangeHandler = (value: number) => {
    setStep(value)
  }
  const countChangeHandler = (value: number) => {
    setCount(value)
  }

  const handleReset = () => {
    setStep(1)
    setCount(0)
  }
  return (
    <Card
      sx={counterContainerStyle}
    >
      <Step
        type="slider"
        onClick={stepClickHandler}
        onChange={stepChangeHandler}
        value={step}
      />
      <Step
        type="input"
        onClick={countClickHandler}
        value={count}
        onChange={countChangeHandler}
      />
      <DateTime value={count} />
      <Button onClick={handleReset}>
        Reset
      </Button>
    </Card>
  )
}

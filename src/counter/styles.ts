import { SxProps, Theme } from '@mui/material'

export const counterContainerStyle: SxProps<Theme> = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
export const contentContainerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%'
}

export const hocComponentStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const SliderStyle: SxProps<Theme> = {
  width: '200px',
  margin: '30px 0 10px 0',
  "& .inputsContainer": {
    display: 'flex',
    justifyContent: 'space-between',
    "& .MuiFormControl-root": {
      cursor: 'pointer'
    }
  }
}
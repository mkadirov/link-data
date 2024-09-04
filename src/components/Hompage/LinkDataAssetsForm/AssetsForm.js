import { Box, Grid2 } from '@mui/material'
import React from 'react'
import clock from '../../../assets/icons/clock.png'

function AssetsForm() {
  return (
    <Box marginTop={15}>
        <Grid2 container display={'flex'} justifyContent={'center'}>
          <Grid2 size={{xs: 4, lg: 3}}>
            <img src={clock} alt="" />
          </Grid2>
        </Grid2>
    </Box>
  )
}

export default AssetsForm
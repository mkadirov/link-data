import { Box } from '@mui/material'
import React from 'react'

function DashbordPowerBI() {

   const powerBiUrl="https://app.powerbi.com/view?r=eyJrIjoiZWUxMTBlNDYtN2E4NS00MmM3LTgwMTItZTBmMjcwNDMxYjI5IiwidCI6ImI1OGVhYjJiLTA1YzYtNDcxYi1hYWRhLWNiNjMwY2MyMDJkYyIsImMiOjEwfQ%3D%3D" 
  return (
    <Box sx={{width: '100%', height: {xs: '320px', md: '440px', lg: '600px'}}}>
        <iframe
        title="Power BI Dashboard"
        width="100%"
        height="100%"
        src={powerBiUrl}
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </Box>
  )
}

export default DashbordPowerBI
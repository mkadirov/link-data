import React, { useContext } from 'react'
import HomepageRouter from '../../components/Hompage/HomepageRouter'
import { Box } from '@mui/material'
import LinkDataAutoForm from '../../components/Hompage/LinkDataAutoForm/LinkDataAutoForm'
import MyContext from '../../components/Context/MyContext'
import HomeForm from '../../components/Hompage/LinkDataHomeForm/HomeForm'
import AssetsForm from '../../components/Hompage/LinkDataAssetsForm/AssetsForm'

function Homepage() {
    const {mainPageIndex} = useContext(MyContext)
  return (
    <Box sx={{width: '100%'}}>
        <HomepageRouter/>
        {
           mainPageIndex==1 && (<HomeForm/>)
        }
        {
           mainPageIndex==2 && (<LinkDataAutoForm/>)
        }
        {
          mainPageIndex ==3 && (<AssetsForm/>)
        }
        
    </Box>
  )
}

export default Homepage
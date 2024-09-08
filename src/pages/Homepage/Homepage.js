import React, { useContext } from 'react'
import HomepageRouter from '../../components/Hompage/HomepageRouter'
import { Box, Card } from '@mui/material'
import LinkDataAutoForm from '../../components/Hompage/LinkDataAutoForm/LinkDataAutoForm'
import MyContext from '../../components/Context/MyContext'
import HomeForm from '../../components/Hompage/LinkDataHomeForm/Apartment/ApartmentForm/HomeForm'
import AssetsForm from '../../components/Hompage/LinkDataAssetsForm/AssetsForm'
import ApartmentRouter from '../../components/Hompage/LinkDataHomeForm/ApartmentRouter'

function Homepage() {
    const {mainPageIndex} = useContext(MyContext)
  return (
    <Box sx={{width: '100%'}}>
        
        <HomepageRouter/>
        
        {
           mainPageIndex==1 && (<ApartmentRouter/>) 
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
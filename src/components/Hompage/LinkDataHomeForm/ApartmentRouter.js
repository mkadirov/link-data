import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import MyContext from "../../Context/MyContext";
import HomeForm from "./Apartment/ApartmentForm/HomeForm";
import ApartmentBar from "./Apartment/ApartmentBar";
import HouseRouter from "./House/HouseRouter";

function ApartmentRouter() {
  const { isUzbek } = useContext(MyContext);
  const [isApartment, setIsApartment] = useState(true);

  return (
    <Box>
      
      <Divider sx={{marginY: 2}}/>
      <Grid2 container spacing={2}>
        <Grid2 item size={{xs: 6, md: 4}}>
          
          <Button variant={isApartment? "contained" : "outlined"} size="small" onClick={() => setIsApartment(true)} fullWidth>
          {isUzbek ? "Ko'p qavatli uy" : "Квартира"}
          </Button>
        </Grid2>

        <Grid2 item size={{xs: 6, md: 4}}>
          
          <Button variant={!isApartment? "contained" : "outlined"} size="small" onClick={() => setIsApartment(false)} fullWidth>
          {isUzbek ? "Hovli uy" : "Частный дом"}
          </Button>
        </Grid2>
      </Grid2>
      
      {
        isApartment && (<ApartmentBar/>)
      }
      {
        !isApartment && (<HouseRouter/>)
      }
    </Box>
    
  );
}

export default ApartmentRouter;

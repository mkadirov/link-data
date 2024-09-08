import { Box, Card, Divider, Grid2, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import HomeForm from "./ApartmentForm/HomeForm";
import MyContext from "../../../Context/MyContext";
import { grey } from "@mui/material/colors";
import MarketPowerBI from "./MarketPowerBI/MarketPowerBI";
import Pragnoz from "./Pragnoz/Pragnoz";
import About from "./About/About";

function ApartmentBar() {
  const { isUzbek } = useContext(MyContext);
  const [barIndex, setBarIndex] = useState(1);
  return (
    <Box>
      <Divider sx={{ marginY: 3 }} />

      <Card sx={{ paddingY: 2, paddingX: 1 }}>
        <Grid2 container spacing={2}>
          <Grid2 item size={{ xs: 4, md: 3 }}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}

              sx={{
                borderBottom:
                  barIndex == 1 ? "2px solid #003049" : "2px solid white", cursor: 'pointer'
              }}
              onClick = {() => setBarIndex(1)}
            >
              <Typography fontWeight={"bolder"} sx={{color: barIndex == 1 ? "#003049" : grey[500]}}>
                {isUzbek ? "Baholash" : "Оценка"}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 item size={{ xs: 4, md: 3 }}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                borderBottom:
                  barIndex == 2 ? "2px solid #003049" : "2px solid white", cursor: 'pointer'
              }}
              onClick = {() => setBarIndex(2)}
            >
              <Typography fontWeight={"bolder"} sx={{color: barIndex == 2 ? "#003049" : grey[500]}}>
                {isUzbek ? "Bozor tahlili" : "Анализ рынка"}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 item size={{ xs: 4, md: 3 }}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                borderBottom:
                  barIndex == 3 ? "2px solid #003049" : "2px solid white", cursor: 'pointer'
              }}
              onClick = {() => setBarIndex(3)}
            >
              <Typography fontWeight={"bolder"} sx={{color: barIndex == 3 ? "#003049" : grey[500]}}>
                {isUzbek ? "Prognozlar" : "Прогнозы"}
              </Typography>
            </Box>
          </Grid2>

          <Grid2 sx={{display: {xs: 'none', md: 'block'}}} item size={3}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                borderBottom:
                  barIndex == 4 ? "2px solid #003049" : "2px solid white", cursor: 'pointer'
              }}
              onClick = {() => setBarIndex(4)}
            >
              <Typography fontWeight={"bolder"} sx={{color: barIndex == 4 ? "#003049" : grey[500]}}>
                {isUzbek ? "Loyiha haqida" : "О проекте"}
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Card>

      {
        barIndex == 1  && (<HomeForm/>)
      }
      {
        barIndex == 2  && (<MarketPowerBI/>)
      }
      {
        barIndex == 3  && (<Pragnoz/>)
      }
      {
        barIndex == 4  && (<About/>)
      }
    </Box>
  );
}

export default ApartmentBar;

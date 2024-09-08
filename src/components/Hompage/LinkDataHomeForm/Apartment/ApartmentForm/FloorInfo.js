import { Box, Grid2, Slider, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../../../Context/MyContext";

function FloorInfo({ floor, setFloor, floorOfHouse, setFloorOfHouse }) {
  const { isUzbek } = useContext(MyContext);

  const handleChange = (newValue) => {
    const intValue = parseInt(newValue, 10);  // Convert newValue to an integer
    setFloorOfHouse(intValue);
};

  const handleChange2 = (newValue) => {
    const intValue = parseInt(newValue, 10);
    setFloor(intValue);
    
  };

  


  return (
    <Box marginTop={2}>
      <Typography sx={{ fontWeight: "bold" }}>
        {isUzbek ? "Uy qavatlari soni" : "Этажность дома"}
      </Typography>

      <Grid2 container spacing={3} display={'flex'} justifyContent={'center'}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Box className="main-border" sx={{ paddingX: 2, paddingY: 1 }}>
            <input
              onChange={(e) => handleChange(e.target.value)}
              type="number"
              value={floorOfHouse ? floorOfHouse : ""}
              placeholder={isUzbek ? "Uy qavatlari soni" : "Этажность дома"}
              min={0}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 10, lg: 6 }}>
          <Box display={"flex"}>
            <Slider
              value={floorOfHouse == "" ? 0 : floorOfHouse}
              onChange={(e) => handleChange(e.target.value)}
              aria-labelledby="continuous-slider"
              min={0}
              max={50}
              
            />
          </Box>
        </Grid2>
      </Grid2>

      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        {isUzbek ? "Nechanchi qavat" : "Этаж квартиры"}
      </Typography>

      <Grid2 container spacing={3} display={'flex'} justifyContent={'center'}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Box className="main-border" sx={{ paddingX: 2, paddingY: 1 }}>
            <input
              onChange={(e) => handleChange2(e.target.value)}
              type="number"
              value={floor ? floor : ""}
              placeholder={isUzbek ? "Nechanchi qavat" : "Этаж квартиры"}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 10, lg: 6 }}>
          <Box>
            <Slider
              value={floor == "" ? 0 : floor}
              onChange={(e) => handleChange2(e.target.value)}
              aria-labelledby="continuous-slider"
              min={0}
              max={50}
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default FloorInfo;

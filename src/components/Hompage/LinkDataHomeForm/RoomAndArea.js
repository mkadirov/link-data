import { Box, Grid2 } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";

function RoomAndArea({ area, setArea, numberOfRooms, setNumberOfRooms }) {
  const { isUzbek } = useContext(MyContext);
  return (
    <Box>
      <Box className="main-border" sx={{ paddingX: 2, paddingY: 1 }}>
        <Grid2 container spacing={1}>
          <Grid2 size={6} style={{ borderRight: "1px solid black" }}>
            <input
              value={numberOfRooms ? numberOfRooms : ""}
              onChange={(e) => setNumberOfRooms(e.target.value)}
              type="number"
              placeholder={isUzbek ? "Xonalar soni" : "Количество комнат"}
            />
          </Grid2>
          <Grid2 size={6}>
            <input
              value={area ? area : ""}
              onChange={(e) => setArea(e.target.value)}
              type="number"
              placeholder={isUzbek ? "Uy maydoni " : "Общая площадь"}
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default RoomAndArea;

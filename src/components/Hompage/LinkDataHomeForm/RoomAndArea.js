import { Box, Grid2 } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";

function RoomAndArea({ area, setArea, numberOfRooms, setNumberOfRooms }) {
  const { isUzbek } = useContext(MyContext);

  const handleChangeRoom = (e) => {
    let value = e.target.value;

    // Convert the value to an integer
    // If the value is empty, set it to an empty string
    const parsedValue = value === "" ? "" : parseInt(value, 10);

    // Only update the state if the parsed value is a valid integer or an empty string
    if (Number.isInteger(parsedValue) || parsedValue === "") {
      setNumberOfRooms(parsedValue);
    }
  };

  const handleChangeArea = (e) => {
    let value = e.target.value;

    // Convert the value to a float
    // If the value is empty, set it to an empty string
    const parsedValue = value === "" ? "" : parseFloat(value);

    // Only update the state if the parsed value is a valid float or an empty string
    if (isNaN(parsedValue) && parsedValue !== "") {
      // If parsedValue is NaN, ignore the input
      return;
    }

    setArea(parsedValue);
  };
  return (
    <Box>
      <Box className="main-border" sx={{ paddingX: 2, paddingY: 1 }}>
        <Grid2 container spacing={1}>
          <Grid2 size={6} style={{ borderRight: "1px solid black" }}>
            <input
              value={numberOfRooms ? numberOfRooms : ""}
              onChange={(e) => handleChangeRoom(e)}
              type="number"
              placeholder={isUzbek ? "Xonalar soni" : "Количество комнат"}
              min={0}
            />
          </Grid2>
          <Grid2 size={6}>
            <input
              value={area ? area : ""}
              onChange={(e) => handleChangeArea(e)}
              type="number"
              placeholder={isUzbek ? "Uy maydoni " : "Общая площадь"}
              min={0}
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default RoomAndArea;

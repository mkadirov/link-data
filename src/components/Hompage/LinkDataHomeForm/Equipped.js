import { Box, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";

function Equipped({isEquipped, setIsEquipped}) {

    const { isUzbek } = useContext(MyContext);
  return (
    <Box>
      <Typography marginTop={2} sx={{ fontWeight: "bold" }}>
            {isUzbek ? "Uy jihozlanganmi?" : "Квартира оснащена?"}
      </Typography>

      <Grid2 container spacing={2}>
        <Grid2 item size={3}>
          <Box
            className="main-border"
            sx={{
              paddingY: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isEquipped ? "green" : "white",
              color: isEquipped ? "white" : "black",
              cursor: "pointer",
            }}
            onClick={() => setIsEquipped(true)}
          >
            <Typography sx={{ fontSize: "13px" }}>
              {isUzbek ? "Ha" : "Да"}
            </Typography>
          </Box>
        </Grid2>

        <Grid2 item size={3}>
          <Box
            className="main-border"
            sx={{
              paddingY: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: !isEquipped ? "green" : "white",
              color: !isEquipped ? "white" : "black",
              cursor: "pointer",
            }}
            onClick={() => setIsEquipped(false)}
          >
            <Typography sx={{ fontSize: "13px" }}>
              {isUzbek ? "Yo'q" : "Нет"}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Equipped
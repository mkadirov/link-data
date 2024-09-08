import { Box, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../../../Context/MyContext";


function Rebate({rebate, setRebate}) {

    const { isUzbek } = useContext(MyContext);
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
    {isUzbek ? "Kelishsa bo'ladimi?" : "Можно ли договориться?"}
      </Typography>

      <Grid2 container spacing={2}>
        <Grid2 item size={4}>
          <Box
            className="main-border"
            sx={{
              paddingY: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: rebate ? "#003049" : "white",
              color: rebate ? "white" : "black",
              cursor: "pointer",
            }}
            onClick={() => setRebate(true)}
          >
            <Typography sx={{ fontSize: "13px" }}>
              {isUzbek ? "Ha" : "Да"}
            </Typography>
          </Box>
        </Grid2>

        <Grid2 item size={4}>
          <Box
            className="main-border"
            sx={{
              paddingY: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: !rebate ? "#003049" : "white",
              color: !rebate ? "white" : "black",
              cursor: "pointer",
            }}
            onClick={() => setRebate(false)}
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

export default Rebate
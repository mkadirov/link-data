import { Box, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";

function Commission({commission, setCommission}) {

    const { isUzbek } = useContext(MyContext);
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
    {isUzbek ? "Komissiya bormi?" : "Есть ли комиссия?"}
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
              backgroundColor: commission ? "green" : "white",
              color: commission ? "white" : "black",
              cursor: "pointer",
            }}
            onClick={() => setCommission(true)}
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
              backgroundColor: !commission ? "green" : "white",
              color: !commission ? "white" : "black",
              cursor: "pointer",
            }}
            onClick={() => setCommission(false)}
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

export default Commission
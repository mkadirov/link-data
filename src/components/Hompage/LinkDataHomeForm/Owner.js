import { Box, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";

function Owner({ owner, setOwner }) {
  const { isUzbek } = useContext(MyContext);
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
    {isUzbek ? "Kim egalik qiladi?" : "Кто владеет?"}
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
              backgroundColor: owner == "Xususiy" ? "green" : "white",
              color: owner == "Xususiy" ? "white" : "black",
              cursor: "pointer",
            }}
            onClick={() => setOwner("Xususiy")}
          >
            <Typography sx={{ fontSize: "13px" }}>
              {isUzbek ? "Xususiy" : "Частный"}
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
              backgroundColor: owner == "Biznes" ? "green" : "white",
              color: owner == "Biznes" ? "white" : "black",
              cursor: "pointer",
            }}
            onClick={() => setOwner("Biznes")}
          >
            <Typography sx={{ fontSize: "13px" }}>
              {isUzbek ? "Biznes" : "Бизнес"}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Owner;

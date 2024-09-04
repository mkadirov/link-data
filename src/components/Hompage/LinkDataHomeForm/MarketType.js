import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import { Box, Grid2, Typography } from "@mui/material";
import { marketTypeList} from "../../../data/RestData";

function MarketType({ setMarketType, marketType }) {
  const { isUzbek } = useContext(MyContext);
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        {isUzbek ? "Bozor turi" : "Тип рынка"}
      </Typography>

      <Grid2 container spacing={2}>
        {marketTypeList.map((item) => {
          return (
            <Grid2 item size={4} key={item.nameUZB}>
              <Box
                className="main-border"
                sx={{
                  paddingY: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    marketType?.id == item.id ? "green" : "white",
                  color: marketType?.id == item.id ? "white" : "black",
                  cursor: "pointer",
                }}
                onClick={() => setMarketType(item)}
              >
                <Typography sx={{ fontSize: "13px" }}>
                  {isUzbek ? item.nameUZB : item.nameRUS}
                </Typography>
              </Box>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}

export default MarketType;

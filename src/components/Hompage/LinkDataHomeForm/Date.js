import { Box, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";

function Date({ pricingMonth, setPricingMonth, pricingYear, setPricingYear }) {
  const { isUzbek } = useContext(MyContext);
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        {isUzbek ? "Baholash sanasi" : "Дата оценки"}
      </Typography>
      <Box className="main-border" sx={{ paddingX: 2, paddingY: 1 }}>
        <Grid2 container spacing={1}>
          <Grid2 size={6} style={{ borderRight: "1px solid black" }}>
            <input
              value={pricingYear ? pricingYear : ""}
              onChange={(e) => setPricingYear(e.target.value)}
              type="number"
              placeholder={isUzbek ? "Baholash yili" : "Год оценки"}
            />
          </Grid2>
          <Grid2 size={6}>
            <input
              value={pricingMonth ? pricingMonth : ""}
              onChange={(e) => {
                // Get the input value
                let value = e.target.value;

                // Remove leading zeros by converting it to a number and then back to a string
                let formattedValue = value ? String(Number(value)) : "";

                // Set the formatted value (without leading zeros)
                setPricingMonth(formattedValue);
              }}
              type="number"
              max={12}
              placeholder={isUzbek ? "Baholash oyi" : "Месяц оценки"}
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default Date;

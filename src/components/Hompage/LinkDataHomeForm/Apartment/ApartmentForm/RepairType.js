import React, { useContext } from "react";
import MyContext from "../../../../Context/MyContext";
import { Box, Grid2, Typography } from "@mui/material";
import { marketTypeList, repairTypeList } from "../../../../../data/RestData";
import MainDropDown from "./MainDropDown";
import { grey } from "@mui/material/colors";

function RepairType({ setRepairType, repairType }) {
  const { isUzbek } = useContext(MyContext);
  return (
    <Box>
      
                                          {/* Desktop uchun versiya, mobil telefonlarda körinmaydi */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        {isUzbek ? "Ta'mir holati" : "Состояние ремонта"}
      </Typography>
        <Grid2 container spacing={2}>
          {repairTypeList.map((item) => {
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
                      repairType?.id == item.id ? "#003049" : "white",
                    color: repairType?.id == item.id ? "white" : "black",
                    cursor: "pointer",
                  }}
                  onClick={() => setRepairType(item)}
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
                        {/* Mobil telefonlar uchun versiya, desktop va boshqa yirik ekranlarda körinmaydi */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        {isUzbek ? "Ta'mir holati" : "Состояние ремонта"}
      </Typography>
      
      <Box
        display={"flex"}
        className="main-border"
        paddingRight={1}
        paddingY="4px"
        alignItems={"center"}
      >
        <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
          {repairType == "" ? (
            <Typography sx={{ color: grey[500] }}>
              {isUzbek ? "Qurilish turi" : "Тип строительства"}
            </Typography>
          ) : isUzbek ? (
            repairType.nameUZB
          ) : (
            repairType.nameRUS
          )}
        </Typography>
        <MainDropDown options={repairTypeList} setItem={setRepairType} />
      </Box>
      </Box>
    </Box>
  );
}

export default RepairType;

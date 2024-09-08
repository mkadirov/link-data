import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { bathroomTypeList, buildingTypeList, planTypeList, repairTypeList } from "../../../../../data/RestData";

import MyContext from "../../../../Context/MyContext";
import { grey } from "@mui/material/colors";
import MainDropDown from "./MainDropDown";

function BuildingPlanBath({ buildingType, setBuildingType, planType, setPlanType, bathroomType, setBathroomType }) {
  const { isUzbek } = useContext(MyContext);

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        {isUzbek ? "Qurilish turi" : "Тип строительства"}
      </Typography>
      <Box
        display={"flex"}
        className="main-border"
        paddingRight={1}
        paddingY="4px"
        alignItems={"center"}
      >
        <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
          {buildingType == "" ? (
            <Typography sx={{ color: grey[500] }}>
              {isUzbek ? "Qurilish turi" : "Тип строительства"}
            </Typography>
          ) : isUzbek ? (
            buildingType.nameUZB
          ) : (
            buildingType.nameRUS
          )}
        </Typography>
        <MainDropDown options={buildingTypeList} setItem={setBuildingType} />
      </Box>

      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        {isUzbek ? "Planirovka turi" : "Тип планировки"}
      </Typography>
      <Box
        display={"flex"}
        className="main-border"
        paddingRight={1}
        paddingY="4px"
        alignItems={"center"}
      >
        <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
          {planType == "" ? (
            <Typography sx={{ color: grey[500] }}>
              {isUzbek ? "Planirovka turi" : "Тип планировки"}
            </Typography>
          ) : isUzbek ? (
            planType.nameUZB
          ) : (
            planType.nameRUS
          )}
        </Typography>
        <MainDropDown options={planTypeList} setItem={setPlanType} />
      </Box>

      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        {isUzbek ? "Sanuzel turi" : "Тип санузла"}
      </Typography>
      <Box
        display={"flex"}
        className="main-border"
        paddingRight={1}
        paddingY="4px"
        alignItems={"center"}
      >
        <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
          {bathroomType == "" ? (
            <Typography sx={{ color: grey[500] }}>
              {isUzbek ? "Sanuzel turi" : "Тип санузла"}
            </Typography>
          ) : isUzbek ? (
            bathroomType.nameUZB
          ) : (
            bathroomType.nameRUS
          )}
        </Typography>
        <MainDropDown options={bathroomTypeList} setItem={setBathroomType} />
      </Box>

      
    </Box>
  );
}

export default BuildingPlanBath;

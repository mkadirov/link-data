import { Box, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import MainDropDown from "./MainDropDown";
import { grey } from "@mui/material/colors";
import MyContext from "../../../../Context/MyContext";
import { regions } from "../../../../../data/Location";


function Location({
  subRegion,
  setSubRegion,
  district,
  setDistrict,
  districts,
  subRegions,
  region,
  setRegion,
}) {
  const { isUzbek } = useContext(MyContext);

  return (
    <Box>
      {/* Desktop uchun versiya, mobil telefonlarda körinmaydi */}
      <Box
        className="main-border"
        sx={{ paddingX: 2, paddingY: 1, display: { xs: "none", md: "block" } }}
      >
        <Grid2 container>
          <Grid2 size={4}>
            <Box
              display={"flex"}
              sx={{ borderRight: "1px solid #003049" }}
              paddingRight={1}
            >
              <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
                {region == "" ? (
                  <Typography sx={{ color: grey[500] }}>
                    {isUzbek ? "Hududni tanlag" : "Выберите регион"}
                  </Typography>
                ) : isUzbek ? (
                  region.nameUZB
                ) : (
                  region.nameRUS
                )}
              </Typography>
              <MainDropDown
                options={regions}
                item={region}
                setItem={setRegion}
              />
            </Box>
          </Grid2>
          <Grid2 size={4}>
            <Box
              display={"flex"}
              sx={{ borderRight: "1px solid #003049" }}
              paddingRight={1}
            >
              <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
                {subRegion == "" ? (
                  <Typography sx={{ color: grey[500] }}>
                    {isUzbek ? "Tumanni tanlag" : "Выберите район"}
                  </Typography>
                ) : isUzbek ? (
                  subRegion.nameUZB
                ) : (
                  subRegion.nameRUS
                )}
              </Typography>
              <MainDropDown
                options={subRegions}
                item={subRegion}
                setItem={setSubRegion}
              />
            </Box>
          </Grid2>
          <Grid2 size={4}>
            <Box display={"flex"} paddingRight={1}>
              <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
                {district == "" ? (
                  <Typography sx={{ color: grey[500] }}>
                    {isUzbek ? "Mahallani tanlag" : "Выберите населённый пункт"}
                  </Typography>
                ) : isUzbek ? (
                  district.nameUZB
                ) : (
                  district.nameRUS
                )}
              </Typography>
              <MainDropDown
                options={districts}
                item={district}
                setItem={setDistrict}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      {/* Mobil telefonlar uchun versiya, desktoplarda körinmaydi */}
      <Box
        className="main-border"
        sx={{ paddingX: 2, paddingY: 1, display: { xs: "block", md: "none" } }}
      >
        <Grid2 container>
          <Grid2 size={6}>
            <Box
              display={"flex"}
              sx={{ borderRight: "1px solid #003049" }}
              paddingRight={1}
            >
              <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
                {region == "" ? (
                  <Typography sx={{ color: grey[500] }}>
                    {isUzbek ? "Hududni tanlag" : "Выберите регион"}
                  </Typography>
                ) : isUzbek ? (
                  region.nameUZB
                ) : (
                  region.nameRUS
                )}
              </Typography>
              <MainDropDown
                options={regions}
                item={region}
                setItem={setRegion}
              />
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box
              display={"flex"}
              
              paddingRight={1}
            >
              <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
                {subRegion == "" ? (
                  <Typography sx={{ color: grey[500] }}>
                    {isUzbek ? "Tumanni tanlag" : "Выберите район"}
                  </Typography>
                ) : isUzbek ? (
                  subRegion.nameUZB
                ) : (
                  subRegion.nameRUS
                )}
              </Typography>
              <MainDropDown
                options={subRegions}
                item={subRegion}
                setItem={setSubRegion}
              />
            </Box>
          </Grid2>
          {/* <Grid2 size={4}>
            <Box display={"flex"} paddingRight={1}>
              <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
                {district == "" ? (
                  <Typography sx={{ color: grey[500] }}>
                    {isUzbek ? "Mahallani tanlag" : "Выберите населённый пункт"}
                  </Typography>
                ) : isUzbek ? (
                  district.nameUZB
                ) : (
                  district.nameRUS
                )}
              </Typography>
              <MainDropDown
                options={districts}
                item={district}
                setItem={setDistrict}
              />
            </Box>
          </Grid2> */}
        </Grid2>
      </Box>

      <Box
        className="main-border"
        sx={{ paddingX: 2, paddingY: 1, display: { xs: "block", md: "none" } }}
        marginTop={2}
      >
        <Grid2 container>
          <Grid2 size={12}>
            <Box display={"flex"} paddingRight={1}>
              <Typography textAlign={"center"} sx={{ flexGrow: 1 }}>
                {district == "" ? (
                  <Typography sx={{ color: grey[500] }}>
                    {isUzbek ? "Mahallani tanlag" : "Выберите населённый пункт"}
                  </Typography>
                ) : isUzbek ? (
                  district.nameUZB
                ) : (
                  district.nameRUS
                )}
              </Typography>
              <MainDropDown
                options={districts}
                item={district}
                setItem={setDistrict}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default Location;

import { Box, Container, Divider, Grid, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import logoLinkData from "../../assets/icons/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import MyContext from "../Context/MyContext";

function Header() {
  const { isUzbek, setIsUzbek } = useContext(MyContext);
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        alignItems: "center", // Ensure items are vertically centered
        backgroundColor: "white", // Set background color if necessary
        zIndex: 1000, // Make sure it's on top of other elements,
        paddingY: 1
      }}
    >
      <Grid2 container display={"flex"} justifyContent={"center"}>
        <Grid2 size={{xs: 11, md: 10, xl:8}}>
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box sx={{ width: { xs: "160px", md: "180px", lg: "220px" } }}>
              <img src={logoLinkData} alt="main-logo" />
            </Box>

            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Box>
                <Box display={"flex"} alignItems={"center"}>
                  <Typography
                    sx={{
                      backgroundColor: isUzbek ? "#003049" : "#ffffff",
                      color: isUzbek ? "white" : "#003049",
                      paddingX: 1,
                      borderRadius: "5px",
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsUzbek(true)}
                  >
                    O'z
                  </Typography>

                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ marginX: 1 }}
                  />

                  <Typography
                    sx={{
                      backgroundColor: isUzbek ? "#ffffff" : "#003049",
                      color: isUzbek ? "#003049" : "white",
                      paddingX: 1,
                      borderRadius: "5px",
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsUzbek(false)}
                  >
                    Ру
                  </Typography>
                </Box>
              </Box>
              <PersonIcon
                sx={{ color: "#003049", fontSize: '30px'}}
                style={{ cursor: "pointer"}}
              />
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      
    </Box>
  );
}

export default Header;

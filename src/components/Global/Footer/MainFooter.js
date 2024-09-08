import { Box, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import logo from "../../../assets/icons/LD3.png";
import MyContext from "../../Context/MyContext";

function MainFooter() {
  const { isUzbek } = useContext(MyContext);
  return (
    <Box sx={{ width: "100%", backgroundColor: "#003049", paddingY: 5 }}>
      <Grid2 container display={"flex"} justifyContent={"center"}>
        <Grid2 size={{ xs: 11, md: 10, xl: 8 }}>
          <Box>
            <Grid2 container spacing={3}>
              <Grid2 item size={{ xs: 8, md: 4, lg: 3 }}>
                <Box>
                  <Box display={"flex"} gap={2} alignItems={"center"}>
                    <Box sx={{ width: "40px" }}>
                      <img src={logo} alt="" />
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: { xs: "20px" },
                      }}
                    >
                      Link Data
                    </Typography>
                  </Box>

                  <Typography
                    marginTop={1}
                    sx={{ color: "white", cursor: "pointer", fontSize: "13px" }}
                  >
                    {isUzbek
                      ? "Foydalanish qoidalari"
                      : "Правила использования"}
                  </Typography>
                </Box>
              </Grid2>

              <Grid2 item size={{ xs: 4, md: 4, lg: 3 }}>
                <Typography sx={{ color: "white", fontSize: "13px" }}>
                  {isUzbek ? "Aloqa:" : "Контакты:"}
                </Typography>
                <Typography sx={{ color: "white", fontSize: "13px" }}>
                  info@linkdata.uz
                </Typography>
                <Typography sx={{ color: "white", fontSize: "13px" }}>
                  +998977559810
                </Typography>
              </Grid2>

              <Grid2 item size={{ xs: 12, md: 4, lg: 4 }}>
                <Box>
                  <Grid2 container display={"flex"} justifyContent={"center"}>
                    <Grid2 item size={{ xs: 9 }}>
                      <Box
                        className="main-border"
                        sx={{
                          backgroundColor: "white",
                          paddingY: "3px",
                          width: "100%",
                        }}
                      >
                        <input
                          style={{ marginLeft: "3px", fontSize: "12px" }}
                          type="text"
                          placeholder={isUzbek? "Telefon raqamingiz" : "Ваш номер телефона"}
                        />
                      </Box>
                    </Grid2>

                    <Grid2 item size={{ xs: 4 }} marginTop={1}>
                      <Box
                        className="main-border"
                        sx={{ backgroundColor: "white", width: "100%", paddingY: '3px', cursor: 'pointer' }}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={'center'}
                      >
                        <Typography fontSize={'12px'}>{isUzbek? "Yuborish": "Отправить"}</Typography>
                      </Box>
                    </Grid2>
                  </Grid2>
                </Box>
              </Grid2>

              <Grid2 item size={{ xs: 12, md: 4, lg: 2 }}>
                <Box sx={{display: 'flex', flexDirection: {xs: 'row', md: 'column', justifyContent: 'space-around'}}}>
                  <Typography sx={{color: 'white', fontSize: '16px'}}>
                    Link Home
                  </Typography>
                  <Typography sx={{color: 'white', fontSize: '16px'}}>
                    Link Auto
                  </Typography>
                  <Typography sx={{color: 'white', fontSize: '16px'}}>
                    Link Assets
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>

          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default MainFooter;

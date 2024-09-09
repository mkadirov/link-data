import React, { useContext } from "react";
import MyContext from "../Context/MyContext";
import { Box, Grid2, Typography } from "@mui/material";

function HomepageRouter() {
  const { mainPageIndex, setMainPageIndex, isUzbek } = useContext(MyContext);
  return (
    <Box >
      <Grid2 container spacing={2} display={"flex"} justifyContent={"center"}>
        <Grid2 item size={{ xs: 12, lg: 4 }}>
          <Box
            onClick={() => setMainPageIndex(1)}
            sx={{
              padding: 1,
              border:
              mainPageIndex == 1 ? "1px solid #00A0E3" : "1px solid #003049",
              color: mainPageIndex == 1 ? "white" : "#003049",
              backgroundColor: mainPageIndex == 1 ? "#00A0E3" : "#ffffff",
              borderRadius: "20px",
              paddingY: 1,
              paddingX: 2,
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: { xs: "18px", md: "24px" } }}>
              Link Home
            </Typography>
            <Typography sx={{ fontSize: { xs: "8px", md: "14px" } }}>
              {isUzbek
                ? "Uylarni onlayn avtomatik"
                : "Онлайн платформа автоматической"}
            </Typography>
            <Typography sx={{ fontSize: { xs: "8px", md: "14px" } }}>
              {isUzbek ? "baholash platformasi" : "оценки недвижимости"}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 6, lg: 4 }}>
          <Box
            sx={{
              border:
              mainPageIndex == 2 ? "1px solid #00A0E3" : "1px solid #003049",
              color: mainPageIndex == 2 ? "white" : "#003049",
              backgroundColor: mainPageIndex == 2 ? "#00A0E3" : "#ffffff",
              borderRadius: "20px",
              paddingY: 1,
              paddingX: 2,
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => setMainPageIndex(2)}
          >
            <Typography sx={{ fontSize: { xs: "18px", md: "24px" } }}>
              Link Auto
            </Typography>
            <Typography sx={{ fontSize: { xs: "8px", md: "14px" },}}>
              {isUzbek
                ? "Avtomobilni onlayn avtomatik"
                : "Онлайн платформа автоматической"}
            </Typography>
            <Typography sx={{ fontSize: { xs: "8px", md: "14px" } }}>
              {isUzbek ? "baholash platformasi" : "оценки автомобилей"}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 6, lg: 4 }}>
          <Box
            sx={{
              border:
              mainPageIndex == 3 ? "1px solid #00A0E3" : "1px solid #003049",
              color: mainPageIndex == 3 ? "white" : "#003049",
              backgroundColor: mainPageIndex == 3 ? "#00A0E3" : "#ffffff",
              borderRadius: "20px",
              paddingY: 1,
              paddingX: 2,
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => setMainPageIndex(3)}
          >
            <Typography sx={{ fontSize: { xs: "18px", md: "24px" } }}>
              Link Assets
            </Typography>
            <Typography sx={{ fontSize: { xs: "8px", md: "14px" },}}>
              {isUzbek
                ? "Boshqa turdagi avtivlarni"
                : "Онлайн платформа автоматической"}
            </Typography>
            <Typography sx={{ fontSize: { xs: "8px", md: "14px" } }}>
              {isUzbek ? "onlayn avtomatik baholash" : "оценки других видов активов"}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default HomepageRouter;

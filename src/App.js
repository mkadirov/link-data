import {
  Box,
  createTheme,
  Grid2,
  ThemeProvider,
} from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import MyContext from "./components/Context/MyContext";
import { useRef, useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import MainFooter from "./components/Global/Footer/MainFooter";


function App() {
  const [isUzbek, setIsUzbek] = useState(true);
  const [mainPageIndex, setMainPageIndex] = useState(1);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#003049",
      },
      secondary: {
        main: "#edf2ff",
      },
    },
    shape: {
      borderRadius: 5,
    },
  });
  return (
    <MyContext.Provider
      value={{
        isUzbek,
        setIsUzbek,
        mainPageIndex,
        setMainPageIndex,
       
      }}
    >
      <ThemeProvider theme={theme}>
        <Box paddingTop={12} >
          <Grid2 container display={"flex"} justifyContent={"center"}>
            <Grid2 size={{xs: 11, md: 10, xl:8}}>
              <Header />
              <Homepage />
            </Grid2>
          </Grid2>

         
          <MainFooter/>
          
        </Box>
      </ThemeProvider>
    </MyContext.Provider>
  );
}

export default App;

import React, { useContext } from "react";
import { Box } from "@mui/material";
import InfoUZB from "./InfoUZB";
import MyContext from "../../../../Context/MyContext";
import InfoRUS from "./InfoRUS";


const About = () => {
  const {isUzbek} = useContext(MyContext)
  return (
    <Box>
        {
          isUzbek? (<InfoUZB/>) : (<InfoRUS/>)
        }
    </Box>
  );
};

export default About;

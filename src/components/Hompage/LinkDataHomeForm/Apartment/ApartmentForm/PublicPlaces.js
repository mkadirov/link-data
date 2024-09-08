import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../../../Context/MyContext";
import MainDropDown from "./MainDropDown";
import { publicPlaceList } from "../../../../../data/RestData";
import ClearIcon from "@mui/icons-material/Clear";

function PublicPlaces({ addPublicPlace, clearPublicPlaceList, publicPlaces, deletePublicPlace}) {
  const { isUzbek } = useContext(MyContext);
  return (
    <Box marginTop={3}>
      <Box className="main-border" sx={{ paddingY: '4px', paddingX: 1 }}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={'center'}>
          <Typography sx={{ fontWeight: "bold" }}>
            {isUzbek ? "Uy atrofida nimalar bor?" : "Что вокруг дома?"}
          </Typography>
          <Box display={"flex"} gap={1}>
            <ClearIcon
              sx={{ color: "red", cursor: 'pointer' }}
              onClick={() => clearPublicPlaceList()}
            />
            <MainDropDown options={publicPlaceList} setItem={addPublicPlace} />
          </Box>
        </Box>

        <Box>
          {publicPlaces.map((item) => {
            return (
             <Box key={item.nameUZB} sx={{display: 'inline-block'}}>
                 <Box
                key={item.id}
                className="main-border"
                sx={{
                  display: "flex",
                  paddingX: 1,
                  marginRight: 1,
                  marginTop: 1,
                  gap: 1
                }}
              >
                <Typography>{isUzbek ? item.nameUZB : item.nameRUS}</Typography>
                <ClearIcon sx={{ color: "red", cursor: 'pointer' }} onClick={() => deletePublicPlace(item)} />
              </Box>
             </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default PublicPlaces;

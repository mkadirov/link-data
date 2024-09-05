import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import { grey } from "@mui/material/colors";
import MeterSquare from "../../Global/Symbols/MeterSquare";

function CheckBox({
  region,
  subRegion,
  district,
  numberOfRooms,
  area,
  floorOfHouse,
  floor,
  publicPlaces,
  furniture,
  buildingType,
  planType,
  bathroomType,
  repairType,
  marketType, 
  owner,
  rebate,
  commission,
  isEquipped,
  pricingMonth,
  pricingYear,
  scrollToResult,
  checkData,
  sendHomeForm
}) {
  const { isUzbek } = useContext(MyContext);
  return (
   
        <Box className="main-border" sx={{ height: "100%", width: {xs: '100%', md: "90%"} }}>
      <Box
        sx={{ height: "100%" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Box sx={{ paddingX: 2 }}>
          <Typography
            variant="h6"
            sx={{ color: "#003049" }}
            textAlign={"center"}
            marginY={3}
          >
            {isUzbek
              ? "Uy ma’lumotlarini tekshiring"
              : "Проверьте информацию о квартире"}
          </Typography>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Hudud" : "Регион"}:
            </Typography>
            <Typography>{isUzbek ? region.nameUZB : region.nameRUS}</Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Tuman" : "Район"}:
            </Typography>
            <Typography>
              {isUzbek ? subRegion.nameUZB : subRegion.nameRUS}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Mahalla" : "Населённый пункт"}:
            </Typography>
            <Typography>
              {isUzbek ? district.nameUZB : district.nameRUS}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Xonalar soni" : "Количество комнат"}:
            </Typography>
            <Typography>{numberOfRooms}</Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Uy maydoni" : "Общая площадь"}:
            </Typography>
            <Typography sx={{ display: area == "" ? "none" : "block" }}>
              {area} <MeterSquare />
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Uy qavatlari soni" : "Этажность дома"}:
            </Typography>
            <Typography>{floorOfHouse}</Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Nechanchi qavat" : "Этаж квартиры"}:
            </Typography>
            <Typography>{floor}</Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Uy atrofida nimalar bor?" : "Что вокруг дома?"}:
            </Typography>
            <Box>
              {publicPlaces.map((item) => {
                return (
                  <Box
                    key={item.nameRUS}
                    display={"flex"}
                    justifyContent={"end"}
                  >
                    <Typography>
                      {isUzbek ? item.nameUZB : item.nameRUS}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Uy jihozlanganmi?" : "Квартира оснащена?"}:
            </Typography>
            <Typography>
              {isEquipped? isUzbek? "Xa" : "Да" : isUzbek? "Yo'q" : "Нет"}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Uyda nimalar bor?" : "Что есть дома?"}:
            </Typography>
            <Box>
              {furniture.map((item) => {
                return (
                  <Box
                    key={item.nameRUS}
                    display={"flex"}
                    justifyContent={"end"}
                  >
                    <Typography>
                      {isUzbek ? item.nameUZB : item.nameRUS}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Qurilish turi" : "Тип строительства"}:
            </Typography>
            <Typography>
              {isUzbek ? buildingType.nameUZB : buildingType.nameRUS}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Planirovka turi" : "Тип планировки"}:
            </Typography>
            <Typography>
              {isUzbek ? planType.nameUZB : planType.nameRUS}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Sanuzel turi" : "Тип санузла"}:
            </Typography>
            <Typography>
              {isUzbek ? bathroomType.nameUZB : bathroomType.nameRUS}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Ta'mir holati" : "Состояние ремонта"}:
            </Typography>
            <Typography>
              {isUzbek ? repairType.nameUZB : repairType.nameRUS}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Bozor turi" : "Тип рынка"}:
            </Typography>
            <Typography>
              {isUzbek ? marketType.nameUZB : marketType.nameRUS}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Kim egalik qiladi?" : "Кто владеет?"}:
            </Typography>
            <Typography>
              {owner=="Xususiy"? isUzbek? "Xususiy" : "Частный" : isUzbek? "Biznes" : "Бизнес"}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Kelishsa bo'ladimi?" : "Можно ли договориться?"}:
            </Typography>
            <Typography>
              {rebate? isUzbek? "Xa" : "Да" : isUzbek? "Yo'q" : "Нет"}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Komissiya bormi?" : "Есть ли комиссия?"}:
            </Typography>
            <Typography>
              {commission? isUzbek? "Xa" : "Да" : isUzbek? "Yo'q" : "Нет"}
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Baholash yili" : "Год оценки"}:
            </Typography>
            <Typography>{pricingYear}</Typography>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography sx={{ color: grey[600] }}>
              {isUzbek ? "Baholash oyi" : "Месяц оценки"}:
            </Typography>
            <Typography>{pricingMonth}</Typography>
          </Box>


        </Box>

        <Box display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            size="small"
            sx={{ marginBottom: 2, paddingX: 4 }}
            onClick={() => {
                scrollToResult()
                checkData()
            }}
          >
            Baholash
          </Button>
        </Box>
      </Box>
    </Box>
   
  );
}

export default CheckBox;

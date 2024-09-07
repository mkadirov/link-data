import {
  Badge,
  Box,
  Button,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { districtsList, subRegionsList } from "../../../data/Location";
import MyContext from "../../Context/MyContext";
import Location from "./Location";
import RoomAndArea from "./RoomAndArea";
import FloorInfo from "./FloorInfo";
import PublicPlaces from "./PublicPlaces";
import BuildingPlanBath from "./BuildingPlanBath";
import Furniture from "./Furniture";
import RepairType from "./RepairType";
import MarketType from "./MarketType";
import Owner from "./Owner";
import Rebate from "./Rebate";
import Commission from "./Commission";
import Date from "./Date";
import CheckBox from "./CheckBox";
import MeterSquare from "../../Global/Symbols/MeterSquare";
import Equipped from "./Equipped";
import { getHomePrice } from "../../../api/LinkHomeApi";

function HomeForm() {
  const [region, setRegion] = useState({
    id: 1,
    nameUZB: "Toshkent shaxri",
    nameRUS: "Ташкент г",
  });
  const [subRegions, setSubRegions] = useState([]);
  const [subRegion, setSubRegion] = useState("");
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [floorOfHouse, setFloorOfHouse] = useState("");
  const [area, setArea] = useState("");
  const [floor, setFloor] = useState("");
  const { isUzbek } = useContext(MyContext);
  const [publicPlaces, setPublicPlaces] = useState([]);
  const [buildingType, setBuildingType] = useState("");
  const [planType, setPlanType] = useState("");
  const [bathroomType, setBathroomType] = useState("");
  const [furniture, setFurniture] = useState([]);
  const [repairType, setRepairType] = useState({ id: 1, nameUZB: "Zo'r", nameRUS: "Отлично" });
  const [marketType, setMarketType] = useState({ id: 2, nameUZB: "Ikkilamchi", nameRUS: "Вторичный" });
  const [owner, setOwner] = useState("Xususiy");
  const [rebate, setRebate] = useState(false);
  const [commission, setCommission] = useState(false);
  const [pricingMonth, setPricingMonth] = useState("");
  const [pricingYear, setPricingYear] = useState(2024);
  const [isEquipped, setIsEquipped] = useState(true);

  const resultRef = useRef(null);


  const scrollToResult = () => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };


  useEffect(() => {
    setDistrict("");
    setSubRegion("");
    setSubRegions(subRegionsList.filter((item) => item.regionId == region.id));
  }, [region]);

  useEffect(() => {
    setDistrict("");
    setDistricts(
      districtsList.filter((item) => item.subRegionId == subRegion.id)
    );
  }, [subRegion]);

  useEffect(() => {
    if (floorOfHouse < floor) {
      setFloorOfHouse(floor);
      setFloor(floorOfHouse);
    }
  }, [floor, floorOfHouse]);

  const addPublicPlace = (value) => {
    if (!publicPlaces.some((item) => item.id === value.id)) {
      const newArray = [...publicPlaces];
      newArray.push(value);
      setPublicPlaces(newArray);
    }
  };

  const clearPublicPlaceList = () => {
    setPublicPlaces([]);
  };

  const deletePublicPlace = (value) => {
    setPublicPlaces(publicPlaces.filter((item) => item.id !== value.id));
  };

  const addFurniture = (value) => {
    if (!furniture.some((item) => item.id === value.id)) {
      setFurniture((prevFurniture) => [...prevFurniture, value]);
    }
  };

  const clearFurnitureList = () => {
    setFurniture([]);
  };

  const deleteFurniture = (value) => {
    setFurniture(furniture.filter((item) => item.id !== value.id));
  };

  const checkData = () => {

    if(subRegion == "") {
      alert(isUzbek? 'Iltimos tumanni tanlang!' : "Пожалуйста, выберите район!");
      return;
    }

    if(district == "") {
      alert(isUzbek? 'Iltimos mahallani tanlang!' : "Пожалуйста, выберите населённый пункт!");
      return;
    }
    if(numberOfRooms == "") {
      alert(isUzbek? 'Iltimos xonalar sonini kriting!' : "Пожалуйста, введите количество комнат!");
      return;
    }

    if(area == "") {
      alert(isUzbek? 'Iltimos uy maydonini kriting!' : "Пожалуйста, введите площадь квартиры!");
      return;
    }

    if(floorOfHouse == "") {
      alert(isUzbek? 'Iltimos uyqavatlari sonini kriting!' : "Пожалуйста, введите количество этажей дома!");
      return;
    }
    if(floorOfHouse < 0) {
      alert(isUzbek? "Uy qavatlari soni manfiy bo'lishi mumkin emas!" : "Количество этажей дома не может быть отрицательным!");
      setFloorOfHouse("")
      return;
    }

    if(floor == "") {
      alert(isUzbek? 'Iltimos uy qavatini kriting!' : "Пожалуйста, введите этаж квартиры!");
      return;
    }

    if(floor < 0) {
      alert(isUzbek? "Uy qavatlari soni manfiy bo'lishi mumkin emas" : "Количество этажей дома не может быть отрицательным!");
      setFloor("")
      return;
    }

    if(buildingType == "") {
      alert(isUzbek? 'Iltimos qurilish turini kriting!' : "Пожалуйста, введите тип строительства!");
      return;
    }

    if(planType == "") {
      alert(isUzbek? 'Iltimos planirovka turini kriting!' : "Пожалуйста, введите тип планировки!");
      return;
    }

    if(planType == "") {
      alert(isUzbek? 'Iltimos planirovka turini kriting!' : "Пожалуйста, введите тип планировки!");
      return;
    }

    if(repairType == "") {
      alert(isUzbek? "Iltimos ta'mir turini kriting!" : "Пожалуйста, введите тип планировки!");
      return;
    }

    if(bathroomType == "") {
      alert(isUzbek? "Iltimos sanuzel turini kriting!" : "Пожалуйста, введите тип санузла!");
      return;
    }

    sendHomeForm();
    
  }

  const sendHomeForm = () => {

    const amenities = publicPlaces.map(item => item.nameUZB)
    const facilities = furniture.map(item => item.nameUZB)

    const homeData = {
      region: region.nameUZB,
      district: subRegion.nameUZB,
      neighborhood: district.nameUZB,
      ownerType: owner,
      bathroomType: bathroomType.nameUZB,
      pricingYear: pricingYear,
      planType: planType.nameUZB,
      handle: rebate? 1 : 0,
      repairType: repairType.nameUZB,
      numberOfRooms: numberOfRooms,
      furnished: isEquipped? 1:0,
      marketType: marketType.nameUZB,
      floorOfHouse: floorOfHouse,
      totalArea: area,
      amenities: amenities,
      facilities: facilities,
      pricingMonth: pricingMonth,
      floor: floor,
      buildType: buildingType.nameUZB
    }
    

    const fetchData = async() => {
      const res = await getHomePrice(homeData);

      if(res.success) {
        console.log(res.data);
        
      }
    }

    fetchData();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h5"
        textAlign={"center"}
        marginY={3}
        sx={{ color: "#003049" }}
      >
        {isUzbek ? "Toshkent shahridagi uylar" : "Квартиры в городе Ташкент"}
      </Typography>

      <Location
        district={district}
        setDistrict={setDistrict}
        subRegion={subRegion}
        setSubRegion={setSubRegion}
        districts={districts}
        subRegions={subRegions}
        setRegion={setRegion}
        region={region}
      />

      <Grid2 container marginTop={3}>
        <Grid2 size={{ xs: 12, lg: 8 }}>
          <Box display={"flex"}>
            <Typography sx={{ fontWeight: "bold" }}>
              {isUzbek
                ? "Xonalar soni va uy maydoni "
                : "Количество комнат и площадь квартиры "}
            </Typography>
            <Typography>(</Typography>
            <MeterSquare />
            <Typography>)</Typography>
          </Box>
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <RoomAndArea
            numberOfRooms={numberOfRooms}
            setNumberOfRooms={setNumberOfRooms}
            area={area}
            setArea={setArea}
          />
          <FloorInfo
            floor={floor}
            setFloor={setFloor}
            floorOfHouse={floorOfHouse}
            setFloorOfHouse={setFloorOfHouse}
          />
          <PublicPlaces
            addPublicPlace={addPublicPlace}
            clearPublicPlaceList={clearPublicPlaceList}
            publicPlaces={publicPlaces}
            deletePublicPlace={deletePublicPlace}
          />

          <Equipped isEquipped={isEquipped} setIsEquipped={setIsEquipped} />

          <Furniture
            furniture={furniture}
            addFurniture={addFurniture}
            clearFurnitureList={clearFurnitureList}
            deleteFurniture={deleteFurniture}
          />

          <BuildingPlanBath
            buildingType={buildingType}
            setBuildingType={setBuildingType}
            planType={planType}
            setPlanType={setPlanType}
            bathroomType={bathroomType}
            setBathroomType={setBathroomType}
            repairType={repairType}
            setRepairType={setRepairType}
          />

          <RepairType repairType={repairType} setRepairType={setRepairType} />

          <MarketType marketType={marketType} setMarketType={setMarketType} />

          <Owner owner={owner} setOwner={setOwner} />

          <Rebate rebate={rebate} setRebate={setRebate} />

          <Commission commission={commission} setCommission={setCommission} />

          <Date
            pricingMonth={pricingMonth}
            setPricingMonth={setPricingMonth}
            pricingYear={pricingYear}
            setPricingYear={setPricingYear}
          />
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 5 }}
          sx={{ display: { xs: "none", md: "flex" } }}
          justifyContent={"end"}
        >
          <CheckBox
            region={region}
            subRegion={subRegion}
            district={district}
            numberOfRooms={numberOfRooms}
            area={area}
            floor={floor}
            floorOfHouse={floorOfHouse}
            publicPlaces={publicPlaces}
            furniture={furniture}
            buildingType={buildingType}
            planType={planType}
            bathroomType={bathroomType}
            repairType={repairType}
            marketType={marketType}
            owner={owner}
            rebate={rebate}
            commission={commission}
            isEquipped={isEquipped}
            pricingYear={pricingYear}
            pricingMonth={pricingMonth}
            scrollToResult={scrollToResult}
            checkData={checkData}
            sendHomeForm={sendHomeForm}
          />
        </Grid2>
      </Grid2>

      <Grid2
        container
        marginY={4}
        sx={{ display: { xs: "flex", md: "none" } }}
        justifyContent={"center"}
      >
        <Grid2 item size={11}>
          <CheckBox
            region={region}
            subRegion={subRegion}
            district={district}
            numberOfRooms={numberOfRooms}
            area={area}
            floor={floor}
            floorOfHouse={floorOfHouse}
            publicPlaces={publicPlaces}
            furniture={furniture}
            buildingType={buildingType}
            planType={planType}
            bathroomType={bathroomType}
            repairType={repairType}
            marketType={marketType}
            owner={owner}
            rebate={rebate}
            commission={commission}
            isEquipped={isEquipped}
            pricingYear={pricingYear}
            pricingMonth={pricingMonth}
            scrollToResult={scrollToResult}
            checkData={checkData}
            sendHomeForm={sendHomeForm}
          />
        </Grid2>
      </Grid2>

      <Grid2 container display={"flex"} justifyContent={"center"}>
        <Grid2 item size={{ xs: 11, md: 8, lg: 6, xl: 5 }}>
          <Typography variant="h6" marginTop={5} textAlign={"center"}>
            {isUzbek
              ? "Uyning baholangan bozor narxi"
              : "Оценочная рыночная стоимость квартиры"}
          </Typography>
          <Box
            ref={resultRef}
            className="main-border"
            sx={{ marginBottom: 5, padding: 2 }}
            textAlign={"center"}
          >
            <Typography variant="h4" fontWeight={"bold"}>
              143 500$
            </Typography>
            <Typography>
              {isUzbek
                ? "139 890 - 147 200 atrofida baholanishi mumkin"
                : "Может быть оценено примерно в 139 890 - 147 200"}
            </Typography>

            <Button variant="contained" size="small" sx={{ paddingX: 3 }}>
              To‘liq hisobotni yuklab olish
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default HomeForm;

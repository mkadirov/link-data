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
  const [repairType, setRepairType] = useState("");
  const [marketType, setMarketType] = useState("");
  const [owner, setOwner] = useState("Xususiy");
  const [rebate, setRebate] = useState(false);
  const [commission, setCommission] = useState(false);
  const [pricingMonth, setPricingMonth] = useState("");
  const [pricingYear, setPricingYear] = useState("");
  const [isEquipped, setIsEquipped] = useState(true);

  const resultRef = useRef(null);

  // Function to handle the scroll action
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

  const sendHomeForm = () => {
    const homeData = {
      mahalla: "Afrosiyob",
      ownerType: "Biznes",
      bathroomType: "Alohida",
      pricingYear: 2024,
      planType: "Aralash",
      rebate: 1, // Assuming 1 is used for true
      repairType: "Yaxshi",
      numberOfRooms: 3,
      furnished: 0, // Assuming 0 is used for false
      marketType: "Ikkilamchi bozor",
      floorOfHouse: 5,
      square: 60.5,
      publicPlaces: ["park", "shkola"],
      pricingMonth: 9,
      floor: 2,
      buildingType: "Blokli",
    };
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

import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getCovidData } from "src/api";

function CovidStatistics() {
  const [covidData, setCovidData] = useState<any>();
  const [countryIndex, setCountryIndex] = useState<any>();

  useEffect(() => {
    getCovidData().then((res) => setCovidData(res.data));
  }, []);

  useEffect(() => {
    if (covidData) {
      const countriesIndex = Object.keys(covidData).map((item) => item);
      setCountryIndex(countriesIndex);
    }
  }, [covidData]);

  return (
    <div>
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}></Box>
      </Container>
    </div>
  );
}

export default CovidStatistics;

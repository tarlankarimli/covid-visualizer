import * as React from "react";
import { useEffect, useState } from "react";
import { Box, Container, Divider } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { getCovidData } from "src/api";
import RankedCharts from "src/components/RankedCharts/RankedCharts";
import ReportedCases from "src/components/ReportCharts/ReportedCases";
import SelectCountry from "src/components/SelectCountry";
import ChartsControlPanel from "src/components/ChartsControl";
import { ICountryIndex } from "src/models";

function CovidStatistics() {
  const [covidData, setCovidData] = useState<any>();
  const [countryIndex, setCountryIndex] = useState<ICountryIndex[]>();
  const [selectedCountry, setSelectedCountry] = useState<string>("OWID_WRL");
  const [reportTab, setReportTab] = React.useState(0);

  useEffect(() => {
    getCovidData().then((res) => setCovidData(res.data));
  }, []);

  useEffect(() => {
    if (covidData) {
      const countriesIndex: ICountryIndex[] = [];
      Object.keys(covidData).map((item) => {
        return countriesIndex.push({
          label: covidData[item]?.location,
          index: item,
        });
      });
      setCountryIndex(countriesIndex);
    }
  }, [covidData]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setReportTab(newValue);
  };

  return (
    <div>
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <SelectCountry
            countryIndex={countryIndex}
            setSelectedCountry={setSelectedCountry}
          />
          <Box sx={{ width: "100%" }}>
            <Tabs value={reportTab} onChange={handleChange} centered>
              <Tab label="Reported Cases" />
              <Tab label="Ranked Charts" />
            </Tabs>
          </Box>
          <Box mb={10}>
            {reportTab ? (
              <RankedCharts />
            ) : (
              <ReportedCases
                countryData={covidData && covidData[selectedCountry]}
              />
            )}
          </Box>
          <Divider variant="middle" />
          <ChartsControlPanel />
        </Box>
      </Container>
    </div>
  );
}

export default CovidStatistics;

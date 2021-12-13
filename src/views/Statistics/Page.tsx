import * as React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Stack,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import RankedCharts from "src/components/RankedCharts/RankedCharts";
import ReportedCases from "src/components/ReportCharts/ReportedCases";
import ChartsControlPanel from "src/components/ChartsControl";
import { CovidDataContext } from "src/context/CovidDataContext";
import SelectCountry from "src/components/SelectCountry";
import { ICountryIndex } from "src/models";

function CovidStatistics() {
  const [countryIndex, setCountryIndex] = useState<ICountryIndex[]>();
  const [selectedCountry, setSelectedCountry] = useState<string>("OWID_WRL");
  const [reportTab, setReportTab] = React.useState(0);

  const { covidData } = React.useContext(CovidDataContext);

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
        {!covidData ? (
          <Stack alignItems="center">
            <CircularProgress size={100} />
          </Stack>
        ) : (
          <Box sx={{ height: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "end", mb: 5 }}>
              <SelectCountry
                countryIndex={countryIndex}
                setSelectedCountry={setSelectedCountry}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Tabs value={reportTab} onChange={handleChange} centered>
                <Tab label="Reported Cases" />
                <Tab label="Ranked Charts" />
              </Tabs>
            </Box>

            <Box mb={5}>
              {reportTab ? (
                <RankedCharts />
              ) : (
                <ReportedCases selectedCountry={selectedCountry} />
              )}
            </Box>
            <Divider variant="middle" />
            <ChartsControlPanel reportTab={reportTab} />
          </Box>
        )}
      </Container>
    </div>
  );
}

export default CovidStatistics;

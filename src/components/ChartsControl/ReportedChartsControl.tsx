import { useState, useContext, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ChartControlsContex } from "src/context/ChartsControl";
import { ESwitchCases } from "src/enums";
import {
  CHARTS_VALUES_FIELDS,
  IChartsValuesFields,
} from "src/views/Statistics/fields";
import { Box } from "@mui/system";

const initialValues: any = {
  deathCases: true,
  dailyValues: false,
};

const ReportedChartsControl = () => {
  const [switchesCheckValue, setSwitchesCheckValue] = useState(initialValues);
  const { chartsControlValues, setChartsControlValues } = useContext(
    ChartControlsContex
  );

  const deathCases: keyof IChartsValuesFields =
    chartsControlValues.reportedChart.deathCases;
  const dailyValues: keyof IChartsValuesFields =
    chartsControlValues.reportedChart.dailyValues;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value, id } = event.target;
    switchesCheckValue[id] = checked;
    setSwitchesCheckValue({ ...switchesCheckValue });
    chartsControlValues.reportedChart[id] = value;
    setChartsControlValues({ ...chartsControlValues });
  };

  return (
    <FormGroup>
      <Box sx={{ display: "flex" }}>
        <FormControlLabel
          control={
            <Switch
              checked={switchesCheckValue.deathCases}
              onChange={handleChange}
              id="deathCases"
              value={
                switchesCheckValue.deathCases
                  ? ESwitchCases.NEW_DEATHS
                  : ESwitchCases.TOTAL_DEATHS
              }
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={deathCases && CHARTS_VALUES_FIELDS[deathCases].label}
        />
        <FormControlLabel
          control={
            <Switch
              checked={switchesCheckValue.dailyValues}
              onChange={handleChange}
              id="dailyValues"
              value={
                switchesCheckValue.dailyValues
                  ? ESwitchCases.NEW_CASES
                  : ESwitchCases.NEW_CASES_PER_MILLION
              }
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={dailyValues && CHARTS_VALUES_FIELDS[dailyValues].label}
        />
      </Box>
    </FormGroup>
  );
};

export default ReportedChartsControl;

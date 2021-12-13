import { useState, useContext } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Box } from "@mui/system";

import { LineChartControlContex } from "src/context/LineChartControl";
import { ESwitchCases } from "src/enums";
import {
  CHARTS_VALUES_FIELDS,
  IChartsValuesFields,
} from "src/views/Statistics/fields";

const initialValues: any = {
  deathCases: true,
  dailyValues: false,
};

const ReportedChartsControl = () => {
  const [switchesCheckValue, setSwitchesCheckValue] = useState(initialValues);
  const { lineChartControlValues, setLineChartControlValues } = useContext(
    LineChartControlContex
  );

  const deathCases: keyof IChartsValuesFields =
    lineChartControlValues?.deathCases;
  const dailyValues: keyof IChartsValuesFields =
    lineChartControlValues?.dailyValues;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value, id } = event.target;
    switchesCheckValue[id] = checked;
    setSwitchesCheckValue({ ...switchesCheckValue });
    lineChartControlValues[id] = value;
    setLineChartControlValues({ ...lineChartControlValues });
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
          label={CHARTS_VALUES_FIELDS[deathCases].label}
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
          label={CHARTS_VALUES_FIELDS[dailyValues].label}
        />
      </Box>
    </FormGroup>
  );
};

export default ReportedChartsControl;

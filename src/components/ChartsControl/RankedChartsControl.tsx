import { useState, useContext } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { ESwitchCases } from "src/enums";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { BarChartControlContex } from "src/context/BarChartControl";
import {
  CHARTS_VALUES_FIELDS,
  IChartsValuesFields,
} from "src/views/Statistics/fields";

const initialValues: any = {
  deathCases: true,
};

const RankedChartsControl = () => {
  const [switchesCheckValue, setSwitchesCheckValue] = useState(initialValues);
  const { barChartControlValues, setBarChartControlValues } = useContext(
    BarChartControlContex
  );
  const [selectDataRangeValue, setSelectDataRangeValue] = useState("");
  const deathCases: keyof IChartsValuesFields =
    barChartControlValues.deathCases;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value, id } = event.target;
    switchesCheckValue[id] = checked;
    setSwitchesCheckValue({ ...switchesCheckValue });
    barChartControlValues[id] = value;
    setBarChartControlValues({ ...barChartControlValues });
  };

  const handleRangeValue = (range: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = range.target;
    setSelectDataRangeValue(value);
  };

  const handleRangeClick = () => {
    barChartControlValues.dataRange = selectDataRangeValue;
    setBarChartControlValues({ ...barChartControlValues });
    setSelectDataRangeValue("");
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
                  ? ESwitchCases.NEW_CASES
                  : ESwitchCases.TOTAL_DEATHS
              }
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={deathCases && CHARTS_VALUES_FIELDS[deathCases].label}
        />
        <FormControl>
          <InputLabel htmlFor="my-input">Enter the range</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={handleRangeValue}
            value={selectDataRangeValue}
            onKeyUp={(e) => e.keyCode === 13 && handleRangeClick()}
          />
          <FormHelperText id="my-helper-text"></FormHelperText>
        </FormControl>
      </Box>
    </FormGroup>
  );
};

export default RankedChartsControl;

import * as React from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { ICountryIndex } from "src/models";

interface IProps {
  countryIndex?: ICountryIndex[];
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
}
const SelectCountry: React.FunctionComponent<IProps> = (props: IProps) => {
  const { countryIndex, setSelectedCountry } = props;

  const filterOptions = createFilterOptions({
    matchFrom: "start",
  });

  const handleSelectedValue = (value: any) => {
    setSelectedCountry(value?.index || "OWID_WRL");
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={countryIndex || []}
      sx={{ width: 300 }}
      defaultValue={null}
      renderInput={(params) => <TextField {...params} label="Country" />}
      filterOptions={filterOptions}
      onChange={(event, value) => handleSelectedValue(value)}
    />
  );
};
export default SelectCountry;

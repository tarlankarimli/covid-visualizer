import React, { useState } from "react";
import { ESwitchCases } from "src/enums";
import { IChartsContextValues } from "src/models";

interface IProps {
  children: any;
}
const initialValues: IChartsContextValues = {
  reportedChart: {
    deathCases: ESwitchCases.NEW_DEATHS,
    dailyValues: ESwitchCases.NEW_CASES,
  },
};
export const ChartControlsContex = React.createContext<any>(initialValues);

const ChartsControlProvider = (props: IProps) => {
  const { children } = props;
  const [chartsControlValues, setChartsControlValues] = useState<
    IChartsContextValues
  >(initialValues);

  return (
    <ChartControlsContex.Provider
      value={{ chartsControlValues, setChartsControlValues }}
    >
      {children}
    </ChartControlsContex.Provider>
  );
};

export default ChartsControlProvider;

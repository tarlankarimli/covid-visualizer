import React, { useState } from "react";

import { ESwitchCases } from "src/enums";
import { ILineChartsContextValues } from "src/models";

interface IProps {
  children: any;
}
const initialValues: ILineChartsContextValues = {
  deathCases: ESwitchCases.NEW_DEATHS,
  dailyValues: ESwitchCases.NEW_CASES,
};
export const LineChartControlContex = React.createContext<any>(initialValues);

const LineChartControlProvider = (props: IProps) => {
  const { children } = props;
  const [lineChartControlValues, setLineChartControlValues] = useState<
    ILineChartsContextValues
  >(initialValues);

  return (
    <LineChartControlContex.Provider
      value={{ lineChartControlValues, setLineChartControlValues }}
    >
      {children}
    </LineChartControlContex.Provider>
  );
};

export default LineChartControlProvider;

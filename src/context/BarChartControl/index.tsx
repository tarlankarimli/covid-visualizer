import React, { useState } from "react";
import { ESwitchCases } from "src/enums";
import { IBarChartsContextValues } from "src/models";

interface IProps {
  children: any;
}
const initialValues: IBarChartsContextValues = {
  deathCases: ESwitchCases.NEW_DEATHS,
  dataRange: 10,
};
export const BarChartControlContex = React.createContext<any>(initialValues);

const BarChartControlProvider = (props: IProps) => {
  const { children } = props;
  const [barChartControlValues, setBarChartControlValues] = useState<
    IBarChartsContextValues
  >(initialValues);

  return (
    <BarChartControlContex.Provider
      value={{ barChartControlValues, setBarChartControlValues }}
    >
      {children}
    </BarChartControlContex.Provider>
  );
};

export default BarChartControlProvider;

import React from "react";
import { ICountryData } from "src/models";
import LineCharts from "../Charts/LineCharts";

interface IProps {
  countryData: ICountryData;
}

const ReportedCases: React.FC<IProps> = (props: IProps) => {
  const { countryData } = props;
  return (
    <div>
      <LineCharts countryData={countryData} />
    </div>
  );
};

export default ReportedCases;

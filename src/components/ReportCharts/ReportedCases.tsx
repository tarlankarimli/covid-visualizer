import React from "react";

import LineCharts from "../Charts/LineCharts";

interface IProps {
  selectedCountry: string;
}

const ReportedCases: React.FC<IProps> = (props: IProps) => {
  const { selectedCountry } = props;
  return (
    <div>
      <LineCharts selectedCountry={selectedCountry} />
    </div>
  );
};

export default ReportedCases;

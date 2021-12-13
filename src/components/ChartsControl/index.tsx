import React from "react";
import RankedChartsControl from "./RankedChartsControl";
import ReportedChartsControl from "./ReportedChartsControl";

interface IProps {
  reportTab: number;
}
const ChartsControlPanel: React.FC<IProps> = (props: IProps) => {
  const { reportTab } = props;

  return <>{reportTab ? <RankedChartsControl /> : <ReportedChartsControl />}</>;
};

export default ChartsControlPanel;

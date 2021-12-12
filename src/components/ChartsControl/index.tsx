import React from "react";
import RankedChartsControl from "./RankedChartsControl";
import ReportedChartsControl from "./ReportedChartsControl";

const ChartsControlPanel = () => {
  return (
    <>
      <ReportedChartsControl />
      <RankedChartsControl />
    </>
  );
};

export default ChartsControlPanel;

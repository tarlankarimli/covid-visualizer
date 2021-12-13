import React, { useEffect, useState } from "react";

import { getCovidData } from "src/api";

interface IProps {
  children: any;
}

export const CovidDataContext = React.createContext<any>(undefined);

const CovidDataProvider = (props: IProps) => {
  const { children } = props;
  const [covidData, setCovidData] = useState();

  useEffect(() => {
    getCovidData().then((res) => setCovidData(res.data));
  }, []);
  return (
    <CovidDataContext.Provider value={{ covidData }}>
      {children}
    </CovidDataContext.Provider>
  );
};

export default CovidDataProvider;

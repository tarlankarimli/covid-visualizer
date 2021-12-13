import { ICountryData, IDailyCases } from "src/models";

/** Get countryies data */
export const getCountryDataRange = (countryData: ICountryData, range = -7) => {
  return countryData?.data?.slice(range)?.map((item) => item);
};

/** Get data by key */
export const getDataRangeByKey = (
  countryData: ICountryData,
  key: keyof IDailyCases,
  range = -7
) => {
  return getCountryDataRange(countryData, range)?.map(
    (item: IDailyCases) => item[key]
  );
};

/** Filter and sort covid data by data key */
export const filteredCovidData = (covidData: any, filterKey: string) => {
  const filteredData = Object.values(covidData).filter(
    (item: any) =>
      item.continent !== undefined &&
      item.data[item.data.length - 1][filterKey] !== undefined
  );
  return Object.values(filteredData).sort(
    (a: any, b: any) =>
      b.data[b.data.length - 1][filterKey] -
      a.data[a.data.length - 1][filterKey]
  );
};

/** Get certain amount of data of countries */
export const getCountryNames = (
  sortedCovidData: ICountryData[],
  switchedKey: string,
  range = 10
) => {
  return sortedCovidData?.slice(0, range).map((item: any) => {
    return {
      location: item.location,
      data: item.data[item.data.length - 1][switchedKey],
    };
  });
};

/** Get random color */
export const randomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

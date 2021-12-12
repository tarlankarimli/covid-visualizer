import { ICountryData, IDailyCases } from "src/models";

export const getCountryDataRange = (countryData: ICountryData, range = -7) => {
  return countryData?.data?.slice(range)?.map((item) => item);
};

export const getDateRange = (
  countryData: ICountryData,
  key: keyof IDailyCases,
  range = -7
) => {
  return getCountryDataRange(countryData, range)?.map(
    (item: IDailyCases) => item[key]
  );
};

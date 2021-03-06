export type TChartsValuesFields = IChartsValuesFields;

/** Chart values fields */
export interface IChartsValuesFields {
  new_deaths: {
    label: string;
  };
  total_deaths: {
    label: string;
  };
  new_cases: {
    label: string;
  };
  new_cases_per_million: {
    label: string;
  };
}

/** Charts values fields. */
export const CHARTS_VALUES_FIELDS: TChartsValuesFields = {
  new_deaths: {
    label: "New deaths",
  },
  total_deaths: {
    label: "Total deaths",
  },
  new_cases: {
    label: "New cases",
  },
  new_cases_per_million: {
    label: "New cases per million",
  },
};

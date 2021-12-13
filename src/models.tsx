import { ESwitchCases } from "./enums";

/** Daily cases */
export interface IDailyCases {
  date?: string;
  new_cases?: number;
  new_cases_per_million?: number;
  stringency_index?: number;
  total_cases?: number;
  total_cases_per_million?: number;
  new_deaths?: string;
  total_deaths?: string;
}

/** Country data */
export interface ICountryData {
  aged_65_older?: number;
  aged_70_older?: number;
  cardiovasc_death_rate?: number;
  continent?: string;
  data?: IDailyCases[];
  diabetes_prevalence?: number;
  gdp_per_capita?: number;
  handwashing_facilities?: number;
  hospital_beds_per_thousand?: number;
  human_development_index?: number;
  life_expectancy?: number;
  location?: string;
  median_age?: number;
  population?: number;
  population_density?: number;
}

/** Country name index */
export interface ICountryIndex {
  label: string;
  index: string;
}

/** Context values of line chart */
export interface ILineChartsContextValues {
  deathCases: ESwitchCases;
  dailyValues: string;
}

/** Context values of bar chart */
export interface IBarChartsContextValues {
  deathCases: ESwitchCases;
  dataRange: number;
}

/** Chart settings */
export interface IChartSettings {
  label: string;
  data: string[];
  backgroundColor: string;
}

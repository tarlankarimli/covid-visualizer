import { ESwitchCases } from "./enums";

export interface IDailyCases {
  date: string;
  new_cases: number;
  new_cases_per_million: number;
  stringency_index: number;
  total_cases: number;
  total_cases_per_million: number;
  new_deaths: string;
  total_deaths: string;
}

export interface ICountryData {
  aged_65_older: number;
  aged_70_older: number;
  cardiovasc_death_rate: number;
  continent: string;
  data: IDailyCases[];
  diabetes_prevalence: number;
  gdp_per_capita: number;
  handwashing_facilities: number;
  hospital_beds_per_thousand: number;
  human_development_index: number;
  life_expectancy: number;
  location: string;
  median_age: number;
  population: number;
  population_density: number;
}

export interface ICountryIndex {
  label: string;
  index: string;
}

export interface IChartsContextValues {
  reportedChart: {
    deathCases: ESwitchCases;
    dailyValues: string;
  };
}

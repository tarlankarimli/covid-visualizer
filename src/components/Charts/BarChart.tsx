import { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { IChartSettings, ICountryData } from "src/models";
import { CovidDataContext } from "src/context/CovidDataContext";
import { BarChartControlContex } from "src/context/BarChartControl";
import {
  filteredCovidData,
  getCountryNames,
  randomColor,
} from "src/utils/modifiedData";
import { IChartsValuesFields } from "src/views/Statistics/fields";

const BarChart = () => {
  const { covidData } = useContext(CovidDataContext);
  const { barChartControlValues } = useContext(BarChartControlContex);

  const deathCases: keyof IChartsValuesFields =
    barChartControlValues.deathCases;

  const dataRange: number = barChartControlValues.dataRange;

  const sortedCovidData: ICountryData[] =
    covidData && filteredCovidData(covidData, "total_cases");
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Top ${dataRange} country statistics`,
      },
    },
  };

  const datasets: IChartSettings[] = [];
  sortedCovidData &&
    getCountryNames(sortedCovidData, deathCases, dataRange).map((item) => {
      datasets.push({
        label: item.location,
        data: [item.data],
        backgroundColor: randomColor(),
      });
    });

  const labels = [1];
  const data = {
    labels,
    datasets,
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;

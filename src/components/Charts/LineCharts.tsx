import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { LineChartControlContex } from "src/context/LineChartControl";
import { CovidDataContext } from "src/context/CovidDataContext";
import { getDataRangeByKey } from "src/utils/modifiedData";
import {
  CHARTS_VALUES_FIELDS,
  IChartsValuesFields,
} from "src/views/Statistics/fields";

interface IProps {
  selectedCountry: string;
}
const LineCharts: React.FC<IProps> = (props: IProps) => {
  const { selectedCountry } = props;

  const { covidData } = React.useContext(CovidDataContext);
  const { lineChartControlValues } = useContext(LineChartControlContex);
  const countryData = covidData && covidData[selectedCountry];
  const deathCases: keyof IChartsValuesFields =
    lineChartControlValues.deathCases;

  const dailyValues: keyof IChartsValuesFields =
    lineChartControlValues.dailyValues;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: countryData?.location || "World",
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  const labels = getDataRangeByKey(countryData, "date");

  const data = {
    labels,
    datasets: [
      {
        label: CHARTS_VALUES_FIELDS[deathCases].label,
        data: getDataRangeByKey(countryData, deathCases),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: CHARTS_VALUES_FIELDS[dailyValues].label,
        data: getDataRangeByKey(countryData, dailyValues),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineCharts;

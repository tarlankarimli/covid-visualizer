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
import { ICountryData } from "src/models";
import { getDateRange } from "src/utils/modifiedData";
import { ChartControlsContex } from "src/context/ChartsControl";
import {
  CHARTS_VALUES_FIELDS,
  IChartsValuesFields,
} from "src/views/Statistics/fields";

interface IProps {
  countryData: ICountryData;
}
const LineCharts: React.FC<IProps> = (props: IProps) => {
  const { countryData } = props;

  const { chartsControlValues } = useContext(ChartControlsContex);

  const deathCases: keyof IChartsValuesFields =
    chartsControlValues.reportedChart.deathCases;

  const dailyValues: keyof IChartsValuesFields =
    chartsControlValues.reportedChart.dailyValues;

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
  const labels = getDateRange(countryData, "date");

  const data = {
    labels,
    datasets: [
      {
        label: CHARTS_VALUES_FIELDS[deathCases].label,
        data: getDateRange(countryData, deathCases),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: CHARTS_VALUES_FIELDS[dailyValues].label,
        data: getDateRange(countryData, dailyValues),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineCharts;

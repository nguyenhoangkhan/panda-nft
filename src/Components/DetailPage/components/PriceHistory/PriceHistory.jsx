import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceHistory = () => {
  const options = {
    responsive: true,
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 10,
        bottom: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },

      title: {
        display: true,
        text: "All Time Avg. Price",
        color: "white",
        font: {
          size: 16,
          lineHeight: 2.4,
        },
        align: "start",
        padding: {
          bottom: 80,
          left: 100,
        },
        background:
          "linear-gradient(180.13deg, rgba(5, 78, 186, 0.19) 30.73%, rgba(41, 53, 69, 0) 114.02%)",
      },
    },
  };

  const labels = [
    "15/9",
    "16/9",
    "17/9",
    "18/9",
    "19/9",
    "20/9",
    "21/9",
    "22/9",
    "23/9",
    "24/9",
    "25/9",
    "26/9",
    "27/9",
    "28/9",
    "29/9",
    "30/9",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2.5 })),
        borderColor: "rgb(52,122,226)",
        backgroundColor: "rgba(12,123,412,4)",
      },
    ],
  };

  return (
    <div className="price-history detail-page__section">
      <Line options={options} data={data} />
    </div>
  );
};

export default PriceHistory;

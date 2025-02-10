import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Messages Sent",
        data: [12, 19, 3, 5, 2, 3, 7], // Example data points
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  return <Line data={data} />;
};

const DoughnutChart = () => {
  const data = {
    labels: ["Users", "Chats"],
    datasets: [
      {
        label: "User vs Chats",
        data: [35, 10], // Example values
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export { LineChart, DoughnutChart };

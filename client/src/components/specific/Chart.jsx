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
  plugins,
  PointElement,
  scales,
  Tooltip,
} from "chart.js";
import { getLast7Days } from "../../lib/feature";

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

const labels = getLast7Days();

const lineChartOptions={
  responsive:true,
  plugins:{
    legend:{
      display:false,
    },
    title:{
      display:false,
    },
  },
  scales:{
    x:{
      grid:{
        display:false,
      },
    },
    y:{
      beingAtZero:true,
      grid:{
        display:false,
      },
    },
  },
};

const LineChart = ({value=[]}) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Messages Sent",
        data: value, 
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  return <Line data={data} options={lineChartOptions}/>;
};

const doughnutChartOptions={
  responsive:true,
  plugins:{
    legend:{
      display:false,
    },
    title:{
      display:false,
    },
  },
};

const DoughnutChart = () => {
  const data = {
    labels: ["Users", "Chats"],
    datasets: [
      {
        label: "User vs Chats",
        data: [35, 10], 
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#df7e93", "#8dbdde"],
        offset:10,
      },
    ],
  };

  return <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOptions} />;
};

export { LineChart, DoughnutChart };

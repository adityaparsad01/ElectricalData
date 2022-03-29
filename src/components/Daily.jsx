import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

const Daily = ({ data }) => {
  const date = data.map((item) => {
    const days = new Date(item.Date);
    const day = days.getDate();
    return day;
  });

  const dailyR = data.map((item) => {
    return item.Main_Meter_Reading;
  });

  console.log(dailyR);
  const labels = date;
  const datas = dailyR;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const datass = {
    labels,
    datasets: [
      {
        label: "Main Meter",
        data: datas,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  };

  return (
    <>
      <div>
        <h1>Daily Data</h1>
        <Line data={datass} />
      </div>
    </>
  );
};

export default Daily;

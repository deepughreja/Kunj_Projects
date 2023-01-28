import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const series = [44, 55, 41, 17, 15];
  const options: Object = {
    labels: ["90-100", "80-90", "60-80", "50-60", "35-60"],
    colors: ["#34c38f", "#556ee6", "#f46a6a", "#50a5f1", "#f1b44c"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: false,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart options={options} series={series} type="pie" height="380" />
  );
};

export default PieChart;

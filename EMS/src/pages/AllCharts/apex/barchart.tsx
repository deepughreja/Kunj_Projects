import React from "react";
import ReactApexChart from "react-apexcharts";

const barchart = () => {
  const series = [
    {
      data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    colors: ["#34c38f"],
    grid: {
      borderColor: "#f1f1f1",
    },
    xaxis: {
      categories: [
        "HR",
        "Agriculture",
        "Marketing",
        "Law",
        "IT",
        "Data Entry",
        "Loco",
        "Postal assistant",
        "Section Engineer",
        "Chemical Assistant",
      ],
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height="350" />
  );
};

export default barchart;

import React from "react";
import Chart from "react-apexcharts";
import { formatCurrency } from "../../utils/formatCurrency";

const DonutChart = ({data}) => {
  const labels = data.map(item => item.brand); // Extract brand names for labels
  const series = data.map(item => parseFloat(item.revenue)); // Extract revenue values and convert to numbers
  // Chart data and configuration
  const options = {
    labels: labels, // Shoe brands
    legend: {
      position: "bottom", // Place legend below the chart
      horizontalAlign: "center",
    },
    title: {
      text: "Sales by Brand", // Chart title
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    // dataLabels: {
    //   enabled: true, // Show data labels inside the chart
    //   formatter: (val) => `${val.toFixed(1)}%`, // Format as percentage
    // },
    tooltip: {
      y: {
        formatter: (val) => formatCurrency(val), // Format tooltip values as sales in 'K'
      },
    },
  };

  

  return (
    <div>
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default DonutChart;

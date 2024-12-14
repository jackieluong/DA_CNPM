import React from "react";
import Chart from "react-apexcharts";
import {formatCurrency} from "../../utils/formatCurrency";
const PieChart = ({data}) => {
  // Extract brand names and revenue from the data prop

  if(data == null || data.length === 0) return <div>Loading...</div>;

  const labels = data ? data.map(item => item.category || 'Unknown') : []; // Extract brand names for labels
  const series = data ? data.map(item => parseFloat(item.revenue || 0)) : []; // Extract revenue values and convert to numbers

  console.log("data: ", data);
  
  // Chart configuration
  const options = {
    labels: labels,
    legend: {
      position: "bottom",
      horizontalAlign: "center", // Center-align the legend horizontally
      
      fontSize: "14px", // Set font size for legend text
      markers: {
        width: 10, // Width of the legend markers
        height: 10, // Height of the legend markers
      },
      itemMargin: {
        // horizontal: 10, // Space between legend items horizontally
        vertical: 5, // Space between legend items vertically
      },
    },
    title: {
        text: "Sales by Category", // Chart title
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
    tooltip: {
      y: {
        formatter: (val) => formatCurrency(val), // Format tooltip values as sales in 'K'
      },
    },
  };

  // Data for the pie chart
  // const series = [44, 55, 13, 43, 22]; // Data corresponding to labels

  return (
    <div>
      <Chart options={options} series={series} type="pie" width="390" />
    </div>
  );
};

export default PieChart;

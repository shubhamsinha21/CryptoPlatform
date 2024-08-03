import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  // array inside array
  const [chartdata, setChartData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let copyData = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((price) =>
        copyData.push([
          `${new Date(price[0]).toLocaleDateString().slice(0, -5)}`,
          price[1],
        ])
      );
      setChartData(copyData);
    }
  }, [historicalData]);

  return (
    <Chart chartType="LineChart" data={chartdata} height="100%" legendToggle />
  );
};

export default LineChart;

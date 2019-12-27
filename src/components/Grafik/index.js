import React, { Component } from "react";
import Chart from "./Chart";

class Grafiks extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  UNSAFE_componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "Desktop",
          "Tablet",
          "Mobile"
          // "Lowell",
          // "Cambridge",
          // "New Bedford"
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <Chart
          chartData={this.state.chartData}
          location="Bulanan"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default Grafiks;

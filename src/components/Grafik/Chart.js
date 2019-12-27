import React, { Component } from "react";
import { Line, Pie } from "react-chartjs-2";
import "./Chart.scss";
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  render() {
    return (
      <div className="chart">
        <div className="row mx-1 border">
          <div className="col-md-7 mr-2">
            <p className="text-secondary m-3">Users Overview</p>
            <Line
              data={this.state.chartData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  // text: "Laporan " + this.props.location,
                  fontSize: 15
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition
                }
              }}
            />
          </div>
          <div className="pieGraf p-0">
            <p className="text-secondary m-3">Users by device</p>

            <Pie
              data={this.state.chartData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  // text: "Laporan " + this.props.location,
                  fontSize: 15
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;

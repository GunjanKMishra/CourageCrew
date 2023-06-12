// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("line");
var line = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["6 June", "7 June", "8 June", "9 June", "10 June"],
    datasets: [{
      label: "Frequency",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 10,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [1, 3, 4, 2, 1],
    },
    // {
    //   label: "Another Dataset",
    //   lineTension: false,
    //   fill: false,
    //   backgroundColor: "rgba(204,102,0,0.2)",
    //   borderColor: "rgba(204,102,0,1)",
    //   pointRadius: 10,
    //   pointBackgroundColor: "rgba(204,102,0,1)",
    //   pointBorderColor: "rgba(255,255,255,0.8)",
    //   pointHoverRadius: 10,
    //   pointHoverBackgroundColor: "rgba(204,102,0,1)",
    //   pointHitRadius: 50,
    //   pointBorderWidth: 2,
    //   data: [3.005, 3.090, 2.865, 2.749, 2.749, 2.736, 2.510, 2.323, 2.247, 2.203, 2.168, 2.075],
    // }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10,
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});

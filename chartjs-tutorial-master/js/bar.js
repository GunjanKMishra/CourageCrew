// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("bar");
var bar = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["6 June", "7 June", "8 June", "9 June", "10 June"],
    datasets: [{
      label: "Morning",
      backgroundColor: "dodgerblue",
      borderColor: "transparent",
      data: [98.6, 98.3, 98.5, 98.4, 98.8],
    },
    {
      label: "Afternoon",
      backgroundColor: "purple",
      borderColor: "transparent",
      data: [98.9, 98.4, 98.5, 98.3, 98.7],
    },
    {
      label: "Night",
      backgroundColor: "red",
      borderColor: "transparent",
      data: [98.8, 98.5, 98.1, 98.5, 98.6],
    },
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'year'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 94,
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }
});

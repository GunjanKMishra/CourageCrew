// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("pie").getContext('2d');
var pie = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["4.6", "3.5", "6.2", "4.1"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#9b59b6",
        "#e74c3c",
      ],
      data: [18.1, 13.0, 33.0, 35.9]
    }]
  }
});
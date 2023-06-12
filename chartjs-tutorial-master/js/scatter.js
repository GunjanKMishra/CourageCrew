// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("scatter");
var scatter = new Chart(ctx, {
  type: 'scatter',
  data: {
            datasets: [{
                label: 'Comparison (Haemoglobin in g/dL, Months)',
                fill: false,
                showLine: false,
                backgroundColor: "red",
                borderColor: "transparent",
                pointBackgroundColor: ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
                data: [
                  { y: 14, x:1 }, 
                    { y: 13.5, x:2 }, 
                    { y: 11.5, x: 3}, 
                    { y: 11, x: 4},
                    { y: 10.4, x: 5}, 
                    { y: 10, x: 6}, 
                    
                ]
            }]
        },
        options: {
          legend: {
            display: true
          },
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                    beginAtZero: 0
                    }
                }],
              yAxes: [{
                    type:'linear',
                    
                    ticks: {
                      beginAtZero: 2
                    }
              }]
            }
        }
    });
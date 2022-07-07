var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

var yValues = ["17.45", "34.91", "52.36", "31.07", " 23.39", "43.28", "25.48"];
var barColors = [
  "hsl(10, 79%, 65%)",
  "hsl(28, 10%, 53%)",
  "hsl(186, 34%, 60%)",
  "hsl(33, 100%, 98%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(28, 10%, 53%)"
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        drawOnChartArea: false
      }
    },

    title: {
      display: false
    },
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
          boxHeight: 0
        }
      }
    },
    responsive: true,
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0]
        ? "pointer"
        : "default";
    }
  }
});

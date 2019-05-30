new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["1980s", "1990s", "2000s","2010s"],
      datasets: [
        {
          label: "Bears",
          borderColor: "#0B162A",
          borderWidth: 3,
          backgroundColor: "#C83803",
          data: [92,73,81,68]
        }, {
          label: "Lions",
          borderColor: "#B0B7BC",
          borderWidth: 3,
          backgroundColor: "#0076B6",
          data: [61,79,42,69]
        },
        {
          label: "Packers",
          borderColor: "#FFB612",
          borderWidth: 3,
          backgroundColor: "#203731",
          data: [65,93,95,89]
        },
        {
          label: "Vikings",
          borderColor: "#FFC62F",
          borderWidth: 3,
          backgroundColor: "#4F2683",
          data: [77,95,84,71]
        },
        {
          label: "Average",
          data: [73.75, 85, 75.5, 74.25],
          type: 'line'
    },
      ]
    },
    options: {
      title: {
        display: true, 
        fontSize: 20,
        text: "FOOTBALL TEAM WINS BY DECADE VS DECADE AVERAGE"
      }
    }
});

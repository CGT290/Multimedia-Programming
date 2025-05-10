const context = document.getElementById("doughnut-chart");
let currentType = 
new Chart(context, {
    type: 'doughnut',
    data: {
      labels: ["Argentina", "Brazil", "England", "France", "Germany", "Italy", "Spain", "Uruguay"],
      datasets: [
        {
          label: "World CUPS won, Peter Joseph" ,
          backgroundColor: ["#74ACDF", "#009739","#f5f5f5","blue","#FFCC00", "#008C45", "#AA151B", "#FFB81C"],
          data: [3,5,1,2,4,4,1,1]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'World Cups won by each country'
      }
    }
});

const lineCTX = document.getElementById("line-chart");
 
new Chart(lineCTX, {
    type: 'line',
    data: {
      labels: ["Argentina", "Brazil", "England", "France", "Germany", "Italy", "Spain", "Uruguay"],
      datasets: [
        {
          label: "World CUPS won, Peter Joseph",
          backgroundColor: ["#74ACDF", "#009739","#f5f5f5","blue","#FFCC00", "#008C45", "#AA151B", "#FFB81C"],
          data: [3,5,1,2,4,4,1,1]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'World Cups won by each country, Peter Joseph'
      },
    scales: {
        y: {
            beginAtZero: true
        }
       
    }
    }
});






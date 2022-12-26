
var options = {
chart: {
    type: 'bar',
    width: '100%'
},
series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
}],
xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
},
fill: {
    colors: ['#008FFB']
},
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();


// gráfico 2


var options = {
    chart: {
      type: 'line',
      width: '100%'
    },
    series: [{
      name: 'caaa',
      data: [35,20,10,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    },
    fill: {
      colors: ['#008FFB']
    },
    }

  var chart = new ApexCharts(document.querySelector("#chart2"), options);

  chart.render();






  // gráfico 3 (quesito)

        
  var options = {
    series: [720, 277, 225, 163, 150, 8819],
    chart: {
    width: '100%',
    type: 'pie',
  },
  labels: ['Engel & Völkers', 'Lucas Fox', 'aProperties', 'Colibree', 'Housfy', 'Otros'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'top'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#piechart"), options);
  chart.render();




    // gráfico 4, grafico mensual columnas apiladas info sobre top 5 inmobiliarias


    var options = {
      series: [{
      name: 'Sin inmobiliaria',
      data: [4500, 7260]
    }, {
      name: 'Resto Inmobiliarias',
      data: [9321, 8819]
    }, {
      name: 'Top 5',
      data: [1350, 1535]
    }],
      chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        //borderRadius: 10,   no va de momento
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    xaxis: {
      
      categories: ["Noviembre'22", "Diciembre'22"
      ],
    },
    legend: {
      position: 'bottom',
      
    },
    fill: {
      opacity: 1
    }
    };

    var chart = new ApexCharts(document.querySelector("#apiladastotal"), options);
    chart.render();
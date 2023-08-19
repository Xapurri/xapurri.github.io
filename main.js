
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
      name: 'Barcelona',
      data: [4203,4161,4161,4161,4290,4290,4206,4292,4471,4609,4656,4800]

    },{
      name : 'Ciutat Vella',
      data: [5276,5329,5494,5606,5663,5342,5342,5088,5139,5139,4848,4800]
      
    },{
      name : 'Gràcia',
      data: [4420,4604,4698,4606,4748,4479,4524,4664,4711,4487,4579,4625]
      
    },{
      name : 'Horta - Guinardó',
      data: [3630,3630,3742,3705,3529,3565,3363,3297,3110,3141,3272,3305]
      
    },{
      name : "L'Eixample",
      data: [6780,6780,6780,6780,6647,6517,6327,6591,6399,6530,6279,6096]
      
    },{
      name : 'Les Corts',
      data: [6710,6710,6452,6584,6584,6651,6395,6593,6660,6727,6727,6346]
      
    },{
      name : 'Nou Barris',
      data: [2896,2758,2814,2871,2787,2815,2681,2553,2579,2504,2529,2479]
      
    },{
      name : 'Sant Andreu',
      data: [3345,3413,3413,3413,3282,3384,3453,3320,3423,3356,3196,3261]
      
    },{
      name : 'Sant Martí',
      data: [5886,6131,6011,6011,6011,5836,5778,5556,5612,5294,4994,4994]
      
    },{
      name : 'Sants - Montjuïc',
      data: [3152,3152,3090,3153,3091,3122,3252,3387,3387,3353,3320,3423]
      
    },{
      name : 'Sarrià - Sant Gervasi',
      data: [7249,7177,7106,7326,7253,6842,6579,6326,6390,6204,5853,5795]
      
    }],
    xaxis: {
      categories: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
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
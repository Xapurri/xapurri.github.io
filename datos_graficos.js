

// Variables a usar

 // Gráfico de distribución del precio
 var num_pisos = [39, 134, 204, 124, 119, 70, 40, 26, 19, 4, 0]
 var keys_precio = ['[600, 900)', '[900, 1200)', '[1200, 1500)', '[1500, 1800)', '[1800, 2100)', '[2100, 2400)', '[2400, 2700)', '[2700, 3000)', '[3000, 3300)', '[3300, 3600)', '[3600, 3900)']
 var values_m2 = [13, 33, 70, 95, 162, 115, 103, 80, 54, 24, 24, 6]
 var keys_m2 = ['[20, 30)', '[30, 40)', '[40, 50)', '[50, 60)', '[60, 70)', '[70, 80)', '[80, 90)', '[90, 100)', '[100, 110)', '[110, 120)', '[120, 130)', '[130, 140)']
 var values_barrio = [1731.03, 1637.92, 1486.56, 1371.75, 1186.41]
 var num_pisos_barrio = [423, 200, 63, 61, 32]
 var keys_barrio_dist = ['Vila de Gràcia', "El Camp d'en Grassot i Gràcia Nova", 'La Salut', 'Vallcarca i els Penitents', 'El Coll']
 var values_entrada = [19, 5, 13, 14, 7, 12, 13, 4, 10, 21, 14, 16, 22, 23, 7, 30, 15, 24, 13, 32, 3, 5, 13, 19, 13, 9, 13, 4, 10, 10, 9, 24, 12, 1, 3, 2, 8] 
 var values_salida = [3, 10, 14, 22, 17, 15, 10, 3, 6, 19, 9, 23, 23, 16, 11, 19, 18, 30, 20, 10, 2, 3, 18, 24, 25, 15, 17, 2, 16, 16, 22, 30, 13, 1, 6, 2, 10]
 var num_pisos_en_alquiler = [404, 399, 396, 383, 372, 367, 370, 373, 377, 373, 377, 366, 359, 252, 369, 379, 376, 374, 365, 390, 391, 393, 386, 385, 375, 367, 361, 362, 357, 355, 345, 346, 344, 344, 341, 341, 340]
 var keys_entrada = ['2023-08-20', '2023-08-21', '2023-08-22', '2023-08-23', '2023-08-24', '2023-08-25', '2023-08-26', '2023-08-27', '2023-08-28', '2023-08-29', '2023-08-30', '2023-08-31', '2023-09-01', '2023-09-03', '2023-09-04', '2023-09-05', '2023-09-06', '2023-09-07', '2023-09-08', '2023-09-09', '2023-09-10', '2023-09-11', '2023-09-12', '2023-09-13', '2023-09-14', '2023-09-15', '2023-09-16', '2023-09-17', '2023-09-18', '2023-09-19', '2023-09-20', '2023-09-21', '2023-09-22', '2023-09-23', '2023-09-24', '2023-09-25', '2023-09-26']
 var json_aumento_decrementos_barrios = {'32': {'name': "El Camp d'en Grassot i Gràcia Nova", 'increase': {'Menores o igual al 5%': 1, 'Entre el 5% y el 10%': 2, 'Mayores al 10%': 2}, 'decrease': {'Menores o igual al 5%': 4, 'Entre el 5% y el 10%': 1, 'Mayores al 10%': 6}}, '31': {'name': 'Vila de Gràcia', 'increase': {'Menores o igual al 5%': 7, 'Entre el 5% y el 10%': 5, 'Mayores al 10%': 8}, 'decrease': {'Menores o igual al 5%': 12, 'Entre el 5% y el 10%': 4, 'Mayores al 10%': 12}}, '28': {'name': 'Vallcarca i els Penitents', 'increase': {'Menores o igual al 5%': 1, 'Entre el 5% y el 10%': 0, 'Mayores al 10%': 0}, 'decrease': {'Menores o igual al 5%': 0, 'Entre el 5% y el 10%': 1, 'Mayores al 10%': 1}}, '29': {'name': 'El Coll', 'increase': {'Menores o igual al 5%': 0, 'Entre el 5% y el 10%': 1, 'Mayores al 10%': 0}, 'decrease': {'Menores o igual al 5%': 0, 'Entre el 5% y el 10%': 2, 'Mayores al 10%': 1}}, '30': {'name': 'La Salut', 'increase': {}, 'decrease': {'Menores o igual al 5%': 2, 'Entre el 5% y el 10%': 0, 'Mayores al 10%': 2}}}
 
 

var optionsPrecio = {
    chart: {
        type: 'bar',
        height: 350
    },
    series: [{
        name: 'Número de Pisos',
        data: num_pisos
    }],
    xaxis: {
        categories: keys_precio
    },
    title: {
        text: 'Distribución del Precio de los Pisos',
        align: 'left'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
};
var chartPrecio = new ApexCharts(document.querySelector("#histPrecio"), optionsPrecio);
chartPrecio.render();

// Gráfico de distribución de m2
var optionsM2 = {
    chart: {
        type: 'bar',
        height: 350
    },
    series: [{
        name: 'Número de Pisos',
        data: values_m2
    }],
    xaxis: {
        categories: keys_m2
    },
    title: {
        text: 'Distribución de Metros Cuadrados (m2) de los Pisos',
        align: 'left'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
};
var chartM2 = new ApexCharts(document.querySelector("#histM2"), optionsM2);
chartM2.render();

 // Combinando 'Precio Promedio por Barrio' y 'Distribución de Pisos por Barrio' en un solo gráfico
 var optionsCombinedBarrio = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: false // No apilar las barras
    },
    series: [
        {
            name: 'Precio Promedio',
            data: values_barrio
        },
        {
            name: 'Número de Pisos',
            data: num_pisos_barrio
        }
    ],
    xaxis: {
        categories: keys_barrio_dist
    },
    dataLabels: {
        enabled: true,
        formatter: function (value, { seriesIndex }) {
            // Si es la serie "Precio Promedio" (índice 0), añade el símbolo de €
            if (seriesIndex === 0) {
                return value + '€';
            }
            // De lo contrario, muestra el valor sin modificaciones
            return value;
        },
        style: {
            fontSize: '12px',
            colors: ['#fff']  // Puedes ajustar el color y tamaño según tus necesidades
        }
    },
    title: {
        text: 'Precio Promedio y Distribución de Pisos por Barrio',
        align: 'left'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
};
var chartCombinedBarrio = new ApexCharts(document.querySelector("#barrioPrecio"), optionsCombinedBarrio);
chartCombinedBarrio.render();

// Gráfico del número de pisos añadidos y retirados por fecha
var optionsPisosFecha = {
    chart: {
        type: 'line',
        height: 350,
        stacked: false
    },
    series: [
        {
            name: 'Añadidos',
            data: values_entrada,
            type: 'line',
            marker: {
                show: true,
                shape: 'circle'
            },
            lineStyle: {
                width: 2,
                dashArray: 0
            }
        },
        {
            name: 'Retirados',
            data: values_salida,
            type: 'line',
            marker: {
                show: true,
                shape: 'cross'
            },
            lineStyle: {
                width: 2,
                dashArray: 5
            }
        },
        {
            name: 'Pisos Ofertados',
            data: num_pisos_en_alquiler,
            type: 'area',
            color: '#e0e0e0' 
        }
    ],
    yaxis: [
        {
            seriesName: 'Añadidos',  // Asociar este eje y con la serie 'Añadidos'
            title: {
                text: 'Añadidos y Retirados'
            }
        },
        {
            seriesName: 'Añadidos',  // Asociar este eje y con la serie 'Añadidos'
            show: false
        },
        {
            opposite: true,
            seriesName: 'Pisos Ofertados',  // Asociar este eje y con la serie 'Pisos Ofertados'
            title: {
                text: 'Número de Pisos Ofertados'
            },
            min: 0,
            max: Math.max(...num_pisos_en_alquiler) + 10
        }
    ],
    xaxis: {
        categories: keys_entrada
    },
    title: {
        text: 'Número de Pisos Añadidos, Retirados y Ofertados por Fecha',
        align: 'left'
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right'
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    markers: {
        size: 4
    },
    stroke: {
        curve: 'smooth'
    },
    tooltip: {
        theme: 'dark', // Establece el tema del tooltip a oscuro para que el fondo sea oscuro
        style: {
            fontSize: '12px',  // Ajusta el tamaño de fuente si es necesario
            colors: ['#000000']  // Color negro para todos los textos en el tooltip
        }
    },
};
var chartPisosFecha = new ApexCharts(document.querySelector("#pisosFecha"), optionsPisosFecha);
chartPisosFecha.render();

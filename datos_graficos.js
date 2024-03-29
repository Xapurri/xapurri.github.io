

 // Gráfico de distribución del precio
 
 // Variables para los gráficos de los pisos alquilados
 var alquilados_values_precio = [603, 5576, 7313, 6211, 3558, 2054, 1544, 1182, 799];
 var alquilados_keys_precio = ['[0, 100000)', '[100000, 200000)', '[200000, 300000)', '[300000, 400000)', '[400000, 500000)', '[500000, 600000)', '[600000, 700000)', '[700000, 800000)', '[800000, 900000)'];
 var alquilados_values_m2 = [119, 557, 1159, 2830, 4600, 4499, 3972, 3014, 2526, 1499, 1042, 1030, 801, 611, 398, 416, 344];
 var alquilados_keys_m2 = ['[20, 30)', '[30, 40)', '[40, 50)', '[50, 60)', '[60, 70)', '[70, 80)', '[80, 90)', '[90, 100)', '[100, 110)', '[110, 120)', '[120, 130)', '[130, 140)', '[140, 150)', '[150, 160)', '[160, 170)', '[170, 180)', '[180, 190)'];
 var alquilados_values_precio_m2 = [56, 1253, 5705, 8534, 7379, 4342, 2089, 1005, 461];
 var alquilados_keys_precio_m2 = ['[0, 1000)', '[1000, 2000)', '[2000, 3000)', '[3000, 4000)', '[4000, 5000)', '[5000, 6000)', '[6000, 7000)', '[7000, 8000)', '[8000, 9000)'];
 var alquilados_values_barrio = [384838.12, 440467.17, 289370.73, 570658.55, 732059.53, 198919.24, 280408.23, 366896.1, 282295.39, 996182.78];
 var alquilados_values_barrio_dist = [4098, 2050, 2574, 6979, 1339, 2393, 1972, 3762, 3504, 2899];
 var alquilados_keys_barrio_dist = ['Ciutat Vella', 'Gràcia', 'Horta - Guinardó', "L'Eixample", 'Les Corts', 'Nou Barris', 'Sant Andreu', 'Sant Martí', 'Sants - Montjuïc', 'Sarrià - Sant Gervasi'];
 
 // Variables para los gráficos de los pisos pendientes de alquilar
 var pendientes_values_precio = [260, 2277, 3063, 2460, 1776, 1129, 745, 682, 512];
 var pendientes_keys_precio = ['[0, 100000)', '[100000, 200000)', '[200000, 300000)', '[300000, 400000)', '[400000, 500000)', '[500000, 600000)', '[600000, 700000)', '[700000, 800000)', '[800000, 900000)'];
 var pendientes_values_m2 = [43, 246, 591, 1192, 1863, 1941, 1799, 1422, 1188, 771, 609, 502, 404, 327, 278, 294, 232];
 var pendientes_keys_m2 = ['[20, 30)', '[30, 40)', '[40, 50)', '[50, 60)', '[60, 70)', '[70, 80)', '[80, 90)', '[90, 100)', '[100, 110)', '[110, 120)', '[120, 130)', '[130, 140)', '[140, 150)', '[150, 160)', '[160, 170)', '[170, 180)', '[180, 190)'];
 var pendientes_values_precio_m2 = [34, 610, 2334, 3289, 3454, 2214, 1343, 800, 453];
 var pendientes_keys_precio_m2 = ['[0, 1000)', '[1000, 2000)', '[2000, 3000)', '[3000, 4000)', '[4000, 5000)', '[5000, 6000)', '[6000, 7000)', '[7000, 8000)', '[8000, 9000)'];
 var pendientes_values_barrio = [469524.53, 573134.12, 314896.26, 764145.89, 1239435.65, 194233.87, 291491.51, 499854.72, 302854.05, 1202901.64];
 var pendientes_values_barrio_dist = [2634, 879, 1320, 3102, 680, 1011, 818, 1646, 1664, 1604];
 var pendientes_keys_barrio_dist = ['Ciutat Vella', 'Gràcia', 'Horta - Guinardó', "L'Eixample", 'Les Corts', 'Nou Barris', 'Sant Andreu', 'Sant Martí', 'Sants - Montjuïc', 'Sarrià - Sant Gervasi'];
 
 
 var values_entrada = [2913, 6686, 5210, 7780, 5002, 1724] 
 var values_salida = [3222, 7065, 5327, 8796, 5278, 1882]
 var num_pisos_en_alquiler = [17147, 16624, 16474, 15424, 15105, 15357]
 var keys_entrada = ['2023-01-16', '2023-02-28', '2023-03-31', '2023-06-28', '2023-07-31', '2023-08-31']
 
 
 
var isMobile = window.innerWidth <= 1200;
var optionsPrecio = {

    dataLabels: {
        enabled: true,
        offsetY: isMobile ? 30 : 0,
        style: {
            fontSize: isMobile ? '12px' : '12px',
            colors: isMobile ? ['#000'] : ['#fff'], // Cambia el color de las etiquetas de datos a negro
        }
    },
    chart: {
        type: 'bar',
        height: 350
    },
    series: [{
        name: 'Número de Pisos',
        data: alquilados_values_precio
    }],
    xaxis: {
        categories: alquilados_keys_precio,
        labels: {
            style: {
                fontSize: isMobile ? '10px' : '12px'  // Tamaño de fuente más pequeño para móviles
            }
        }
    },
    title: {
        text: 'Distribución del Precio',
        align: 'left'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: isMobile ? '80%' : '55%',
            endingShape: 'rounded'
        },
    },
    tooltip: {
        theme: 'dark', // Establece el tema del tooltip a oscuro para que el fondo sea oscuro
        style: {
            fontSize: '12px',  // Ajusta el tamaño de fuente si es necesario
            colors: ['#000000']  // Color negro para todos los textos en el tooltip
        }
    },
};
var chartPrecio = new ApexCharts(document.querySelector("#histPrecio"), optionsPrecio);
chartPrecio.render();

// Gráfico de distribución de m2
var optionsM2 = {
    dataLabels: {
        enabled: true,
        offsetY: isMobile ? 30 : 0,
        style: {
            fontSize: isMobile ? '0px' : '12px',
            colors: isMobile ? ['#000'] : ['#fff'], // Cambia el color de las etiquetas de datos a negro
        }
    },
    chart: {
        type: 'bar',
        height: 350
    },
    series: [{
        name: 'Número de Pisos',
        data: alquilados_values_m2
    }],
    xaxis: {
        categories: alquilados_keys_m2
    },
    title: {
        text: 'Distribución del m2',
        align: 'left'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    tooltip: {
        theme: 'dark', // Establece el tema del tooltip a oscuro para que el fondo sea oscuro
        style: {
            fontSize: '12px',  // Ajusta el tamaño de fuente si es necesario
            colors: ['#000000']  // Color negro para todos los textos en el tooltip
        }
    },
};
var chartM2 = new ApexCharts(document.querySelector("#histM2"), optionsM2);
chartM2.render();

function roundToNext500k(value) {
    return Math.ceil(value / 500000) * 500000;
}

function roundToNext100k(value) {
    return Math.ceil(value / 100) * 100;
}

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
            data: alquilados_values_barrio
        },
        {
            name: 'Número de Pisos',
            data: alquilados_values_barrio_dist
        }
    ],
    xaxis: {
        categories: alquilados_keys_barrio_dist
    },
    yaxis: [
        {
            seriesName: 'Precio Promedio',  // Asociar este eje y con la serie 'Añadidos'
            title: {
                text: 'Precio Promedio'
            },
            min: 0,
            max: roundToNext500k(Math.max(...alquilados_values_barrio, ...alquilados_values_barrio)) + 500000
        },
        {
            opposite: true,
            seriesName: 'Número de Pisos',  // Asociar este eje y con la serie 'Pisos Ofertados'
            title: {
                text: 'Número de pisos'
            },
            min: 0,
            max: roundToNext100k(Math.max(...alquilados_values_barrio_dist)) + 0
        }
    ],
    dataLabels: {
        enabled: isMobile ? false : true,
        
        offsetY: isMobile ? 30 : 0,
        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
            // Asumiendo que la serie de 'Precio Promedio' es la que tiene los rectángulos azules
            // y que queremos ocultar las etiquetas de datos para esa serie específica.
            if (w.config.series[seriesIndex].name === 'Precio Promedio') {
                return '';
            }
            // Para cualquier otra serie, devuelve el valor con el símbolo de € si es necesario
            return seriesIndex === 0 ? value + '€' : value;
        },
        style: {
            fontSize: '12px',
            colors: isMobile ? ['#000'] : ['#fff']
        }
    },
    title: {
        text: 'Distribución por Distrito',
        align: 'left'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    tooltip: {
        theme: 'dark', // Establece el tema del tooltip a oscuro para que el fondo sea oscuro
        style: {
            fontSize: '12px',  // Ajusta el tamaño de fuente si es necesario
            colors: ['#000000']  // Color negro para todos los textos en el tooltip
        }
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
            },
            min: 0,
            max: Math.max(Math.max(...values_entrada),Math.max(...values_salida)) + 100
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
            max: Math.max(...num_pisos_en_alquiler) + 2000
        }
    ],
    xaxis: {
        categories: keys_entrada,
        tickAmount: isMobile ? 3 : undefined, // Ajusta esto a la cantidad deseada de etiquetas en móviles
        labels: {
            rotate: isMobile ? -45 : 0,  // Rotar las etiquetas para mejorar la legibilidad
            trim: true,
            minHeight: undefined,
            maxHeight: 120
        }
    },
    title: {
        text: 'Histórico de Pisos',
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



// Agrega este código después de que hayas renderizado todos tus gráficos
var isPrecioGraph = true; // Flag para saber qué datos se están mostrando

// Definimos la función que actualiza el gráfico y el botón
function updateGraphAndButton() {
    var button = document.getElementById('toggleGraph');  // Obtener el botón
    
    if (isPrecioGraph) {
        chartPrecio.updateOptions({
            series: [{
                name: 'Número de Pisos',
                data: alquilados_values_precio_m2
            }],
            xaxis: {
                categories: alquilados_keys_precio_m2
            },
            title: {
                text: 'Distribución del Precio / m²',
            },
        });
        button.textContent = "Precio";  // Cambiar el texto del botón
    } else {
        chartPrecio.updateOptions({
            series: [{
                name: 'Número de Pisos',
                data: alquilados_values_precio
            }],
            xaxis: {
                categories: alquilados_keys_precio
            },
            title: {
                text: 'Distribución del Precio',
            },
        });
        button.textContent = "P/m2";  // Cambiar el texto del botón
    }
    isPrecioGraph = !isPrecioGraph;
}

// Agregamos el event listener al botón existente
document.getElementById('toggleGraph').addEventListener('click', updateGraphAndButton);

var currentData = "alquilados";

function updateGraphs() {
    // Ejemplo de cómo actualizar un gráfico
    chartPrecio.updateOptions({
        series: [{
            name: 'Número de Pisos',
            data: window[currentData + '_values_precio']
        }],
        xaxis: {
            categories: window[currentData + '_keys_precio']
        },
        // ... Cualquier otra opción que pueda necesitar actualización
    });
        // Actualización del gráfico de m2
        chartM2.updateOptions({
            series: [{
                name: 'Número de Pisos',
                data: window[currentData + '_values_m2']
            }],
            xaxis: {
                categories: window[currentData + '_keys_m2']
            }
        });
    
        // Actualización del gráfico combinado de barrio
        chartCombinedBarrio.updateOptions({
            series: [
                {
                    name: 'Precio Promedio',
                    data: window[currentData + '_values_barrio']
                },
                {
                    name: 'Número de Pisos',
                    data: window[currentData + '_values_barrio_dist']
                }
            ],
            xaxis: {
                categories: window[currentData + '_keys_barrio_dist']
            }
        });
}

document.getElementById('toggleData').addEventListener('click', function() {
    // Cambiar el conjunto de datos y actualizar los gráficos
    currentData = (currentData === "alquilados") ? "pendientes" : "alquilados";
    updateGraphs();

    // Cambiar el texto del botón para reflejar el estado actual
    document.getElementById('toggleData').innerText = (currentData === "alquilados") ? "Mostrar Pisos en Oferta" : "Mostrar Comprados";
});
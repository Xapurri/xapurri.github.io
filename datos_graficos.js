

// Variables a usar

// Gráfico de distribución del precio

// Variables para los gráficos de los pisos alquilados
var alquilados_values_precio = [31, 106, 141, 88, 74, 25, 15, 9, 0, 0, 0];
var alquilados_keys_precio = ['[600, 900)', '[900, 1200)', '[1200, 1500)', '[1500, 1800)', '[1800, 2100)', '[2100, 2400)', '[2400, 2700)', '[2700, 3000)', '[3000, 3300)', '[3300, 3600)', '[3600, 3900)'];
var alquilados_values_m2 = [9, 22, 49, 65, 93, 80, 61, 53, 30, 17, 12, 3];
var alquilados_keys_m2 = ['[20, 30)', '[30, 40)', '[40, 50)', '[50, 60)', '[60, 70)', '[70, 80)', '[80, 90)', '[90, 100)', '[100, 110)', '[110, 120)', '[120, 130)', '[130, 140)'];
var alquilados_values_precio_m2 = [10, 25, 52, 75, 77, 70, 48, 31, 38, 23, 13, 9, 7, 7];
var alquilados_keys_precio_m2 = ['[10, 12)', '[12, 14)', '[14, 16)', '[16, 18)', '[18, 20)', '[20, 22)', '[22, 24)', '[24, 26)', '[26, 28)', '[28, 30)', '[30, 32)', '[32, 34)', '[34, 36)', '[36, 38)'];
var alquilados_values_barrio = [1673.83, 1560.96, 1554.27, 1532.93, 1146.14];
var alquilados_values_barrio_dist = [284, 121, 52, 41, 22];
var alquilados_keys_barrio_dist = ['Vila de Gràcia', "El Camp d'en Grassot i Gràcia Nova", 'La Salut', 'Vallcarca i els Penitents', 'El Coll'];

// Variables para los gráficos de los pisos pendientes de alquilar
var pendientes_values_precio = [8, 28, 63, 40, 49, 47, 32, 23, 12, 18, 9];
var pendientes_keys_precio = ['[600, 900)', '[900, 1200)', '[1200, 1500)', '[1500, 1800)', '[1800, 2100)', '[2100, 2400)', '[2400, 2700)', '[2700, 3000)', '[3000, 3300)', '[3300, 3600)', '[3600, 3900)'];
var pendientes_values_m2 = [4, 11, 21, 30, 71, 43, 46, 30, 25, 8, 14, 8];
var pendientes_keys_m2 = ['[20, 30)', '[30, 40)', '[40, 50)', '[50, 60)', '[60, 70)', '[70, 80)', '[80, 90)', '[90, 100)', '[100, 110)', '[110, 120)', '[120, 130)', '[130, 140)'];
var pendientes_values_precio_m2 = [2, 10, 20, 22, 31, 26, 32, 32, 41, 29, 18, 18, 8, 6];
var pendientes_keys_precio_m2 = ['[10, 12)', '[12, 14)', '[14, 16)', '[16, 18)', '[18, 20)', '[20, 22)', '[22, 24)', '[24, 26)', '[26, 28)', '[28, 30)', '[30, 32)', '[32, 34)', '[34, 36)', '[36, 38)'];
var pendientes_values_barrio = [2359.47, 1934.04, 1770.83, 1752.38, 1564.35];
var pendientes_values_barrio_dist = [192, 92, 23, 21, 12];
var pendientes_keys_barrio_dist = ['Vila de Gràcia', "El Camp d'en Grassot i Gràcia Nova", 'Vallcarca i els Penitents', 'La Salut', 'El Coll'];

// Transversal
var values_entrada = [19, 5, 13, 14, 7, 12, 13, 4, 10, 21, 14, 16, 22, 23, 7, 30, 15, 24, 13, 32, 3, 5, 13, 19, 13, 9, 13, 4, 10, 10, 9, 24, 12, 1, 3, 2, 8] 
var values_salida = [3, 10, 14, 22, 17, 15, 10, 3, 6, 19, 9, 23, 23, 16, 11, 19, 18, 30, 20, 10, 2, 3, 18, 24, 25, 15, 17, 2, 16, 16, 22, 30, 13, 1, 6, 2, 10]
var num_pisos_en_alquiler = [404, 399, 396, 383, 372, 367, 370, 373, 377, 373, 377, 366, 359, 252, 369, 379, 376, 374, 365, 390, 391, 393, 386, 385, 375, 367, 361, 362, 357, 355, 345, 346, 344, 344, 341, 341, 340]
var keys_entrada = ['2023-08-20', '2023-08-21', '2023-08-22', '2023-08-23', '2023-08-24', '2023-08-25', '2023-08-26', '2023-08-27', '2023-08-28', '2023-08-29', '2023-08-30', '2023-08-31', '2023-09-01', '2023-09-03', '2023-09-04', '2023-09-05', '2023-09-06', '2023-09-07', '2023-09-08', '2023-09-09', '2023-09-10', '2023-09-11', '2023-09-12', '2023-09-13', '2023-09-14', '2023-09-15', '2023-09-16', '2023-09-17', '2023-09-18', '2023-09-19', '2023-09-20', '2023-09-21', '2023-09-22', '2023-09-23', '2023-09-24', '2023-09-25', '2023-09-26']
var json_aumento_decrementos_barrios = {'32': {'name': "El Camp d'en Grassot i Gràcia Nova", 'increase': {'Menores o igual al 5%': 1, 'Entre el 5% y el 10%': 2, 'Mayores al 10%': 2}, 'decrease': {'Menores o igual al 5%': 4, 'Entre el 5% y el 10%': 1, 'Mayores al 10%': 6}}, '31': {'name': 'Vila de Gràcia', 'increase': {'Menores o igual al 5%': 7, 'Entre el 5% y el 10%': 5, 'Mayores al 10%': 8}, 'decrease': {'Menores o igual al 5%': 12, 'Entre el 5% y el 10%': 4, 'Mayores al 10%': 12}}, '28': {'name': 'Vallcarca i els Penitents', 'increase': {'Menores o igual al 5%': 1, 'Entre el 5% y el 10%': 0, 'Mayores al 10%': 0}, 'decrease': {'Menores o igual al 5%': 0, 'Entre el 5% y el 10%': 1, 'Mayores al 10%': 1}}, '29': {'name': 'El Coll', 'increase': {'Menores o igual al 5%': 0, 'Entre el 5% y el 10%': 1, 'Mayores al 10%': 0}, 'decrease': {'Menores o igual al 5%': 0, 'Entre el 5% y el 10%': 2, 'Mayores al 10%': 1}}, '30': {'name': 'La Salut', 'increase': {}, 'decrease': {'Menores o igual al 5%': 2, 'Entre el 5% y el 10%': 0, 'Mayores al 10%': 2}}}


 
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
    dataLabels: {
        enabled: true,
        offsetY: isMobile ? 30 : 0,
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
            colors: isMobile ? ['#000'] : ['#fff']  // Puedes ajustar el color y tamaño según tus necesidades
        }
    },
    title: {
        text: 'Distribución por Barrio',
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
            max: Math.max(Math.max(...values_entrada),Math.max(...values_salida)) + 10
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
            max: Math.max(...num_pisos_en_alquiler) + 50
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
    document.getElementById('toggleData').innerText = (currentData === "alquilados") ? "Mostrar Pendientes" : "Mostrar Alquilados";
});
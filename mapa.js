// Tus datos de barrios
  // Crear el mapa y definir las coordenadas y el nivel de zoom iniciales
var mymap = L.map('mapid').setView([41.3870205, 2.306007], 12);

// Agregar una capa de mapa base
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 12,
}).addTo(mymap);

// Función para obtener el color correspondiente a un valor
function getColor(value, minValue, maxValue) {
  var scale = chroma.scale(['#FDEBE2', '#FF0000', '#800000']).mode('hsl');
  var ratio = (value - minValue) / (maxValue - minValue);
  return scale(ratio).hex();
}

function onEachFeature(feature, layer, fecha, property, minValue, maxValue) {
  if (feature.properties) {
    let value = parseFloat(feature.properties.data[fecha][property]);

    let tooltipContent = '<b>' + feature.properties.name + '</b><br />' +
                         'Distrito: ' + feature.properties.Distrito +
                         '<br />Fecha: ' + fecha +
                         '<br /> Precio: ' + feature.properties.data[fecha].Precio + 
                         '<br /> P/m2: ' + feature.properties.data[fecha]['p/m2'];
    layer.bindTooltip(tooltipContent);
    layer.setStyle({
        fillColor: getColor(value, minValue, maxValue),
        fillOpacity: 0.5,
        color: '#221c1b7e',  // Color del borde blanco roto
        weight: 1
    });
  }
  var ultimoBarrioClickeado = null;
  // Agrega un evento de clic a la capa
    layer.on('click', function() {
      var detalles = document.getElementById('detallesBarrio');
      var nombreBarrioActual = feature.properties.name;

      // Si los detalles ya están siendo mostrados y el barrio actual es el mismo que el último en el que se hizo clic
      if (detalles.style.display === "block" && nombreBarrioActual === ultimoBarrioClickeado) {
          detalles.style.display = 'none';
          ultimoBarrioClickeado = null; // Restablece la variable
      } else {
          // Si no, mostramos los detalles
          detalles.style.display = 'block';
          
          // Actualiza los detalles del barrio
          detalles.innerHTML = `
          <span id="cerrar" class="cerrar">&times;</span>
          <h2>${nombreBarrioActual}</h2>
          <p>Distrito: ${feature.properties.Distrito}</p>
          <p>Fecha: ${fecha}</p>
          <p>Precio: ${feature.properties.data[fecha].Precio}</p>
          <p>P/m2: ${feature.properties.data[fecha]['p/m2']}</p>
          `;

          // Agrega el controlador de eventos para el botón "cerrar"
          document.getElementById('cerrar').addEventListener('click', function() {
              detalles.style.display = 'none';
          });

          // Almacena el nombre del barrio actual en la variable
          ultimoBarrioClickeado = nombreBarrioActual;
      }
  });
}

// Función para recargar el mapa con una fecha y propiedad dadas
function actualizarMapa(fecha, property) {
  // Limpiar el mapa de cualquier capa anterior
  mymap.eachLayer(function (layer) {
    if (layer instanceof L.GeoJSON) {
        mymap.removeLayer(layer);
    }
  });

  // Recalculamos los valores mínimos y máximos para esta fecha y propiedad
  var minValue = Infinity;
  var maxValue = -Infinity;

  for (let barrio in datosBarrios) {
      if (datosBarrios[barrio].properties.data[fecha]) {  // Aseguramos que los datos de la fecha existen
        var value = parseFloat(datosBarrios[barrio].properties.data[fecha][property]);
        if (value > 0) {
            minValue = Math.min(minValue, value);
            maxValue = Math.max(maxValue, value);
          }
      }
  }

  // Recorrer los datos de los barrios y añadirlos al mapa
  for (let barrio in datosBarrios) {
    if (datosBarrios[barrio].properties.data[fecha]) {  // Aseguramos que los datos de la fecha existen
      // Agregar los datos de cada barrio al mapa
      L.geoJSON(datosBarrios[barrio], {
        onEachFeature: (feature, layer) => onEachFeature(feature, layer, fecha, property, minValue, maxValue)
      }).addTo(mymap);
    }
  }
}

var fechaRange = document.getElementById('fechaRange');
var propiedades = document.getElementsByName('propiedad');

// Calcula las fechas mínima y máxima
var fechas = [];
for (let barrio in datosBarrios) {
  for (let fecha in datosBarrios[barrio].properties.data) {
    fechas.push(fecha);
  }
  break;  // Solo necesitamos recorrer el primer barrio para obtener las fechas
}

fechas.sort((a,b) => {
  let partsA = a.split('/');
  let partsB = b.split('/');
  return new Date(partsA[1], partsA[0]) - new Date(partsB[1], partsB[0]);
})

var fechaMin = 0;
var fechaMax = fechas.length - 1;

// Asigna los valores min y max al control de rango
fechaRange.min = fechaMin;
fechaRange.max = fechaMax;

fechaRange.addEventListener('input', function() {
  // Convierte el valor del control de rango de vuelta a una fecha
  var fecha = fechas[parseInt(this.value)];
  actualizarMapa(fecha, getPropiedadSeleccionada());
});

function getPropiedadSeleccionada() {
  for(let i = 0; i < propiedades.length; i++) {
    if (propiedades[i].checked) {
      return propiedades[i].value;
    }
  }
}

for(let i = 0; i < propiedades.length; i++) {
    propiedades[i].addEventListener('change', function() {
      actualizarMapa(fechas[parseInt(fechaRange.value)], this.value);
    });
}

// Actualizar el mapa inicialmente con fecha más reciente y la propiedad "Precio"
actualizarMapa(fechas[fechaMax], getPropiedadSeleccionada());

            var map_c27b547f3834afc258b7d4c7f9f4b766 = L.map(
                "map_c27b547f3834afc258b7d4c7f9f4b766",
                {
                    center: [41.390205, 2.154007],
                    crs: L.CRS.EPSG3857,
                    maxBounds: [[41.3, 2], [41.5, 2.4]],
                    zoom: 12,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            
          
    
            var tile_layer_3f2921008a16f4f512c4e3bccd52b862 = L.tileLayer(
                "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
                {"attribution": "\u0026copy; \u003ca target=\"_blank\" href=\"http://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors \u0026copy; \u003ca target=\"_blank\" href=\"http://cartodb.com/attributions\"\u003eCartoDB\u003c/a\u003e, CartoDB \u003ca target=\"_blank\" href =\"http://cartodb.com/attributions\"\u003eattributions\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 12, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_c27b547f3834afc258b7d4c7f9f4b766);
        
    
            var choropleth_8cfd68aed497b43c0921e5c078c8966a = L.featureGroup(
                {}
            ).addTo(map_c27b547f3834afc258b7d4c7f9f4b766);
        
    
        function geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1_styler(feature) {
            switch(feature.id) {
                case "0": case "16": case "17": case "18": case "20": case "33": case "37": case "38": case "40": case "42": case "44": case "45": case "47": case "51": case "52": case "70": 
                    return {"color": "black", "fillColor": "#c6dbef", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "2": case "8": 
                    return {"color": "black", "fillColor": "#08519c", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "3": case "5": case "9": 
                    return {"color": "black", "fillColor": "#6baed6", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "7": case "10": case "11": case "12": 
                    return {"color": "black", "fillColor": "#9ecae1", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "14": 
                    return {"color": "black", "fillColor": "#3182bd", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#eff3ff", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
            }
        }
        function geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1_highlighter(feature) {
            switch(feature.id) {
                default:
                    return {"fillOpacity": 0.8999999999999999, "weight": 3};
            }
        }

        function geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1_onEachFeature(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1.resetStyle(e.target);
                    }
                },
                mouseover: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        const highlightStyle = geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1_highlighter(e.target.feature)
                        e.target.setStyle(highlightStyle);
                    }
                },
            });
        };
        var geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1 = L.geoJson(null, {
                onEachFeature: geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1_onEachFeature,
            
                style: geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1_styler,
        });

        function geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1_add (data) {
            geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1
                .addData(data)
                .addTo(choropleth_8cfd68aed497b43c0921e5c078c8966a);
        }

        
    
    geo_json_4c7c49f73b18b167b5ed35a6abfbc0c1.bindTooltip(
    function(layer){
    let div = L.DomUtil.create('div');
    
    let handleObject = feature=>typeof(feature)=='object' ? JSON.stringify(feature) : feature;
    let fields = ["BNOM", "Distrito", "Precio", "p/m2", "Cantidad"];
    let aliases = ["BNOM", "Distrito", "Precio", "p/m2", "Cantidad"];
    let table = '<table>' +
        String(
        fields.map(
        (v,i)=>
        `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`).join(''))
    +'</table>';
    div.innerHTML=table;
    
    return div
    }
    ,{"className": "foliumtooltip", "sticky": true});
                     
    
            var choropleth_c7c81022643f9c359ad921db0ee1f3fa = L.featureGroup(
                {}
            ).addTo(map_c27b547f3834afc258b7d4c7f9f4b766);
        
    
        function geo_json_9607b1cc6334baf81ce30a6d008cc5d4_styler(feature) {
            switch(feature.id) {
                case "1": case "4": case "5": case "6": case "7": case "10": case "11": case "15": case "16": case "17": case "18": case "24": case "25": case "26": case "27": case "32": case "33": case "37": case "38": case "39": case "46": case "47": case "48": case "49": case "51": case "70": case "71": 
                    return {"color": "black", "fillColor": "#fcbba1", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "3": case "9": case "45": case "50": 
                    return {"color": "black", "fillColor": "#fc9272", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "8": case "14": case "41": case "52": 
                    return {"color": "black", "fillColor": "#fb6a4a", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "40": 
                    return {"color": "black", "fillColor": "#a50f15", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "42": case "43": case "44": 
                    return {"color": "black", "fillColor": "#de2d26", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fee5d9", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
            }
        }
        function geo_json_9607b1cc6334baf81ce30a6d008cc5d4_highlighter(feature) {
            switch(feature.id) {
                default:
                    return {"fillOpacity": 0.8999999999999999, "weight": 3};
            }
        }

        function geo_json_9607b1cc6334baf81ce30a6d008cc5d4_onEachFeature(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        geo_json_9607b1cc6334baf81ce30a6d008cc5d4.resetStyle(e.target);
                    }
                },
                mouseover: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        const highlightStyle = geo_json_9607b1cc6334baf81ce30a6d008cc5d4_highlighter(e.target.feature)
                        e.target.setStyle(highlightStyle);
                    }
                },
            });
        };
        var geo_json_9607b1cc6334baf81ce30a6d008cc5d4 = L.geoJson(null, {
                onEachFeature: geo_json_9607b1cc6334baf81ce30a6d008cc5d4_onEachFeature,
            
                style: geo_json_9607b1cc6334baf81ce30a6d008cc5d4_styler,
        });

        function geo_json_9607b1cc6334baf81ce30a6d008cc5d4_add (data) {
            geo_json_9607b1cc6334baf81ce30a6d008cc5d4
                .addData(data)
                .addTo(choropleth_c7c81022643f9c359ad921db0ee1f3fa);
        }

        
    
    geo_json_9607b1cc6334baf81ce30a6d008cc5d4.bindTooltip(
    function(layer){
    let div = L.DomUtil.create('div');
    
    let handleObject = feature=>typeof(feature)=='object' ? JSON.stringify(feature) : feature;
    let fields = ["BNOM", "Distrito", "Precio", "p/m2", "Cantidad"];
    let aliases = ["BNOM", "Distrito", "Precio", "p/m2", "Cantidad"];
    let table = '<table>' +
        String(
        fields.map(
        (v,i)=>
        `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`).join(''))
    +'</table>';
    div.innerHTML=table;
    
    return div
    }
    ,{"className": "foliumtooltip", "sticky": true});
                     
    
            var choropleth_5644d91536f787b383a9a91e5bff966d = L.featureGroup(
                {}
            ).addTo(map_c27b547f3834afc258b7d4c7f9f4b766);
        
    
        function geo_json_ddcb2c24d379635b28a5bae764beb7f0_styler(feature) {
            switch(feature.id) {
                case "3": case "4": case "5": case "6": case "7": case "9": case "10": case "11": case "15": case "16": case "24": case "25": case "26": case "32": case "33": case "38": case "39": case "45": case "49": case "50": case "51": 
                    return {"color": "black", "fillColor": "#fb6a4a", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "8": case "52": 
                    return {"color": "black", "fillColor": "#a50f15", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "13": case "68": 
                    return {"color": "black", "fillColor": "#fee5d9", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "14": case "40": case "42": case "43": case "44": 
                    return {"color": "black", "fillColor": "#de2d26", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "20": case "28": case "53": case "56": case "58": case "59": case "60": case "61": case "62": case "63": case "64": case "65": case "66": case "67": case "69": 
                    return {"color": "black", "fillColor": "#fcbba1", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fc9272", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
            }
        }
        function geo_json_ddcb2c24d379635b28a5bae764beb7f0_highlighter(feature) {
            switch(feature.id) {
                default:
                    return {"fillOpacity": 0.8999999999999999, "weight": 3};
            }
        }

        function geo_json_ddcb2c24d379635b28a5bae764beb7f0_onEachFeature(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        geo_json_ddcb2c24d379635b28a5bae764beb7f0.resetStyle(e.target);
                    }
                },
                mouseover: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        const highlightStyle = geo_json_ddcb2c24d379635b28a5bae764beb7f0_highlighter(e.target.feature)
                        e.target.setStyle(highlightStyle);
                    }
                },
            });
        };
        var geo_json_ddcb2c24d379635b28a5bae764beb7f0 = L.geoJson(null, {
                onEachFeature: geo_json_ddcb2c24d379635b28a5bae764beb7f0_onEachFeature,
            
                style: geo_json_ddcb2c24d379635b28a5bae764beb7f0_styler,
        });

        function geo_json_ddcb2c24d379635b28a5bae764beb7f0_add (data) {
            geo_json_ddcb2c24d379635b28a5bae764beb7f0
                .addData(data)
                .addTo(choropleth_5644d91536f787b383a9a91e5bff966d);
        }

        
    
    geo_json_ddcb2c24d379635b28a5bae764beb7f0.bindTooltip(
    function(layer){
    let div = L.DomUtil.create('div');
    
    let handleObject = feature=>typeof(feature)=='object' ? JSON.stringify(feature) : feature;
    let fields = ["BNOM", "Distrito", "Precio", "p/m2", "Cantidad"];
    let aliases = ["BNOM", "Distrito", "Precio", "p/m2", "Cantidad"];
    let table = '<table>' +
        String(
        fields.map(
        (v,i)=>
        `<tr>
            <th>${aliases[i]}</th>
            
            <td>${handleObject(layer.feature.properties[v])}</td>
        </tr>`).join(''))
    +'</table>';
    div.innerHTML=table;
    
    return div
    }
    ,{"className": "foliumtooltip", "sticky": true});
                     
    

            L.control.groupedLayers(
                null,
                {
                    "Seleccionar Mapa" : {
                        "Precio de Venta" : choropleth_c7c81022643f9c359ad921db0ee1f3fa,
                        "Precio por m\u00b2" : choropleth_5644d91536f787b383a9a91e5bff966d,
                        "N\u00ba Ofertas" : choropleth_8cfd68aed497b43c0921e5c078c8966a,
                    },
                },
                {"collapsed": false, "exclusiveGroups": ["Seleccionar Mapa"]},
            ).addTo(map_c27b547f3834afc258b7d4c7f9f4b766);
            choropleth_8cfd68aed497b43c0921e5c078c8966a.remove();
            choropleth_5644d91536f787b383a9a91e5bff966d.remove();


            map_c27b547f3834afc258b7d4c7f9f4b766.invalidateSize();
        
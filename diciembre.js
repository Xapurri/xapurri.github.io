
    
            var map_7185dcd78700f8ec45a966f26dab2def = L.map(
                "map_7185dcd78700f8ec45a966f26dab2def",
                {
                    center: [41.390205, 2.154007],
                    crs: L.CRS.EPSG3857,
                    maxBounds: [[41.3, 2], [41.5, 2.4]],
                    zoom: 12,
                    zoomControl: true,
                    preferCanvas: false,
                    scrollWheelZoom: false,
                }
            );

            

        
    
            var tile_layer_c5977193f7cb462890aaeb9e36d93c4d = L.tileLayer(
                "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
                {"attribution": "\u0026copy; \u003ca target=\"_blank\" href=\"http://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors \u0026copy; \u003ca target=\"_blank\" href=\"http://cartodb.com/attributions\"\u003eCartoDB\u003c/a\u003e, CartoDB \u003ca target=\"_blank\" href =\"http://cartodb.com/attributions\"\u003eattributions\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 12, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_7185dcd78700f8ec45a966f26dab2def);
        
    
            var choropleth_f45100ba3b3538938f6fb26f34b843ec = L.featureGroup(
                {}
            ).addTo(map_7185dcd78700f8ec45a966f26dab2def);
        
    
        function geo_json_851f766aa000cca32417270078bd1cfb_styler(feature) {
            switch(feature.id) {
                case "0": case "12": case "16": case "18": case "33": case "47": case "52": 
                    return {"color": "black", "fillColor": "#9ecae1", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "2": case "3": case "10": case "11": case "14": 
                    return {"color": "black", "fillColor": "#3182bd", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "5": 
                    return {"color": "black", "fillColor": "#6baed6", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "6": case "17": case "20": case "32": case "37": case "38": case "45": case "49": case "51": case "55": case "70": case "71": 
                    return {"color": "black", "fillColor": "#c6dbef", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "7": case "8": case "9": 
                    return {"color": "black", "fillColor": "#08519c", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#eff3ff", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
            }
        }
        function geo_json_851f766aa000cca32417270078bd1cfb_highlighter(feature) {
            switch(feature.id) {
                default:
                    return {"fillOpacity": 0.8999999999999999, "weight": 3};
            }
        }

        function geo_json_851f766aa000cca32417270078bd1cfb_onEachFeature(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        geo_json_851f766aa000cca32417270078bd1cfb.resetStyle(e.target);
                    }
                },
                mouseover: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        const highlightStyle = geo_json_851f766aa000cca32417270078bd1cfb_highlighter(e.target.feature)
                        e.target.setStyle(highlightStyle);
                    }
                },
            });
        };
        var geo_json_851f766aa000cca32417270078bd1cfb = L.geoJson(null, {
                onEachFeature: geo_json_851f766aa000cca32417270078bd1cfb_onEachFeature,
            
                style: geo_json_851f766aa000cca32417270078bd1cfb_styler,
        });

        function geo_json_851f766aa000cca32417270078bd1cfb_add (data) {
            geo_json_851f766aa000cca32417270078bd1cfb
                .addData(data)
                .addTo(choropleth_f45100ba3b3538938f6fb26f34b843ec);
        }

        
    
    geo_json_851f766aa000cca32417270078bd1cfb.bindTooltip(
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
                     
    
            var choropleth_c5bd9986af86c152f1487b2ca788e732 = L.featureGroup(
                {}
            ).addTo(map_7185dcd78700f8ec45a966f26dab2def);
        
    
        function geo_json_ca59a3add10c4639362ecd50e841c39c_styler(feature) {
            switch(feature.id) {
                case "3": case "4": case "5": case "14": case "26": case "44": case "45": 
                    return {"color": "black", "fillColor": "#de2d26", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "6": case "7": case "9": case "10": case "11": case "15": case "16": case "22": case "23": case "24": case "25": case "27": case "32": case "33": case "38": case "43": case "49": case "50": case "51": 
                    return {"color": "black", "fillColor": "#fb6a4a", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "8": case "40": case "42": case "52": 
                    return {"color": "black", "fillColor": "#a50f15", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "13": case "68": 
                    return {"color": "black", "fillColor": "#fee5d9", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "20": case "21": case "28": case "56": case "59": case "60": case "61": case "62": case "63": case "64": case "65": case "66": case "67": case "69": 
                    return {"color": "black", "fillColor": "#fcbba1", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fc9272", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
            }
        }
        function geo_json_ca59a3add10c4639362ecd50e841c39c_highlighter(feature) {
            switch(feature.id) {
                default:
                    return {"fillOpacity": 0.8999999999999999, "weight": 3};
            }
        }

        function geo_json_ca59a3add10c4639362ecd50e841c39c_onEachFeature(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        geo_json_ca59a3add10c4639362ecd50e841c39c.resetStyle(e.target);
                    }
                },
                mouseover: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        const highlightStyle = geo_json_ca59a3add10c4639362ecd50e841c39c_highlighter(e.target.feature)
                        e.target.setStyle(highlightStyle);
                    }
                },
            });
        };
        var geo_json_ca59a3add10c4639362ecd50e841c39c = L.geoJson(null, {
                onEachFeature: geo_json_ca59a3add10c4639362ecd50e841c39c_onEachFeature,
            
                style: geo_json_ca59a3add10c4639362ecd50e841c39c_styler,
        });

        function geo_json_ca59a3add10c4639362ecd50e841c39c_add (data) {
            geo_json_ca59a3add10c4639362ecd50e841c39c
                .addData(data)
                .addTo(choropleth_c5bd9986af86c152f1487b2ca788e732);
        }

        
    
    geo_json_ca59a3add10c4639362ecd50e841c39c.bindTooltip(
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
                     
    
            var choropleth_ee9326887318121123866df29c922712 = L.featureGroup(
                {}
            ).addTo(map_7185dcd78700f8ec45a966f26dab2def);
        
    
        function geo_json_f9435685dd0b07321e2dd99f7a32dcfd_styler(feature) {
            switch(feature.id) {
                case "3": case "5": case "14": case "26": case "44": 
                    return {"color": "black", "fillColor": "#de2d26", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "4": case "6": case "7": case "9": case "10": case "15": case "16": case "17": case "22": case "23": case "24": case "25": case "27": case "32": case "33": case "38": case "43": case "45": case "49": case "50": case "51": 
                    return {"color": "black", "fillColor": "#fb6a4a", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "8": case "40": case "42": case "52": 
                    return {"color": "black", "fillColor": "#a50f15", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "13": case "68": 
                    return {"color": "black", "fillColor": "#fee5d9", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "20": case "28": case "56": case "59": case "60": case "61": case "62": case "63": case "64": case "65": case "66": case "67": 
                    return {"color": "black", "fillColor": "#fcbba1", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "#fc9272", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
            }
        }
        function geo_json_f9435685dd0b07321e2dd99f7a32dcfd_highlighter(feature) {
            switch(feature.id) {
                default:
                    return {"fillOpacity": 0.8999999999999999, "weight": 3};
            }
        }

        function geo_json_f9435685dd0b07321e2dd99f7a32dcfd_onEachFeature(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        geo_json_f9435685dd0b07321e2dd99f7a32dcfd.resetStyle(e.target);
                    }
                },
                mouseover: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        const highlightStyle = geo_json_f9435685dd0b07321e2dd99f7a32dcfd_highlighter(e.target.feature)
                        e.target.setStyle(highlightStyle);
                    }
                },
            });
        };
        var geo_json_f9435685dd0b07321e2dd99f7a32dcfd = L.geoJson(null, {
                onEachFeature: geo_json_f9435685dd0b07321e2dd99f7a32dcfd_onEachFeature,
            
                style: geo_json_f9435685dd0b07321e2dd99f7a32dcfd_styler,
        });

        function geo_json_f9435685dd0b07321e2dd99f7a32dcfd_add (data) {
            geo_json_f9435685dd0b07321e2dd99f7a32dcfd
                .addData(data)
                .addTo(choropleth_ee9326887318121123866df29c922712);
        }

        
    
    geo_json_f9435685dd0b07321e2dd99f7a32dcfd.bindTooltip(
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
                        "Precio de Venta" : choropleth_c5bd9986af86c152f1487b2ca788e732,
                        "Precio por m\u00b2" : choropleth_ee9326887318121123866df29c922712,
                        "N\u00ba Ofertas" : choropleth_f45100ba3b3538938f6fb26f34b843ec,
                    },
                },
                {"collapsed": false, "exclusiveGroups": ["Seleccionar Mapa"]},
            ).addTo(map_7185dcd78700f8ec45a966f26dab2def);
            choropleth_f45100ba3b3538938f6fb26f34b843ec.remove();
            choropleth_ee9326887318121123866df29c922712.remove();



            map_7185dcd78700f8ec45a966f26dab2def.invalidateSize();
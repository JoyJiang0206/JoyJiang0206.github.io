var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appPotiWQL7gG0z6t/%E4%BA%BA%E6%96%87?api_key=keyOPyECbvUe6dUlZ";

        var data1 = [];
        $.getJSON(airtable_read_endpoint, function(result){
               $.each(result.records, function(key,value){
                   items = {};
                       items["name"] = value.fields.Name;
                       items["image_url"] = value.fields.image_url;
                       items["latitud"] = value.fields.Lat;
                       items["longitud"] = value.fields.Lng;
                       data1.push(items);
                       console.log(items);
                }); // end .each
        }); // end getJSON

        var blueIcon = new L.Icon({
        	iconUrl: 'assets/img/marker-icon-2x-blue.png',
        	shadowUrl: 'assets/img/marker-shadow.png',
        	iconSize: [25, 41],
        	iconAnchor: [12, 41],
        	popupAnchor: [1, -34],
        	shadowSize: [41, 41]
        });

        $("#ren").click(function(event) {
            event.preventDefault();
            if(mymap.hasLayer(ren)) {
                $(this).removeClass('selected');
                mymap.removeLayer(ren);
            } else {
                mymap.addLayer(ren);
                $(this).addClass('selected');
           }
        });

function renwen(){
      for (var i in data1) {
            var latlng = L.latLng({ lat: data1[i].latitud, lng: data1[i].longitud });
            L.marker( latlng,{icon: blueIcon})
                .bindPopup( '<img src="' + data1[i].image_url+'" width = "80px"><br>'+data1[i].name)
                .addTo(mymap);
            L.polyline([[39.90858,116.39808],[39.90858,116.39808],[39.99808,116.27495]], {color: 'red'})
                .bindPopup( '<img src="assets/img/luxian.png" width = "250px">'+'<p><u>沿途景点推荐:</u><br>'+
                '圆明园、北京大学、海淀公园、北京天文馆、人民大学、什刹海公园、北海公园、西单</p>')
                .addTo(mymap);
        }
    };

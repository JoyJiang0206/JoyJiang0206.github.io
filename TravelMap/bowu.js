var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/app27x738t785DeaG/%E4%BA%BA%E6%96%87?api_key=keyOPyECbvUe6dUlZ";

        var data4 = [];
        $.getJSON(airtable_read_endpoint, function(result){
               $.each(result.records, function(key,value){
                   items = {};
                       items["name"] = value.fields.Name;
                       items["image_url"] = value.fields.image_url;
                       items["latitud"] = value.fields.Lat;
                       items["longitud"] = value.fields.Lng;
                       data4.push(items);
                       console.log(items);
                }); // end .each
        }); // end getJSON

        var goldIcon = new L.Icon({
        	iconUrl: 'assets/img/marker-icon-2x-gold.png',
        	shadowUrl: 'assets/img/marker-shadow.png',
        	iconSize: [25, 41],
        	iconAnchor: [12, 41],
        	popupAnchor: [1, -34],
        	shadowSize: [41, 41]
        });

        $("#bo").click(function(event) {
            event.preventDefault();
            if(mymap.hasLayer(bo)) {
                $(this).removeClass('selected');
                mymap.removeLayer(bo);
            } else {
                mymap.addLayer(bo);
                $(this).addClass('selected');
           }
        });

function bowu(){
      for (var i in data4) {
            var latlng = L.latLng({ lat: data4[i].latitud, lng: data4[i].longitud });
            L.marker( latlng,{icon: goldIcon})
                .bindPopup( '<img src="' + data4[i].image_url+'" width = "80px"><br>'+data4[i].name)
                .addTo(mymap);
        }
    }

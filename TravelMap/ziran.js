var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appaQ1g87eB52jK7z/%E4%BA%BA%E6%96%87?api_key=keyOPyECbvUe6dUlZ";

        var data2 = [];
        $.getJSON(airtable_read_endpoint, function(result){
               $.each(result.records, function(key,value){
                   items = {};
                       items["name"] = value.fields.Name;
                       items["image_url"] = value.fields.image_url;
                       items["latitud"] = value.fields.Lat;
                       items["longitud"] = value.fields.Lng;
                       data2.push(items);
                       console.log(items);
                }); // end .each
        }); // end getJSON

        var greenIcon = new L.Icon({
        	iconUrl: 'assets/img/marker-icon-2x-green.png',
        	shadowUrl: 'assets/img/marker-shadow.png',
        	iconSize: [25, 41],
        	iconAnchor: [12, 41],
        	popupAnchor: [1, -34],
        	shadowSize: [41, 41]
        });

        $("#zi").click(function(event) {
            event.preventDefault();
            if(mymap.hasLayer(zi)) {
                $(this).removeClass('selected');
                mymap.removeLayer(zi);
            } else {
                mymap.addLayer(zi);
                $(this).addClass('selected');
           }
        });

function ziran(){
      for (var i in data2) {
            var latlng = L.latLng({ lat: data2[i].latitud, lng: data2[i].longitud });
            L.marker( latlng,{icon: greenIcon})
                .bindPopup( '<img src="' + data2[i].image_url+'" width = "80px"><br>'+data2[i].name)
                .addTo(mymap);
        }
    }

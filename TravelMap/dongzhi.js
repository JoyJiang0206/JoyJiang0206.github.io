var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appVxtcpGNy1bh7AJ/%E4%BA%BA%E6%96%87?api_key=keyOPyECbvUe6dUlZ";

        var data5 = [];
        $.getJSON(airtable_read_endpoint, function(result){
               $.each(result.records, function(key,value){
                   items = {};
                       items["name"] = value.fields.Name;
                       items["image_url"] = value.fields.image_url;
                       items["latitud"] = value.fields.Lat;
                       items["longitud"] = value.fields.Lng;
                       data5.push(items);
                       console.log(items);
                }); // end .each
        }); // end getJSON

        var orangeIcon = new L.Icon({
        	iconUrl: 'assets/img/marker-icon-2x-orange.png',
        	shadowUrl: 'assets/img/marker-shadow.png',
        	iconSize: [25, 41],
        	iconAnchor: [12, 41],
        	popupAnchor: [1, -34],
        	shadowSize: [41, 41]
        });

        $("#dz").click(function(event) {
            event.preventDefault();
            if(mymap.hasLayer(dz)) {
                $(this).removeClass('selected');
                mymap.removeLayer(dz);
            } else {
                mymap.addLayer(dz);
                $(this).addClass('selected');
           }
        });

function dongzhi(){
      for (var i in data5) {
            var latlng = L.latLng({ lat: data5[i].latitud, lng: data5[i].longitud });
            L.marker( latlng,{icon: orangeIcon})
                .bindPopup( '<img src="' + data5[i].image_url+'" width = "80px"><br>'+data5[i].name)
                .addTo(mymap);
        }
    }

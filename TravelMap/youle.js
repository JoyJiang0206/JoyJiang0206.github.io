var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appictJ8XnlEbcVjm/%E4%BA%BA%E6%96%87?api_key=keyOPyECbvUe6dUlZ";

        var data6 = [];
        $.getJSON(airtable_read_endpoint, function(result){
               $.each(result.records, function(key,value){
                   items = {};
                       items["name"] = value.fields.Name;
                       items["image_url"] = value.fields.image_url;
                       items["latitud"] = value.fields.Lat;
                       items["longitud"] = value.fields.Lng;
                       data6.push(items);
                       console.log(items);
                }); // end .each
        }); // end getJSON

        var yellowIcon = new L.Icon({
        	iconUrl: 'assets/img/marker-icon-2x-yellow.png',
        	shadowUrl: 'assets/img/marker-shadow.png',
        	iconSize: [25, 41],
        	iconAnchor: [12, 41],
        	popupAnchor: [1, -34],
        	shadowSize: [41, 41]
        });

        $("#you").click(function(event) {
            event.preventDefault();
            if(mymap.hasLayer(you)) {
                $(this).removeClass('selected');
                mymap.removeLayer(you);
            } else {
                mymap.addLayer(you);
                $(this).addClass('selected');
           }
        });

function youle(){
      for (var i in data6) {
            var latlng = L.latLng({ lat: data6[i].latitud, lng: data6[i].longitud });
            L.marker( latlng,{icon: yellowIcon})
                .bindPopup( '<img src="' + data6[i].image_url+'" width = "80px"><br>'+data6[i].name)
                .addTo(mymap);
        }
    }

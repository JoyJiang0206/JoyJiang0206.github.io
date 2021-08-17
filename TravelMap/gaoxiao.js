var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appTeSZjzyWVLWs0c/%E4%BA%BA%E6%96%87?api_key=keyOPyECbvUe6dUlZ";

        var data3 = [];
        $.getJSON(airtable_read_endpoint, function(result){
               $.each(result.records, function(key,value){
                   items = {};
                       items["name"] = value.fields.Name;
                       items["image_url"] = value.fields.image_url;
                       items["latitud"] = value.fields.Lat;
                       items["longitud"] = value.fields.Lng;
                       data3.push(items);
                       console.log(items);
                }); // end .each
        }); // end getJSON

        var greyIcon = new L.Icon({
        	iconUrl: 'assets/img/marker-icon-2x-grey.png',
        	shadowUrl: 'assets/img/marker-shadow.png',
        	iconSize: [25, 41],
        	iconAnchor: [12, 41],
        	popupAnchor: [1, -34],
        	shadowSize: [41, 41]
        });


        $("#gao").click(function(event) {
            event.preventDefault();
            if(mymap.hasLayer(gao)) {
                $(this).removeClass('selected');
                mymap.removeLayer(gao);
            } else {
                mymap.addLayer(gao);
                $(this).addClass('selected');
           }
        });

function gaoxiao(){
      for (var i in data3) {
            var latlng = L.latLng({ lat: data3[i].latitud, lng: data3[i].longitud });
            L.marker( latlng,{icon: greyIcon})
                .bindPopup( '<img src="' + data3[i].image_url+'" width = "80px"><br>'+data3[i].name)
                .addTo(mymap);
        }
    }

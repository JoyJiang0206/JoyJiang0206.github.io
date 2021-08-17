var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appzRe5rlIlm33R7y/%E4%BA%BA%E6%96%87?api_key=keyOPyECbvUe6dUlZ";

        var data8 = [];
        $.getJSON(airtable_read_endpoint, function(result){
               $.each(result.records, function(key,value){
                   items = {};
                       items["name"] = value.fields.Name;
                       items["image_url"] = value.fields.image_url;
                       items["latitud"] = value.fields.Lat;
                       items["longitud"] = value.fields.Lng;
                       data8.push(items);
                       console.log(items);
                }); // end .each
        }); // end getJSON

        var redIcon = new L.Icon({
        	iconUrl: 'assets/img/marker-icon-2x-red.png',
        	shadowUrl: 'assets/img/marker-shadow.png',
        	iconSize: [25, 41],
        	iconAnchor: [12, 41],
        	popupAnchor: [1, -34],
        	shadowSize: [41, 41]
        });

        $("#wh").click(function(event) {
            event.preventDefault();
            if(mymap.hasLayer(wh)) {
                $(this).removeClass('selected');
                mymap.removeLayer(wh);
            } else {
                mymap.addLayer(wh);
                $(this).addClass('selected');
           }
        });

function wanghong(){
      for (var i in data8) {
            var latlng = L.latLng({ lat: data8[i].latitud, lng: data8[i].longitud });
            L.marker( latlng,{icon: redIcon})
                .bindPopup( '<img src="' + data8[i].image_url+'" width = "80px"><br>'+data8[i].name)
                .addTo(mymap);
        }
    }

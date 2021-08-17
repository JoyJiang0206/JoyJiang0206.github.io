var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appwvHoHeiqZRkcjn/%E4%BA%BA%E6%96%87?api_key=keyOPyECbvUe6dUlZ";

        var data7 = [];
        $.getJSON(airtable_read_endpoint, function(result){
               $.each(result.records, function(key,value){
                   items = {};
                       items["name"] = value.fields.Name;
                       items["image_url"] = value.fields.image_url;
                       items["latitud"] = value.fields.Lat;
                       items["longitud"] = value.fields.Lng;
                       data7.push(items);
                       console.log(items);
                }); // end .each
        }); // end getJSON

        var violetIcon = new L.Icon({
        	iconUrl: 'assets/img/marker-icon-2x-violet.png',
        	shadowUrl: 'assets/img/marker-shadow.png',
        	iconSize: [25, 41],
        	iconAnchor: [12, 41],
        	popupAnchor: [1, -34],
        	shadowSize: [41, 41]
        });

        $("#sh").click(function(event) {
            event.preventDefault();
            if(mymap.hasLayer(sh)) {
                $(this).removeClass('selected');
                mymap.removeLayer(sh);
            } else {
                mymap.addLayer(sh);
                $(this).addClass('selected');
           }
        });

function shang(){
      for (var i in data7) {
            var latlng = L.latLng({ lat: data7[i].latitud, lng: data7[i].longitud });
            L.marker( latlng,{icon: violetIcon})
                .bindPopup( '<img src="' + data7[i].image_url+'" width = "80px"><br>'+data7[i].name)
                .addTo(mymap);
        }
    }

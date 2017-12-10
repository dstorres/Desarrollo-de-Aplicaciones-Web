var divMapa,gmapa,dr;

function mostrar_objeto(obj){

    for (var prop in obj){
    	document.write(prop+': '+obj[prop]+'<br />');
    }
}

function fn_error(){
	divMapa.innerHTML='problema  con la solicitud';
}


function fn_geocoder(datos){

	var coordenadas=datos[0].geometry.location;

	var config={
		map:gmapa,
		position:coordenadas,
		title:'prueba'
	};

	//var
	 //gMarketDV = new google.maps.Marker(config);

}

function fn_rutear(resultados,status){
	if(status=='OK'){
		dr.setDirections(resultados);
	}else
	{
		alert('error al tarzar la ruta'+status);
	}
}

function fn_ok(respuesta){
	//divMapa.innerHTML='ok';
	//mostrar_objeto(respuesta.coords);
	var lat = respuesta.coords.latitude;
	var lon = respuesta.coords.longitude;
	//divMapa.innerHTML= lat  +','+ lon;
	var myLocation = new google.maps.LatLng(lat,lon);
	var objConfig ={
		zoom:12,
		center:myLocation
	};
	
	gmapa = new google.maps.Map(divMapa,objConfig);
	var objConfigMarket ={
		position: myLocation,
		map: gmapa,
		title: "esta esta Aqui"
	};

	//var gMarket= new google.maps.Marker(objConfigMarket);

	var gcoder = new google.maps.Geocoder();

	var obj_inf={
		address:'Aulas de la FIEC, Guayaquil'
	};

	gcoder.geocode(obj_inf,fn_geocoder);

	objConfigDR ={
		map:gmapa

	}

	objConfigDS ={
		origin: myLocation,
		destination: obj_inf.address,
		travelMode:google.maps.TravelMode.WALKING

	}
	var ds= new google.maps.DirectionsService() // obteenr coordenadas
	dr= new google.maps.DirectionsRenderer(objConfigDR)//traduce las coordenadas
	ds.route(objConfigDS,fn_rutear);
}



$(document).ready(function() {
    $('#show').click(function(){
    	divMapa = document.getElementById('mapa');
    	navigator.geolocation.getCurrentPosition(fn_ok,fn_error);
	});
	$('#show1').click(function(){
    	divMapa = document.getElementById('mapa1');
    	navigator.geolocation.getCurrentPosition(fn_ok,fn_error);
	});
	$('#show2').click(function(){
    	divMapa = document.getElementById('mapa2');
    	navigator.geolocation.getCurrentPosition(fn_ok,fn_error);
	});
	$('#show3').click(function(){
    	divMapa = document.getElementById('mapa3');
    	navigator.geolocation.getCurrentPosition(fn_ok,fn_error);
	});
});
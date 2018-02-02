var idUsuario = window.sessionStorage.getItem("variable");

function pedirUsuario(id, funcionGuardadora) {

	$.ajax({
		url: "http://www.abelespana.es/datos/usuario" + id + ".json", //Url de peticion.
		// data:{ id : 0 }, //informacion que se enviara al servidor.
		method: "get", // forma predeterminada(existe tambn, put y delete).
		dataType: "json", //establece tipo de informacion que se espera recibir como respuesta.
		async : "true", //en este caso queremos que sea asincrono.
		
		//Codigo a ejecutar si la peticion es satisfactoria
		//La respuesta debe ser pasada como argumento a la siguiente funcion:
	success : function(json){
		var elUsuario = json;
		console.log(elUsuario);
		funcionGuardadora(elUsuario);
		
	},

		//Codigo a ejecutar si la peticion falla, pasar como argumentos a la funcion.
		//El objeto y el codigo de status-- pasarlos x parametros.
	error : function(data,xhr,status){
			console.log("Disculpe, existió un problema en peticion"+ data + " " + xhr.value + " " + status);
		}
	});
}
function guardarUsuario(datos){
	//En sessionStorage guardamos un item, con identificador nombre y el parámetro que venga. 
	window.sessionStorage.setItem("nombre", datos.name);
	window.sessionStorage.setItem("username", datos.username);
	window.sessionStorage.setItem("edad",datos.age);
	window.sessionStorage.setItem("pais",datos.country);
	window.sessionStorage.setItem("registrado",datos.membersince);
	window.sessionStorage.setItem("imagen", datos.pic);
	window.sessionStorage.setItem("postre",datos.favouritedessert);
}

if(idUsuario == 1){
	pedirUsuario("1", guardarUsuario);
	$("#profilePic").attr("src","http://abelespana.es/datos/profileabel.jpg");
}else if (idUsuario == 2) {
	pedirUsuario("2", guardarUsuario);
	$("#profilePic").attr("src","http://abelespana.es/datos/profilemikel.jpg");
}
else {
	alert("No hay usuario");
}

// Pintar los elementos
$("#myName").append(" " + sessionStorage.nombre + "<br>");
$("#myNickname").append(" " + sessionStorage.username +"<br>");
$("#myAge").append(" " + sessionStorage.edad + "<br>");
$("#myCountry").append(" " + sessionStorage.pais + "<br>");
$("#whenRegistered").append(" " + sessionStorage.registrado + "<br>");
$("#myName,#myNickname,#whenRegistered,#myAge,#myCountry").show();

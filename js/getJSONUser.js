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
	window.sessionStorage.setItem("postre",datos.favouritedessert);
}

pedirUsuario("1", guardarUsuario);
pedirUsuario("mikel", guardarUsuario);


// alert(window.sessionStorage.nombre);
// alert(window.sessionStorage.edad);
// alert(window.sessionStorage.pais);
// alert(window.sessionStorage.postre);



/*function actualizarUsuario(user) {

	window.sessionStorage.setItem("nombre",user);
	//En sessionStorage guardamos un item, con identificador nombre y el parámetro que venga. 
	var output = window.sessionStorage.nombre;
	console.log(output);
	// Trazas para mostrar por consola
}*/



function actualizarUsuario(user) {

	window.sessionStorage.setItem("nombre",user);
	//En sessionStorage guardamos un item, con identificador nombre y el parámetro que venga. 
	var output = window.sessionStorage.nombre;
	console.log(output);
	// Trazas para mostrar por consola
}


// Cuando yo quiera lanzar la peticion AJAX...
// pedirUsuario(1,actualizarUsuario);


// Pintar a partir de usuarioActual
$("#profileUserInfo").append(sessionStorage.nombre + "<br>");
$("#profileUserInfo").append(sessionStorage.username + "<br>");
$("#profileUserInfo").append(sessionStorage.edad + "<br>");
$("#profileUserInfo").append(sessionStorage.pais + "<br>");
$("#profileUserInfo").append(sessionStorage.postre + "<br>");



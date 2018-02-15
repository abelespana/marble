	
function pedirUsuario(id) {

	var elUsuario; 

	$.ajax({
		url: "http://www.abelespana.es/datos/usuario" + id + ".json", //Url de peticion.
		// data:{ id : 0 }, //informacion que se enviara al servidor.
		method: "get", // forma predeterminada(existe tambn, put y delete).
		dataType: "json", //establece tipo de informacion que se espera recibir como respuesta.
		async : "true", //en este caso queremos que sea asincrono.
		
		//Codigo a ejecutar si la peticion es satisfactoria
		//La respuesta debe ser pasada como argumento a la siguiente funcion:
	success : function(json){
		elUsuario = json;
		console.log(elUsuario);
		return elUsuario;
		//Codigo de hoy.

		var user = "rober";
		window.sessionStorage.setItem("nombre",user);
		var output = window.sessionStorage.nombre;
		console.log(output);


		// Nota para los Abel, Mikel y Rober de esta noche o de mañana --> La petición por AJAX se completa como Dios manda, pero la función success no devuelve nada, pese al return. De modo que lo que entra en success sale en un console.log dentro del mismo success (línea 17) pero no sale de ahí pese al return (línea 18)
	},

		//Codigo a ejecutar si la peticion falla, pasar como argumentos a la funcion.
		//El objeto y el codigo de status-- pasarlos x parametros.
	error : function(data,xhr,status){
			alert("Disculpe, existió un problema en peticion"+ data + " " + xhr.value + " " + status);
		}
	});

return elUsuario;
}

// console.log(pedirUsuario(1));
// Recupero de mi sessionStorage el id



// Pintar a partir de usuarioActual
//$("#myName").append(usuarioActual.name);
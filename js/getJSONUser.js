	
function pedirUsuario(id) {

	var elUsuario;

	$.ajax({
		url: "http://www.dropbox/.../usuario" + id + ".json", //Url de peticion.

		//data:{ id : ... }, //informacion que se enviara al servidor.

		type: "GET", // forma predeterminada(existe tambn, put y delete).

		dataType: "json", //establece tipo de informacion que se espera recibir como respuesta.

		async : "true", //en este caso queremos que sea asincrono.

		//\Codigo a ejecutar si la peticion es satisfactoria\
		//La respuesta debe ser pasada como argumento a la siguiente funcion:

		success : function(Json){
			elUsuario = Json;
		},

		//Codigo a ejecutar si la peticion falla, pasar como argumentos a la funcion.
		//El objeto y el codigo de status-- pasarlos x parametros.

		error : function(xhr,status){
			alert("Disculpe, existió un problema en peticion");
		} // Dame el JSON
	});

	return elUsuario;
}


// Recupero de mi sessionStorage el id

var usuarioActual = pedirUsuario(???);

// Pintar a partir de usuarioActual
//$("#myName").append(usuarioActual.name);
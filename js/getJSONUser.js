var idUsuario = window.sessionStorage.getItem("variable");

// === DEFINICIÓN === 



// ==== EJECUCIÓN ====

//Comprobación patatera del usuario que estoy pasando, y qué hacer a continuación
if (idUsuario == 1) {
	console.log("Es Abel");
	pedirUsuario("1", guardarUsuario);
	$("#profilePic").attr("src", "http://abelespana.es/datos/profileabel.jpg");
}
else if (idUsuario == 2) {
	console.log("Es Mikel");
	pedirUsuario("2", guardarUsuario);
	$("#profilePic").attr("src", "http://abelespana.es/datos/profilemikel.jpg");
}
else {
	alert("No hay usuario");
}

// Inicio mi promesa
var miPromesa = new Promise(function (resolve, reject) {
   //Función para la petición Ajax
	function pedirUsuario(id, funcionGuardadora) {
		$.ajax({
			url: "http://www.abelespana.es/datos/usuario" + id + ".json",
			method: "get",
			dataType: "json",
			async : "true",

	// En caso de éxito
		success : function(datos){
			var elUsuario = datos;
			// console.log(elUsuario);
			funcionGuardadora(elUsuario);
			resolve();
			console.log("la promesa está resuelta");
			}, // Cierre gestión con éxito en la petición

	// En caso de error
		error : function(data,xhr,status){
			console.log("Error. Datos" + data + " " + xhr.value + " " + status);
			reject();
			console.log("promesa rechazada");
		} // Cierre gestión con error en la petición

		}); // Cierre función jQuery Ajax
	} // Cierre función que pide datos
}); // Cierre de la promesa

miPromesa.then(function(){
	console.log("éxito en la petición, motherfucker");
   
   function guardarUsuario(datos){
		window.sessionStorage.setItem("nombre", datos.name);
		window.sessionStorage.setItem("username", datos.username);
		window.sessionStorage.setItem("edad",datos.age);
		window.sessionStorage.setItem("pais",datos.country);
		window.sessionStorage.setItem("registrado",datos.membersince);
		window.sessionStorage.setItem("imagen", datos.pic);
		window.sessionStorage.setItem("postre",datos.favouritedessert);
	} 
}); //Cierre del then de la promesa

// Pintar los elementos. Comentado por no ser necesario una vez implantado la promesa (creo). 
// $("#myName").append(" " + sessionStorage.nombre + "<br>");
// $("#myNickname").append(" " + sessionStorage.username +"<br>");
// $("#myAge").append(" " + sessionStorage.edad + "<br>");
// $("#myCountry").append(" " + sessionStorage.pais + "<br>");
// $("#whenRegistered").append(" " + sessionStorage.registrado + "<br>");
// $("#myName,#myNickname,#whenRegistered,#myAge,#myCountry").show();

var idUsuario = window.sessionStorage.getItem("variable");

// ==== DEFINICIÓN ====
function guardarUsuario(rawData) {
	window.sessionStorage.setItem("nombre", rawData.name);
	window.sessionStorage.setItem("username", rawData.username);
	window.sessionStorage.setItem("edad", rawData.age);
	window.sessionStorage.setItem("pais", rawData.country);
	window.sessionStorage.setItem("registrado", rawData.membersince);
	window.sessionStorage.setItem("imagen", rawData.pic);
	window.sessionStorage.setItem("postre", rawData.favouritedessert);
} // Cierre definición función guardarUsuario

// Inicio mi promesa
var miPromesa = new Promise(function (resolve, reject) {

	//Comprobación usuario
	if (idUsuario == 1) {
		console.log("Abel");
		pedirUsuario("1");
	}
	else if (idUsuario == 2) {
		console.log("Mikel");
		pedirUsuario("2");
	}
	else {
		alert("No hay usuario");
	}
	// Fin comprobación usuario
	
	// Lanzo petición Ajax
	function pedirUsuario(id) {
		$.ajax({
			url: "http://www.abelespana.es/datos/usuario" + id + ".json",
			method: "get",
			dataType: "json",
			async : "true",

	// En caso de éxito en la petición
		success : function(datos){
			guardarUsuario(datos); //Ejecuto función para guardar en sessionStorage
			resolve(); // Y resuelvo la promesa
		}, // Cierre gestión con éxito en la petición

	// En caso de error
		error : function(data,xhr,status){
			console.log("Se ha producido el siguiente error: " + data + " " + xhr.value + " " + status);
			reject(); // Y rechazo la promesa
		} // Cierre gestión con error en la petición

		}); // Cierre función jQuery Ajax
	} // Cierre función pedirUsuario
}); // Cierre de la primera parte de la promesa

miPromesa.then(function(){ //Inicio función para pintar datos
	$("#profilePic").attr("src", sessionStorage.imagen);
	$("#myName").append(" " + sessionStorage.nombre + "<br>");
	$("#myNickname").append(" " + sessionStorage.username +"<br>");
	$("#myAge").append(" " + sessionStorage.edad + "<br>");
	$("#myCountry").append(" " + sessionStorage.pais + "<br>");
	$("#whenRegistered").append(" " + sessionStorage.registrado + "<br>");
	$("#myName,#myNickname,#whenRegistered,#myAge,#myCountry").show();
}); //Cierre del then de la promesa









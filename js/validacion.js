// Selección de Formulario

//Conociendo el id
/*var formulario = document.getElementById("miFormulario");*/
//O también se puede hacer de este otro modo 
/*var formulario2 = docuemnt.forms["miFormulario"];*/

//O conociendo el número de formulario que es la pagina
/*var formulario3 = document.getElementByTagName("form")[0];
var formulario4 = document.forms[0];*/

//Seleccionar elementos de un formulario
//.elements[] Devuelve todos los array con todos los input del formulario
//get ElementById("idElemento") Devuelve un elemento con un id determinado
//getElementsByTagName("etiqueta") Devuelve un array con elementos de un tipo de etiqueta (input,select,etc.)
//getElementsByName("nombre") Devuelve un array con elementos que tienen el mismo nombre (por ejemplo, radiobutton)

window.onload = iniciar; //SIN PARËNTESIS

function iniciar(){
	document.getElementById("inputRegisterForm").addEventListener('click',validar,false); //Con esta funcion lo que hacemos 
}

function validaNombre(){
	var regex = /^[a-zA-Z ]{2,30}$/;
	var elemento = document.getElementById("userName");
	limpiarError(elemento);
	if(regex.test(elemento.value)== false){
		alert("Nombre erróneo");
		error(elemento);
		return false;
	}
	return true;
	if(element.value == ""){
		alert("El campo no puede estar vacío.");
		error(elemento);
		return false;
	}
	return true;
}

function validaContraseña(){
	var elemento = document.getElementById("userPassword");
	if (isNaN(elemento.value)){
		alert("El campo contraseña tiene que ser números");
		error(elemento);
		return false;
	}
	return true;

}

function validaRepitaContraseña(){
	var password1 = document.getElementById("userPassword").value;
    var password2 = document.getElementById("userPasswordTwo").value;
    var espacios = false;
	var cont = 0;

			     
	    while (!espacios && (cont < password1.length)) {
	      if (password1.charAt(cont) == " ")
			        espacios = true;
			      cont++;
			}

			     
	    if (espacios) {
		      alert ("La contraseña no puede contener espacios en blanco");
		      error(elemento);
		      return false;
		    }
		      if (password1.length == 0 || password2.length == 0) {
		      alert("Los campos de la password no pueden quedar vacios");
		      error(elemento);
			  return false;
			}
			  if (password1 != password2) {
			      alert("Las passwords deben de coincidir");
			      error(elemento);
			      return false;

		    } else {
			      //alert("Todo esta correcto");
			      return true; 
		    }
		}



function validaEmail(){
	var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	var elemento = document.getElementById("userEmail");
	limpiarError(elemento);

	if(regex.test(elemento.value) == false){
		alert("Email erróneo");
		error(elemento);
		return false;
	}
	return true;
	if(element.value == ""){
		alert("El campo no puede estar vacío.");
		error(elemento);
		return false;
	}
	return true;
	
}

function validaCheck(){
	var campoCheck = document.getElementById("acepto");
	if (!campoCheck.checked){
		alert("Debes aceptar los terminos");
		return false;
	}
	return true;
}



function validar(evento) {

	evento.preventDefault();
	
	if(validaNombre() == true && validaContraseña() == true && validaRepitaContraseña() == true && validaEmail() == true && validaCheck() == true &&  confirm("Pulse aceptar si está seguro de enviar el Formulario")) {
		return true;
	} else {
		
		return false ;
	}
}

function error(elemento) {
			elemento.className = "form-control error";
			elemento.focus();
}

function limpiarError(elemento) {
			elemento.className = "form-control";
		}






Espana = ["Rivas", "Madrid" , "Arganda"];
Rusia = ["Moscu" , "San Petersburgo" , "Kazan"];
China = ["Pekin" , "Shangai" , "Tianjin"];

function asdf(){

	paisSeleccionado = parseInt( document.getElementById("paises").value );

	switch (paisSeleccionado){
		case 1:
			borrarHijos();
			crearNodos(Espana);
			break;
		
		case 2:
			borrarHijos();
			crearNodos(Rusia);
			break;
			
			default:break;
		}
	  }


function  borrarHijos(){
	while (document.getElementById("ciudad").firstChild){
		document.getElementById("ciudad").removeChild(document.getElementById("ciudad").firstChild);
	}
}
function crearNodos(elArray){
	
	for (i = 0; i <elArray.length; i++) {
		node=document.createElement("option");
		textnode = document.createTextNode(elArray[i]);
		node.appendChild(textnode);
		document.getElementById("ciudad").appendChild(node);
		
	}
}
function userRegister(username,password) {
	this.username = username;
	this.password = password;

	this.validaNombre = function() {
		if( this.username != '')
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	this.getName = function(){
		return this.username;
	}
	this.getName = function(){
		return this.password;
	}
}

function factoryUserRegister() {
	var username1 = document.getElementById('userName').value;
	var password1 = document.getElementById('userPassword').value;
	/*console.log(username1);
	console.log(username2);*/
	var usuarioRegistrado = new userRegister(username1, password1);
	/*console.log(usuarioRegistrado);*/
	return usuarioRegistrado; 
}

	

/*console.log(userRegister.getName());*/


var usuarios = [];

document.getElementById('inputRegisterForm').addEventListener('click', function() {
	usuarios.push(factoryUserRegister());
	// console.log("eureka?");
	// console.log(factoryUserRegister());
	console.log(usuarios);
	
	if (usuarios[0].password == "1234" || usuarios[1].password == "1234") {
		document.getElementById("fichaUsuarioRegistrado").style.display = "block";
		document.getElementById("teHaremosOpaco").style.opacity=0;
		//Resto del código de pintar en la modal
	} // Fin del IF
}); // Fin del envío del form





// function mostrarEnModal(usuarios){

// }


function salirDeLaModal() {
	window.location.href="home-logueado.html";
}









/*console.log("eureka?");*/
/*console.log(usuarios[0]);*/

/*while(usuarios[0].value!=undefined){
	console.log(usuarios[0].value);	
}*/

/*
if( miUsuario.validaNombre() )
{
}
*/
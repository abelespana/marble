function CheckUser(){
  var password = document.getElementById("passwordLanding").value;
  var username = document.getElementById("usernameLanding").value;
  var errorField = document.getElementById("errorMessage");

  // if (password != "" && username != "") {
  //   ShowUserInfo(username);

    // sessionStorage --> Almaceno un id
    if(username == "abel"){
    	pedirUsuario(1);
    }
    // Cargar otra pagina (window.location)
    else {
      errorField.style.display = "block";
    }
}
// Modificar luego para que la validación del usuario sea más completa.

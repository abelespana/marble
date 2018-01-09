function CheckUser(){
  var password = document.getElementById("password").value;
  var username = document.getElementById("username").value;
  var errorField = document.getElementById("errorMessage");

  if (password != "" && username != "") {
    ShowUserInfo(username);
  }
  else {
    errorField.innerHTML = "Campos erróneos o vacíos";
  }
}
// Modificar luego para que la validación del usuario sea más completa.

function CheckUser(){
  var password = document.getElementById("passwordLanding").value;
  var username = document.getElementById("usernameLanding").value;
  var errorField = document.getElementById("errorMessage");

  if (password != "" && username != "") {
    ShowUserInfo(username);
  }
  else {
    errorField.style.display = "block";
  }
}
// Modificar luego para que la validación del usuario sea más completa.

function CheckUser(){
  var password = document.getElementById("passwordLanding").value;
  var username = document.getElementById("usernameLanding").value;
  var errorField = document.getElementById("errorMessage");

    if(username == "abel" || username == "mikel"){
    	window.location.href = "profile.html";
    }
    // Cargar otra pagina (window.location)
    else {
      errorField.style.display = "block";
    }
}


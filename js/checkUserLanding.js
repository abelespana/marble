document.getElementById('submitLanding').addEventListener('click', function(){
  var password = document.getElementById("passwordLanding").value;
  var username = document.getElementById("usernameLanding").value;
  var errorField = document.getElementById("errorMessage");

    if(username == "abel" && password == "abel"){
      window.sessionStorage.setItem("variable","1");
      window.location.href = "home-logueado.html";
      
    } else if (username == "mikel" && password == "mikel") {
      window.sessionStorage.setItem("variable","2");
      window.location.href = "home-logueado.html";
    }
    else {
      errorField.style.display = "block";
    }
});


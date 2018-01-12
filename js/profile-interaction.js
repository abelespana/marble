//Función para rellenar el campo del usuario con datos del JSON
function ShowUserInfo(username) {
  var name = document.getElementById("myName");
  var myNickname = document.getElementById("myNickname");
  var whenRegistered = document.getElementById("whenRegistered");
  var myAge = document.getElementById("myAge");
  var myCountry = document.getElementById("myCountry");
  var modalWindow = document.getElementById("modalWindow");
  var myJSON;

  if (username === "blanca") {
    myJSON = blanca;
  }
  else if (username === "abel") {
    myJSON = abel;
  }
  else if (username === "mikel") {
    myJSON = mikel;
  }
  else if (username === "rober") {
    myJSON = rober;
  }
  else {
    alert("No existe ese usuario");
  }

  name.style.display = "block";
  name.innerHTML += " " + myJSON.name;

  myNickname.style.display = "block";
  myNickname.innerHTML += " " + myJSON.username;

  whenRegistered.style.display = "block";
  whenRegistered.innerHTML += " " + myJSON.membersince;

  myAge.style.display = "block";
  myAge.innerHTML += " " + myJSON.age;

  myCountry.style.display = "block";
  myCountry.innerHTML += " " + myJSON.country;

  modalWindow.style.display = "none";
}

//Funciones para intercambiar datos entre vistas
function ShowVoted() {
  document.getElementById("barraSeparadora").style.display="block";
  document.getElementById("profileUserVoted").style.display="block";
  document.getElementById("profileUserVisited").style.display="none";
  document.getElementById("profileUserComented").style.display="none";

}
function ShowVisited() {
  document.getElementById("barraSeparadora").style.display="block";
  document.getElementById("profileUserVoted").style.display="none";
  document.getElementById("profileUserVisited").style.display="block";
  document.getElementById("profileUserComented").style.display="none";
}
function ShowComented() {
  document.getElementById("barraSeparadora").style.display="block";
  document.getElementById("profileUserVoted").style.display="none";
  document.getElementById("profileUserVisited").style.display="none";
  document.getElementById("profileUserComented").style.display="block";
}
// Cosa a mejorar: se pueden hacer estos cambios con una sola función con condicionales para no repetir tanto código

function logout(){
  location.reload();
}

var userInfo = {
  "name":"Abel",
  "username":"abelespana",
  "age":29,
  "membersince":"29/11/2017",
  "country":"Spain"
};
function ShowMyInfo() {
  var name = document.getElementById("myName");
  var myNickname = document.getElementById("myNickname");
  var whenRegistered = document.getElementById("whenRegistered");
  var myAge = document.getElementById("myAge");
  var myCountry = document.getElementById("myCountry");

  name.style.display = "block";
  name.innerHTML = userInfo.name;
  myNickname.style.display = "block";
  whenRegistered.style.display = "block";
  myAge.style.display = "block";
  myCountry.style.display = "block";



}






// "skills":[
//   "html",
//   "css",
//   "javascript"
// ]

// console.log(userInfo.nombre);
// console.log(objetoJSON.edad);
// console.log(objetoJSON.skills);
// console.log(objetoJSON.skills[1]);

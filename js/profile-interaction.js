function ShowMyInfo() {
  var abel = {
    "name":"Abel",
    "username":"abelespana",
    "age":29,
    "membersince":"29/11/2017",
    "country":"Spain",
    "favouritedessert":"tarta de queso"
  };
  // var abelJSON = ("js/abel.json");
  // var abelJSONok = parseJSON("abelJSON");

  var name = document.getElementById("myName");
  var myNickname = document.getElementById("myNickname");
  var whenRegistered = document.getElementById("whenRegistered");
  var myAge = document.getElementById("myAge");
  var myCountry = document.getElementById("myCountry");

  name.style.display = "block";
  name.innerHTML = abel.name;

  myNickname.style.display = "block";
  myNickname.innerHTML = abel.username;

  whenRegistered.style.display = "block";
  whenRegistered.innerHTML = abel.membersince;

  myAge.style.display = "block";
  myAge.innerHTML = abel.age;

  myCountry.style.display = "block";
  myCountry.innerHTML = abel.country;
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

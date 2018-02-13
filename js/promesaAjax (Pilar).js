var exito;
var peticion = {
  url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",
  type: "GET",
  api_key:"dc6zaTOxFJmzC",
  dataType: "json",
  fmt: "json",
    success: function recibido (jsonrecibido) {
      console.log(jsonrecibido);
    }
}; 

$( document ).ready(
$(function() {
$("#buttonTw").click( function recibirAJAX() {
  exito = $.ajax(peticion);
  console.log(exito);

  var Promesa = new Promise(function(enviado, error){
    if(exito = !undefined){
        
        //console.log("he llegado")
        enviado('Hey friend, I won'); //la variable ha de estar definida y sino meter string whatever
    }else{
        var reason = new Error ("No se ha enviado el ajax")
        error(reason);
    }
});
    Promesa.then(function(){
        //console.log("se envio ajax")
        window.location="perfiluser.html"
    })
})
 

}));
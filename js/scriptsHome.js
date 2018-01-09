
$( document ).ready( function(){

	$( "#search" ).click( function(){

		if($("#searchBox").css("display", "block") == false){

			$("#searchBox").css("display", "block") = true;
	
		}
		if($("#closeSearch").css("display", "block") == false){

			$("#closeSearch").css("display", "block") = true;
	
		}
	});

	$( "#closeSearch" ).click( function(){

		if($("#searchBox").css("display", "none") == false){

			$("#searchBox").css("display", "none") = true;
	
		}
		if($("#closeSearch").css("display", "none") == false){

			$("#closeSearch").css("display", "none") = true;
	
		}
	});	
	
});
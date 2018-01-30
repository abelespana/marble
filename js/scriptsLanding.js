
$( document ).ready( function(){

	$( "#enterLanding" ).click( function(){

		if($("#usernameLanding").css("display", "block") == false){

			$("#usernameLanding").css("display", "block") = true;

		}

		if($("#passwordLanding").css("display", "block") == false){

			$("#passwordLanding").css("display", "block") = true;

		}
		
		if($("#submitLanding").css("display", "block") == false){

		$("#submitLanding").css("display", "block") = true;
		}
	});

	// $( "#enterLanding" ).click( function(){

	// 	if($("#usernameLanding").css("display", "none") == false){

	// 		$("#usernameLanding").css("display", "none") = true;
	
	// 	}
	// 	if($("#passwordLanding").css("display", "none") == false){

	// 		$("#passwordLanding").css("display", "none") = true;
	
	// 	}
	// });	
	
});
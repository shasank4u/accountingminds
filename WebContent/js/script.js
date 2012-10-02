$(document).ready(function(){

	var bgcolor = $('.menuTabDivOne').css('background-color');
	 
	
	$('.menuTabDivOne').hover(
		    function() {
		    	
		        //mouse over
		        $(this).css('background-color', '#eef5ff');
		      
		    }, function() {
		    	 
		        //mouse out
		        $(this).css('background-color', bgcolor);
		    });
/*
	$('#menuTabOne').mouseover(function(){
		
		$('.menuTabDivOne').animate({"background-color":"#eef5ff"},350);
	});
	
$('#menuTabOne').mouseout(function(){
		
		$('.menuTabDivOne').animate({"background-color":"#93b5e8"},350);
	});*/
	
$('#menuTabOne').click(function(){
	alert("test");
		
	});
});


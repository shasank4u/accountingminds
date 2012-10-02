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
	
	$('.menuTabDivFour').hover(
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

	var tabData = {
			
				"tabId":"1",
				"tabName":"Home",
				"subTabid":"0",
				"subTabName":"X"
			
	};
	
	$.ajax({
		type: "POST",
		url: "FrontController",
		data: "data="+JSON.stringify(tabData),
		cache: false,
		dataType:"JSON",
		success: function(data)
		{
			
			
			$('.contentHeaderText').html(data.contentHeadear);
		 $('.contentText').html(data.contentText);
		 
		
		 
		}
		});
	
	
	
		
	/*
	
	$.post("FrontController",{data:JSON.stringify(tabData)},{method:"post"},{dataType:"JSON"},{contentType:"application/json"},function(data){
		alert(data);
		
	});*/
	
	
	});


$('#menuTabFour').click(function(){

	var tabData = {
			
				"tabId":"4",
				"tabName":"Vision",
				"subTabid":"0",
				"subTabName":"X"
			
	};
	
	$.ajax({
		type: "POST",
		url: "FrontController",
		data: "data="+JSON.stringify(tabData),
		cache: false,
		dataType:"JSON",
		success: function(data)
		{
			
			
			$('.contentHeaderText').html(data.contentHeadear);
		 $('.contentText').html(data.contentText);
		 
		
		 
		}
		});
	
	
	
		
	/*
	
	$.post("FrontController",{data:JSON.stringify(tabData)},{method:"post"},{dataType:"JSON"},{contentType:"application/json"},function(data){
		alert(data);
		
	});*/
	
	
	});


});


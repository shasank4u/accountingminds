$(document).ready(function(){
	var bgcolor = $('.menuTabDivOne').css('background-color');
	$('#tabPanel').load("pages/home.html");
	//alert("test");
	//setMinHeight();
	 
	
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
	resetDefaultCssForAll();
	//$('#tabPanel').load("pages/home.html");

	$('#listTabOne').addClass("ui-tabs-selected ui-state-active");
	
	$('#tabPanel').load("pages/home.html");

	/*var tabData = {
			
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
		});/*
	
	
	
		
	/*
	
	$.post("FrontController",{data:JSON.stringify(tabData)},{method:"post"},{dataType:"JSON"},{contentType:"application/json"},function(data){
		alert(data);
		
	});*/
	
	
	});

function resetDefaultCssForAll(){
	$('#listTabOne').removeClass('ui-tabs-selected ui-state-active');
	$('#listTabTwo').removeClass('ui-tabs-selected ui-state-active');
	$('#listTabThree').removeClass('ui-tabs-selected ui-state-active');
	$('#listTabFour').removeClass('ui-tabs-selected ui-state-active');
	$('#listTabFive').removeClass('ui-tabs-selected ui-state-active');
	$('#listTabSix').removeClass('ui-tabs-selected ui-state-active');
	$('#listTabSeven').removeClass('ui-tabs-selected ui-state-active');
	$('#listTabEight').removeClass('ui-tabs-selected ui-state-active');

}

function setMinHeight(){
	$('.ui-tabs .ui-tabs-panel').css('min-height','600px');
}


$('#menuTabFive').click(function(){
	resetDefaultCssForAll();
	//$('#menuTabFive').removeClass('ui-state-default ui-corner-top');
	$('#listTabFive').addClass("ui-tabs-selected ui-state-active");
/*	$('#menuTabFive').addClass('ui-state-active');
	$('#menuTabFive').addClass('ui-corner-top');
	$('#menuTabFive').addClass('ui-state-default');
*/
	$('#tabPanel').load("pages/vision.html");
	/*
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




$('#menuTabTwo').click(function(){
	resetDefaultCssForAll();
	setMinHeight();
	$('#tabPanel').load("pages/program.html");


	
	$('#listTabTwo').addClass("ui-tabs-selected ui-state-active");

	
	
	
	});

});


<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js">
</script>
</head>
<body>

 <form method="post">
    Enter City :
        <input id="cityName" name="cityName" size="30" type="text" />
        <input id="getWeatherReport" name="getWeatherReport" type="button" value="Get Weather" />
    </form>
  </body>

</body>
<script type="text/javascript">

//alert($('#getWeatherReport').length);

$('#getWeatherReport').click(function(){
	  alert("1");
     $cityName = document.getElementById("cityName").value;
     $.post("FrontController", {cityName:$cityName}, function(data) {
       //  alert(data);
         $("#weatherReport").html(data);
     });
 });

</script>


</html>
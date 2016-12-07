$(document).ready(function(){
	x = document.getElementById("location");
	
	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		
		var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=0a37ba98b900f7cfeb11629c1ee0d7d5';
		
		$.getJSON(api, function(data){
			$('#location').html(JSON.stringify(data.name));
		});
	});
	
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});
  
  
  





/*$(document).ready(function () {
  x = document.getElementById("location");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
};*/

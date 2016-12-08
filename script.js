$(document).ready(function(){
	
	
	if (navigator.geolocation) {
		
		navigator.geolocation.getCurrentPosition(function(position){
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			
			var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=0a37ba98b900f7cfeb11629c1ee0d7d5';
			
			$.getJSON(api, function(data){

//Temperature				
				kTemp = data.main.temp;
				fTemp = Math.round(kTemp * (9/5) - 459.67);
				cTemp = ((fTemp - 32) * (5/9));
					$('#temp-container').html(Math.round(fTemp) + '&deg;F');
			
//Weather Description and backgrounds	NEEDS WORK		
				weatherDescription = data.weather[0].description;
			if(weatherDescription === "mist")
				$('body').css('background-image', 'url(https://static.pexels.com/photos/132983/pexels-photo-132983.jpeg)');
				$('#weatherDescription').html(weatherDescription);
//City Name
				$('#location').html(JSON.stringify(data.name));
//Sunrise and set time NEEDS WORK
				new Date(data.sys.sunrise * 1000);
				$('#time').html(Date);
				
				
			});
			
			
		});
		
//Temperature Buttons
		$('#cButton').click(function(){
			$('#temp-container').html(Math.round(cTemp) + '&deg;C');
		});		
		$('#fButton').click(function(){
			$('#temp-container').html(Math.round(fTemp) + '&deg;F');
		});
   
	};
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

$(document).ready(function(){
	
	
	if (navigator.geolocation) {
		
		navigator.geolocation.getCurrentPosition(function(position){
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			
			var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=0a37ba98b900f7cfeb11629c1ee0d7d5';
			
			$.getJSON(api, function(data){

//icon
				var icon = data.weather[0].id
				$('#icon').html("<i class='owf owf-" + icon + " owf-5x'></i>");	
//City Name
				$('#location').html("<span class='type'>City: </span>"+JSON.stringify(data.name));			
//Weather Description and backgrounds	NEEDS WORK		
				weatherDescription = data.weather[0].main;
				$('#weatherDescription').html("<span class='type'>Condition: </span>"+weatherDescription);
				
				if(weatherDescription === "Mist"){
					$('body').css('background-image', 'url(https://static.pexels.com/photos/132983/pexels-photo-132983.jpeg)');
				}	
				
				backgroundImg = {
					thunderStormD : "200-299",
					drizzleD : "300-399",
					rainD : "500-599",
					snowD : "600-699",
					atmosphereD : "700-799",
					clearD : "800",
					cloudsD : "801-804",
					extremeD : "900-999",
				}
				//start here
				switch(){
					case 0:
						data.weather[0].main < 299
						break;
				}
					
				
				

//Sunrise and set time NEEDS WORK
				new Date(data.sys.sunrise * 1000);
				$('#time').html(Date);
//Temperature				
				kTemp = data.main.temp;
				fTemp = Math.round(kTemp * (9/5) - 459.67);
				cTemp = ((fTemp - 32) * (5/9));
					$('#temp-container').html(Math.round(fTemp) + '&deg;F');				
				
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

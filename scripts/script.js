$(document).ready(function(){
//manual entry of location NOT WORKING
	// function outPut(){
		// var userInput = document.getElementById("desLocation").value;
		// console.log(userInput);
	// }
	// outPut;
//	$("#location").html()
	
	if (navigator.geolocation) {
		
		navigator.geolocation.getCurrentPosition(function(position){
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			
			var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=0a37ba98b900f7cfeb11629c1ee0d7d5';
			console.log(api);
			$.getJSON(api, function(data){

//icon
				var icon = data.weather[0].id
				$('#icon').html("<i class='wi wi-owm-" + icon + "'></i>");
				
//City Name
				$('#location').html("<span class='type'>City: </span>"+JSON.stringify(data.name));			
//Weather Description and backgrounds		
				weatherDescription = data.weather[0].main;
				$('#weatherDescription').html("<span class='type'>Condition: </span>"+weatherDescription);
				
				if(weatherDescription === "Mist"){
					$('body').css('background-image', 'url(https://static.pexels.com/photos/132983/pexels-photo-132983.jpeg)');
				}	
				
				backgroundImgContainer = {
					thunderStormD : "http://i.imgur.com/d8i9wi6.jpg",
					drizzleD : "http://i.imgur.com/q5J4JPK.jpg",
					rainD : "http://i.imgur.com/q5J4JPK.jpg",
					snowD : "http://i.imgur.com/IfbOdJ2.jpg",
					atmosphereD : "http://i.imgur.com/XtTIvYL.jpg",
					clearD : "http://i.imgur.com/udSev3z.jpg",
					cloudsD : "http://i.imgur.com/JnJXVe4.jpg",
					extremeD : "http://i.imgur.com/SdwZZkk.jpg",
				}
				backgroundImg = ''
				
				
				switch(icon){
					case icon <299:
						backgroundImg = backgroundImgContainer["thunderStormD"];
						break;
					case icon >= 300 && icon <=399 :
						backgroundImg = backgroundImgContainer["drizzleD"];
						break;
					case icon >= 500 && icon <=599:
						backgroundImg = backgroundImgContainer["rainD"];
						break;
					case icon >= 600 && icon <=699:
						backgroundImg = backgroundImgContainer["snowD"];
						break;
					case icon >= 700 && icon <=799:
						backgroundImg = backgroundImgContainer["atmosphereD"];
						break;
					case icon = 800:
						backgroundImg = backgroundImgContainer["clearD"];
						break;
					case icon >= 801 && icon <=804:
						backgroundImg = backgroundImgContainer["cloudsD"];
						break;
					case icon >= 805 && icon <=999:
						backgroundImg = backgroundImgContainer["extremeD"];
						break;
					default: console.log("oops");
				}
				$('body').css('background-image', 'url('+backgroundImg);
				
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
		

   
	} 
	//Temperature Buttons
		$('#cButton').click(function(){
			$('#temp-container').html(Math.round(cTemp) + '&deg;C');
		});		
		$('#fButton').click(function(){
			$('#temp-container').html(Math.round(fTemp) + '&deg;F');
		});
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

$(document).ready(function(){
		function initTemp(K){
					kTemp = K;
					fTemp = Math.round(kTemp * (9/5) - 459.67);
					cTemp = ((fTemp - 32) * (5/9));
		}
		function getForecast(data){
			initTemp(data.list[0].temp.max);
			var high = fTemp; 
			initTemp(data.list[0].temp.min);
			var low = fTemp;

			$('#high').html(' '+high);
			$('#low').html(' '+low);
		}
		function getWeather(data){
			var icon = data.weather[0].id
					$('#icon').html("<i class='wi wi-owm-" + icon + "'></i>");					
	//City Name
					$('#location').html("<span class='type'></span>"+JSON.stringify(data.name));			
	//Weather Description and backgrounds		
					weatherDescription = data.weather[0].main;
					$('#weatherDescription').html("<span class='type'></span>"+weatherDescription);
										
					backgroundImgContainer = {
						thunderStormD : "https://s26.postimg.org/5jz02h8i1/d8i9wi6.jpg",
						drizzleD : "https://s26.postimg.org/3tkkeqgcp/rain_on_window_glass.jpg",
						rainD : "https://s26.postimg.org/ysvkm4tah/q5_J4_JPK.jpg",
						snowD : "https://s26.postimg.org/4k8p6rtc9/Ifb_Od_J2.jpg",
						atmosphereD : "https://s26.postimg.org/vede5zxvt/Xt_TIv_YL.jpg",
						clearD : "https://s26.postimg.org/q0elyg85l/udSev3z.jpg",
						cloudsD : "https://s26.postimg.org/mobprer0p/Jn_JXVe4.jpg",
						extremeD : "https://s26.postimg.org/re68tr7ex/Sdw_ZZkk.jpg",
					}
					backgroundImg = ''
					console.log(icon);					
					if(icon < 299){
						backgroundImg = backgroundImgContainer["thunderStormD"];
					} if (icon >= 300 && icon <=399){
						backgroundImg = backgroundImgContainer["drizzleD"];
					}if (icon >= 500 && icon <=599){
						backgroundImg = backgroundImgContainer["rainD"];
					}if (icon >= 600 && icon <=699){
						backgroundImg = backgroundImgContainer["snowD"];					
					}if (icon >= 700 && icon <=799){
						backgroundImg = backgroundImgContainer["atmosphereD"];
					}if (icon === 800){ 
						backgroundImg = backgroundImgContainer["clearD"];
					}if (icon >=801 && icon <= 804){
						backgroundImg = backgroundImgContainer["cloudsD"];
					}if (icon >= 805 && icon <=999){
						backgroundImg = backgroundImgContainer["extremeD"];
					}
						
					$('html').css('background-image', 'url('+backgroundImg+')');
					
	//Sunrise and set time NEEDS WORK
					new Date(data.sys.sunrise * 1000);
					$('#time').html(Date);
	//Temperature	
					initTemp(data.main.temp);
										
					$('#temp-container').html(Math.round(fTemp) + '<span class="deg"> &deg;F </span>');
					$('.innerWell').css('visibility','visible');						
		};
		
		
		$("#searchForm").submit(function(e){ 
			e.preventDefault();

			var searchInput = $("#searchInput").val();
			var address = "http://api.openweathermap.org/data/2.5/weather?zip="+searchInput+"&appid=0a37ba98b900f7cfeb11629c1ee0d7d5";
			
			 $.getJSON(address, function(data){
			 	getWeather(data);			
			 });
			$.getJSON(forecast, function(data){
				getForecast(data);								
			});		
		});
		
		$("#searchInput").keypress(function(e){
			if(e.which == 13){
				$("#search").click();
			};
		});


	 if (navigator.geolocation) { //current weather functionality
		
		navigator.geolocation.getCurrentPosition(function(position){
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			
			var address = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=0a37ba98b900f7cfeb11629c1ee0d7d5';
			var forecast = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+lon+'&appid=0a37ba98b900f7cfeb11629c1ee0d7d5';
			console.log(forecast);
			$.getJSON(address, function(data){
				getWeather(data);								
			});	
			$.getJSON(forecast, function(data){
				getForecast(data);								
			});					
			
			
		}); 
	  
	}	
	//Temperature Buttons
		$('#cButton').click(function(){
			$('#temp-container').html(Math.round(cTemp) + '<span class="deg"> &deg;C </span>');
		});		
		$('#fButton').click(function(){
			$('#temp-container').html(Math.round(fTemp) + '<span class="deg"> &deg;F </span>');
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

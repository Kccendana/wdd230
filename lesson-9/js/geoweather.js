
//geolocatiion weather
const locationEle = document.querySelector('.location');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.icon');
const condition = document.querySelector('.currentWeather');
const notification = document.querySelector('.notification');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const wChill = document.querySelector('.windChill');
const weather = {};

//check if browser supports geolocation
if('geolocation' in navigator){
 navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
 notification.style.display = 'block';
 notification.innerHTML = `<p>Browser doesn't support geolocation</p>`

}

//set User position
function setPosition(position){
 let latitude = position.coords.latitude;
 let longitude = position.coords.longitude;

 getWeather(latitude, longitude);

}

//show error
function showError(error){
 notification.style.display = 'block';
 notification.innerHTML = `<p> ${error.message}</p>`;

}



//get weather
function getWeather(latitude, longitude){
//api key
const key = 'a44cb97f9caa00ac7b9a9561a8379fe8';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;
 


fetch(apiURL)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        weather.humidity = data.main.humidity;
        weather.wind = Math.floor(data.wind.speed);
        weather.temperature = Math.floor(data.main.temp);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
        wChill.innerHTML = windChill(weather.temperature, weather.wind);

    });
}

//display weather 
function displayWeather(){ 
let description = weather.description;
temp.innerHTML = `<strong>${weather.temperature}</strong>°F`;
condition.innerHTML = weather.description;
locationEle.innerHTML = `<strong>${weather.city}, ${weather.country}</strong>`;
windSpeed.innerHTML = `${weather.wind}<span>mph</span>`;
humidity.innerHTML = `${weather.humidity}%`;

}

function windChill(temp, wSpeed){
 
    if (temp <= 50 && wSpeed > 3){
       let chill = 35.74 + 0.6215 * temp - 35.75 * 
                Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16);
        chill = chill.toFixed(0) + "&deg;F";        
                return chill;
    }else{return "N/A";}
  
    
  }
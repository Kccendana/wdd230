
const menuBtn = document.querySelector('.menuBtn');
const mnav = document.querySelector('.navi');

menuBtn.addEventListener('click', () =>
{mnav.classList.toggle('responsive')}, false);


//
window.onresize = () => {if (window.innerWidth > 760) mnav.classList.remove('responsive')};
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = { weekday: 'short', month: 'short', day: 'numeric' };
const options2 = {month: 'short', day: 'numeric' };
console.log(event.toLocaleDateString(undefined, options));

console.log(event.toLocaleDateString(undefined, options2));

//elements

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(position);
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notification.style.display = "block";
    notification.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    const weatherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=34.5&lon=136.5&exclude=hourly,minutely&units=imperial&appid=a44cb97f9caa00ac7b9a9561a8379fe8';
    fetch(weatherApi)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            /*weather.temperature = data.main.temp.toFixed(0);
            weather.description = data.weather[0].description;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.windSpeed = data.wind.speed.toFixed(0);
            weather.humidity = data.main.humidity;*/

            console.log(data);
            const three_day = data.daily.slice(0,3);
            console.log(three_day[0].temp.day);

        })
        .then(function(){
            displayWeather();
            
        });
}
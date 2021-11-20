//Full year
document.querySelector("#year").textContent = new Date().getFullYear();

//current date
let day = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
let month = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
let d = new Date();
let dayName = day[d.getDay()];
let monthName = month[d.getMonth()];
let year = d.getFullYear();
let currentDate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById('currentDate').textContent = currentDate;

//toggle nav
const menuBtn = document.querySelector('.menuBtn');
const mnav = document.querySelector('.navi');

menuBtn.addEventListener('click', () =>
{mnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mnav.classList.remove('responsive')};

//toggle five-day forecast
const res = document.querySelector(".res");
const forecast = document.querySelector(".forecast");

res.addEventListener("click", () =>
{forecast.classList.toggle("resForecast")},false);

window.onresize = () => {if (window.innerWidth > 760) forecast.classList.remove('resForecast')};

//This javascript for the pancake invitation
if (new Date().getDay() !== 5){
  document.getElementById("pansched").style.display = "none";
}
//api 
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a44cb97f9caa00ac7b9a9561a8379fe8';

fetch(apiUrl)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    
    //console.log(jsObject.city)
    console.log(jsObject.city.name);
    const afternoon = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
    console.log(afternoon);

    const temp = document.querySelector('.temp');
    const condition = document.querySelector('.currentWeather');
    const humidity = document.querySelector('.humidity');
    const windSpeed = document.querySelector('.windSpeed');
    
    let tempA = afternoon[0].main.temp.toFixed(0);
    let speed = afternoon[0].wind.speed;

    condition.textContent = afternoon[0].weather[0].description;
    temp.textContent = `${tempA}°F`;
    humidity.textContent = `${afternoon[0].main.humidity}%`;
    windSpeed.textContent = `${speed}mph`;
    
   
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let day = 0;
    afternoon.forEach(forecast =>{
       let imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`; 
        let description = forecast.weather[0].description;
        console.log(forecast.weather[0].description);
        let date = new Date(forecast.dt_txt);

         /*for later editing
         imagesrc;
        if (description === 'few clouds'){
          imagesrc = '../icon/fewclouds.png';
        }
        if (description === 'clear sky'){
          imagesrc = '../icon/sunny.png';
        }
        if (description === 'broken clouds'){
          imagesrc = '../icon/brokenclouds.png';
        }
        if (description === 'cloudy'){
          imagesrc = '../icon/cloudy.png';
        }*/


        document.querySelector(`.day${day + 1}`).textContent = dayOfWeek[date.getDay()];
        document.querySelector(`.temp${day + 1}`).textContent = forecast.main.temp + '°F';
        document.querySelector(`#icon${day + 1}`).setAttribute('src', imagesrc);
        document.querySelector(`#icon${day + 1}`).setAttribute('alt', description);
        day++;
        
    });
  
});
    
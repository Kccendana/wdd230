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
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=a44cb97f9caa00ac7b9a9561a8379fe8';

fetch(apiUrl)
.then((response) => response.json())
.then((jsObject) => {
    //console.log(jsObject);
    
    //console.log(jsObject.city)
    //console.log(jsObject.city.name);
    const afternoon = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
    //console.log(afternoon);

    const temp = document.querySelector('.temp');
    const condition = document.querySelector('.currentWeather');
    const humidity = document.querySelector('.humidity');
    const windSpeed = document.querySelector('.windSpeed');
    const wChill = document.querySelector('.windChill');
    
    let tempA = afternoon[0].main.temp.toFixed(0);
    let speed = afternoon[0].wind.speed.toFixed(0);

    condition.innerHTML = afternoon[0].weather[0].description;
    temp.innerHTML = `${tempA}°F`;
    humidity.innerHTML = `${afternoon[0].main.humidity}%`;
    windSpeed.innerHTML = `${speed}mph`;
    wChill.innerHTML = windChill(tempA, speed);

    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let day = 0;
    afternoon.forEach(forecast =>{
       let imagesrc = `../icon/${forecast.weather[0].icon}.png`; 
        let description = forecast.weather[0].description;
        //console.log(forecast.weather[0].icon);
        let date = new Date(forecast.dt_txt);

        document.querySelector(`.day${day + 1}`).textContent = dayOfWeek[date.getDay()];
        document.querySelector(`.temp${day + 1}`).textContent = `${forecast.main.temp.toFixed(0)} °F`;
        document.querySelector(`#icon${day + 1}`).setAttribute('src', imagesrc);
        document.querySelector(`#icon${day + 1}`).setAttribute('alt', description);
        day++;
        

        
    });
  
});

function windChill(temp, wSpeed){
 
  if (temp <= 50 && wSpeed > 3){
     let chill = 35.74 + 0.6215 * temp - 35.75 * 
              Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16);
      chill = chill.toFixed(0) + "&deg;F";        
              return chill;
  }else{return "N/A";}

  
}

  //town's events
  const townURL = "https://byui-cit230.github.io/weather/data/towndata.json"
  const townEvent = document.querySelector('.events'); 

  fetch(townURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];
  
      let h3 = document.createElement('h3');
      h3.innerHTML = "Upcoming Events";
      townEvent.appendChild(h3)
      
 
      const selectedTown = towns.filter((town) =>town.name === 'Fish Haven');
      
      selectedTown[0].events.forEach(items =>{
        let lists = document.createElement('span');
        lists.innerHTML = items; 
        townEvent.appendChild(lists);
    
      })
     
  
    
  });


//This javascript for the pancake invitation
if (new Date().getDay() !== 5){
    document.getElementById("pansched").style.display = "none";
  }
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




//towns
const townUrl = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        const towns = jsonObject['towns'];
        //console.table(towns)

        const selectedTowns = towns.filter((town) =>town.name === 'Soda Springs' || 
        town.name === 'Fish Haven' || town.name === 'Preston');
        //console.log(selectedTowns);

        selectedTowns.forEach(selected =>{

            let section = document.createElement('section');
            let h3 = document.createElement('h3');
            let motto = document.createElement('p');
            let yearFound = document.createElement('p');
            let population = document.createElement('p');
            let rainFall = document.createElement('p');
            let image = document.createElement('img');

            h3.innerHTML = selected.name; 
            motto.innerHTML = `<strong><em>${selected.motto}</em></strong>`;
            yearFound.innerHTML = `<strong>Year Founded:</strong> ${selected.yearFounded}`;
            population.innerHTML =`<strong>Population:</strong> ${selected.currentPopulation}`
            rainFall.innerHTML =`<strong>Annual Rainfall:</strong> ${selected.averageRainfall}`

            let img;
            if (selected.name === 'Soda Springs'){
                img = 'images/so.webp';
                //console.log(img)
            }
            if (selected.name === 'Fish Haven'){
                img = 'images/fishhaven.webp';
            }
            if (selected.name === 'Preston')
                img = 'images/preston.webp';

            image.setAttribute('src', img);
           //image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', `${selected.name} image`);
            image.setAttribute('width', `350`);
            image.setAttribute('height', `214`);

            section.appendChild(h3);
            section.appendChild(motto);
            section.appendChild(yearFound);
            section.appendChild(population);
            section.appendChild(rainFall);
            section.appendChild(image);



            document.querySelector('div.towns').appendChild(section);
        })


    })


// SELECT ELEMENTS

const temp = document.querySelector(".temp");
const currentWeather = document.querySelector(".currentWeather");
const locationEle = document.querySelector(".location");
const notification = document.querySelector(".notification");
const humidity = document.querySelector('.humidity');
const wSpeed = document.querySelector('.windSpeed');

// App data
const weather = {};


// API KEY
const key = "a44cb97f9caa00ac7b9a9561a8379fe8";

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
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notification.style.display = "block";
    notification.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature = data.main.temp.toFixed(0);
            weather.description = data.weather[0].description;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.windSpeed = data.wind.speed.toFixed(0);
            weather.humidity = data.main.humidity;
        })
        .then(function(){
            displayWeather();
            windChill();
        });
}

// DISPLAY WEATHER
function displayWeather(){
    temp.innerHTML = `${weather.temperature}°F`;
    currentWeather.innerHTML = weather.description;
    locationEle.innerHTML = `${weather.city}, ${weather.country}`;
    humidity.innerHTML =`${weather.humidity}%`;
    wSpeed.innerHTML = `${weather.temperature}°F`;
}

function windChill(temp, wSpeed){
 
    if (temp <= 50 && wSpeed > 3){
       let chill = 35.74 + 0.6215 * temp - 35.75 * 
                Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16);
        chill = chill.toFixed(0) + "&deg;F";        
                return chill;
    }else{return "N/A";}
  
    
  }
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

//This javascript for the pancake invitation
if (new Date().getDay() !== 5){
  document.getElementById("pansched").style.display = "none";
}

//windchill
window.addEventListener('DOMContentLoaded', () => {
    let temp = parseFloat(document.querySelector(".highTemp").textContent);
    let wSpeed = parseFloat(document.querySelector(".windSpeed").textContent);
    let result = windChill(temp, wSpeed);
    
    document.querySelector(".windChill").innerHTML = result;
   
});

function windChill(temp, wSpeed){

    if (temp <= 50 && wSpeed > 3){
       let chill = 35.74 + 0.6215 * temp - 35.75 * 
                Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16);
        chill = chill.toFixed(0) + "&deg;F";        
                return chill;
    }else{return "N/A";}
}

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
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', `${selected.name} image`);

            section.appendChild(h3);
            section.appendChild(motto);
            section.appendChild(yearFound);
            section.appendChild(population);
            section.appendChild(rainFall);
            section.appendChild(image);



            document.querySelector('div.towns').appendChild(section);
        })


    })



/*const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];

        prophets.forEach(prophets => {
            console.log(prophets)
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let place = document.createElement('p');
            let date = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = prophets.name + ' ' + prophets.lastname; 
            date.textContent = 'Date of Birth: ' + prophets.birthdate;
            place.textContent = 'Place of Birth: ' + prophets.birthplace;
            image.setAttribute('src', prophets.imageurl);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('alt', `${prophets.name} ${prophets.lastname}-${prophets.order}`);
            //image.setAttribute('src', 'images/placeholder.jpg');
            

            
            card.appendChild(h2);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(image);
            
            document.querySelector('div.cards').appendChild(card);


        });*/
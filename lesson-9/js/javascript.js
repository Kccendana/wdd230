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
                img = 'images/so.jpg';
                //console.log(img)
            }
            if (selected.name === 'Fish Haven'){
                img = 'images/fishhaven.jpg';
            }
            if (selected.name === 'Preston')
                img = 'images/preston.jpg';

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


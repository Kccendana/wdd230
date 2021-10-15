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
if (new Date().getDay() === 5){
  document.getElementById("pansched").textContent = "Saturday =  🥞🍯Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.🌺";
}
document.getElementById("pansched").setAttribute("class", "pan")
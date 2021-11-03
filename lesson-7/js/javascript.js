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

//get the current date
//store in the localeStorage the date user visit the site
//determine how many days it has been user visited
//display message to the user or welcome message

const currentDateInMilli =Date.now();
const lastDate = localStorage.getItem("last-visit");

if (lastDate == null){
    localStorage.setItem("last-visit", currentDateInMilli);
}else{
 
const ld = parseFloat(lastDate);

let days_ago = (currentDateInMilli - ld) / 86400000;
let result = days_ago.toFixed(0);
let message;
 if (result >= 1){
  message = "It's been " + result + " days since you last visited this page."; 
 }else{message = "Welcome to the Gallery!";}
localStorage.setItem("last-visit", currentDateInMilli);
document.querySelector('.dayVisited').innerHTML = message;

}

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



//progressive loading of images
const img = document.querySelectorAll("[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if(!src){
    return;
  }
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px -10px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry =>{
    if (!entry.isIntersecting){
      return;
    }else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

 img.forEach(img => {
  imgObserver.observe(img);
})


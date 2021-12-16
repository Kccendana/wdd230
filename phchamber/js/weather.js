// last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.getElementById("lastModif").textContent = `Last Updated:  ${document.lastModified}`;

//menu
const menuBtn = document.querySelector('.menuBtn');
const mnav = document.querySelector('.navi');

menuBtn.addEventListener('click', () =>
{mnav.classList.toggle('responsive')}, false);


//
window.onresize = () => {if (window.innerWidth > 760) mnav.classList.remove('responsive')};



//elements

const icon = document.querySelector('.icon');
const desc = document.querySelector('.desc');
const currentemp = document.querySelector('.currentemp');
const hum = document.querySelector('.hum');



    const weatherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=34.5&lon=136.5&exclude=hourly,minutely&units=imperial&appid=a44cb97f9caa00ac7b9a9561a8379fe8';
    fetch(weatherApi)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){

        
            const icon = document.querySelector('.icon');
            const desc = document.querySelector('.desc');
            const currentemp = document.querySelector('.currentemp');
            const hum = document.querySelector('.hum');
            let tempA = data.current.temp.toFixed(0);
            let image = `images/icons/${data.current.weather[0].icon}.png`;

            desc.innerHTML = data.current.weather[0].description;
            currentemp.innerHTML = `${tempA}°F`;
            hum.innerHTML = `<i class="fas fa-tint"> ${data.current.humidity}%`;
            icon.setAttribute('src', image);
            icon.setAttribute('alt', desc);
            const three_day = data.daily.slice(0,3);
            

            let day = 0;
            three_day.forEach(forecast =>{
               let imagesrc = `images/icons/${forecast.weather[0].icon}.png`; 
                let description = forecast.weather[0].description;
               let time = forecast.dt;
                const options = {month: 'short', day: 'numeric' };
                let date = new Date(time * 1000).toLocaleDateString(undefined, options);
                
                document.querySelector(`.date${day + 1}`).textContent = date;
                document.querySelector(`.temp${day + 1}`).textContent = `${forecast.temp.day.toFixed(0)} °F`;
                document.querySelector(`.icon${day + 1}`).setAttribute('src', imagesrc);
                document.querySelector(`.icon${day + 1}`).setAttribute('alt', description);
                day++;
            

    
        });
    })
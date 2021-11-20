const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=a44cb97f9caa00ac7b9a9561a8379fe8';

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    console.log(jsObject.main.temp);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });


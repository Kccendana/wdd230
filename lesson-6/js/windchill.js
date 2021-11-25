
//windchill
window.addEventListener('DOMContentLoaded', () => {
    let temp = parseFloat(document.querySelector(".temp"));
    let wSpeed = parseFloat(document.querySelector(".windSpeed"));
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

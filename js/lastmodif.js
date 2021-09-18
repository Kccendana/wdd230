document.getElementById("year").textContent = new Date().getFullYear();


const options = {year: "2-digit",
month: "2-digit", 
day: "2-digit", 
hourCycle: "h24", 
hour: "2-digit", 
minute: "2-digit"};
document.getElementById("lastModif").textContent = 
new Date(document.lastModified).toLocaleDateString("en-US", options);
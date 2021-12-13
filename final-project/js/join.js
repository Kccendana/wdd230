// last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.getElementById("lastModif").textContent = `Last Updated:  ${document.lastModified}`;
//toggle nav
const menuBtn = document.querySelector('.menuBtn');
const mnav = document.querySelector('.navi');

menuBtn.addEventListener('click', () =>
{mnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mnav.classList.remove('responsive')};

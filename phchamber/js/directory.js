// last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.getElementById("lastModif").textContent = `Last Updated:  ${document.lastModified}`;

//nav
const menuBtn = document.querySelector('.menuBtn');
const mnav = document.querySelector('.navi');

menuBtn.addEventListener('click', () =>
{mnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mnav.classList.remove('responsive')};

//member directory
const memberURL = 'business.json';

fetch(memberURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    const member = jsonObject['local-company'];
    console.log(member);

    member.forEach(data =>{
       
        
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let place = document.createElement('p');
            let contact = document.createElement('p');
            let image = document.createElement('img');

            h3.innerHTML = data.name; 
            place.innerHTML = `<strong>${data.address}</strong>`;
            contact.innerHTML = `<span>&#9743;</span> ${data.contact_number}`;
            image.src =  `images/${data.logo}`;
            image.alt =  `${data.name} logo`;
            image.setAttribute('width', `100`);
            image.setAttribute('height', `100`);

        
             

            card.appendChild(image);
            card.appendChild(h3);
            card.appendChild(place);
            card.appendChild(contact);
            
            
            document.querySelector('.directory').appendChild(card);
        
    });
})


const grid = document.querySelector(".grid");
const list = document.querySelector(".list");

const directory = document.querySelector(".directory");

grid.addEventListener('click', () =>{
  directory.setAttribute('class', 'gridview')
});

list.addEventListener('click', () =>{
  directory.setAttribute('class', 'listview')});
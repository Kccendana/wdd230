const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];

        prophets.forEach(prophets => {
            //console.log(prophets)
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let place = document.createElement('p');
            let date = document.createElement('p');
            let image = document.createElement('img');

            h2.innerHTML = `${prophets.name} ${prophets.lastname}`; 
            date.innerHTML = `Date of Birth: ${prophets.birthdate}`;
            place.innerHTML = `Place of Birth: ${prophets.birthplace}`;
            image.src =  prophets.imageurl;
            image.loading = 'lazy'
            image.alt =  `${prophets.name} ${prophets.lastname}-${prophets.order}`;
           
            

            
            card.appendChild(h2);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(image);
            
            document.querySelector('div.cards').appendChild(card);


        });
      
       /* for (let i = 0; i < prophets.length; i++ ) {
    
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let place = document.createElement('p');
            let date = document.createElement('p');
            let image = document.createElement('img');

            
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; 
            date.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            place.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);

            
            card.appendChild(h2);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(image);
            
            document.querySelector('div.cards').appendChild(card);
            
            //image.setAttribute('src', prophets[i].imageurl);
            }*/

    });


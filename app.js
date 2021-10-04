const body = document.querySelector('body');
const lat = document.querySelector('body lat');
const long = document.querySelector('body long');
const number = document.querySelector('body number');
const namepeople = document.querySelector('body namepeople');

getISSPosition();

function getISSPosition() {
    fetch('http://api.open-notify.org/iss-now.json')
        .then(res => res.json())
        .then(data => {
            lat.innerHTML = data.iss_position.latitude;
            long.innerHTML = data.iss_position.longitude;
        });
    setTimeout(getISSPosition, 1000);
}

fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
        peoples = data.people
        astroList = "";
        peoples.forEach(astro => {
            astroList += `<p>${astro.name}</p>`;
        });
        number.innerHTML = data.number;
        namepeople.innerHTML = astroList;
    });
    
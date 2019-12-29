const arrow = document.querySelector('.arrow');

const meters = document.querySelector('.meters');
const miles = document.querySelector('.miles');


navigator.geolocation.watchPosition(data=>{
    console.log(data)
    meters.textContent = Math.round(data.coords.speed)
    miles.textContent = Math.round(data.coords.speed * 0.621371)
})
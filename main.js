const arrow = document.querySelector('.arrow');

const meters = document.querySelector('.meters');
const miles = document.querySelector('.miles');


/*navigator.geolocation.watchPosition(data=>{

    meters.textContent = Math.round(data.coords.speed)
    miles.textContent = Math.round(data.coords.speed * 0.621371)
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
})
*/

function success(data){
    meters.textContent = Math.round(data.coords.speed)
    miles.textContent = Math.round(data.coords.speed * 0.621371)
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
}

function err(err){
    console.err(err);
    alert('You have to enalbe GPS location for this to work')
}

navigator.geolocation.watchPosition(success, err)

/*
WebSocket network error: The operation couldn’t be completed. (OSStatus error -9807.) ==
errSSLXCertChainInvalid — The peer has an invalid certificate chain; 
for example, signature verification within the chain failed, or no certificates were found.
*/
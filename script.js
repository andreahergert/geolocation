const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
    if (data.coords.speed) {
        speed.textContent = data.coords.speed;
    } else {
        speed.textContent = 'Speed not available';
    }
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.error(err);
    alert('Need location allowed')
});
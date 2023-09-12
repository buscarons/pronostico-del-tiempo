document.getElementById("formulario").addEventListener('submit', (e)=>{
e.preventDefault()
const city = document.querySelector('#ciudad').value
const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=d9680d24d8bb7192b8ba4825ba5833de`

fetch(GEO_URL)
.then(response => response.json())
.then(data => {

    
    const longitud = data[0].lon;
    const latitud = data[0].lat;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=d9680d24d8bb7192b8ba4825ba5833de`
    console.log(URL)

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        const contenedor = document.querySelector('.clima');

       contenedor.innerHTML = `
        <p id="temp">Temperatura: ${Math.trunc(data.main.temp - 273.15)}°C</p>
        <p id="humedad">Humedad: ${data.main.humidity}%</p>
        <p id="descripcion">Descripcion: <span first-letter="text-transform: upperCase">${data.weather[0].description}</span></p>
        <p id="viento">Viento: ${data.wind.speed}m/s</p>
       `
    
    })

})
})












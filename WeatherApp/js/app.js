// variable
let input = document.getElementById("searchCountry")
let temp = document.querySelector('.temp__now')
let region = document.querySelector('.region')
let city = document.querySelector('.city')
let wind = document.querySelector(".wind")
let icon = document.getElementById('img')
let humidity = document.querySelector('.humidity')
let btn = document.querySelector('.submit')


btn.addEventListener('click', ()=> {
    event.preventDefault();
    let xrl = new XMLHttpRequest()
    if(!input.value.trim()){
        return;
    }
    xrl.open("POST", ` https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=351ccba9bd91ef24823bed7cf66380b8`, true)
    xrl.onload = () => {
        let data = JSON.parse(xrl.responseText);
        if(data.cod === 404){

        }
        city.innerHTML = data.name;
        region.innerHTML = data.sys.country;
        temp.innerHTML = Math.ceil( Number(data.main.temp) -  273.15);
        wind.innerHTML = data.wind.speed
        humidity.innerHTML = data.main.humidity
        // document.getElementById("img").src = `${data.weather[0].icon}.jpg`
    }
    xrl.send()
})
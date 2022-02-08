fetch('http://api.openweathermap.org/data/2.5/weather?id=162183&appid=6942eed4cc4acc006f8dd83c7783c80b')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        // https://openweathermap.org/img/wn/02d@2x.png
        // `<img src="https://openweathermap.org/img/wn/ ${data.weather[0]['icon']}@2x.png">`
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        //catch any errors
    });


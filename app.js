window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            apiKey = 'f2f39c22515d0ebd58e4feae97441b34';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
            fetch(api)
                .then(response => {
                    return response.json();

                })
                .then(data => {
                    console.log(data)
                })
        });
        fetch(api)
            .then(response => {
                return response.json();

            })
            .then(data => {
                console.log(data)
            })
    } else {
        h1.textContent = "please enable geolocation";
    }

})
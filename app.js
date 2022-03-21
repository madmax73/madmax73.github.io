window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let iconImage = document.querySelector('#wicon')

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
                    
                    const { temp } = data.main;
                    const { icon, description } = data.weather[0];
                    
                    //set DOM Elements from the API
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = data.name;
                    iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
                    iconImage.src = iconurl;


                })
        });

    } else {
        h1.textContent = "please enable geolocation";
    }

})
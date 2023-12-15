const data =     {
    "coord": {
        "lon": 145.77,
        "lat": -16.92
    },
    "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
    }],
    "base": "cmc stations",
    "main": {
        "temp": 293.25,
        "pressure": 1019,
        "humidity": 83,
        "temp_min": 289.82,
        "temp_max": 295.37
    }
}

const jsonData = JSON.stringify(data);

console.log('Data received from Weather API: \n\n', jsonData);

const parsedData = JSON.parse(jsonData);

console.log('Data after it has been parsed: \n', parsedData)

console.log('Selecting specific data: \n');
console.log('The temperature is: ', parsedData.main.temp);
console.log('The weather description is: ', parsedData.weather[0].description);


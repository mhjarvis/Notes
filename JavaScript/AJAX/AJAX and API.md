<h1 style="text-align:center">AJAX & APIs</h1>

## AJAX (Asynchronous JavaScript and XML)
AJAX essentially refers to the concept of making requests to load information or save information behind the scenes on a website (e.g. getting information from a server). It also allows for things such as live search, or doing things on a webpage without reloading everything. 

## JSON (JavaScript Object Notation)
Most information that is returned to you via APIs will be in JSON (this used to be XML, which is rarely used today). JSON is data returned in the JavaScript Object format, consisting of key-value pairs. However, it is not a 1-to-1 relationship to JavaScript. 

An example JSON return from a weather API (as a 'data' object) could be as follows:

    {
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

In order to use this data, we need to turn it into valid JavaScript data:

    const parsedData = JSON.parse(data)             // parse data

    console.log(parsedData.main.temp)               // print temp (293.25)


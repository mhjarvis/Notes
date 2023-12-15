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

To turn data received from the API, we will need to use ```JSON.parse(data)```. To turn data into JSON data, we need to use ```JSON.stringify(data)```. 

## Using Hoppscotch (or Postman)
Postman/Hoppscotch helps us make API calls (https://hoppscotch.io/). These allow us to test APIs as well. Overall, this program makes it easier for us to work with data when initially making a API request. For example, we can test cat facts by entering the url (gotten via their site):

    https://catfact.ninja/fact or               // /fact API call
    https://catfact.ninja/facts                 // /facts API call


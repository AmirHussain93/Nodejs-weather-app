const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=50d5fa632c2f0597d646ffb1d49f9082&query=37.8267,-122.4233&units=f'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature +" degrees out. It feels like " +response.body.current.feelslike + " degrees out.")
})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW1pci1odXNzYWluIiwiYSI6ImNrbTBwZWdiZjBxN20yb3FtbGxqdzZqOTgifQ.TWXYSIi0WBnHr6MCrXb0ig&limit=1'

request({url: geocodeUrl, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude);
})
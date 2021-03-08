const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=50d5fa632c2f0597d646ffb1d49f9082&query=37.8267,-122.4233&units=f'

request({url: url, json: true}, (error, response) => {
    // console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature +" degrees out. It feels like " +response.body.current.feelslike + " degrees out.")
})
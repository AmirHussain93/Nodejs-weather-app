const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=50d5fa632c2f0597d646ffb1d49f9082&query=37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})
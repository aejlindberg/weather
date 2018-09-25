fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=fec26f317908e347bad7fa3fb67882ea")
.then((response) => {
  return response.json()
}).then((data) => {
  const cityName = data.name.toUpperCase()
  const myTemperature = data.main.temp.toFixed(1)
  const myWeather = data.weather[0].description

  document.getElementById("cityDiv").innerHTML = cityName
  document.getElementById("tempDiv").innerHTML = myTemperature + ' \xB0'
  document.getElementById("weatherDiv").innerHTML = myWeather


  if (myTemperature > 15.0) {
    document.body.style.backgroundColor = "#BEB8EB"
  } else if (myTemperature > 5.0) {
    document.body.style.backgroundColor = "#73BFB8"
  } else {
    document.body.style.backgroundColor = "#668586"
  }

})

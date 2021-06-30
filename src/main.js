
import fetch from 'node-fetch'

// Import create_pdf.js
import {create_pdf} from './create_pdf.js';

async function get_weather_data (callback) {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?&lat=56.08&lon=10.13&units=metric&lang=da&appid=ebedfc40f7813cab42b35125c5bb33f2&exclude=current,minutely,hourly,alerts'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.daily[0])

    var weather={
    daily_temps:data.daily[0].temp,
    daily_weather: data.daily[0].weather[0].description
    }

    callback (weather)
  }
  
  get_weather_data (create_pdf)
  
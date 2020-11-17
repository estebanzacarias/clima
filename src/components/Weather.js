import React from 'react';

const Weather = ({result}) => {

    const { city, list } = result;

    if(!city) return null;

    const kelvin = 273.13;

    return (
      <div className="card grey col s12">
         <div className="">
            <h5>El clima de {city.name} es: </h5>

                <p>Clima Actual: {list[0].weather[0].description}</p>
                <p>Temperatura Actual: {parseFloat(list[0].main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
                <p>Temperatura Maxima Actual: {parseFloat(list[0].main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
                <p>Temperatura Minima Actual: {parseFloat(list[0].main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>           

            <h4>Clima de los proximo 5 días</h4>
            {list.slice(1, list.length - 0).map(day => (
              <div key={day.dt} className="card white">
                {day.weather.slice(0,1).map(clima => (
                  <p key={clima.id}>Clima: {clima.description}</p>
                ))}
                <p>Temperatura: {parseFloat(day.main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
                <p>Temperatura Maxima: {parseFloat(day.main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
                <p>Temperatura Minima: {parseFloat(day.main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
              </div>
            ))}
         </div>
      </div>
    );
}

export default Weather;
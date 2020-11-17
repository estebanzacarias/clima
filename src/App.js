import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  
  const [ busqueda, setBusqueda ] = useState({ciudad: ''});

  const [ coordenadas, setCoordenadas ] = useState({
    lat: 0,
    lon: 0
  });
  
  const [ ciudadactual, setCiudadActual ] = useState('');

  const [ consultar, setConsultar ] = useState(false);

  const [ result, setResult ] = useState({});

  var { ciudad } = busqueda;

  const { lat, lon } = coordenadas;

  let appID = "43be803cda4c15118db76dc833cab21b";

  useEffect(() => {
     const consultarApi = async () => {
        if(consultar){
          var url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&cnt=6&appid=${appID}`;
        
          const response = await fetch(url);
          const result = await response.json();
          
          setResult(result);
        }
        else {
           navigator.geolocation.getCurrentPosition(position => {
             setCoordenadas({
                lat: position.coords.latitude,
                lon: position.coords.longitude
             })
           });

           url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=6&appid=${appID}`;

           const response = await fetch(url);
           const result = await response.json();

           setResult(result);
           setCiudadActual(result.city.name);
        } 
     }
     consultarApi();
  }, [consultar, ciudad, lat, lon, appID]);

  return (
    <>
      <Header titulo="Weather Forecast" />
      
      <div className="container"> 
         <div className="row">
            <div className="col m6 s12 card grey">
                 <Form ciudadactual={ciudadactual} busqueda={busqueda} setBusqueda={setBusqueda} setConsultar={setConsultar} ciudad={ciudad} result={result} />
            </div>

            <div className="col m6 s12">
                <Weather result={result}/>
            </div>
         </div>
      </div>
    </>
  );
}

export default App;

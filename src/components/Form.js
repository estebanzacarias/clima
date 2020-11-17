import React from 'react';

const Form = ({ciudadactual, busqueda, setBusqueda, setConsultar, result}) => {

    const { ciudad } = busqueda;

    const { name } = result;

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });

        setConsultar(true);
    }
    
    return (
     <>
     <h4 className="center white-text">Elija una Ciudad</h4>
       <form>
           <div className="input-field col s12">
              <select name="ciudad" id="ciudad" value={ciudad} onChange={handleChange}>
                 <option value={ciudadactual}>Ciudad Actual</option>
                 <option value={name}>Cordoba</option>
                 <option value={name}>Rosario</option>
                 <option value={name}>Resistencia</option>
                 <option value={name}>Rawson</option>
                 <option value={name}>Viedma</option>
              </select>
              <label htmlFor="ciudad">Ciudad</label>
           </div>
       </form>
     </>
    );
}

export default Form;

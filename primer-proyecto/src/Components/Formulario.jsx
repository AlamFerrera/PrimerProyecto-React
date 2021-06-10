import React, { useState } from 'react';

const Formulario = function()
{

    let [display, setDisplay] = useState(false);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    const addNombre = (e)=> {
        setNombre(e.target.value);
    }

    const addEdad = (e)=> {
        setEdad(e.target.value);
    }

    const showData = (e)=> {
       display = e.target.getAttribute('data');
       if(nombre !== '' && edad !== '')
        setDisplay(display = true);
    }

    return(
        <div className="container pt-4">
            <h2>Formulario</h2>
            <form className="form-group">
                <input type="text" className="form-control mt-3 mb-3"
                onChange={addNombre} placeholder="Ingresar Nombre"/>
                <input type="text" className="form-control mb-3"
                onChange={addEdad} placeholder="Ingresar Edad"/>
                <input type="button" onClick={showData} className="btn btn-success btn-block" value="Enviar Consulta"/>
                <div className="mt-3">
                    <h2>
                        {
                            display === true? `Tu nombre es ${nombre} y tu edad ${edad}` : ''
                        }
                    </h2>
                </div>
            </form>
        </div>
    )
}

export default Formulario;
import React, {Fragment} from 'react';

function Hola()
{
    let nombre = "Manuel";
    let edad = 22;
    return(
        <Fragment>
            <h2>Hola {nombre} tu edad es {edad}</h2>
            <p>Primer Componente</p>
        </Fragment>
    );
}

export default Hola;
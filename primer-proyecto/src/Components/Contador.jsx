import React, {Fragment, useState} from 'react';

function Contador()
{

    const [numero, setNumero] = useState(0);

    const Aumentar = () => {
        return setNumero(numero+1);
    }
    const Reducir = () => {
        return setNumero(numero-1);
    }
    return(
        <Fragment>
            <h2>Cantidad del contador: {numero}</h2>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Reducir}>Disminuir</button>
        </Fragment>
    );
}

export default Contador;
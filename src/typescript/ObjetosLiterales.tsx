import React from 'react'

interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
    pais: string;
    casa: string;
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Armando',
        edad: 34,
        direccion : {
             pais: 'Colombia',
             casa: '1002'
        }
    }

    return (
        <>
            <div>
                Objetos Literales
                <code>
                     <pre>
                         {JSON.stringify(persona, null, 2)}
                     </pre>
                </code>
            </div>   
        </>
    )
}

export default ObjetosLiterales

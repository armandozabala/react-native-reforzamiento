import React from 'react'

const TiposBasicos = () => {

    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estadoActivo: boolean = true;


    return (
        <>
            <h2>
                Tipos Basicos
            </h2>   
                <br/> 
            <h4> { nombre} , { edad }, { estadoActivo ? 'activo' : 'no activo'} </h4> 
            
        </>
    )
}

export default TiposBasicos

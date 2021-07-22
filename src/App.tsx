import React from 'react';
import Contador from './components/Contador';
import ContadorConHook from './components/ContadorConHook';
import Formularios from './components/Formularios';
import Login from './components/Login';
import Usuarios from './components/Usuarios';
import Funciones from './typescript/Funciones';
import ObjetosLiterales from './typescript/ObjetosLiterales';
import TiposBasicos from './typescript/TiposBasicos';


function App() {
  return (
    <div className="App">
        <h1>Introduccion</h1>
        <hr/>
        { /* <TiposBasicos/> */ }
        { /* <ObjetosLiterales/> */}
        { /* <Funciones/> */ }
        {/*/<Contador/> */}
        {/* <ContadorConHook/> */}
        {/* <Login/> */}
        { /* <Usuarios/> */}
        <Formularios/>
    </div>
  );
}

export default App;

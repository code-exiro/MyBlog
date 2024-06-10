//Importamos la biblioteca react
import React from 'react';

//Definimos una constante "About" (componente funcional)
//Despues de los parentesis es el JSX que representa el contenido
const About = () => (
  <div>
    <h1>Que es?</h1>
    <p>Este blog trata sobre compartir conocimientos e ideas.</p>
  </div>
);

//Exportamos el componente "About" esto permite sea importado y utilizado en otros archivos
export default About;

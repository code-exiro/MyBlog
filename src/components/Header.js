//Importamos React
//Importamos el componente "Link" de "r-r-d"
//IMPORTANTE: "r-r-d" es una biblioteca de enrutamiento de aplicaciones React
//que permite gestionar y definir las rutas de una aplicacion react 
import React from 'react'; 
import { Link } from 'react-router-dom'; 

//Definicion del componente 'Header'
//Desde que se abren los parentesis hasta que cierran
//es el JSX que representa el Contenido del Header 
//JSX es una sintaxis que permite escribir elementos HTML dentro del codigo JS
const Header = () => (    
  <header>                
    <h1>E-Blog</h1>       
    <nav>                 
      <Link to="/">Inicio</Link>
      <Link to="/about">Que es?</Link>
    </nav>
  </header>
);

//Exporta el componente para uso en otras partes de la aplicacion.
export default Header;
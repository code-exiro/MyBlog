//"Post" es un componente que representa un unico post. Este componente es utilizado
//dentro de PostList para renderizar cada post individualmente

//Importacion de la biblioteca React
//Importacion de "Link" desde "r-r-d"
import React from 'react';
import { Link } from 'react-router-dom';

//Definimos una constante "Post" que es un componente funcional.
//Los componentes funcionales son funciones que retornan elementos React
//Desestructuracion de los props 'id', 'title' y 'content' que
//seran pasados al componente al ser utilizado
//props(abreviatura de "properties/propiedades")
//Apartir de los parentesis es el JSX que representa el contenido de "Post"
const Post = ({ id, title, content }) => (
  <article>
    <h2><Link to={`/post/${id}`}>{title}</Link></h2>
    <p>{content.substring(0, 100)}</p>
    <Link to={`/post/${id}`}>Leer mas</Link>
  </article>
);

//Exporta el componente para uso en otras partes de la aplicacion.
export default Post;
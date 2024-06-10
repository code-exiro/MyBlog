//PostList.js es un componente que renderiza una lista de posts, Este se utilizara
//dentro del componente "Home" para mostrar la lista de todos los posts disponibles

//importamos la biblioteca React
//importamos el componente Post
import React from 'react';
import Post from './Post';

//Definimos una constante "PostList" que es un componente funcional
//con un prop "posts" que sera un array de objetos representando los posts
//Apartir de los parentesis es el JSX que representa el contenido de PostList
//"posts.map(post => (...))" itera sobre el array "posts usando el metodo map"
const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post key={post.id} id={post.id} title={post.title} content={post.content} />
    ))}
  </div>
);

//Exporta el componente para uso en otras partes de la aplicacion.
export default PostList;
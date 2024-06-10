//Importamos React necesario para crear componentes y utilizar JSX
//importamos "useParams" desde el "r-r-d"
import React from 'react';
import { useParams } from 'react-router-dom';

//Definicion del componente PostDetail de props recibe "posts"
//Uso del Hook "useParams" extrae el parametro "postId" de la URL
//Busquead del Post correspondiente en el array "posts" cuyo "id" coincide con "postId"
const PostDetail = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find(post => post.id === parseInt(postId));

  //Verificacion de la existencia del post
  if (!post) {
    return <h2>Post no encontrado</h2>;
  }

  //Retorno del contenido del Post 
  //<div>: Contenedor principal del contenido del post.
  //<h1>{post.title}</h1>: Muestra el título del post.
  //<p>{post.content}</p>: Muestra el contenido del post.
  //<p><em>Author: {post.author}</em></p>: Muestra el autor del post en cursiva.
  //<p><em>Published on: {post.date}</em></p>: Muestra la fecha de publicación del post en cursiva.
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><em>Author: {post.author}</em></p>
      <p><em>Published on: {post.date}</em></p>
    </div>
  );
};

//exportacion del componente 
export default PostDetail;

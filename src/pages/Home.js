//Es un componente de paguina que utilizara "PostList" para mostrar la lista de posts
//"Home" es el componente que se renderiza cuando la ruta es '/'

//importacion de React, necesaria para utilizar JSX y crear componentes react
//importamos el componente "PostList" desde la carpeta "components" este mostrara una lista de posts
import React from 'react';
import PostList from '../components/PostList';

//Definimos la constante Home que es un componente funcional 
// prop "posts" que es sera un array de objetos representados 
//JSX apartir de los parentesis 
const Home = ({ posts }) => (
  <div>
    <h1>Bienvenidos a mi blog</h1>
    <PostList posts={posts} />
  </div>
);

//exportamos el componente "Home" para que pueda ser utilizado en otra parte de la app
export default Home;

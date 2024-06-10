//importamos "React" y "r-r-d", importamos componentes especificos de "r-r-d"
//"BrowserRouter" envulve la aplicacion y habilita el uso del enrutamiento 
//"Route" y "Routes" Definen las rutas de la aplicación.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importamos componentes "Header", "Footer", "Home", "About", y "PostDetail" 
//en este caso no se importaron "Post" y "PostList" porque estos son utilizados 
//dentro de los componentes "Home" y "PostDetail" no directamente en "App.js"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PostDetail from './pages/PostDetail';

//Definicion de la constate "App" que es un componente funcional 
const App = () => {
  //Definimos un array de objetos "posts" que contienen la informacion de los posts del blog
  const posts = [
    { id: 1, title: 'Primer Post', content: 'Over the wire', author: 'Erixo', date: '2024-05-01' },
    { id: 2, title: 'Segundo Post', content: 'PortSwigger.', author: 'Erixo', date: '2024-05-02' }
  ];

  //JSX que representa el contenido del App
  //"Router" envuleve el contenido de la aplicacion y habilita el enrutamiento
  //"div" contenedor principal de la aplicacion
  //"Header" componente que muestra la cabecera de la pagina
  //"Routes" define las rutas y los componentes que se renderizan para cada ruta
    //"Route path="/" element={<Home posts={posts} />}": Ruta para la página principal, 
    //que renderiza el componente Home y le pasa los posts como prop
    //Route path="/about" element={<About />}: Ruta para la página "About", que renderiza el componente About.
    //Route path="/post/" element={<PostDetail posts={posts} />}: Ruta para la página de 
    //detalles de un post, que renderiza el componente PostDetail y le pasa los posts como prop. 
    //El parámetro :postId permite que la URL incluya el ID del post.
  //"Footer" componente que muestra el pie de pagina 
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:postId" element={<PostDetail posts={posts} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

//Exportamos el componente App como la exportacion predeterminada del modulo
export default App;

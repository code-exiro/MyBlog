import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PostDetail from './pages/PostDetail';

const App = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', author: 'John Doe', date: '2024-05-01' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', author: 'Jane Doe', date: '2024-05-02' }
  ];

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

export default App;

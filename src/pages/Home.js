import React from 'react';
import PostList from '../components/PostList';

const Home = ({ posts }) => (
  <div>
    <h1>Welcome to My Blog</h1>
    <PostList posts={posts} />
  </div>
);

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, content }) => (
  <article>
    <h2><Link to={`/post/${id}`}>{title}</Link></h2>
    <p>{content.substring(0, 100)}...</p>
    <Link to={`/post/${id}`}>Read more</Link>
  </article>
);

export default Post;
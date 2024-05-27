import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find(post => post.id === parseInt(postId));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><em>Author: {post.author}</em></p>
      <p><em>Published on: {post.date}</em></p>
    </div>
  );
};

export default PostDetail;

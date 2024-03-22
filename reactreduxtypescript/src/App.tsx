import React from 'react';
import logo from './logo.svg';
import Counter from './app/features/counter/Counter';
import { PostsList } from './app/features/Post/PostsList';
import { ComponentOne } from './app/Types/Component';
import { AddPostForm } from './app/features/Post/AddPostForm';
import './App.css';

function App() {
  return (
    <div >
      {/* <Counter /> */}
      <AddPostForm />
      <PostsList />
      {/* <ComponentOne /> */}
    </div>
  );
}

export default App;

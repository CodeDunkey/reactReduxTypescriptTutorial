import React from 'react';
import logo from './logo.svg';
import Counter from './app/features/counter/Counter';
import { PostsList } from './app/features/Post/PostsList';
import './App.css';

function App() {
  return (
    <div >
      {/* <Counter /> */}
      <PostsList />
    </div>
  );
}

export default App;

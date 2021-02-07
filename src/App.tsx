import React from "react";
import { Provider } from 'react-redux'
import './App.css';
import Form from './components/Form'
import Stories from './components/Stories';
import Header from './components/Header'
import Usuario from './components/Usuario';
import Post from './components/Post';
import { store } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <div className="home">
          <div className="post-container">
            <Form />
            <Post />
          </div>
          <div>
            <Usuario />
            <Stories />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;

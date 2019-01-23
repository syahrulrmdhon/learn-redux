import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Route path='/postform' exact component={PostForm}/>
            <Route path='/' exact component={Posts}/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';
import Advertisement from './Advertisement/Advertisement';
import SubContents from './SubContents/SubContents'
function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  ); 
}

export default App;


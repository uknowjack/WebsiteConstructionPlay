import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

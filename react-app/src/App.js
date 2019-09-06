import React, { Component } from 'react';
import './App.css';

class Toc extends Component {
  render() {
    return (<div id="grid">
      <a href="write.html"><button type="button" name="button" class="button1">write</button></a>
      <a href="read.html"><button type="button" name="button" class="button2">read</button></a>
    </div>

    );
  }
}

class Title extends Component {
  render() {
    return (
      <header>
        <h1>Hello <u>username</u>
        </h1>
        <h2>what do you want?</h2>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title></Title>
        <Toc></Toc>


      </div>
    );
  }
}

export default App;

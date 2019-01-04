import React, { Component } from 'react';
import { Pane } from 'evergreen-ui'
import './App.css';

import Upload from './components/upload'

class App extends Component {
    

  render() {
   
  
    return (
      <div className="App">
      <Pane margin={60}>
          <div className="typewriter"> 
            <h1>Upload your file.</h1>
          </div>
        <Upload></Upload>  
      </Pane>
      </div>
    );
  }
}

export default App;

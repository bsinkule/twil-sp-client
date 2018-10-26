import React, { Component } from 'react'
import './App.css';

import Main from './components/Main.js';
import Login from './components/Login.js';
import NotFound from './components/NotFound.js';
import Callback from './components/Callback.js'

class App extends Component {
  state = {
  }

  render() {
    let mainComponent = "";
    switch(this.props.location){
        case "":
            mainComponent = <Login {...this.props}/>;
            break;
        case "callback":
            mainComponent = <Callback />;
            break;
        case "main":
            mainComponent = this.props.auth.isAuthenticated() ? <Main {...this.props} /> : <NotFound />
            break;
        default:
            mainComponent = <Main {...this.props} />;
    }
    
    return (
        <div className="App">
            {mainComponent}
        </div>
        )
  }
}

export default App;

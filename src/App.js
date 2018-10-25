import React, { Component } from 'react'
import './App.css';

import Main from './components/Main.js';
import Login from './components/Login.js';
import NotFound from './components/NotFound.js';
import Callback from './components/Callback.js'

const engApi = "http://localhost:5000/engineers/"
const projApi = "http://localhost:5000/projects/"

class App extends Component {
  state = {
    projData: [],
    engData: []
  }

  componentDidMount() {
    this.projApiData()
    this.engApiData()
  }

  projApiData = () => {
    fetch(projApi)
      .then(response => response.json())
      .then(data => {
        this.setState({
          projData: data.data,
        })
      })
  }

  engApiData = () => {
    fetch(engApi)
      .then(response => response.json())
      .then(data => {
        this.setState({
          engData: data.data,
        })
      })
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

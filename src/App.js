import React, { Component } from 'react'
import './App.css';

import HoursChart from './components/HoursChart'

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
    console.log("Projects - ", this.state.projData)
    console.log("Engineers - ", this.state.engData)

    return (
      <div className="App">
        <HoursChart projData={this.state.projData} engData={this.state.engData}/>
      </div>
    )
  }
}

export default App;

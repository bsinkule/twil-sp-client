import React, { Component } from 'react'
import '../App.css';
import { Router, Link } from '@reach/router'
import Test from './Test'

import HoursChart from './HoursChart'

const engApi = "http://localhost:5000/engineers/"
const projApi = "http://localhost:5000/projects/"

class Main extends Component {
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
      <div>
        <div onClick={this.props.auth.logout}>Log out</div>
        <Link to='main/chart'><p>CHART</p></Link>
        <Link to='main/test'><p>TEST</p></Link>
        <Router>
            <HoursChart path='main' projData={this.state.projData} engData={this.state.engData}/>
            <Test path='main/test' />
        </Router>
      </div>
    )
  }
}

export default Main;

import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'

let dates = ['11-19-18', '12-3-18', '12-17-18', '12-31-18', '1-14-19', '1-28-19', '2-4-19', '2-18-19', '3-4-19', '3-18-19', '4-1-19', '4-15-19']

class HoursChart extends Component {
    state = {
    }


    render(){
        let beProject = (obj) => {
            let startData = [0,0,0,0,0,0,0,0,0,0,0,0]
            obj.map(bob => {
              let first = dates.indexOf(bob.startDate)
              let last = dates.indexOf(bob.endDate)+1
              let indexes = dates.slice(first, last)
              let hours = +(bob.backendHours / indexes.length).toFixed(2)
              let cutDates = startData.splice(first, last - first)
              
              let addHours = (projHours) =>{
                let arr = []
                for (let i in projHours){
                  arr.push(projHours[i] + hours)
                  }
                return arr
              }
              let adj = addHours(cutDates)
          
              return startData.splice(first, 0, ...adj)
            })
          
            return startData
          }
          const beData = beProject(this.props.projData)
          
        let feProject = (obj) => {
            let startData = [0,0,0,0,0,0,0,0,0,0,0,0]
            obj.map(bob => {
              let first = dates.indexOf(bob.startDate)
              let last = dates.indexOf(bob.endDate)+1
              let indexes = dates.slice(first, last)
              let hours = +(bob.frontendHours / indexes.length).toFixed(2)
              let cutDates = startData.splice(first, last - first)
              
              let addHours = (engHours) =>{
                let arr = []
                for (let i in engHours){
                  arr.push(engHours[i] + hours)
                  }
                return arr
              }
              let adj = addHours(cutDates)
          
              return startData.splice(first, 0, ...adj)
            })
          
            return startData
          }
          const feData = feProject(this.props.projData)

        let feEmployee = (obj) => {
            let startData = [0,0,0,0,0,0,0,0,0,0,0,0]
            let filtFE = obj.filter(title => {
                return title.department === "Front-End"
            })
            filtFE.map(bob => {
                let first = dates.indexOf(bob.startDate)
                let last = dates.indexOf(bob.endDate)+1
                let hours = bob.hoursPerWeek * 2
                let cutDates = startData.splice(first, last - first)
                
                let addHours = (feHours) =>{
                    let arr = []
                    for (let i in feHours){
                        arr.push(feHours[i] + hours)
                        }
                    return arr
                }
                let adj = addHours(cutDates)
        
                return startData.splice(first, 0, ...adj)
            })
        
            return startData
        }
        const feEng = feEmployee(this.props.engData)
        
        let beEmployee = (obj) => {
            let startData = [0,0,0,0,0,0,0,0,0,0,0,0]
            let filtBE = obj.filter(title => {
                return title.department === "Back-End"
            })
            filtBE.map(bob => {
                let first = dates.indexOf(bob.startDate)
                let last = dates.indexOf(bob.endDate)+1
                let hours = bob.hoursPerWeek * 2
                let cutDates = startData.splice(first, last - first)
                
                let addHours = (beHours) =>{
                    let arr = []
                    for (let i in beHours){
                        arr.push(beHours[i] + hours)
                        }
                    return arr
                }
                let adj = addHours(cutDates)
        
                return startData.splice(first, 0, ...adj)
            })
        
            return startData
        }
        const beEng = beEmployee(this.props.engData)

        return (
            <div className="chart">
                <Bar 
                    data={{
                        labels: ['11-19-18', '12-3-18', '12-17-18', '12-31-18', '1-14-19', '1-28-19', '2-4-19', '2-18-19', '3-4-19', '3-18-19', '4-1-19', '4-15-19'],
                        datasets: [{
                          label: 'Project Front-End',
                          type: 'line',
                          fill: false,
                          data: feData,
                          borderColor: 'darkblue'
                        }, {
                          label: 'Project Back-End',
                          type: 'line',
                          fill: false,
                          data: beData,
                          borderColor: 'blue'
                        },{
                          label: 'Company FE',
                          data: feEng,
                          backgroundColor: 'darkgreen'
                        },{
                          label: 'Company BE',
                          data: beEng,
                          backgroundColor: 'lightgreen'
                        }]
                    }}
                    options={{
                        title: {
                            display: true,
                            text: 'Labor Hours vs. Project Hours',
                            fontSize: 25
                        },
                        legend:{
                            display: true,
                            position: 'bottom',
                            labels: {
                                fontColor: '#000'
                            }
                        },
                        layout: {
                            padding: {
                                left: 50,
                                right: 0,
                                bottom: 0,
                                top: 0
                            }
                        },
                        tooltips: {
                            enabled: true
                        },
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                  display: true,
                                  labelString: 'Hours'
                                }
                              }]
                        }
                    }}
                />
            </div>
        )
    }

}

export default HoursChart
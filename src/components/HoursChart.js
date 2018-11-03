import React, {Component} from 'react'
import { bellCurve } from './Functions'
import {Bar, Line, Pie} from 'react-chartjs-2'

let dates = ['11-19-18', '12-3-18', '12-17-18', '12-31-18', '1-14-19', '1-28-19', '2-4-19', '2-18-19', '3-4-19', '3-18-19', '4-1-19', '4-15-19']

class HoursChart extends Component {
    state = {
    }


    render(){
        let projRevenue = (obj) => {
            let startData = [0,0,0,0,0,0,0,0,0,0,0,0]
            obj.map(bob => {
                let first = dates.indexOf(bob.startDate)
                let last = dates.indexOf(bob.endDate)+1
                let indexes = dates.slice(first, last)
                let hours = +(bob.revenue / indexes.length).toFixed(2)
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
        const revenue= projRevenue(this.props.projData)

        let totalCost = (obj) => {
            let startData = [0,0,0,0,0,0,0,0,0,0,0,0]
            obj.map(bob => {
                let first = dates.indexOf(bob.startDate)
                let last = dates.indexOf(bob.endDate)+1
                let wages = bob.hourlyWage * bob.hoursPerWeek * 2
                let cutDates = startData.splice(first, last - first)
                
                let addHours = (projHours) =>{
                    let arr = []
                    for (let i in projHours){
                        arr.push(projHours[i] + wages)
                        }
                    return arr
                }
                let adj = addHours(cutDates)
        
                return startData.splice(first, 0, ...adj)
            })
            return startData
        }      
        let cost = totalCost(this.props.engData)

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
                let bell = bellCurve(adj)
                
              return startData.splice(first, 0, ...bell)
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
              let bell = bellCurve(adj)
          
              return startData.splice(first, 0, ...bell)
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
                          label: 'Project FE',
                          type: 'line',
                          fill: true,
                          data: feData,
                          borderColor: 'rgb(0, 255, 255)',
                          backgroundColor: 'rgba(0, 255, 255, 0.2)',
                          pointBorderColor: 'black',
                          pointBorderWidth: 2,
                          borderWidth: 3
                        }, {
                          label: 'Project BE',
                          type: 'line',
                          fill: true,
                          data: beData,
                          borderColor: 'rgb(0, 255, 128)',
                          backgroundColor: 'rgba(0, 255, 128, 0.2)',
                        //   borderColor: 'rgb(255, 255, 0)',
                        //   backgroundColor: 'rgba(255, 255, 0, 0.2)'
                        pointBorderColor: 'black',
                        pointBorderWidth: 2,
                        borderWidth: 3
                        },{
                          label: 'Dev FE',
                          data: feEng,
                          backgroundColor: 'rgb(26, 26, 255)',
                          borderColor: 'black',
                          borderWidth: 1
                        },{
                          label: 'Dev BE',
                          data: beEng,
                          backgroundColor: 'rgb(0, 153, 77)',
                        //   backgroundColor: 'rgb(204, 204, 0)',
                        borderColor: 'black',
                        borderWidth: 1
                        }]
                    }}
                    height={250}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Developer Hours vs. Project Hours',
                            fontSize: 20
                        },
                        legend:{
                            display: true,
                            position: 'bottom',
                            labels: {
                                fontColor: '#000',
                                boxWidth: 15
                            }
                        },
                        layout: {
                            padding: {
                                left: 0,
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
                <Bar 
                    data={{
                        labels: ['11-19-18', '12-3-18', '12-17-18', '12-31-18', '1-14-19', '1-28-19', '2-4-19', '2-18-19', '3-4-19', '3-18-19', '4-1-19', '4-15-19'],
                        datasets: [{
                          label: 'Project Revenue',
                          type: 'line',
                          fill: true,
                          data: revenue,
                          borderColor: 'rgb(102, 255, 51)',
                          backgroundColor: 'rgba(102, 255, 51, 0.2)',
                          pointBorderColor: 'black',
                          pointBorderWidth: 2,
                          borderWidth: 3
                        }, {
                          label: 'Developer Cost',
                          data: cost,
                          backgroundColor: 'rgb(255, 0, 0)',
                          borderColor: 'black',
                          borderWidth: 1
                        }]
                    }}
                    height={200}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Developer Cost vs. Project Revenue',
                            fontSize: 20
                        },
                        legend:{
                            display: true,
                            position: 'bottom',
                            labels: {
                                fontColor: '#000',
                                boxWidth: 15
                            }
                        },
                        layout: {
                            padding: {
                                left: 0,
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
                                  labelString: 'Dollars'
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
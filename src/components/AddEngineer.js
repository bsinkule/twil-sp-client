import React from 'react'

// const engApi = "http://localhost:5000/engineers/"
const engApi = "https://go-smart-projects.herokuapp.com/engineers/"

class AddEngineer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imgUrl: '',
            title: '',
            department: '',
            hoursPerWeek: '',
            hourlyWage: '',
            startDate: '',
            endDate: '',
            auth_id: localStorage.getItem('User_id')
        }
    }

    postData = (e) => {
        e.preventDefault()

        let postBody = this.state;
        postBody.hourlyWage = parseInt(this.state.hourlyWage)
        postBody.hoursPerWeek = parseInt(this.state.hoursPerWeek)
        const body = JSON.stringify(postBody)
        
        const options = {
            method: 'POST',
            body: body,
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }

        fetch(engApi, options)
            .then(res => res.json())
            .then(() => {
                this.props.engApiData()
        })

        this.setState({
            name: '',
            imgUrl: '',
            title: '',
            department: '',
            hoursPerWeek: '',
            hourlyWage: '',
            startDate: '',
            endDate: ''
        })
    }

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    render() {

        return (
            <div>
                <form className="sideForm" onSubmit={this.postData}> 
                        <div className="divSideForm">
                            <label>Name:<br />
                                <input placeholder="first and last" className="inputAdd" type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>Picture:<br />
                                <input placeholder="image url" className="inputAdd" type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>Title:<br />
                                <input placeholder="ex. React Developer" className="inputAdd" type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>
                                Select Division:<br />
                                <select required name="department" value={this.state.department} onChange={this.handleChange}>
                                    <option></option>
                                    <option value="Front-End">Front-End</option>
                                    <option value="Back-End">Back-End</option>
                                </select>
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>Hours Per Week:<br />
                                <input placeholder="ex. 40" className="inputAdd" type="number" min="0" step="1" name="hoursPerWeek" value={this.state.hoursPerWeek} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="divSideForm"> 
                            <label>Hourly Wage:<br />
                                <input placeholder="ex. 35" className="inputAdd" type="number" min="0" step="1" name="hourlyWage" value={this.state.hourlyWage} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>
                                Select Start Date:<br />
                                <select required name="startDate" value={this.state.startDate} onChange={this.handleChange}>
                                    <option></option>
                                    <option value="11-19-18">11-19-18</option>
                                    <option value="12-3-18">12-3-18</option>
                                    <option value="12-17-18">12-17-18</option>
                                    <option value="12-31-18">12-31-18</option>
                                    <option value="1-14-19">1-14-19</option>
                                    <option value="1-28-19">1-28-19</option>
                                    <option value="2-4-19">2-4-19</option>
                                    <option value="2-18-19">2-18-19</option>
                                    <option value="3-4-19">3-4-19</option>
                                    <option value="3-18-19">3-18-19</option>
                                    <option value="4-1-19">4-1-19</option>
                                    <option value="4-15-19">4-15-19</option>
                                </select>
                            </label>
                        </div>
                        <div className="divSideForm">
                            <label>
                                Select End Date:<br />
                                <select required name="endDate" value={this.state.endDate} onChange={this.handleChange}>
                                    <option></option>
                                    <option value="11-19-18">11-19-18</option>
                                    <option value="12-3-18">12-3-18</option>
                                    <option value="12-17-18">12-17-18</option>
                                    <option value="12-31-18">12-31-18</option>
                                    <option value="1-14-19">1-14-19</option>
                                    <option value="1-28-19">1-28-19</option>
                                    <option value="2-4-19">2-4-19</option>
                                    <option value="2-18-19">2-18-19</option>
                                    <option value="3-4-19">3-4-19</option>
                                    <option value="3-18-19">3-18-19</option>
                                    <option value="4-1-19">4-1-19</option>
                                    <option value="4-15-19">4-15-19</option>
                                </select>
                            </label>
                        </div>
                        <div className="hide divSideForm">
                            <label>Auth ID:<br />
                                <input className="inputAdd" type="text" name="auth_id" value={this.state.auth_id} onChange={this.handleChange} required />
                            </label>
                        </div>
                    <button className="addButton" type="submit">Add Developer</button>
                </form>
            </div>
        )
    }
}

export default AddEngineer
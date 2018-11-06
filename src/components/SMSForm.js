import React, { Component } from 'react';
// import './SMSForm.css';

class SMSForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: {
            to: this.props.mobileNumber,
            body: 'The team at smart projects just deployed a new feature to your site. We are excited for you to check it out! Please contact us with any feedback. Thanks!'
          },
          submitting: false,
          error: false
        };
      }

    onHandleChange = (event) => {
        const name = event.target.getAttribute('name');
        this.setState({
            message: { ...this.state.message, [name]: event.target.value }
        });
    } 
    
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch('https://express-smart-projects.herokuapp.com/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                // message: {
                //   to: '',
                //   body: ''
                // }
              });
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
      }

    render() {
        return (
          <form className="smsCenterButton" onSubmit={this.onSubmit}>
            <div className="hide">
              <label htmlFor="to">To:</label>
              <input
                 type="tel"
                 name="to"
                 id="to"
                 value={this.state.message.to}
                 onChange={this.onHandleChange}
              />
            </div>
            <div className="hide">
              <label htmlFor="body">Body:</label>
              <textarea
                    name="body" 
                    id="body"
                    value={this.state.message.body}
                    onChange={this.onHandleChange}
                />
            </div>
            <button className="addButton2" type="submit" disabled={this.state.submitting}>
                SMS
            </button>
          </form>
        );
      }
}

export default SMSForm;
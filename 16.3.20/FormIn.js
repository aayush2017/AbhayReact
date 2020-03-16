import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class FormIn extends Component {
    constructor() {
        super()

        this.state = {
             fullname: ''    
        }
        this.changeText = this.changeText.bind(this);
    }
    changeText(e) {
        this.setState({
            fullname: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <label>Fullname <input type="text" name="fullname" value={this.state.fullname} onChange={this.changeText} /></label>
                <Button  variant="primary">Change</Button>
                <h1>Your Fullname is: {this.state.fullname}</h1>
            </div>
        )
    }
}

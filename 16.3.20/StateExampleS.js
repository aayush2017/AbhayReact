import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class StateExampleS extends Component {
  constructor() {
      super();
      
      this.state = {
          numA: 200,
      }
      this.abc = this.abc.bind(this);
  }
    abc() {
        this.setState({
            numA: 5000
        });
       alert();
   }
    render() {
        
        return (
            <div className="container">
                <h1>Value of A is: {this.state.numA}</h1>
                
                <h1>After update Value of A is:{this.state.numA}</h1>
                <Button variant="primary" onClick={this.abc}>Change</Button>
            </div>
        )
    }
}

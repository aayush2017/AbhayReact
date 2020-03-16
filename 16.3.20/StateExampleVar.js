import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class StateExample extends Component {
   abc() {
    //    a= 1000;
       alert();
   }
    render() {
        var a;
        a = 100;
        return (
            <div>
                <h1>Value of A is: {a}</h1>
                {a=500}
                <h1>Value of A is: {a}</h1>
                <Button variant="primary" onClick={this.abc}>Change</Button>
            </div>
        )
    }
}

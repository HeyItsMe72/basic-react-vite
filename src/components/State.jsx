import React, { Component } from "react";

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000);

    };

    render() {
        return (
            <div>
                <h2>State</h2>
                <p>{this.state.counter}</p>
                <h2>State To Child</h2>
                <StateToChild childCounter = {this.state.counter}/>
            </div>
        )
    }
}

//The state is sent to the child as a propertie
function StateToChild(props){
    return(
        <div>
            <h3>{props.childCounter}</h3>
        </div>
    )
}
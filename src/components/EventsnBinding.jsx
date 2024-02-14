import React, { Component } from "react";

export class CounterEventES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }

        //Create the binding to the "this scope"
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);

    }

    //Generate the method inside the class
    sumar(e) {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar(e) {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Events Class Components ES6</h2>
                <nav>
                    <button onClick={this.sumar}> + </button>
                    <button onClick={this.restar}> - </button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// Properties initializer
export class CounterEventES7 extends Component {

    state = {
        contador: 0
    }



    //Generate the method inside the class
    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Events Class Components ES7</h2>
                <nav>
                    <button onClick={this.sumar}> + </button>
                    <button onClick={this.restar}> - </button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

function Button(props) {
    return (
        <button onClick={props.myOnClick}>Button Component</button>
    )

}

export class EventsManage extends Component {
    handleClick = (e, msg) => {
        console.log(e);
        console.log(e.target);
        console.log(msg);
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Sintetic Event</button>
                <button onClick={e => this.handleClick(e, "Hi, I'm a message from a sintatic event parameter")}>Sintetic Event With Parameters</button>
                <Button myOnClick = {(e) => this.handleClick(e, "Hi, I'm a message from a personalized event parameter")} />
            </>

        )
    }
}
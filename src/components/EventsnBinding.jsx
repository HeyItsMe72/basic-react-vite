import React, { Component } from "react";

export default class CounterEvent extends Component {
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
        sumar(e){
            this.setState({
                contador: this.state.contador + 1
            })
        }
        restar(e){
            this.setState({
                contador: this.state.contador - 1
            })
        }

        render(){
            return(
                <div>
                    <h2>Events and Binding</h2>
                    <nav>
                        <button onClick={this.sumar}> + </button>
                        <button onClick={this.restar}> - </button>
                    </nav>
                    <h3>{this.state.contador}</h3>
                </div>
            )
        }
}
import React, {Component} from "react";

export default class Father extends Component{
    state = {
        counter: 0
    }

    increaseCounter = e =>{
        this.setState({
          counter: this.state.counter + 1  
        })
    }
    reduceCounter = e =>{
        this.setState({
          counter: this.state.counter - 1  
        })
    }

    render(){
        return(
            <>
                <h2>Comunication between Components</h2>
                <h2>Father Counter: {this.state.counter}</h2>
                <Child msg = "This is the first Child" title="+" increaseC = {this.increaseCounter}/>
                <Child msg = "This is the second Child" title="-" increaseC = {this.reduceCounter}/>
            </>
            
        )
    }
}

function Child(props) {
    return (
        <>
            <h3>{props.msg}</h3>
            <button onClick = {props.increaseC}>{props.title}</button>
        </>
        
    )
}
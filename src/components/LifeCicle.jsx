import React, {Component} from "react";

class Clock extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h3>{this.props.hour}</h3>
        )
    }
}

export default class LifeCicle extends Component {
    constructor(props){
        super(props);
        console.log("This method is ejecuted when the component is initialized. Doesn't exist in DOM yet");
        this.state = {
            hour: new Date().toLocaleTimeString(),
            visible: false
        }
        this.temp = 0;
    }

    componentDidMount(){
        console.log("This method is ejecuted when the component is mounted in the DOM")
    }

    componentDidUpdate(prevPropsObject, prevStateObject){
        console.log("This method is ejecuted when the component is updated")
    }

    componentWillUnmount(){
        console.log("This method is ejecuted when the component is deleted from the DOM")
    }

    tictac = () => {
        this.temp = setInterval(() => {
            this.setState({
                hour: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    init = () => {
        this.tictac();
        this.setState({
            visible: true
        })
    }

    stop = () => {
        clearInterval(this.temp)
        this.setState({
            visible: false
        })
    }

    render(){
        return(
            <>
            <h3>Life Cicle</h3>
            <button onClick={this.init}>Init</button>
            <button onClick={this.stop}>Stop</button>
            {this.state.visible && <Clock hour = {this.state.hour}/>}
            </>
        )
    }
}
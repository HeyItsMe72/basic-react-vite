import React, {Component} from "react"

class Welcome extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return
        <h1>{this.props.name}</h1>
        
        
    }
}

const Properties = (props) => {
    return (<>
    <p>Hello {props.name}, this is the properties list:</p>
    <ul>
        <li>String: {props.msg}</li>
        <li>Number: {props.number}</li>
        <li>Boolean: {props.boolean ? "True" : "False"}</li>
        <li>Arrays: {props.array.join(", ")}</li>
        <li>Objects: {props.object.name} +", " + {props.object.email}</li>
        <li>Function Result: {props.array.map(props.func).join(", ")}</li>
        <li>React Element: {props.element}</li>
        <li>React Component: {props.component}</li>
    </ul>
    </>)
}

Properties.defaultProps = {
    msg: "Hola, Usuario!",

}

export default Properties;
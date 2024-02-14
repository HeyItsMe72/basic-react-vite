import React, {Component} from "react"
import data from "../helpers/data.json"

export default class ElementsRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            sessions: ["Spring", "Summer", "Fall", "Winter"]
        }
    }
    render(){
        return(
            <div>
                <h2>Elements Render</h2>
                <h3>Year's Seassons</h3>
                <ol>
                    {this.state.sessions.map((el, index) => <li key ={index}>{el}</li>)}
                </ol>
                <h3>JavaScript Frameworks</h3>
                <ul>
                    {data.frameworks.map(el => <ListElement key={el.id} el={el}/>)}
                </ul>
            </div>
        )
    }
}

function ListElement(props){
    return(
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    )
}
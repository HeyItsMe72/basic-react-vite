import React, {Component} from "react";

function Login(){
    return(
        <h2>Welcome</h2>
    )
}

function Logout(){
    return(
        <h2>See you later</h2>
    )
}

export default class ConditionalRender extends Component {
    constructor(props){
        super(props);
            this.state = {
                session: true,
            }
    }

    render(){
        return(
            <div>
                <h2>Conditional Render</h2>
                {this.state.session ? <Login/> : <Logout/>}
            </div>
        )
    }
}
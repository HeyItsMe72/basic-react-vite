import React, {Component} from "react";

class ClassComponent extends Component {
    render(){
        return( <h2>{this.props.msg}</h2>)
    }
}
// export default ClassComponent;

const FunctionComponent = (props) => <h2>{props.msg}</h2>;

export default FunctionComponent;
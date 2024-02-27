import React, {useState} from "react";

export default function HooksCounter(props) {
    const [counter, setCounter] = useState(0);

    const plus = () => setCounter(counter + 1);
    const minus = () => setCounter(counter - 1);

    return(
        <>
        <h2>Hooks Counter</h2>
        <nav>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </nav>
        <h3>Contador de {props.title}</h3>
        <h3>{counter}</h3>
        </>
    )
}

//Default Properties values
HooksCounter.defaultProps = {
    title: "Clicks"
}
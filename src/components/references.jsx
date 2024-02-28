import React, {useRef} from 'react';

export default function References() {
    let refMenuBtn = useRef(),
    refMenu = useRef();

    const handleToggleMenu = () => {
        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent = "Close";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "Menu";
            refMenu.current.style.display = "none";
        }
    }

    return(
        <>
        <h2>Referencias</h2>
        <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
        <nav id='menu' ref={refMenu} style={{display: "none"}}>
            <a href="">section1</a>
            <a href="">section2</a>
            <a href="">section3</a>
            <a href="">section4</a>
            <a href="">section5</a>
        </nav>
        </>
    )
}
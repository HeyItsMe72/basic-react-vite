import React, { useState } from 'react';

export default function Forms() {
    const [form, setForm] = useState({
        name: "",
    });

    const handleChange = e =>{
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    const handleChecked = e =>{
        setForm({
            ...form, 
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = e => {
        e.prevetDefault();
        alert("Form Sent");
    }

    return(
        <>
        <h2>Handling Forms</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id='name' value={form.name} onChange={handleChange}/>
            <br />
            <p>Select your favorite JS flavor</p>
            <input type="radio" name="flavor" id="js" value="js" onChange={handleChange}/>
            <label htmlFor="js">JavaScript</label>
            <input type="radio" name="flavor" id="react" value="react" onChange={handleChange}/>
            <label htmlFor="react">React</label>
            <input type="radio" name="flavor" id="svelte" value="svelte" onChange={handleChange}/>
            <label htmlFor="svelte">Svelte</label>
            <input type="radio" name="flavor" id="angular" value="angular" onChange={handleChange}/>
            <label htmlFor="angular">Angular</label>
            <br />
            <p>Choose your favorite programming language</p>
            <select name="language" id="lan" defaultValue="" onChange={handleChange}>
                <option value="">---</option>
                <option value="php">PHP</option>
                <option value="js">JavaScript</option>
                <option value="python">Python</option>
                <option value="c#">C#</option>
                <option value="go">GO</option>
            </select>
            <br />
            <label htmlFor="terms">Accept terms and conditions</label>
            <input type="checkbox" name="terms" id="terms" onChange={handleChecked}/>
        </form>
        </>
    )
}
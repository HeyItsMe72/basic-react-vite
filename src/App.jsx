import React, { Component } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ClassComponent from './components/Components';
import FunctionComponent from './components/Components'
import Properties from './components/Properties'
import State from './components/State'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Components</h2>
      {/* <ClassComponent msg="Hola, Mundo desde React ClassComponent"/> */}
      <FunctionComponent msg="Hola, Mundo desde React FunctionComponent"/>
      <hr />
      <h2>Properties</h2>
      <Properties 
        name = "Lucía"
        msg = "Bienvenid@!"
        number = {23}
        boolean = {true}
        array = {[1,2,3]}
        object = {{
          name: "Julio",
          email: "juliocena@mail.com"
        }}
        func = {(el) => el*el}
        element = {<i>This is a React Element</i>}
        component = {<FunctionComponent msg="Hola, soy un mensaje dentro de una prop"/>}
      />
      <hr />
      <h2>State</h2>
      <State/>
      <hr />
    </>
  )
}

export default App

import React from "react"
import Header from "./componentes/Header/Header.jsx"
import Main from "./componentes/Main/Main.jsx"
import "./App.css"

function App () {
    return (
        <div className="container">

        {/*<h1>Olá! Eu sou o componente principal que dá a vida as coisas</h1>*/}
        
        <Header/>
        <Main/>
        </div>
    )
}
export default App
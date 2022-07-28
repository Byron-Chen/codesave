import React from "react"
import ReactDOM from "react-dom"

import CodeContainer from "./components/CodeContainer"
import "./components/app.css"

const element = <h1>welcome to codesave</h1>

ReactDOM.render(<React.StrictMode><CodeContainer/></React.StrictMode>, document.getElementById("root"))
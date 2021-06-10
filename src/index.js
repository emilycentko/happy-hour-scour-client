import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { HappyHourScour } from "./components/HappyHourScour.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <HappyHourScour />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
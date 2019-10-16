import React, { Component } from "react"

import { Router, browserHistory, Route } from "react-router"
import FirstPage from "./pages/first"
import SecondPage from "./pages/second"

import "./App.css"

// for debugging
// (function() {
//   if(window.localStorage)
//     console.log("Local Storage Supported")
//   else
//     console.log("Local Storage Not Supported")
// })();

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={FirstPage} />
        <Route path="/second" component={SecondPage} />
      </Router>
    )
  }
}

export default App

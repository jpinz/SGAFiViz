/*App.js*/
import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MainPage from "./pages/story";
import AboutPage from "./pages/about";
import BudgetPage from "./pages/budget";
import Header from "./components/Header.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/budget" component={BudgetPage} />
        </Router>
      </div>
    );
  }
}

export default App;
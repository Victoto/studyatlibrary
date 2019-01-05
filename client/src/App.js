import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Components */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Library from "./components/library";

/* Style */
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* Landing Page */}
          <Route exact path="/" component={Landing} />
          {/* Library Project */}
          <div className="container">
            <Route exact path="/library" component={Library} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

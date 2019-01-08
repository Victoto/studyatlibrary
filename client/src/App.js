import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Components */
import Library from "./components/library";

/* Style */
import style from "./App.module.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={style.App}>
          {/* Landing Page */}
          <Route exact path="/" component={Library} />
        </div>
      </Router>
    );
  }
}

export default App;

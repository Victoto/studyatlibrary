import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Landing page</h1>
        <h2>Projects</h2>
        <Link className="library" to="/library">
          The Public Library
        </Link>
      </div>
    );
  }
}

export default Landing;

import React, { Component } from "react";

class Library extends Component {
  render() {
    const header = <h1 className="header">Welcome to the Library</h1>;
    const intro = <p className="intro">Study at the virtual library</p>;

    return (
      <div>
        {header}
        {intro}
      </div>
    );
  }
}

export default Library;

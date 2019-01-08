import React, { Component } from "react";
import { Link } from "react-router-dom";

import librayImg from "./img/gaetano-cessati-217459-unsplash.png";
/* Style */
import style from "./index.module.css";

class Library extends Component {
  render() {
    // const publicLibrary = <Link to="/library">Study At Library</Link>;

    const list = (
      <ul className={style.libraryList}>
        <li>library one</li>
        <li>library two</li>
        <li>library three</li>
        <li>library four</li>
      </ul>
    )
    
    const navbar = (
      <div className={style.navContainer}>
        <div className={style.navContent}>
          <div className={style.title}>
            The <br />
            Virtual <br />
            Library
          </div>
          {list}
        </div>
      </div>
    );

    const image = (
      <div className={style.imgContainer}>
        <img className={style.img} src={librayImg} />
        <div className={style.intro}>
          Find a room with calming white noise to help you focus on your
          study / reading
        </div>
      </div>
    );


    const footer = (
      <footer className={style.footer}>
        Copyright &copy; {new Date().getFullYear()} Victoria Yang
      </footer>
    );
    
    
    return (
      <div className={style.page}>
        <div className={style.container}>
          {navbar}
          {image}
        </div>
        {footer}
      </div>
    );
  }
}

export default Library;

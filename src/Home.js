import React, { useState } from "react";
import "./Home.css";

function Home() {
  //fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  const [show, setShow] = useState(false);

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav_items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav_items mx__15">About</li>
              </a>
              <a href="#Skills">
                <li className="nav_items mx__15">Skills</li>
              </a>
              <a href="#Projects">
                <li className="nav_items mx__15">Projects</li>
              </a>
              <a href="#Education">
                <li className="nav_items mx__15">Education</li>
              </a>
              <a href="#Contact">
                <li className="nav_items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toggle */}
          <div className="toggle__menu">
            <i
              onClick={() => setShow(!show)}
              class="fas fa-align-justify white pointer"
            />
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Skills">Skills</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Projects">Projects</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Education">Education</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I'm Shivanshu Dev</h2>
              <h3 className="home__text chartreuse pz__10">
                Developer | Programmer.
              </h3>
              <h4 className="home__text pz__10">based in India.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

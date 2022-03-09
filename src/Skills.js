import React from "react";
import "./Skills.css";
function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">Skills</h1>
        <p className="heading p__color">
          Here are some of my skills mentioned below
        </p>
        <p className="heading p__color">Have a glance.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <i class="fab fa-react"></i>
              </div>
              <div className="skills__meta">
                <h1 className="skills__text">Front End Development</h1>
                <p className="p__color skills__text __color">MERN</p>
                <p className="p__color skills__text __color">
                  HTML | CSS | JAVASCRIPT | REACT.js
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <i class="fas fa-database"></i>
              </div>
              <div className="skills__meta">
                <h1 className="skills__text">Back End Development</h1>
                <p className="p__color skills__text __color">MERN</p>
                <p className="p__color skills__text __color">
                  NODE.js | EXPRESS.js | DATABASE
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <div className="skills__meta">
                <h1 className="skills__text">COMPETITIVE PROGRAMMING</h1>
                <p className="p__color skills__text __color">C++ | C</p>
                <p className="p__color skills__text __color">
                  <a
                    href="https://www.codechef.com/users/shivanshudev"
                    target="_blank"
                  >
                    (Click here to view Codechef profile)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <i class="fas fa-layer-group"></i>
              </div>
              <div className="skills__meta">
                <h1 className="skills__text">DATA STRUCTURES & ALGORITHMS</h1>

                <p className="p__color skills__text __color">
                  <a href="https://leetcode.com/shivanshudev/" target="_blank">
                    (Click here to view Leetcode profile)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

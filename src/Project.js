import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio.jpg";

function Project() {
  return (
    <div className="project components_space " id="Projects">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          Here are some of my projects I worked on.
        </p>
        <p className="heading p__color">
          Click on the box to view the live project or the documentation.
        </p>
      </div>
      <div className="container">
        <div className="row">
        <div className="col__3">
            <a
              href="https://narayanjeeeducationaltrust.vercel.app/"
              target="blank"
            >
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Project1} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">REACT.js</h5>
                  <h4 className="project__text">NEST(CLIENT) </h4>
                  <a
                    href="https://github.com/shivanshudev63/nest"
                    target="blank"
                    className="project__btn"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </a>
          </div>

          <div className="col__3">
            <a
              href="https://personal-website-shivanshudev63.vercel.app/"
              target="blank"
            >
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Project1} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">REACT.js</h5>
                  <h4 className="project__text">PORTFOLIO</h4>
                  <a
                    href="https://github.com/shivanshudev63/PERSONAL-WEBSITE"
                    target="_blank"
                    className="project__btn"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </a>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">HTML|CSS|JAVASCRIPT</h5>
                <h4 className="project__text">DRUM KIT</h4>
                <a
                  href="https://github.com/shivanshudev63/DRUM-KIT"
                  className="project__btn"
                  target="_blank"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <a
              href="https://fierce-beyond-16149.herokuapp.com/"
              target="_blank"
            >
              <div className="project__box pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Project1} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">HTML|CSS|JAVASCRIPT|MONGODB</h5>
                  <h4 className="project__text">ToDo List</h4>

                  <a
                    href="https://github.com/shivanshudev63/ToDo-List.git"
                    className="project__btn"
                    target="_blank"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </a>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">REACT.js|HTML|JAVASCRIPT|CSS</h5>
                <h4 className="project__text">ToDo List</h4>
                <a
                  href="https://github.com/shivanshudev63/ToDo-List-"
                  className="project__btn"
                  target="_blank"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">HTML|CSS|JAVASCRIPT</h5>
                <h4 className="project__text">PING PONG GAME</h4>
                <a
                  href="https://github.com/shivanshudev63/PING-PONG-GAME"
                  className="project__btn"
                  target="_blank"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <a
              href="https://github.com/shivanshudev63?tab=repositories"
              target="_blank"
            >
              <button className="view__more pointer btn">View more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

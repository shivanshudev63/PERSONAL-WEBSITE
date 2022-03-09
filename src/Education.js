import React from "react";
import "./Education.css";
import Blog1 from "./img/education-1.jpg";
import Blog2 from "./img/education-2.jpg";
import Blog3 from "./img/education-3.jpg";

function Education() {
  return (
    <div className="blog component__space" id="Education">
      <div className="heading">
        <h1 className="heading">Education</h1>
        <p className="heading p__color">Have a glance at my background.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative ">
              <div className="project__box__img pointer relative">
                <div className="project__img__box edu">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Bachelor of Engineering</h5>
                <h4 className="project__text">
                  Bangalore Institute of Technology
                </h4>
                <h5 className="project__text">Bangalore, Karnataka-560004</h5>
                <h6 className="project__text">(September 2020 - March 2024)</h6>
                <a
                  href="https://bit-bangalore.edu.in/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box edu">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Higher Secondary</h5>
                <h4 className="project__text">Jawahar Vidya Mandir</h4>
                <h5 className="project__text">
                  Shyamli, Ranchi, Jharkhand-834002
                </h5>
                <h6 className="project__text">(April 2014 - March 2020)</h6>
                <a
                  href="https://www.jvmshyamali.com/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box edu">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Primary Education</h5>
                <h4 className="project__text">D.A.V Public</h4>
                <h5 className="project__text">
                  Bistupur, Jamshedpur, Jharkhand-831001
                </h5>
                <h6 className="project__text">(N/A - March 2014)</h6>
                <a
                  href="https://davbistupur.org/"
                  className="blog project__btn btn"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

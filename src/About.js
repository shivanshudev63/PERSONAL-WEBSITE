import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpeg";

function About() {
  //up to top btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="about component__space " id="About">
      <div className="container">
        <div className="row">
          <div className="col__2 about_pic">
            <img src={aboutImg} alt="" className="about__img" />
            <div className="thoughts">
              <h2>Your thoughts are your endless workspace.</h2>
              <h4>Write without fear. Edit without mercy.</h4>
            </div>
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I'm a second-year undergrad pursuing B.E. An emerging Web
                Developer and a Programmer. I love practicing Competitive
                Programming and working on Front-end as well as Back-end
                projects. I look forward to opportunities to learn new skills
                and enhance them. New ideas are always welcomed.
              </p>
              <p className="about__text p__color">
                Apart from this, I also love to watch movies, listen music and
                play video games. In the field of sports I love badminton and
                football. One of my hobbies is to travel to different places,
                learn about different culture and adapt whatever I find is good
                for my betterment.
              </p>
              <p className="about__text p__color">
                Talking about my soft skills:
                <br />
                Leadership skills
                <br />
                Problem-solving ability
                <br />
                Computer Proficiency <br />
                Time-management
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1mJJ_qhOujJl8puLnFLTZyfMm7FvzYnHV/view?usp=sharing" target="_blank">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom__to__top">
        <a href="#" className="bottom__to__top">
          <i class="fas fa-angle-double-up"></i>
        </a>
      </div>
    </div>
  );
}

export default About;

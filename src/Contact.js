import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('gmail','template_u55lkgo',e.target,'i5WCqY-18c8GzqZ0y')
    .then((result)=>{
      console.log(result.text);
      window.alert('Message sent successfully.')
    }, (error)=>{
      window.alert(error.text);
    });
    e.target.reset()
    
  }
  
  return (
    <div className="contact" id="Contact">
      <div className="heading">
        <h1 className="heading">Contact</h1>
      </div>
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="input__box">
              <form onSubmit={sendEmail}>
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
                name="name"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
                name="email"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
                name="subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h2 className="hire__text"> Get In touch </h2>
              <p className="hire__text">
                {" "}
                I am available for freelance work. Connect with me via phone.{" "}
              </p>

              <h3> My Address </h3>
              <div class="hire__text font__icon">
                <i class="fas fa-map-marker-alt"></i>{" "}
                <span>Bangalore, India</span>
              </div>
              <div class="hire__text font__icon">
                <i class="fas fa-mobile-alt"></i>
                <span>6203108867</span>
              </div>
              <div class="hire__text font__icon">
                <i class="far fa-envelope"></i>
                <span>shivanshu.dev63@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center social-icons">
        <ul class="horizontal-list">
          <li>
            <a href="https://www.linkedin.com/in/shivanshu-dev-5b84bb214/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/shivanshu.dev/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/shivanshudev63" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>

          <li>
            <a href="https://wa.me/916203108867" target="_blank">
              <i class="fab fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;

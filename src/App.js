import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
import Project from "./Project.js";
import Education from "./Education.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

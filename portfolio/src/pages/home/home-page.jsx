import React from "react";
import logo from "../../assets/images/catriece.png";
import Languages from "../../components/languages.component";
import MyButton from "../../components/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (e) => navigate(`/${e.target.name}`);

  return (
    <div id="home-div">
      {/* <div role="navigation" id="navigation-div">
        <a href="/" className="navigation">
          Home
        </a>
        <a href="/aboutme" className="navigation">
          About Me
        </a>
        <a href="/projects" className="navigation">
          Projects
        </a>
        <a href="/contactme" className="navigation">
          Let's Connect
        </a>
      </div> */}
      <main>
        <section id="logo-div">
          <img id="logo" src={logo} alt="Catriece Memoji" />
        </section>
        <section>
          <h1>I'm Catriece</h1>
        </section>
        <h2>coding dreams into reality</h2>
        {/* <Languages height={"45px"} width={"45px"} /> */}
        <section id="button-div">
          <button name="projects" onClick={handleClick}>
            Projects
          </button>
          <button name="aboutme" onClick={handleClick}>
            About Me
          </button>
          <button name="contactme" onClick={handleClick}>
            Contact Me
          </button>
        </section>
        <Languages height={"45px"} width={"45px"} />
      </main>
      <div id="footer-div">
        <footer>Catriece Gilbert Codes &copy;</footer>
      </div>
    </div>
  );
};

export default HomePage;

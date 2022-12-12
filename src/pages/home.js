import React from "react";
import heroimg from "../images/heroimg.png";
import aboutimg from "../images/My project.jpg";
import html from "../images/html5.png";
import css from "../images/css3.png";
import js from "../images/js.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";

function home() {
  return (
    <div>
      <section className="hero-sec">
        <main className="profile">
          <div className="names">
            <h3>Hello, My name is, </h3>
            <h1>Nnaji Raymond Arinzechukwu</h1>
            <div className="border-class">
              <h2 className="border"></h2>
              <p>Am a front-end programmer</p>
            </div>
            <button className="btn btn-more">Know more</button>
          </div>
          <img src={heroimg} alt="" />
        </main>
      </section>

      <section className="about">
        <main className="about-main">
          <img src={aboutimg} alt="" />
          <article className="about-me-sec">
            <div className="border-class about-me-border">
              <h3 className="border about-border-line"></h3>
              <h1>about me</h1>
            </div>
            <h2>Who am i,</h2>
            <p>
              My name is Nnaji Raymond Arinzechukwu am a front-end
              programmar,base in Lagos, Nigeria with one (1) year exprience. Am
              passionate and dedicated about my work. Within my one year of
              learning front-end programming i have been able to have a grip of
              nice user interface design, build website using{" "}
              <span className="span">React.js. </span> and also ES6
            </p>
          </article>
        </main>
      </section>
      <section className="experience">
        <main className="my-experience-sec">
          <main className="experience--top">
            <div className="border-class experience--border">
              <h4 className="border experience--border-line"></h4>
              <h2>My Experiences</h2>
            </div>
            <p>This are the Tecnologies i have worked with so far</p>
          </main>
          <article className="skill-icons">
            <div className="html">
              <img src={html} alt="" />
            </div>
            <div className="css">
              <img src={css} alt="" />
            </div>
            <div className="js">
              <img src={js} alt="" />
            </div>
            <div className="react">
              <img src={react} alt="" />
            </div>
            <div className="tail">
              <img src={tailwind} alt="" />
            </div>
          </article>
        </main>
      </section>
    </div>
  );
}

export default home;

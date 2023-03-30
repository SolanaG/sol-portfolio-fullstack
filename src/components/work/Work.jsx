import React from "react";
import "./work.css";
import IMG1 from "../../assets/memes.png";
import IMG2 from "../../assets/magicspoon.png";
import IMG3 from "../../assets/verdevolver.png";

const Work = () => {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="container work__container">
        <article className="work__item">
          <div className="work__item-img">
            <img src={IMG1} alt="Memes" />
          </div>
          <h3>Generador de Memes</h3>
          <h5>Teamwork</h5>
          <div className="work__item-cta">
            <a
              href="https://github.com/Lupe-Accareddu/Editor-de-Memes"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://lupe-accareddu.github.io/Editor-de-Memes/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="work__item">
          <div className="work__item-img">
            <img src={IMG2} alt="MagicSpoon" />
          </div>
          <h3>Magic Spoon</h3>
          <h5>Personal work</h5>
          <div className="work__item-cta">
            <a
              href="https://github.com/SolanaG/Food-PI"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/SolanaG/Food-PI"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="work__item">
          <div className="work__item-img">
            <img src={IMG3} alt="VerdeVolver" />
          </div>
          <h3>VerdeVolver</h3>
          <h5>Teamwork</h5>
          <div className="work__item-cta">
            <a
              href="https://github.com/natalia-iglesias/VerDeVolver---PF"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://ver-de-volver-pf.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Work;

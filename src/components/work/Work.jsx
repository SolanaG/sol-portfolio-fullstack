import React from "react";
import "./work.css";
import IMG1 from "../../assets/memes.png";

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
          <a href="https://github.com/SolanaG" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribbble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="work__item">
          <div className="work__item-img">
            <img src={IMG1} alt="VerdeVolver" />
          </div>
          <h3>VerdeVolver</h3>
          <a href="https://github.com/SolanaG" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribbble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="work__item">
          <div className="work__item-img">
            <img src={IMG1} alt="Magic Spoon" />
          </div>
          <h3>Magic Spoon</h3>
          <a href="https://github.com/SolanaG" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribbble.com/Alien_pixels"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Work;

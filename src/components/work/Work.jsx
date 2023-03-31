import React from "react";
import "./work.css";
import IMG1 from "../../assets/memes.png";
import IMG2 from "../../assets/magicspoon.png";
import IMG3 from "../../assets/verdevolver.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Editor de Memes",
    work: "Teamwork",
    github: "https://github.com/Lupe-Accareddu/Editor-de-Memes",
    demo: "https://lupe-accareddu.github.io/Editor-de-Memes/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Magic Spoon",
    work: "Personal work",
    github: "https://github.com/SolanaG/Food-PI",
    demo: "https://github.com/SolanaG/Food-PI",
  },
  {
    id: 3,
    image: IMG3,
    title: "VerdeVolver",
    work: "Teamwork",
    github: "https://github.com/natalia-iglesias/VerDeVolver---PF",
    demo: "https://ver-de-volver-pf.vercel.app/",
  },
];

const Work = () => {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="container work__container">
        {data.map(({ id, image, title, work, github, demo }) => {
          return (
            <article key={id} className="work__item">
              <div className="work__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{work}</h5>
              <div className="work__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Work;

import React from "react";
import "./experience.css";
import { VscCircleSmallFilled } from "react-icons/vsc";
import { useState } from "react";

const buttons = [
  { text: "Henry" },
  { text: "Henry" },
  { text: "Henry" },
  { text: "Ada ITW" },
];
const descriptions = [
  {
    title: "Full Stack Developer",
    company: "Henry",
    link: "https://www.soyhenry.com/",
    date: "Feb 2023 - Mar 2023",
    pos_description: [
      "Educational Contract",
      "Plan, design, and built an Ecological website, related to garbage recycling.",
      "Developed with React, Express, Chakra UI.",
      "Agile methodologies, team work, proactivity, git flow, creativity.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Henry",
    link: "https://www.soyhenry.com/",
    date: "Jan 2022 - Feb 2022",
    pos_description: [
      "Educational Contract",
      "Plan, design, and develop a cooking recipes website using JavaScript, React, Express, PostgreSQL and CSS.",
      "Proactivity, problem resolution.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Henry",
    link: "https://www.soyhenry.com/",
    date: "Nov 2022 - Dec 2022",
    pos_description: [
      "Educational Contract",
      "Design and develop an Rick&Morty web application with React Js.",
      "Fast learning.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Ada ITW",
    link: "https://adaitw.org/",
    date: "Aug 2021 - Sept 2021",
    pos_description: [
      "Educational Project",
      "Design and develop a website to edit memes.",
      "Team work, problem resolution, adaptability.",
    ],
  },
];
const Experience = () => {
  const [index, setIndex] = useState(0);
  const activeClass = "active";
  console.log(typeof index);
  const handleClick = (evt) => {
    setIndex(evt.target.id);
  };
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="container experience__inner">
        <div className="experience__tab">
          {buttons.map((button, i) => {
            return (
              <button
                key={button.text + i}
                id={i}
                className={
                  index === i.toString()
                    ? `simple-button ${activeClass}`
                    : "simple-button"
                }
                onClick={handleClick}
              >
                {button.text}
              </button>
            );
          })}
        </div>

        <div className="experience__description">
          <h3>
            <span>{descriptions[index].title}</span>
            <span className="experience__description-company">
              &nbsp;@&nbsp;
              <a
                href={descriptions[index].link}
                className="inline-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {descriptions[index].company}
              </a>
            </span>
          </h3>
          <p>{descriptions[index].date}</p>

          <div>
            <ul>
              {descriptions[index].pos_description.map((desc) => {
                return (
                  <li key={desc}>
                    <VscCircleSmallFilled />
                    {desc}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

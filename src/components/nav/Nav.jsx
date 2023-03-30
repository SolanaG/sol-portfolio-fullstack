import React from "react";
import "./nav.css";
import { GiSpotedFlower } from "react-icons/gi";
import { GiMermaid } from "react-icons/gi";
import { RxCode } from "react-icons/rx";
import { BsHexagon } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import { GiHummingbird } from "react-icons/gi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className={`nav-links ${isOpen && "open"}`}>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <BsHexagon /> home
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("about")}
          className={activeNav === "about" ? "active" : ""}
        >
          <GiMermaid /> about
        </a>
        <a
          href="#work"
          onClick={() => setActiveNav("work")}
          className={activeNav === "work" ? "active" : ""}
        >
          <RxCode /> work
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("experience")}
          className={activeNav === "experience" ? "active" : ""}
        >
          <GiSpotedFlower /> experience
        </a>
        <a
          href="#skillsAndTools"
          onClick={() => setActiveNav("skillsAndTools")}
          className={activeNav === "skillsAndTools" ? "active" : ""}
        >
          <CgToolbox /> skills & tools
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("contact")}
          className={activeNav === "contact" ? "active" : ""}
        >
          <GiHummingbird /> contact
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import "./header.css";
import CTA from "./CTA";
import BOTANIC from "../../assets/flowers.jpg";
import HeaderSocials from "./HeaderSocials";
import HeaderScrollDown from "./HeaderScrollDown";
import Nav from "../nav/Nav";

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>Solana Gómez</h1>
        <h3 className="text-light">Full Stack Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={BOTANIC} alt="botanic" />
        </div>
        <HeaderScrollDown />
      </div>
    </header>
  );
};

export default Header;

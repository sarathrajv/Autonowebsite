import React from "react";
import socialmedia from "./socialmedias.png";

const Footer = () => {
  return (
    <div className="footermaindiv">
      <h1 className="footerhead">AUTONO DEVOLOPER</h1>
      <p className="footerhead1">
        AUTONO Developer is a blog website where you will find great
        tutorials on web <br /> &nbsp; design and development. Here each
        tutorial is beautifully described step by step <br />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        autono Developer with the required source code.
      </p>
      <img className="footerimage" width="200px" src={socialmedia} alt="" />
    </div>
  );
};

export default Footer;

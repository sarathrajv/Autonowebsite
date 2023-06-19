import React from "react";
import fourthimage from "./fourthimg.webp";
const MainPart4 = () => {
  return (
    <div className="mainpart4maindiv">
      <div className="mainpart4image" >
        <img className="main4partimage" src={fourthimage} alt="" />
      </div>
      <div className="fourthpartinfo">
        <h1 className="forthparthead">REAL-TIME <br /> INFORMATION</h1>
        <p className="forthpartpara">
          I'm a paragraph. Click here to add your own <br /> text and edit me. It’s
          easy. Just click “Edit Text” or double click <br /> me to add your own
          content and make changes to the font. I’m a <br /> great place for you to
          tell a story and let your users know a little <br /> more about you.
        </p>
        <input
          className="mainpart3lastbutton"
          type="button"
          value="Read More"
        />
      </div>
    </div>
  );
};

export default MainPart4;

import React from "react";
import thirdimg from "./84770f_3cc097e7503b4ed498e350c6618ef956~mv2.webp";
const MainPart3 = () => {
  return (
    <div className="mainpart3maindiv">
      <div className="mainpart3subdiv">
        <h3 className="mainpart3texts">SERVICES</h3>
        <h2 className="mainpart3texts1">We Deliver Exceptional Products and Services Around the World</h2>
        <h1 className="mainpart3texts2">AUTONOMOUS <br /> DRIVING</h1>
        <p className="mainpart3texts3">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <input className="mainpart3lastbutton" type="button" value="Read More" />
      </div>

      <div>
        <img className="thirdimgmainpart3" src={thirdimg} alt="" />
      </div>
    </div>
  );
};

export default MainPart3;

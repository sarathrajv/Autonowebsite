import React from "react";
import fifthimg from "./fifthimg.webp";
const MainPart5 = () => {
  return (
    <div className="fifthmaindiv">
      <div className="fourthpartinfo">
        <h1 className="fifthdivhead">
          PERCEPTION <br /> ENABLED
        </h1>
        <p className="fifthdivpara">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <input
          className="mainpart3lastbutton"
          type="button"
          value="Read More"
        />
      </div>
      <div className="fifthdivlastimagediv">
      <img className="fifthdivlastimage" src={fifthimg} alt="" />
      </div>
    </div>
  );
};

export default MainPart5;

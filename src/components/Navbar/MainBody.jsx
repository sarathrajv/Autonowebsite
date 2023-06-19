import React from "react";

import secondimage from './secondimage.jpg'
const MainBody = () => {
  return (
    <div className="mainbodypart2">
        <div className="mainbodypart2secdiv">
      <h1 className="headvision">VISION</h1>
      <h3 className="headvision2">We’re Changing the Way the World Thinks About Cars</h3>
      <p className="headvision3">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </p>
      </div>
      <div>
        <img className="ajith" src={secondimage} alt="" />

      </div>

    </div>
  );
};

export default MainBody;

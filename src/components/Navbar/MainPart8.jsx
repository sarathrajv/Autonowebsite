import React from "react";
import photo1 from './General_Transport.webp'
import photo2 from './IDI_Software.webp'
import photo3 from './Imogen_Cars.webp'
import photo4 from './Tri-Nex .webp'

const MainPart8 = () => {
  return (
    <div className="eighthpartmaindiv">
      <div className="eighthpartsubdiv1">
        <h3 className="eighthhead">INDUSTRY</h3>
        <h2 className="eighthhead1">
          Our <br />
          Partners
        </h2>
        <p className="eighthpara">
          Click here to add your own content and customize the text. This is a
          great place to tell a story about your company and let your users know
          a little more about the company's history, the team's background, or
          any other information you'd like to share. Just click "Edit Text" to
          get started.
        </p>
      </div>
      <div className="eighthpartsubdiv2">
      <div className="eighthpartsub3" >
        <img width="100px" src={photo1} alt="" />
        <h3 className="eighthpara">GENERAL_TRANSPORT</h3>
        <img width="100px" src={photo2} alt="" />
        <h3 className="eighthpara" >IDI SOFTWARE</h3>

      </div>
      <div className="eighthpartsub4">
      <img width="100px" src={photo3} alt="" />
        <h3 className="eighthpara" >IMOGEN CARS</h3>
        <img width="150px" src={photo4} alt="" />
        <h3 className="eighthpara" >TRI-NEX</h3>
        
      </div>
      </div>
    </div>
  );
};

export default MainPart8;

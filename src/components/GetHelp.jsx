import React from "react";
import "./GetHelp.css";
import headerImg from "../assets/2nd.png";
import helpImg from "../assets/helpImg.png"
import third from "../assets/3rd.png"

const GetHelp = () => {
  return (
    <div className="getHelp">
      <div>
        <img src={headerImg} className="helpHeaderImg" alt="header" />
      </div>
      <div className="helpHeader">Get Help</div>
      <div className="helpContent">
        Spotted something in your neighborhood that needs a<br/>helping hand? It
        could be a family struggling or a broken<br/> bench.<br/><br/> This site connects you
        with awesome local groups ready<br/> to assist. Share what you see, and
        together, we can make<br/> a real difference right here at home.<br/>
        <button type="button" className="getHelpButton">Get Help</button>
      </div>
      <div className="helpImg">
        <img src={helpImg} className="imgHelp"/>
      </div>
      <img src={third} className="thirdImg"/>
    </div>
  );
};

export default GetHelp;

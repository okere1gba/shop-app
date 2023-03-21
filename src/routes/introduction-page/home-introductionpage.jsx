import React from "react";
import "./introductionpage.scss";
import image from "../../asset/designers.jpg";
import { useNavigate } from "react-router-dom";

const HomeIntroductionPage = () => {
  const gotosigninPage = useNavigate();

  return (
    <div className="flex">
      <div className="wrapper1">
        <div className="intro1">
          <span className="hello1">Wellcome</span>
          <h1 className="introtext1">
            I'm a <span className="insidestyles1">Designer</span>
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            placeat iusto illo quas quod nisi quos distinctio numquam labore
            culpa!
          </p>
        </div>

        <div className="bttn1">
          <button onClick={() => gotosigninPage("/login")} className="buttons1">
            Register
          </button>
          <button className="buttons1">Signup</button>
        </div>
      </div>

      <div className="imagebox">
        <img className="images" src={image} alt="" />
      </div>
    </div>
  );
};

export default HomeIntroductionPage;

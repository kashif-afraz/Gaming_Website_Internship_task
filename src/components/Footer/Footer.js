import React from "react";
import "./Footer.css";
import Diamond from "../../assets/diamand-icon.a4b6ba360c922d6f9027.png";
import Discord from "../../assets/discord-button.5b6dc95be8af699039b7.png";
import Insta from "../../assets/insta.png";
import Tweeter from "../../assets/tweeter.png";
const Footer = () => {
  return (
    <>
      <div id="footer-border">
        <div className="container mt-3 pt-1">
          <div className="row pb-2">
            <div className="col-md-4  text-md-start">
              <img src={Diamond} alt="" className="h-100 w-50" />
            </div>
            <div className="col-md-4 text-center align-self-end">
              <img src={Discord} alt="" className="h-100 w-50" />
            </div>

            <div className="col-md-4  text-md-end align-self-end">
              <span className="">
                <img src={Insta} alt="" className="" />
              </span>
              <span className="">
                <img src={Tweeter} alt="" className="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row ">
          <div className="col-md-12 mb-3">
            <div className="items-center">
              <p className="text-sm my-2 text-light">
                ©COPYRIGHT-2022 METASAVIORS. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

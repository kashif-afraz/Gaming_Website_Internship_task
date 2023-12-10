import React from "react";
import AboutImage from "../../assets/FONDUANCFAICBA-min.837f93f4df558d75b9bc.png";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div className="" id="join-rem">
        <div className="mx-auto px-10 container ">
          <div className="row gx-5">
            <div className="col-md-6">
              <h1 className="fw-bold display-3 pb-6 text-light text-start">
                ABOUT <span className="text-danger">US</span>{" "}
              </h1>
              <p className=" fs-5 pb-6 text-light text-start">
                Metasaviors is a collection of 8004 soldiers of the Metaverse.
                There are 4 factions of heroes, which are stored as ERC-721
                tokens on the ethereum blockchain ready to save the metaverse.
              </p>
              <p className=" fs-5 pb-6 text-light text-start">
                After a major economic crisis, the richest part of the
                population has transferred their consciousness into the
                metaverse, but a faulty program corrupted the upload process
                causing some humans to turn into mindless machines with only one
                goal: to spread chaos in the metaverse. We call these evil
                beings the Deviants. Fortunately, the creators of The Metaverse
                created a peacekeeping program called the Metasaviors. It’s time
                to find out if you are one of the 8004 soldiers that have been
                chosen to save the metaverse.
              </p>
              <p className=" fs-5 pb-6 text-light text-start">
                Our vision is to create a “Metaverse-Native” entertainment
                franchise. Think of it like a Star Wars, Pokemon or Marvel on
                the blockchain, where holding an NFT gives you the right to vote
                on the future of the franchise and a percentage of the profit
                generated. Together with our community we want to disrupt the
                entertainment industry and push the boundaries of innovation in
                the metaverse.
              </p>

              <button className="btn btn-lg nav-last-link float-md-start font-semibold py-3 px-6 mt-4 rounded">
                JOIN OUR DISCORD
              </button>
            </div>
            <div className="col-md-6">
              <img src={AboutImage} alt="" className="w-100 align-self-start" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row h-5 pt-5 pb-5">
          <div class="col-md-6  pb-5" id="dotted"></div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

import React from "react";
import GenisImg from "../../assets/GENIS.d6b0e8564ac19bc8787e.png";
const TheArtist = () => {
  return (
    <div className="">
      <div className="mx-auto px-10 container ">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold  pb-0 text-danger text-center">
              THE ARTIST
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto px-14 container">
        <div className="row gx-5">
          <div className="col-md-6 align-items-center d-flex flex-row">
            <div className="flex itms-center">
              <div className="text-center">
                 <p className="text-light" id="artist-col">
              The lead artist for the MetaSaviors collection is Genís Salvadó
              Esteves. Genís has been creating sci-fi / Metaverse genre 3D art
              before it got heavily popularized in the NFT space and the recent
              name change of Facebook. He is highly skilled in creating both
              characters and environments in Blender. In addition, he has been
              involved in numerous successful sold out NFT project including
              cybercrew.nft. Genís has done big collaborations with music labels
              in the past.
            </p>
            <button className="btn btn-lg nav-last-link  fw-bold py-1 px-6 mt-4 rounded">
              GENIS ON INSTAGRAM
            </button>
              </div>
            </div>
           
          </div>
          <div className="col-md-6">
            <div className="pb-6 col-md-9 offset-2  px-sm-6 px-md-0 px-lg-0 px-xl-12 ">
              <img src={GenisImg} alt="Genis" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheArtist;

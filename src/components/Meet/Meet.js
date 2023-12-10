import React from "react";
import Perry from "../../assets/Team-Perry-500.b675392954e43b933623.png";
import John from '../../assets/Team-John-500.1519bcd50fc63cf29b73.png';
import Josh from '../../assets/Team-Steve-500.821f3739dec6e7f4df02.png';
import Parker from '../../assets/Team-Ewan-500.8f98432e92628e322e5d.png';
import Genis from '../../assets/Team-Genis-500.0e6476a583389bf06a6d.png';
import Denny from '../../assets/Team-Danny-500.91fdd8688ee74f15a8bc.png';
import Winston from '../../assets/Team-Winston-500.a38a9ed5d427a1b1bc66.png'
const Meet = () => {
  return (
    <>
      <div className="mx-auto px-14 container ">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="text-center text-light mb-2">
              MEET THE <br></br>METASAVIORS TEAM
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-2">
            <p className="text-center text-light mb-2 mb-2 fw-semibold">
              The MetaSaviors team is a collective of experts from different
              backgrounds ranging from<br></br> marketing to blockchain
              development.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-2">
            <p className="text-center text-light mb-2 fw-semibold">
              The idea of disrupting the entertainment industry is what brought
              these individuals from all of <br /> the world together to join
              forces.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-2">
            <p className="text-center text-light mb-2 fw-semibold">
              We are proud to present leadership team of the MetaSaviors to you
              below.
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-3 w-full w-md-6 w-lg-3 mb-8 px-6 px-sm-6 px-lg-4">
            <a href="/">
              <img src={Perry} alt="" className="w-100" />
            </a>
            <div className="mt-3">
              <h3 className="text-light text-start mb-0">PERRY</h3>
              <div className="text-secondry fw-normal mb-2 text-start">The Arthitect</div>
            </div>
          </div>

          <div className="col-md-3 col-md-3 w-full w-md-6 w-lg-3 mb-8 px-6 px-sm-6 px-lg-4">
            <a href="/">
              <img src={John} alt="" className="w-100" />
            </a>
            <div className="mt-3">
              <h3 className="text-light text-start mb-0">JOHN</h3>
              <div className="text-secondry fw-normal mb-2 text-start">The marketing wizard</div>
            </div>
          </div>

          <div className="col-md-3 col-md-3 w-full w-md-6 w-lg-3 mb-8 px-6 px-sm-6 px-lg-4">
            <a href="/">
              <img src={Josh} alt="" className="w-100" />
            </a>
            <div className="mt-3">
              <h3 className="text-light text-start mb-0">JOSH</h3>
              <div className="text-secondry fw-normal mb-2 text-start">The technician</div>
            </div>
          </div>

          <div className="col-md-3 col-md-3 w-full w-md-6 w-lg-3 mb-8 px-6 px-sm-6 px-lg-4">
            <a href="/">
              <img src={Parker} alt="" className="w-100" />
            </a>
            <div className="mt-3">
              <h3 className="text-light text-start mb-0">Parker</h3>
              <div className="text-secondry fw-normal mb-2 text-start">The discord lord</div>
            </div>
          </div>
        </div>


        <div className="row pt-5">
          <div className="col-md-3 w-full w-md-6 w-lg-3 mb-8 px-6 px-sm-6 px-lg-4">
            <a href="/">
              <img src={Genis} alt="" className="w-100" />
            </a>
            <div className="mt-3">
              <h3 className="text-light text-start mb-0">Genis</h3>
              <div className="text-secondry fw-normal mb-2 text-start">The art mad man</div>
            </div>
          </div>

          <div className="col-md-3 col-md-3 w-full w-md-6 w-lg-3 mb-8 px-6 px-sm-6 px-lg-4">
            <a href="/">
              <img src={Denny} alt="" className="w-100" />
            </a>
            <div className="mt-3">
              <h3 className="text-light text-start mb-0">DANNY</h3>
              <div className="text-secondry fw-normal mb-2 text-start">The cyber doc</div>
            </div>
          </div>

          <div className="col-md-3 col-md-3 w-full w-md-6 w-lg-3 mb-8 px-6 px-sm-6 px-lg-4">
            <a href="/">
              <img src={Parker} alt="" className="w-100" />
            </a>
            <div className="mt-3">
              <h3 className="text-light text-start mb-0">TRAVIS</h3>
              <div className="text-secondry fw-normal mb-2 text-start">The raid leader </div>
            </div>
          </div>

          <div className="col-md-3 col-md-3 w-full w-md-6 w-lg-3 mb-8 px-6 px-sm-6 px-lg-4">
            <a href="/">
              <img src={Winston} alt="" className="w-100" />
            </a>
            <div className="mt-3">
              <h3 className="text-light text-start mb-0">WINSTON</h3>
              <div className="text-secondry fw-normal mb-2 text-start">The community leader</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;

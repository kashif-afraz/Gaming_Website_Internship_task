import React from "react";
import "./faq.css";
const Faq = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 fw-bold display-5 mb-4 text-light text-start">
            FAQ
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12 " id="border-drop">
            <div class="dropdown ">
              <li
                class="dropdown-toggle list-unstyled text-light text-start"
                type="input"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <a href="/" className="text-decoration-none text-light">
                  {" "}
                  How many MetaSaviors will be available?{" "}
                </a>
              </li>
              <ul class="dropdown-menu bg-transparent ">
                <li>
                  <li class="dropdown-item text-light list-unstyled bg-transparent ">
                    There will be 8004 MetaSaviors availble.
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12 " id="border-drop">
            <div class="dropdown ">
              <li
                class="dropdown-toggle list-unstyled text-light text-start"
                type="input"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <a href="/" className="text-decoration-none text-light">
                  When is the official launch?
                </a>
              </li>
              <ul class="dropdown-menu bg-transparent ">
                <li>
                  <li class="dropdown-item text-light bg-transparent">
                    Our team is working hard behind to assemble an army of 8004
                    high quality NFT’s.
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12 " id="border-drop">
            <div class="dropdown ">
              <li
                class="dropdown-toggle list-unstyled text-light text-start"
                type="input"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                How do I become a MetaSavior?
              </li>
              <ul class="dropdown-menu bg-transparent ">
                <li>
                  <li class="dropdown-item text-light list-unstyled bg-transparent">
                    On the day of the launch you’ll be able to connect your
                    MetaMask wallet to our site to mint your MetaSavior.
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12 " id="border-drop">
            <div class="dropdown ">
              <li
                class="dropdown-toggle list-unstyled text-light text-start"
                type="input"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Which wallet do I need to Mint a MetaSavior?
              </li>
              <ul class="dropdown-menu bg-transparent ">
                <li>
                  <li class="dropdown-item text-light bg-transparent">
                    You can only mint a MetaSavior with a MetaMask wallet.
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12 " id="border-drop">
            <div class="dropdown ">
              <li
                class="dropdown-toggle list-unstyled text-light text-start"
                type="input"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                What will the mint price be?
              </li>
              <ul class="dropdown-menu bg-transparent ">
                <li>
                  <li class="dropdown-item text-light bg-transparent">
                    We will announce the mint price close to the launch date.
                    Keep an eye on our discord channel to stay up to date on the
                    latest developments.
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12 " id="border-drop">
            <div class="dropdown ">
              <li
                class="dropdown-toggle list-unstyled text-light text-start"
                type="input"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Which wallet do I need to Mint a MetaSavior?
              </li>
              <ul class="dropdown-menu bg-transparent ">
                <li>
                  <li class="dropdown-item text-light bg-transparent">
                    You can only Mint a MetaSavior with a MetaMask wallet.
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12 " id="border-drop">
            <div class="dropdown ">
              <li
                class="dropdown-toggle list-unstyled text-light text-start"
                type="input"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Where can I view my NFT’s?
              </li>
              <ul class="dropdown-menu bg-transparent ">
                <li>
                  <li class="dropdown-item text-light bg-transparent">
                    You can connect your MetaMask wallet to opensea to view your
                    NFT’s. Later we’ll make your NFT’s compatible with existing
                    MetaVerses.
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12 mb-5" id="border-drop">
            <div class="dropdown ">
              <li
                class="dropdown-toggle list-unstyled text-light text-start"
                type="input"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                How can I receive a Deviant?
              </li>
              <ul class="dropdown-menu bg-transparent ">
                <li>
                  <li class="dropdown-item text-light bg-transparent">
                    After the launch of the project, NFT holders will be able to
                    stake their MetaSavior in a members-only portal where they
                    will receive a FREE Deviant.
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

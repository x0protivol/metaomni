import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ethers } from 'ethers'
import Web3Modal from "web3modal"
import { FaWallet } from "react-icons/fa";
import Hanger from "../../images/navIcon.svg";
import NvaBrand from "../../images/NvaBrand.svg";
import "./NavBar.scss";
function NavBar() {

  const connectWallet = async () => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner();


  }

  return (
    <div className="nav__area">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={NvaBrand} alt="" />
            </a>
            <div className="nav__mid__title">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Shop
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link current__voting" href="#">
                    Current votings
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Last collection</a>
                </li>
              </ul>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link leftLink" aria-current="page" href="#">
                    <FaShoppingCart className="navIcon" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link midLink" href="#">
                    <img src={Hanger} alt="" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link rightLink" onClick={() => connectWallet()}>
                    <FaWallet className="navIcon me-3" />
                    Connect wallet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

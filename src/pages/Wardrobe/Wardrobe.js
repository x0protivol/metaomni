import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import currentVot from "../../images/currentVottingCard.png";
import { BsArrowRight } from "react-icons/bs";

import "./Wardrobe.scss";

function Wardrobe() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="current__voting__card mt-5 pt-5">
          <div className="current__voting__card__title d-flex flex-column">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8">
                <h1>Shose 53045 details</h1>
                <div className="row card__wrapped shadow-lg mt-5 mb-5">
                  <div className="col-md-6 p-0">
                    <div className="relative__image">
                    <img src={currentVot} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="desc-div">
                      <div className="card__content pt-5">
                        <div className="card__top">
                          <h5 className="m-0">Shoes 53045</h5>
                          <div className="card__items d-flex">
                            <div className="card__top__left product-desc">
                              <small>caMIX'AIR X RN COLLECTIBLEption</small>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed eget finibus sapien. Morbi
                                non tempus ante, et malesuada orci. Nullam id
                                blandit arcu, et rutrum erat. Maecenas vitae
                                semper est, ut molestie nibh. Mauris at dapibus
                                orci. Phasellus sit amet erat volutpat, aliquet
                                nunc nec, cursus elit.
                              </p>
                              <h6>10670 votes</h6>
                              <small>Ends in 2 days</small>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div className="card__top__right">
                                <div className="top__rate">
                                  <small>SUPPLY</small>
                                  <h6>5/10</h6>
                                </div>
                                <div className="mid__rate">
                                  <small>blockchainn</small>
                                  <h6>Lukso</h6>
                                </div>
                                <div className="mid__rate">
                                  <small>CREATOR</small>
                                  <h6>Lukso.eth</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card__btn__area">
                        <button className="card__btn d-flex align-items-center justify-content-center">
                          <BsArrowRight className="ms-3" /> Sell
                        </button>
                      </div>
                      <div className="card__btn__area">
                        <button className="card__btn d-flex align-items-center justify-content-center">
                            <BsArrowRight className="ms-3" /> Transfer 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wardrobe;

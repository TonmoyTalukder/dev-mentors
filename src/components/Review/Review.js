import React from 'react';
import { Link } from 'react-router-dom';
import './Review.css';
import image1 from "../../images/img-1.jfif"
import image2 from "../../images/img-2.jpg"
import image3 from "../../images/img-3.jfif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
// import { faStar } from '@fortawesome/free-regular-svg-icons';
// import { AiOutlineStar } from "react-icons/fa";

const Review = () => {
    const element = <FontAwesomeIcon icon={faStar} />
    const element2 = <FontAwesomeIcon icon={faStarHalfAlt} />
    // const element3 = <FontAwesomeIcon icon={regular('faStar')} />
    // const element3 = <FontAwesomeIcon icon={AiOutlineStar} />
    return (
        <div className="mb-5 p-5">
            <h2 className="m-5 p-3 font-monospace fs-1 textdeco">Students' Review</h2>
           <div className="card-group">
              <div className="card mx-2 border-0 rounded-3 card-custom-style">
                <img src={image1} className="card-img-top img-fluid rounded-circle img-width img-gray" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">
                        Sam Smith
                  </h5>
                  <p className="card-text">That's a really good and outstanding coaching Center. In this center, many qualified and best teachers are teaching here. Salute you all.</p>
                </div>
                <div className="card-footer">
                <div class="container px-1">
                    <div class="row g-1">
                      <div class="col-lg-4 col-md-12 col-sm-12 p-0">
                        <div class="p-0">
                          <button  type="button" className="btn btn-secondary m-2">
                            <Link className="text-light text-decoration-none" to="/about">About Us</Link>
                          </button>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-12 col-sm-12 p-0 align-self-center">
                        <div class="p-0">{element}{element}{element}{element}{element2}</div>
                      </div>
                      <div class="col-lg-4 col-md-12 col-sm-12 p-0">
                        <div class="p-0">
                          <button  type="button" className="btn btn-secondary m-2">
                            <Link className="text-light text-decoration-none" to="/findus">Find Us</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mx-2 border-0 rounded-3 card-custom-style">
                <img src={image2} className="card-img-top img-fluid rounded-circle img-width img-gray" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Jayden Christiansen</h5>
                  <p className="card-text">I was a student of there, now being a teacher feels kinda nostalgic.</p>
                </div>
                <div className="card-footer">
                <div class="container px-1">
                    <div class="row g-1">
                      <div class="col-lg-4 col-md-12 col-sm-12 p-0">
                        <div class="p-0">
                          <button  type="button" className="btn btn-secondary m-2">
                            <Link className="text-light text-decoration-none" to="/about">About Us</Link>
                          </button>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-12 col-sm-12 p-0 align-self-center">
                        <div class="p-0">{element}{element}{element}{element}{element2}</div>
                      </div>
                      <div class="col-lg-4 col-md-12 col-sm-12 p-0">
                        <div class="p-0">
                          <button  type="button" className="btn btn-secondary m-2">
                            <Link className="text-light text-decoration-none" to="/findus">Find Us</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mx-2 border-0 rounded-3 card-custom-style">
                <img src={image3} className="card-img-top img-fluid rounded-circle img-width img-gray" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Monique Witting</h5>
                  <p className="card-text">The best couching center for science students who wants to learn computer programming, design etc</p>
                </div>
                <div className="card-footer">
                  <div class="container px-1">
                    <div class="row g-1">
                      <div class="col-lg-4 col-md-12 col-sm-12 p-0">
                        <div class="p-0">
                          <button  type="button" className="btn btn-secondary m-2">
                            <Link className="text-light text-decoration-none" to="/about">About Us</Link>
                          </button>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-12 col-sm-12 p-0 align-self-center">
                        <div class="p-0">{element}{element}{element}{element}{element2}</div>
                      </div>
                      <div class="col-lg-4 col-md-12 col-sm-12 p-0">
                        <div class="p-0">
                          <button  type="button" className="btn btn-secondary m-2">
                            <Link className="text-light text-decoration-none" to="/findus">Find Us</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Review;
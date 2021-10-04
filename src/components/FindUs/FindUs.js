import React from 'react';
import './FindUS.css';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../images/logo.png';

const FindUs = () => {
    const element = <FontAwesomeIcon icon={ faLocationArrow }/>

    return (
        <div>
            <div className="container">
                <h2 className="font-monospace fs-1 textdeco">Explore us</h2>
                <div className="container container-bg rounded-3 shadow p-3 my-5">
                    <div className="container p-5 rounded container-bg ">
                        <div className="container p-5 my-5 rounded container-bg text-light">
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-4 col-sm-12">
                                        <img className="mx-auto w-50" src={img} alt="" />
                                        <br />{element}
                                        <h1>Our Branches</h1>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <div className="container">
                                            <div className="row gy-5">
                                                <div className="col-12 align-self-center">
                                                    {element}
                                                    <h3>Dhanmandi</h3>
                                                    <p>Dhaka, Bangladesh</p>
                                                    <p><i>Contact: +880 1880 788228</i></p>
                                                </div>
                                                <div className="col-12 align-self-center">
                                                    {element}
                                                    <h3>Basundhara</h3>
                                                    <p>Dhaka, Bangladesh</p>
                                                    <p><i>Contact: +880 1880 788228</i></p>
                                                </div>
                                                <div className="col-12 align-self-center">
                                                    {element}
                                                    <h3>CU Campus</h3>
                                                    <p>Chittagong, Bangladesh</p>
                                                    <p><i>Contact: +880 1880 788228</i></p>
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
        </div>
    );
};

export default FindUs;
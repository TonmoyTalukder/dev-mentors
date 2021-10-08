import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {title, img, fees, description,rating,seats,remaining} = props.course;
    const element = <FontAwesomeIcon icon={faStar} />

    return (
        <div className="col-5 p-0 m-4 course-card-custom-style">
                <div className="card p-0 bg-light">
                    <div className="d-flex justify-content-center m-0 p-0">
                        <div className="p-0 m-3 border border-3 border-secondary rounded bg-light">
                            <div className="row gy-5 align-items-center course-card">
                                <div className="col-lg-7 col-md-12 p-0">
                                    <div className="p-0">
                                        <img className="image img-gray" src={img} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 p-0">
                                    <div className="p-3 text-start">
                                        <h2>{title}</h2>
                                        <h5 className="text-danger"><b>Fees: </b>$ {fees}</h5>
                                        <p><b>Course Details : </b>{description}</p>
                                        <h6><b>Course Rating : </b> {rating} {element}</h6>
                                        <p><b>Total Seats :</b> {seats}</p>
                                        <p><b>Seats Remaining :</b> {remaining}</p>
                                        <button  type="button" className="btn btn-secondary my-2">
                                            <Link className="text-light text-decoration-none" to="/enroll">Enroll This Course</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Course;


{/* <div className="p-3 text-start">
                                <h2>{title}</h2>
                                <h5 className="text-danger"><b>Fees: $ {fees}</b></h5>
                                <p> <b>Course Details</b>  : {description}</p>
                                <h6>Course Rating : {rating} {element} </h6>
                                <p>Total Seats :{seats}</p>
                                <p>Seats Remaining :{remaining}</p>
                                <button  type="button" className="btn btn-secondary my-2">
                                    <Link className="text-light text-decoration-none" to="/enroll">Enroll This Course</Link>
                                </button>
                            </div> */}
import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {title, img, fees, description,rating,seats,remaining} = props.course;
    const element = <FontAwesomeIcon icon={faStar} />
    return (
        <div className="d-flex justify-content-center">
            <div className="container-fluid p-4 m-3 border border-3 border-secondary rounded-3 bg-light">
                <div className="row gy-5 align-items-center">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="p-0">
                            <img className="image" src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="p-3 text-start">
                            <h2>{title}</h2>
                            <h5 className="text-danger"><b>Fees: $ {fees}</b></h5>
                            <p> <b>Course Details</b>  : {description}</p>
                            <h6>Course Rating : {rating} {element} </h6>
                            <p>Total Seats :{seats}</p>
                            <p>Seats Remaining :{remaining}</p>
                            <button  type="button" className="btn btn-secondary my-2">
                                <Link className="text-light text-decoration-none" to="/enroll">Enroll This Course</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;
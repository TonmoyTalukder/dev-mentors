import React from 'react';
import './FeaturedCourses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {title, img, fees, description} = props.course;
    const element = <FontAwesomeIcon icon={faStar} />
    const element2 = <FontAwesomeIcon icon={faStarHalfAlt} />

    return (
            <div className="col-lg-5 col-md-10 p-0 m-4 course-card-custom-style">
                <div className="card p-0 bg-light">
                    <div className="d-flex justify-content-center m-0 p-0">
                        <div className="p-0 m-3 border border-3 border-secondary rounded bg-light">
                            <div className="row gy-5 align-items-center">
                                <div className="col-lg-7 col-md-12 p-0">
                                    <div className="p-0 my-3">
                                        <img className="image img-gray" src={img} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 p-0">
                                    <div className="p-3 text-start">
                                        <h2>{title}</h2>
                                        <h5 className="text-danger"><b>Fees: $ {fees}</b></h5>
                                        <p> <b>Course Details</b>  : {description}</p>
                                        <div>
                                            {element} {element} {element} {element} {element2}
                                        </div>
                                        <button  type="button" className="btn btn-secondary my-2">
                                            <Link className="text-light text-decoration-none" to="/ourcourses">Browse All Courses</Link>
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
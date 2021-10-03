import React from 'react';
import './FeaturedCourses.css';

const Course = (props) => {
    const {title, img, fees, description, id} = props.course;
    return (
        <div>
            <div className="col">
                <div className="card p-3 border bg-light">
                    <div className="d-flex justify-content-center">
                        <div className="container-fluid p-4 m-3 border border-3 border-secondary rounded bg-light">
                            <div className="row gy-5 align-items-center">
                                <div className="col p-0">
                                    <div className="p-0">
                                        <img className="image" src={img} alt="" />
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="p-3 text-start">
                                        <h3>{title}</h3>
                                        <small><b>Fees: ${fees}</b></small>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col">
                        <div className="p-3 border bg-light">Custom column padding</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">Custom column padding</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Course;
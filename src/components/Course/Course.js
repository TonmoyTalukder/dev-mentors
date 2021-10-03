import React from 'react';
import './Course.css';

const Course = (props) => {
    const {title, img, fees, description, id} = props.course;
    return (
        <div className="d-flex justify-content-center">
            <div class="container-fluid p-4 m-3 border border-3 border-secondary rounded-pill bg-light">
                <div class="row gy-5 align-items-center">
                    <div class="col p-0">
                        <div class="p-0">
                            <img className="image" src={img} alt="" />
                        </div>
                    </div>
                    <div class="col p-0">
                        <div class="p-3 text-start">
                            <h3>{title}</h3>
                            <small><b>Fees: ${fees}</b></small>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;
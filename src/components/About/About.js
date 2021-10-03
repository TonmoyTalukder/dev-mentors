import React from 'react';
import img from '../../components/images/logo.png';

const About = () => {
    return (
        <div className="container">
            <h2 className="font-monospace fs-1">About US</h2>
                <div className="container shadow p-3 my-5 bg-light">
                    <div className="container p-5 rounded bg-light ">
                        <div className="container p-5 rounded bg-light text-secondary">
                            <h1 className="fst-italic">Dev Mentors'...</h1>
                            <img src={img} alt="" />
                            <p className="text-dark">Dev mentors' is  an intensive caring school for the future developers shining itself since last 13 years. <br /> There are international classy teachers who instructed the students to learn developing deeply. <br /> Dev Mentors' don't believe to teach only codes rather teaching concepts. <br /> The authority prepare each students as a job seeker worthy if the students <br /> motivate themselves to follow every single instruction accurately.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;
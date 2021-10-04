import React, { useEffect, useState } from 'react';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import Review from '../Review/Review';
import "./Home.css"
import img from '../images/logo.png';


const Home = () => {
    const [courses, setCourses] = useState([]);

    // facthing data from Our json file
    useEffect( () => {
        fetch('./devmentorsFeaturedCourses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
        
    }, [])
    return (
        <div>
            <div class="container">
                <div class="row gx-0 gy-5 my-3">
                    <div class="col p-0">
                        <img src={img} alt="" />
                    </div>
                    <div class="col p-0 align-self-center text-secondary font-monospace fs-2">
                        <h2 className="fst-italic">Dev Mentors'</h2>
                        <h5 className="fst-italic">Believe in Intensive Student Care</h5>
                        <p>Your Trust, Our Promise</p>
                        <h6><strong><small>DEVELOPMENT  |  PROGRAMMING  | CONCEPT</small></strong></h6>
                    </div>
                </div>
            </div>
            <div className="authors container-fluid px-0 my-3">
                <div className="authors-blog-container row g-2">
                    <h2 className="font-monospace fs-1 textdec">Featured Courses</h2>                    
                    <div className="container-fluid">
                        <div className="authors-container row g-3 d-flex justify-content-center">
                            {
                                courses.map(course => <FeaturedCourses
                                    course={course}
                                    key={course.id}
                                    >
                                </FeaturedCourses>)    
                            }
                            <Review></Review>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 
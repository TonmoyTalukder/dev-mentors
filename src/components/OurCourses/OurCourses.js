import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import "./OurCourses.css"


const OurCourses = () => {
    const [courses, setCourses] = useState([]);

    // facthing data from fake json file
    useEffect( () => {
        fetch('./devMentors.json')
        .then(res => res.json())
        .then(data => setCourses(data));
        
    }, [])
    return (
        <div>
             <h2 className="font-monospace fs-1 textdeco my-5">Our Courses</h2>
             <div className="container-fluid">
                <div className="row g-4 d-flex justify-content-center">
                    {
                        courses.map(course => <Course
                            course={course}
                            key={course.id}
                            >
                        </Course>)    
                    }
                </div>
            </div>
        </div>
    );
};


export default OurCourses;
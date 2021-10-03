import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

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
            <h3 className="font-monospace fs-1">All of Our Courses...</h3>
            {
                courses.map(course => <Course
                    course={course}
                    key={course.id}
                    >
                </Course>)    
            }
        </div>
    );
};


export default OurCourses;
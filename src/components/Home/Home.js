import React, { useEffect, useState } from 'react';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';

const Home = () => {
    const [courses, setCourses] = useState([]);

    // facthing data from fake json file
    useEffect( () => {
        fetch('./devmentorsFeaturedCourses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
        
    }, [])
    return (
        <div>

            <div className="authors container-fluid px-0">
                <div className="authors-blog-container row g-2">
                    <h3 className="font-monospace fs-1">Featured Courses</h3>                    
                    <div className="container-fluid">
                        <div className="authors-container row g-3 d-flex justify-content-center">
                            {
                                courses.map(course => <FeaturedCourses
                                    course={course}
                                    key={course.id}
                                    >
                                </FeaturedCourses>)    
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/* <h3 className="font-monospace fs-1">Featured Courses</h3>
            <div class="container overflow-hidden">
                <div class="row gy-5 d-flex justify-content-center">
                    {
                        courses.map(course => <FeaturedCourses
                            course={course}
                            key={course.id}
                            >
                        </FeaturedCourses>)    
                    }
                </div>
            </div> */}
        </div>
    );
};

export default Home; 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    
    const courseAdded = props.courseAdded
    const {title, by, price }=props.singleCourse
    return (
        <div className='single-course'>
            <h1>{title}</h1>
            <h3>BY : {by}</h3>
            <h5>Price : {price}</h5>
            <Button  onClick={()=>courseAdded(props.singleCourse)}>Enroll Now</Button>
        </div>
    );
};

export default Course;
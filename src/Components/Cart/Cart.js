import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Cart = (props) => {
    const courseCount=props.courseCount
    let totalPrice = courseCount.reduce((total,course)=>total + course.price ,0)
    let productPrice = 0
    for (let i = 0; i < courseCount.length; i++) {
        const course = courseCount[i];
        productPrice = course.price
    }
    const tax = totalPrice / 10
    return (
        <div>
            <h1>this is cart</h1>
            <h3>Courser Purchesd {props.courseCount.length}</h3>
            <h3>Courser price {productPrice}</h3>
            <h3>Courser Tax {tax}</h3>
            <h3>Courser Total price {totalPrice + tax}</h3>
            <Button>Check Out Now</Button>
            
        </div>
    );
};

export default Cart;
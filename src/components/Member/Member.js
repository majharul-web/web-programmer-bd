import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Member.css"

const Member = (props) => {

    const { name, image, salary, country, designation, age } = props.member;

    // button icon
    const buttonIcon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className="card shadow-lg card-color" >
            < img src={image} className="img-fluid" alt="..." />

            <div className="card-body">

                <h5 className="card-title fw-bolder">Name: <span className="text-info">{name}</span></h5>
                <p> <span className="fw-bold">Role :</span> {designation}</p>
                <p> <span className="fw-bold">Age :</span> {age}</p>
                <p> <span className="fw-bold">Country :</span> {country}</p>
                <p> <span className="fw-bold">Salary :</span> ${salary}</p>

                <button onClick={() => props.memberAddToCart(props.member)} className="btn btn-info fw-bold text-white" >{buttonIcon} Add To Team</button>
            </div>

        </div >
    );
};

export default Member;
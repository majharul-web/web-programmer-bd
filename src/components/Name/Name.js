import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const Name = (props) => {
    const { name } = props.member;

    // icon
    const memberIcon = <FontAwesomeIcon icon={faUserCheck} />

    return (
        <p className="fw-bold"><span className="text-white">{memberIcon}</span> {name}</p>

    );
};

export default Name;
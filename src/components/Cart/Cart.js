import React from 'react';
import Name from '../Name/Name';

const Cart = (props) => {
    const { cart } = props;
    const totalReduce = (previous, member) => previous + member.salary;
    const total = cart.reduce(totalReduce, 0);


    return (

        <div className="card shadow-lg bg-info" >
            <div className="card-body">
                <p className="fs-5"> <span className="text-white fw-bold">Added Members: </span>{cart.length} </p>
                <p className="fs-5"> <span className="text-white fw-bold">Total Salary: </span> $ {total}</p>
                {cart.map(member => <Name member={member} key={member.id}></Name>)}

            </div>
        </div >


    );
};

export default Cart;
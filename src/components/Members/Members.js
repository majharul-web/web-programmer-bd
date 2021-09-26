import React from 'react';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import "./Members.css";


const Members = () => {
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fakeDB.json')
            .then(res => res.json())
            .then(data => {
                setMembers(data);
            });
    }, [])

    const memberAddToCart = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
    }

    return (
        <div className="container-fluid">
            <div className="row my-4">

                <div className="col-md-9">
                    <div className="card-container">
                        {
                            members.map(member => <Member member={member} key={member.id} memberAddToCart={memberAddToCart} ></Member>)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    <Cart cart={cart} key={cart.map(member => member.id)}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Members;
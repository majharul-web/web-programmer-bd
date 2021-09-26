import React from 'react';
import { useState, useEffect } from 'react';
import Member from '../Member/Member';
import "./Members.css";


const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('./fakeDB.json')
            .then(res => res.json())
            .then(data => {
                setMembers(data);
            });
    }, [])

    return (
        <div className="container-fluid">
            <div className="row my-4">

                <div className="col-md-9">
                    <div className="card-container">
                        {
                            members.map(member => <Member member={member} key={member.id} ></Member>)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    <h1>cart</h1>
                </div>

            </div>
        </div>
    );
};

export default Members;
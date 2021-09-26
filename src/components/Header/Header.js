import React from 'react';

const Header = () => {
    return (
        <div>
            {/* navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">

                    <a className="navbar-brand fs-3 fw-bolder" href="/logo">Web Programmer <br />BD</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item mx-3">
                                <a className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/about">Services</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link active" href="/about">Our Team</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            {/* hero section */}
            <section className="container-fluid bg-secondary">
                <div className="container text-center p-4">
                    <h1 className="text-info fw-bold ">Make <br /> Web Programmer BD's Team</h1>
                    <h3 className="text-white mt-4">Total Budget:100 Million</h3>
                </div>


            </section>

        </div>
    );
};

export default Header;
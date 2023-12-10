import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='NavBody'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid py-2">
                    <a id='Logo' className=" navbar-brand ms-5 " href="/">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item dropdown">
                                <a id='CateNav' className="nav-link dropdown-toggle ms-5" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
                                <ul className="dropdown-menu">
                                    <div className='MainDrop'>
                                        <div className='DropContent'>
                                            <li><a className="dropdown-item" href="/">Language</a></li>
                                            <li><a className="dropdown-item" href="/">Cooking</a></li>
                                            <li><a className="dropdown-item" href="/">Music</a></li>
                                            <li><a className="dropdown-item" href="/">Art & Craft</a></li>
                                            <li><a className="dropdown-item" href="/">Yoga</a></li>
                                            <li><a className="dropdown-item" href="/">Academic</a></li>
                                            <li><a className="dropdown-item" href="/">Back to Roots</a></li>
                                            <li><a className="dropdown-item" href="/">Funtresting</a></li>
                                        </div>
                                        <div className='DropImage'>
                                            <img className='DropImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpniQafoo1CP5k-qFklS1v-wAlXPI_WGHMrkO3UmKWXA&s' alt='Quote' />
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex me-5 NavMobile" role="search">
                            <h5 className='mt-3' id='Teach'>TEACH</h5>
                            <button id='NavBtn1' className="mx-4" type="submit">LOGIN</button>
                            <button id='NavBtn2' type="button">SIGNUP</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

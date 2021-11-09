import React from 'react'
import logo from './social-icons/logo.svg'
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import Spin from 'react-reveal/Spin';
import { useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation();
    const path = location.pathname;

    return (
        <div>
            {/* Navbar */}
            <div id="maindivnav">
                <nav className="navbar container navbar-expand-lg navbar-dark">
                    <Link to="/" className="navbar-brand" id="linkimage">
                        {path == '/' ?
                            <Spin duration={2200}>
                                <img id="image" src={logo} alt="Loading..." width="60px" height="50px" />
                            </Spin>
                            :
                            <img id="image" src={logo} alt="Loading..." width="60px" height="50px" />
                        }
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <span className="navbar-text">

                            <ul className="navbar-nav">
                                <li className="nav-item " id="white">
                                    <NavLink to="/" exact activeClassName="current" className="nav-link">
                                        &nbsp;Home&nbsp;
                                    </NavLink>
                                </li>

                                <li className="nav-item" id="white">
                                    <Link to="/#latestphones" exact activeClassName="current" className="nav-link">
                                        &nbsp;Brands&nbsp;
                                    </Link>
                                </li>

                                <li className="nav-item" id="white">
                                    <Link to="/#mobilenews" exact activeClassName="current" className="nav-link ">
                                        &nbsp;News&nbsp;
                                    </Link>
                                </li>

                                <li className="nav-item" id="white">
                                    <NavLink to="/Blogs" exact activeClassName="current" className="nav-link ">
                                        &nbsp;Blogs&nbsp;
                                    </NavLink>
                                </li>

                                <li className="nav-item" id="white">
                                    <NavLink to="/About" exact activeClassName="current" className="nav-link">
                                        &nbsp;About&nbsp;
                                    </NavLink>
                                </li>

                                <li className="nav-item" id="white">
                                    <NavLink to="/Contact" exact activeClassName="current" className="nav-link">
                                        &nbsp;Contact&nbsp;
                                    </NavLink>
                                </li>

                            </ul>

                        </span>

                    </div>
                </nav>
            </div>

        </div>
    )
}

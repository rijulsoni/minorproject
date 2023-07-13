import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import jquery from 'jquery';
import { useAuth0 } from "@auth0/auth0-react";

// for changing navbar  color
jquery(window).scroll(function () {
    jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
      }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light bg-transparent py-2 fixed-top">
                <div className="container-fluid ">
                    <span className="navbar-brand font-weight-bolder"><a href='/'>Life Luxury</a></span>
                    <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <FaAlignRight className="nav-icon" /></span>
                    </a>
                    <div className="collapse navbar-dark navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link"  activeClassName="active_class" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  activeClassName="active_class" exact to="/rooms">Rooms</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  activeClassName="active_class" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  activeClassName="active_class" exact to="/contact">Contact</NavLink>
                            </li>  
                            
                             {
                                isAuthenticated ? 
                                    <li className="nav-item">
                                <button className="nav-link btn btn-link" activeClassName="active_class" onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </button>
                                </li> 
                            
                                :
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" activeClassName="active_class" onClick={() => loginWithRedirect()}>Register / Log In</button>;
                            </li>
                            
                            
                                }
                                <li className="nav-item ">
                            {isAuthenticated && <div className='user'> 
                               <span> User Name: {user.name}
                                <br/>
                            
                            User Email: {user.email}
                            </span>
                            </div>}
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
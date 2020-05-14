
import {NavLink} from "react-router-dom";
import './header.css';
import React from "react";
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Header(){
    return (
        <nav class="navbar navbar-expand-lg">
            <b>
                <Nav.Link className ="navbar-brand" href="/">Dillo Day 2020</Nav.Link>
            </b>
        </nav>

    );
}
//render black on white
export default Header;

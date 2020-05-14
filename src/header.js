
import {NavLink} from "react-router-dom";
import './header.css';
import React from "react";
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from './images/map-2019.pdf'


function Header(){
    return (
        <nav class="navbar navbar-expand-lg">
            <b>
                <Nav.Link className ="navbar-brand" href="/">Dillo Day 2020</Nav.Link>
            </b>

            <div className="navbar-collapse collapse" id="collapsingNavbar">

                <ul className="navbar-nav ml-auto">
                    <li class = "my-2 my-lg-0">
                        <Nav.Link href="/about">About</Nav.Link>
                    </li>
                    <li>
                        {/*<Nav.Link href='/info'>Info</Nav.Link>*/
                        /* Temporary change, revert back to info page after covid crisis^ */}
                        <Nav.Link href='https://www.northwestern.edu/studentorgs/about/faqs/index.html'>Info</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href={Pdf}>Map</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href='/community'> Community  </Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href='https://inktankapparel.com/collections/mayfest'> Merch  </Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href='/sponsors'> Sponsors </Nav.Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
//render black on white
export default Header;

/*
        <Nav activeKey="/home" className="navbar navbar-expand-lg bg-light navbar-light" role="navegador">
            <a className="navbar-brand" href="/">Dillo Day</a>

            <Nav.Item class = "my-2 my-lg-0">
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/info'>Info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/map'>Map</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/community'> Community  </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='https://inktankapparel.com/collections/mayfest'> Merch  </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/sponsors'> Sponsors </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/gallery'> Gallery </Nav.Link>
            </Nav.Item>
        </Nav>


 */

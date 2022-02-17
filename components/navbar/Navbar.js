import React, { useState } from 'react';
import NavbarStyles from "../../styles/Navbar.module.css";
import cx from 'classnames'

const Navbar = (props) => {
    const [isActive, setIsActive] = useState(false);

    function toggleHandler() {

        setIsActive(!isActive);
    }

    return <div className={NavbarStyles.navbarContainer}>
        <div className={NavbarStyles.navbarBrandContainer}>
            <h2>GRV</h2>
        </div>

        <div className={isActive ? cx(NavbarStyles.navbarLinksContainer, NavbarStyles.navbarLinksContainerActive) : NavbarStyles.navbarLinksContainer}>
            <ul>
                <li><a rel="noopener noreferrer" href="#" onClick={() => {
                    props.scroller(`skills`)
                    toggleHandler()
                }}>Skills</a></li>
                <li><a rel="noopener noreferrer" href="#" onClick={() => {
                    props.scroller(`works`)
                    toggleHandler()
                }}>Works</a></li>
                <li><a rel="noopener noreferrer" href="#" onClick={() => {
                    props.scroller(`contact`)
                    toggleHandler()
                }}>Contact</a></li>

            </ul>
        </div>
        <div className={NavbarStyles.navbarToggler} onClick={() => { toggleHandler() }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>;
};

export default Navbar;

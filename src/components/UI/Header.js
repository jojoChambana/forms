import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { SplitLocation } from "../HelperFunctions";

export const Header = () => {
    return (
        <>
            <Navbar>
                <>
                    <div id="navbarSupportedContent">
                        <NavLink to="/" className="navbar-brand">
                            <img
                                src={process.env.PUBLIC_URL + "/logo.svg"}
                                alt="U of I Foundation Logo"
                                className="logo"
                            />
                        </NavLink>
                        <SplitLocation />
                    </div>
                </>
            </Navbar>
        </>
    );
};

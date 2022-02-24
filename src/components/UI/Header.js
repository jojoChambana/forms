import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "@mui/material";

// import Nav from "react-bootstrap/Nav";
export const Header = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <>
            <Navbar>
                <Container>
                    <div id="navbarSupportedContent">
                        <NavLink to="/" className="navbar-brand">
                            <img
                                src={process.env.PUBLIC_URL + "logo.svg"}
                                alt="U of I Foundation Logo"
                                className="logo"
                            />
                        </NavLink>
                        <div className="navLinks">
                            <div
                                className={
                                    splitLocation[1] === "cash" ? "active" : ""
                                }
                            >
                                <h1>Cash Gift Transmittal Form</h1>
                            </div>

                            <div
                                className={
                                    splitLocation[1] === "check" ? "active" : ""
                                }
                            >
                                <h1>Check Gift Transmittal Form</h1>
                            </div>

                            <div
                                className={
                                    splitLocation[1] === "giftinkind"
                                        ? "active"
                                        : ""
                                }
                            >
                                <h1>Gift in Kind Transmittal Form</h1>
                            </div>

                            <div
                                className={
                                    splitLocation[1] === "securities"
                                        ? "active"
                                        : ""
                                }
                            >
                                <h1>Securities Gift Transmittal Form</h1>
                            </div>

                            <div
                                className={
                                    splitLocation[1] === "wire" ? "active" : ""
                                }
                            >
                                <h1>Wire Transmittal Form</h1>
                            </div>

                            <div
                                className={
                                    splitLocation[1] === "trust" ? "active" : ""
                                }
                            >
                                <h1>Trust Gift Transmittal Form</h1>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

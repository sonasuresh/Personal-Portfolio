import React, { Component } from 'react'


export default function navbar() {
    return (
        <nav
            className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
            style={{ background: 'black' }}
            id="mainNav"
            >
            <div className="container">
                <a className="navbar-brand js-scroll" href="#page-top">
                    Sona S
                </a>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarDefault"
                    aria-controls="navbarDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div
                    className="navbar-collapse collapse justify-content-end"
                    id="navbarDefault">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link js-scroll" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll " href="#about">
                                about
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link js-scroll "
                                href="#experiences">
                                Experiences
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link js-scroll "
                                href="#contact">
                                contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}




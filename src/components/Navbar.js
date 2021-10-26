import React from 'react';

function Navbar() {
    const [isActive, setisActive] = React.useState(false)
    
    return (
        <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/"><i className="fas fa-code"></i></a>
                <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`} href="#!" aria-label="menu" aria-expanded="false" data-target="mymenu" onClick={() => {
                        setisActive(!isActive)
                    }}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="mymenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`} >
                <div className="navbar-start">
                    <a className="navbar-item" href="#home">Home</a>
                    <a className="navbar-item" href="#biography">Biography</a>
                    <a className="navbar-item" href="#experience">Experience</a>
                    <a className="navbar-item" href="#work">Skills</a>
                    <a className="navbar-item" href="#blog">Blog</a>
                    <a className="navbar-item" href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
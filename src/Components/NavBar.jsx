import React, { useState } from 'react'
import '../CSS/Navbar.css'
import Sidebar from './SideBar';
// import Section from './Section';


const NavBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <nav>
            <div className="navbar">
                <div className="navbar-brand">N</div>
                <h2>Name</h2>
                <button className="sidebar-toggle" onClick={toggleSidebar}>
                    Toggle Sidebar
                </button>
            </div>
            {showSidebar && <Sidebar />}

        </nav>

    )
}

export default NavBar
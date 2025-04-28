import React, { useState } from "react";

import './AdminDashboard.css';
import { Link } from "react-router-dom";
import logo from '../image/CUDHAO logo copy.png'

const [click, setClick] = useState(false);

const clickHandler = () => setClick(!click);
const closeProfile = () => setClick(false);


<>
<Return>
    <nav className="navbarAdmin">
        <div className="navbarAdmin-container">
            <Link to="admin-dashboard" className="admin-dashboard-logo">
                <img src={logo} alt="admin-cudhao-logo" className="admin-logo"/>
                <div className="admin-title">
                    <span className="Admin-title">CUDHAO/</span>
                    <i className='fab fa-typo3'/>
                </div>
            </Link>
            <div className="admin-profile" onClick={clickHandler}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            
        </div>
    </nav>
</Return>
</>
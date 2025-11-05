import react from 'react';
import {Link} from 'react-router-dom'
import "./navbar.css"

function Navbar(){


    return (
        <>
        <div className="navbar">
           <Link to="/home">Home</Link>
           <Link to="/men">Men</Link>
           <Link to="/women">Women</Link>
        </div>
        </>
    )
}
export default Navbar;
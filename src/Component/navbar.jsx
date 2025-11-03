import react from 'react';
import {useNavigate} from 'react-router-dom'

function Navbar(){

    const navigate = useNavigate()

    return (
        <>
        <div>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={()=> navigate('/men')}>Men</button>
            <button onClick={()=> navigate('/women')}>women</button>
        </div>
        </>
    )
}
export default Navbar;
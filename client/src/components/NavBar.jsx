import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/button.css';

const NavBar = () => {

    //styles
    const flx = {
        display: 'flex',
        gap: '30px'
    }

    const linkStyle = {
        margin: 'auto',
        color: '#f2f2f2',
        textDecoration: 'none',
        fontFamily: "Google Sans, sans-serif",
        fontSize: '1.3rem',
        lineHeight: '1.5rem',
        fontWeight: '600',
    }

    const linkStyleDropDown = {
        margin: 'auto',
        color: '#0E0E0F',
        textDecoration: 'none',
        fontFamily: "Google Sans, sans-serif",
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: '600',
        padding: '10px'
    }
    // ---- for SEARCH INPUT ----
    const navigate = useNavigate();

    const [input, setInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/exercises/" + input);
        setInput('');
    }

    return (
        <div style={{ color: "white" }} >


            <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#0E0E0F", alignItems: "center", margin: "auto", padding: "20px 30px 20px 30px" }}>
                <div style={flx}>
                    <Link style={linkStyle} to = '/home'><h1 style={{ textShadow: "0 0 20px #fff" }}>FitLab</h1></Link>
                    <Link style={linkStyle} className='button' to = '/home'>Home</Link>
                    <Link style={linkStyle} className='button' to= '/exercises'>Workout</Link>
                    <Link style={linkStyle} className='button' to='/news'>News</Link>
                    <Link style={linkStyle} className='button' to='/community'>Community</Link>
                </div>

                <div style={flx}>

                    <form style={{ display: 'flex', gap: '10px' }} onSubmit={submitHandler}>
                        <input placeholder=' 🔍 ' style={{ borderRadius: '5px', backgroundColor: "rgba(149, 148, 146, 0.023)", color: 'white', padding: '5px' }}
                                onChange={(e) => setInput(e.target.value)} value={input}/>
                        <button className='btn btn-secondary'>Search</button>
                    </form>

                    <div className='dropdown' style={{ margin: 'auto' }}>
                        <Link style={linkStyle} className="dropdown-toggle button" data-bs-toggle="dropdown">My Account</Link>
                        <ul className='dropdown-menu'>
                            <li className='dropdown-item'><Link style={linkStyleDropDown}>Login</Link></li>
                            <li className='dropdown-item'><Link style={linkStyleDropDown}>Register</Link></li>
                            <li className='dropdown-item'><Link style={linkStyleDropDown} to='/myworkout'>My Workout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NavBar
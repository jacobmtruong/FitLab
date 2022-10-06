import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/img.css'
import '../styles/button.css';
import '../styles/textContainer.css';

const WorkoutBanner1 = () => {

    // ------ STYLES ------

    const container = {
        width: '90%',
        height: '500px',
        margin: 'auto',
        marginTop: '60px'
        // backgroundColor: 'white'
    }

    const imageContainer = {
        width: '540px',
        height: '400px',
        borderRadius: '20px'
    }

    const linkStyle = {
        color: '#f2f2f2',
        textDecoration: 'none',
        fontFamily: "Google Sans, sans-serif",
        fontSize: '1.5rem',
        lineHeight: '1.5rem',
        fontWeight: '600',
    }


    // ---------------------

    // ------ FUNCTIONS ------

    const [arms, setArms] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/exercises/musclegroup/arms')
            .then(res => setArms(res.data))
            .catch(err => console.error(err))
    }, [arms])

    return (
        <div style={container}>
            <div style={{ display: 'flex', height: '10%', alignItems: 'center', justifyContent: 'space-between', margin: '40px 0px 20px 0px', padding: '0 25px 0 20px' }}>
                <h1 style={linkStyle}>Arms Exercises</h1>
                <Link style={linkStyle} className='button' to='/exercises/arms'>See all</Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {
                    arms.splice(0, 3).map(arm =>
                        <div className='wrap'>
                            <Link className='container' to={'/exercise/' + arm._id}><img src={arm.imgUrl} alt={arm.name} style={imageContainer} className='image' /></Link>
                            <div className='title'>
                                <h3>{arm.name}</h3>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default WorkoutBanner1
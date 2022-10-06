import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/img.css'

const WorkoutBanner2 = () => {

    // ------ STYLES ------

    const container = {
        width: '90%',
        height: 'fit-content',
        margin: 'auto',
        marginTop: '50px'
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

    // const linearedButton = {
    //     background: "linear-gradient(to right, rgb(255, 158, 84), red)",
    //     fontFamily: "Google Sans, sans-serif",
    //     fontSize: '1.2rem',
    //     lineHeight: '1.5rem',
    //     fontWeight: '400'

    // }


    // ---------------------

    // ------ FUNCTIONS ------

    const [legs, setLegs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/exercises/musclegroup/legs')
            .then(res => setLegs(res.data))
            .catch(err => console.error(err))
    }, [legs])

    return (
        <div style={container}>
            <div style={{ display: 'flex', height: '10%', alignItems: 'center', justifyContent: 'space-between', margin: '40px 0px 20px 0px', padding: '0 25px 0 20px' }}>
                <h1 style={linkStyle}>Legs Exercises</h1>
                <Link style={linkStyle} className='button' to='/exercises/legs'>See all</Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {
                    legs.splice(0, 3).map(leg =>
                        <div>
                            <div className='wrap'>
                                <Link className='container' to = {'/exercise/' + leg._id}><img src={leg.imgUrl} alt={leg.name} style={imageContainer} className='image' /></Link>
                                <div className='title'><h3>{leg.name}</h3></div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default WorkoutBanner2
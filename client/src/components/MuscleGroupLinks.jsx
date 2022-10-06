import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MuscleGroupLinks.css';

const MuscleGroupLinks = () => {
    return (
        <div className='dropdown-div'>
            <button className='dropbtn'>Filter 🔽</button>
            <div className='dropdown-content'>
                <Link to='/exercises'>Show All</Link>
                <Link>Home Workout</Link>
                <Link to='/exercises/legs'>Legs</Link>
                <Link>Back</Link>
                <Link to='/exercises/arms'>Arms</Link>
                <Link to='/exercises/chest'>Chest</Link>
                <Link>Intensity</Link>
            </div>
        </div>
    )
}

export default MuscleGroupLinks
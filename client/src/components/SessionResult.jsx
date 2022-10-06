import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/AllExercises.css';

const AllExercises = () => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/exercises')
            .then(res => {
                const array = res.data
                array.sort(() => Math.random() - 0.5);
                setExercises(array);
                // setExercises(res.data);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div className='big-container'>
            <div className='exercise-container'>
                {
                    exercises.splice(0,8).map(exercise =>
                        <Link className='text-exercise-info' to = {'/exercise/' + exercise._id}>
                            <div className='small-exercise-container'>
                                <img src={exercise.imgUrl} alt={exercise.name} className='exercise-images' />
                                <div className='small-exercise-info-div'>
                                    <h4><b>{exercise.name}</b></h4>
                                    <p>Target: {exercise.muscleGroup}</p>
                                    {exercise.equipmentRequired ? <p className='equipment-container'><b>Equipment Required</b></p> : ''}
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default AllExercises
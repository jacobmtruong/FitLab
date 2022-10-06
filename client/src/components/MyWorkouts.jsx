import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AllExercises.css';

const MyWorkouts = () => {

    const navigate = useNavigate();

    const [myworkouts, setMyWorkouts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/personals')
            .then(res => setMyWorkouts(res.data))
            .catch(err => console.log(err))
    })

    const deleteExercise = (deleteId) => {
        if (window.confirm('Are you sure you want to delete this exercise?')) {
            axios.delete('http://localhost:8000/api/personals/' + deleteId)
                .then(res => {
                    console.log(res.data); console.log("DELETE SUCCESS");
                    setMyWorkouts(myworkouts.filter(workout => workout._id !== deleteId));
                    navigate ('/myworkout')
                })
                .catch(err => console.error(err));
        }
    };

    return (
        <div className='big-container'>
            <div className='exercise-container'>
                <div>
                    <Link to='/myworkout/add' className='link-addworkout'>➕ Add Workout</Link>
                    <Link to='/myworkout/generate/session' className='link-addworkout'>Generate Session</Link>
                </div>
                {
                    myworkouts.map(myWorkout =>
                        <Link className='text-exercise-info' to={'/exercise/' + myWorkout._id}>
                            <div className='small-exercise-container'>
                                <img src={myWorkout.imgUrl} alt={myWorkout.name} className='exercise-images' />
                                <div className='small-exercise-info-div'>
                                    <h4><b>{myWorkout.name}</b></h4>
                                    <p>Target: {myWorkout.muscleGroup}</p>
                                    {myWorkout.equipmentRequired ? <p className='equipment-container'><b>Equipment Required</b></p> : ''}
                                </div>
                                <p className='delete-button' onClick={() => deleteExercise (myWorkout._id)}>✖️</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default MyWorkouts
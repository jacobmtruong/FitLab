import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/DisplayExercise.css'; //CSS file 

const DisplayExercise = () => {

    const { id } = useParams();

    const [exercise, setExercise] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/exercises/${id}`)
            .then(res => setExercise(res.data))
            .catch(err => console.log(err))
    })

    return (
        <div style={{marginTop: '100px'}}>
            <div className='big-container'>
                <div className='small-flex-div'>
                    <h2 className='text-display'>{exercise.name}</h2>
                    <Link className='btn btn-secondary' to={'/exercises/' + exercise.muscleGroup}>#{exercise.muscleGroup}</Link>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '30px'}}>
                    <img src={exercise.imgUrl} alt={exercise.name} className='exercise-image'/>
                    <div className='small-right-div'>
                        <p className='text-display-description'><b>How to: </b>{exercise.description}</p>
                        <p className='text-display-description'><b>Equipment: </b>{exercise.equipment}</p>
                        <p className='text-display-description'><b>Repetition: </b>12</p>
                        <p className='text-display-description'><b>Set: </b>4</p>
                        <p className='text-display-description'><b>Why {exercise.name}: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis dolorum tempora voluptas incidunt consectetur animi tenetur voluptatem consequatur commodi! Veniam quos harum illum, eligendi ex animi! Sint, deserunt minima.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayExercise

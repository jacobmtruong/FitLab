import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddWorkout.css';
import { useNavigate } from 'react-router-dom';

const AddWorkout = () => {

    const navigate = useNavigate();

    const dates = new Date();
    const dateMDY = `${dates.getMonth() + 1}/${dates.getDate()}/${dates.getFullYear()}`;

    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [description, setDescription] = useState('');
    const [equipmentRequired, setEquipmentRequired] = useState(false);
    const [equipment, setEquipment] = useState('');
    const [weight, setWeight] = useState('');
    const [date, setDate] = useState(dateMDY);

    const [error, setError] = useState([]);

    const addHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/personals', { name, imgUrl, muscleGroup, description, equipmentRequired, equipment, weight, date })
            .then(res => {
                console.log(res);
                navigate('/myworkout')
            })
            .catch(err => {
                // send back validation errors
                // Get the errors from err.response.data
                const errorResponse = err.response.data.errors;
                // Define a temp error array to push the messages in
                const errorArray = [];
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message);
                }
                // Set Errors
                setError(errorArray);
            })
    }


    return (
        <div className='addworkout-big-container'>
            <form onSubmit={addHandler}>

                {error.map((err, index) => <div key={index} className='error-message'>{err}</div>)}

                <div className='input-div'>
                    <p>Date</p>
                    <input type='date' onChange={(e) => setDate(e.target.value)} value={date} />
                </div>

                <div className='addworkout-small-info-div'>
                    <div className='addworkout-smaller-info-div'>
                        <div className='input-div'>
                            <p>Exercise's Name</p>
                            <input style={{ width: '100%' }} onChange={(e) => setName(e.target.value)} value={name} />
                        </div>

                        <div className='input-div'>
                            <p>URL Image</p>
                            <input style={{ width: '100%' }} onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />
                        </div>

                        <div className='input-div'>
                            <p>Description</p>
                            <textarea cols='45' rows='8' onChange={(e) => setDescription(e.target.value)} value={description} />
                        </div>

                        <button>Add</button>
                    </div>

                    <div className='addworkout-smaller-info-div'>
                        <div className='input-div'>
                            <p>Targeted Muscle Group</p>
                            <input onChange={(e) => setMuscleGroup(e.target.value)} value={muscleGroup} />
                        </div>

                        <div className='input-div' style={{ display: 'flex', gap: '10px' }}>
                            <label>Equipment Required</label>
                            <input type='checkbox' checked={equipmentRequired} onChange={(e) => setEquipmentRequired(e.target.checked)} value={equipmentRequired} />
                        </div>

                        <div className='input-div'>
                            <p>Equipment</p>
                            <input onChange={(e) => setEquipment(e.target.value)} value={equipment} />
                        </div>

                        <div className='input-div'>
                            <p>Weight</p>
                            <input onChange={(e) => setWeight(e.target.value)} value={weight} /> (lb)
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddWorkout
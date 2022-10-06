import React from 'react';
import '../styles/Community.css';

const Community = () => {
    return (
        <div className='community-big-container'>
            <h1 style={{ color: '#f2f2f2' }}>Share with Fitlab</h1>
            <div>
                <textarea className='textarea-input'></textarea>
                <button style={{ float: 'right' }}>post</button>
            </div>
            <div style={{ border: '2px solid #f2f2f2', height: 'fit-content', width: '70%', borderRadius:'10px', padding:'20px',display:'flex', flexDirection:'column', gap:'20px' }}>
                <div style={{display: 'flex', gap: '20px'}}>
                    <img src={require('../img/user.png')}  alt="user-icon" style={{width: '50px', width:'50px', objectFit:'contain'}}/>
                    <div>
                        <p><b>Username</b></p>
                        <p>San Francisco, California</p>
                        <p>09/01/2022</p>
                    </div>
                </div>
                <h4 style={{color: '#f2f2f2'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium beatae eius, molestias assumenda tenetur, voluptas optio ut nesciunt explicabo, sed neque similique facere suscipit alias laborum consequuntur aut vel?</h4>
                <div style={{display:'flex', gap: '5px'}}>
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
            </div>
            <div style={{ border: '2px solid #f2f2f2', height: 'fit-content', width: '70%', borderRadius:'10px', padding:'20px',display:'flex', flexDirection:'column', gap:'20px' }}>
                <div style={{display: 'flex', gap: '20px'}}>
                    <img src={require('../img/user.png')}  alt="user-icon" style={{width: '50px', width:'50px', objectFit:'contain'}}/>
                    <div>
                        <p><b>Username</b></p>
                        <p>San Francisco, California</p>
                        <p>09/01/2022</p>
                    </div>
                </div>
                <h4 style={{color: '#f2f2f2'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium beatae eius, molestias assumenda tenetur, voluptas optio ut nesciunt explicabo, sed neque similique facere suscipit alias laborum consequuntur aut vel?</h4>
                <div style={{display:'flex', gap: '5px'}}>
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
            </div>
            <div style={{ border: '2px solid #f2f2f2', height: 'fit-content', width: '70%', borderRadius:'10px', padding:'20px',display:'flex', flexDirection:'column', gap:'20px' }}>
                <div style={{display: 'flex', gap: '20px'}}>
                    <img src={require('../img/user.png')}  alt="user-icon" style={{width: '50px', width:'50px', objectFit:'contain'}}/>
                    <div>
                        <p><b>Username</b></p>
                        <p>San Francisco, California</p>
                        <p>09/01/2022</p>
                    </div>
                </div>
                <h4 style={{color: '#f2f2f2'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium beatae eius, molestias assumenda tenetur, voluptas optio ut nesciunt explicabo, sed neque similique facere suscipit alias laborum consequuntur aut vel?</h4>
                <div style={{display:'flex', gap: '5px'}}>
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
            </div>
            <div style={{ border: '2px solid #f2f2f2', height: 'fit-content', width: '70%', borderRadius:'10px', padding:'20px',display:'flex', flexDirection:'column', gap:'20px' }}>
                <div style={{display: 'flex', gap: '20px'}}>
                    <img src={require('../img/user.png')}  alt="user-icon" style={{width: '50px', width:'50px', objectFit:'contain'}}/>
                    <div>
                        <p><b>Username</b></p>
                        <p>San Francisco, California</p>
                        <p>09/01/2022</p>
                    </div>
                </div>
                <h4 style={{color: '#f2f2f2'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium beatae eius, molestias assumenda tenetur, voluptas optio ut nesciunt explicabo, sed neque similique facere suscipit alias laborum consequuntur aut vel?</h4>
                <div style={{display:'flex', gap: '5px'}}>
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Community
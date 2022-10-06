import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/img.css';
import '../styles/textContainer.css';


const Banner = () => {

    //style 
    const container = {
        display: 'flex',
        width: "89%",
        height: "849px",
        margin: 'auto',
        gap: "30px"
    }

    return (
        <>
            <div style={container}>
                <div className='wrap'>
                    <Link to='/exercises'>
                        <img src={require('../img/banner-main.jpg')} alt="banner-img" width='100%' height='100%' style={{ borderRadius: '30px', objectFit: 'cover' }} />
                    </Link>
                    <div className='bigtitle'>
                        <h1>Experience 200+ exercises at no cost</h1>
                        <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h5>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '30%', justifyContent: "space-between" }}>
                    <div className='wrap'>
                        <Link className='container'><img src={require('../img/group-x.jpg')} alt="group-x" width='90%' height='100%' style={{ borderRadius: '30px' }} className='image' /></Link>
                        <div className='title'>
                            <h3>Group-X</h3>
                        </div>
                    </div>

                    <div className='wrap'>
                        <Link className='container'><img src={require('../img/weight-lifting.jpg')} alt="weight-lifting" width='90%' height='100%' style={{ borderRadius: '30px' }} className='image' /></Link>
                        <div className='title'>
                            <h3>Weightlifting</h3>
                        </div>
                    </div>

                    <div className='wrap'>
                        <Link className='container'><img src={require('../img/cycling.jpg')} alt="cycling" width='90%' height='100%' style={{ borderRadius: '30px', objectFit: 'cover' }} className='image' /></Link>
                        <div className='title'>
                            <h3>Cycling RPM</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
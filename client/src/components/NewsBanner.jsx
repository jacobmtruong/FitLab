import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/img.css'
import '../styles/button.css';
import '../styles/textContainer.css';
import '../styles/AllNews.css';

const NewsBanner = () => {
    // ------ STYLES ------

    const container = {
        width: '90%',
        height: '500px',
        margin: 'auto',
        marginTop: '60px',
        marginBottom: '100px'
    }

    const linkStyle = {
        color: '#f2f2f2',
        textDecoration: 'none',
        fontFamily: "Google Sans, sans-serif",
        fontSize: '1.5rem',
        lineHeight: '1.5rem',
        fontWeight: '600',
    }

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=fitness&apiKey=edfd166d81334ceaaaf84be91245f04d')
            .then(res => { setNews(res.data.articles) })
            .catch(err => console.log(err))
    }, [news])


    return (
        <div style={container}>
            <div style={{ display: 'flex', height: '10%', alignItems: 'center', justifyContent: 'space-between', margin: '40px 0px 20px 0px', padding: '0 25px 0 20px' }}>
                <h1 style={linkStyle}>FitLab News</h1>
                <Link style={linkStyle} className='button' to='/news'>See all</Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '70px' }}>
                {
                    news.splice(0, 4).map(news =>
                        <div className='allnews-small-container'>
                            <img src={news.urlToImage} alt={news.name} className='allnews-images' />
                            <div className='allnews-smaller-container'>
                                <h5 className='allnews-text'>{news.title}</h5>
                                <p className='allnews-text'>by {news.author}</p>
                            </div>
                        </div>
                    )
                }
{/* 

                <div className='allnews-small-container'>
                    <Link>
                        <img src={require('../img/banner-main.jpg')} alt='test' className='allnews-images' />
                        <div className='allnews-smaller-container'>
                            <h5 className='allnews-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo obcaecati debitis error? Architecto maiores atque cupiditate facere impedit ducimus illum incidunt nostrum sint praesentium.</h5>
                            <p className='allnews-text-p'>by Someone Name</p>
                        </div>
                    </Link>
                </div>


                <div className='allnews-small-container'>
                    <Link>
                        <img src={require('../img/banner-main.jpg')} alt='test' className='allnews-images' />
                        <div className='allnews-smaller-container'>
                            <h5 className='allnews-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo obcaecati debitis error? Architecto maiores atque cupiditate facere impedit ducimus illum incidunt nostrum sint praesentium.</h5>
                            <p className='allnews-text-p'>by Someone Name</p>
                        </div>
                    </Link>
                </div>


                <div className='allnews-small-container'>
                    <Link>
                        <img src={require('../img/banner-main.jpg')} alt='test' className='allnews-images' />
                        <div className='allnews-smaller-container'>
                            <h5 className='allnews-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo obcaecati debitis error? Architecto maiores atque cupiditate facere impedit ducimus illum incidunt nostrum sint praesentium.</h5>
                            <p className='allnews-text-p'>by Someone Name</p>
                        </div>
                    </Link>
                </div>


                <div className='allnews-small-container'>
                    <Link>
                        <img src={require('../img/banner-main.jpg')} alt='test' className='allnews-images' />
                        <div className='allnews-smaller-container'>
                            <h5 className='allnews-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo obcaecati debitis error? Architecto maiores atque cupiditate facere impedit ducimus illum incidunt nostrum sint praesentium.</h5>
                            <p className='allnews-text-p'>by Someone Name</p>
                        </div>
                    </Link>
                </div> */}

            </div>
        </div>
    )
}

export default NewsBanner
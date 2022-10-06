import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AllNews.css';
import { Link } from 'react-router-dom';

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=fitness&apiKey=a623fe414289476f8e2515d72142ab48')
            .then(res => { 
                console.log(res.data);
                setNews(res.data.articles) })
            .catch(err => console.log(err))
    }, [news])

    return (
        <div className='allnews-big-container'>
            {
                news.map(news =>
                    <div className='allnews-small-container'>
                        <img src={news.urlToImage} alt={news.name} className='allnews-images' />
                        <div className='allnews-smaller-container'>
                            <h5 className='allnews-text'>{news.title}</h5>
                            <p className='allnews-text'>by {news.author}</p>
                        </div>
                    </div>
                )
            }

            {/* <div className='allnews-small-container'>
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
    )
}

export default News
import React from 'react';
import data from '../datas/LogementList.json';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

function Body() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div className='kasa-body'>
            <div className="background-sea">
                {!isMobile ? ( 
                <h1 className='title-sea'>Chez vous, partout et ailleurs</h1>
                ) : (
                    <div>
                        <h1 className='title-sea1'>Chez vous,</h1>
                        <h1 className='title-sea2'>partout et ailleurs</h1>
                    </div>
                )}
                <div className='overlay-sea'></div>
            </div>
            <div className='kasa-gallery'>
                {data.map((item) => (
                    <Link className='div-appartement' to={`/Kasa-Web-Site-React/details_appartement/${item.id}`} key={item.id}>
                        <h2 className='titre-appartment'>{item.title}</h2>
                        <div className='div-img'>
                            <img className='img-gallery' src={item.cover} alt={item.title} />
                            <div className='img-overlay'></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body
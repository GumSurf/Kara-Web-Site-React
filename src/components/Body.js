import React from 'react';
import { Link } from 'react-router-dom';
import data from '../datas/LogementList.json';

function Body() {
    return (
        <div className='kasa-body'>
            <div className="background-sea">
                <h1 className='title-sea'>Chez vous, partout et ailleurs</h1>
                <div className='overlay-sea'></div>
            </div>
            <div className='kasa-gallery'>
                {data.map((item) => (
                    <a className='div-appartement' href={`/details_appartement/${item.id}`} key={item.id}>
                        <h2 className='titre-appartment'>{item.title}</h2>
                        <div className='div-img'>
                            <img className='img-gallery' src={item.cover} alt={item.title} />
                            <div className='img-overlay'></div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Body
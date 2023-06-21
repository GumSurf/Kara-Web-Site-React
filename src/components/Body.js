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
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <h2><Link to={`/details_appartement/${item.id}`}>{item.title}</Link></h2>
                        <img src={item.cover} alt={item.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Body
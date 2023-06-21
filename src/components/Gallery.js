import React from 'react';
import { Link } from 'react-router-dom';
import data from '../datas/LogementList.json';

function Gallery() {
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h2><Link to={`/details_appartement/${item.id}`}>{item.title}</Link></h2>
                    <img src={item.cover} alt={item.title} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;

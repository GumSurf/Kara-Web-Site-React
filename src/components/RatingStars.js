import React from 'react';
import StarOrange from '../assets/star-orange.png'
import StarGray from '../assets/star-gray.png'

function RatingStars({rating}) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        const starImageSrc = i <= rating ? StarOrange : StarGray;
        stars.push(<img key={i} src={starImageSrc} alt={`Star ${i}`} className="star-image" />);
    }

    return <div className="rating">{stars}</div>;
}

export default RatingStars;

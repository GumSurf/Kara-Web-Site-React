import React from 'react';

function RatingStars({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starClassName = i <= rating ? 'star filled' : 'star empty';
    stars.push(<span key={i} className={starClassName}></span>);
  }

  return <div className="rating">{stars}</div>;
}

export default RatingStars;
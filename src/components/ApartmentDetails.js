import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import data from '../datas/LogementList.json';
import RatingStars from './RatingStars';
import ArrowLeft from '../assets/ArrowLeft.png'
import ArrowRight from '../assets/ArrowRight.png'
import NotFound from './NotFound';
import DivCollapse from './DivCollapse';

function ApartmentDetails() {
    const params = useParams();
    const { id } = params;
    const apartment = data.find((item) => item.id === id);
    const nbrOfApartments = data.length;

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!apartment) {
        return <NotFound />;
    }

    const nameParts = apartment.host.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % apartment.pictures.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? apartment.pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='div-apartment'>
            <div className='div-img-apartment'>
                <img className='img-apartment' src={apartment.pictures[currentImageIndex]} alt={apartment.title} />
                {nbrOfApartments !== 1 && (
                    <div>
                        <div className='div-counter'>
                            <p className='counter'>{currentImageIndex + 1}/{apartment.pictures.length}</p>
                        </div>
                        <div className='div-links'>
                            <button className='link' onClick={previousImage}>
                                <img src={ArrowLeft} alt="Lien précédent" className="link-image" />
                            </button>
                            <button className='link' onClick={nextImage}>
                                <img src={ArrowRight} alt="Lien suivant" className="link-image" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {!isMobile ? (
                <>
                    <div className='title-host-info'>
                        <div className='div-title-location'>
                            <h1 className='titre-apartment'>{apartment.title}</h1>
                            <p className='location-apartment'>{apartment.location}</p>
                        </div>
                        <div className='host-info'>
                            <div className='div-names'>
                                <p className='host-names'>{firstName}</p>
                                <p className='host-names'>{lastName}</p>
                            </div>
                            <div className='div-img-host'>
                                <img className='host-img' src={apartment.host.picture} alt={apartment.host.name} />
                            </div>
                        </div>
                    </div>


                    <div className='div-tags-ratings'>
                        <div className='div-tags'>
                            {apartment.tags.map((tag, index) => (
                                <div className='div-around-tags'>
                                    <p className='tag-apartment' key={index}>{tag}</p>
                                </div>
                            ))}
                        </div>
                        <RatingStars rating={apartment.rating} />
                    </div>
                </>
            ) : (
                <>
                    <div className='title-host-info'>
                        <div className='div-title-location'>
                            <h1 className='titre-apartment'>{apartment.title}</h1>
                            <p className='location-apartment'>{apartment.location}</p>
                        </div>
                    </div>
                    <div className='div-tags-ratings'>
                        <div className='div-tags'>
                            {apartment.tags.map((tag, index) => (
                                <div className='div-around-tags'>
                                    <p className='tag-apartment' key={index}>{tag}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='title-host-info'>
                        <div className='host-info'>
                            <RatingStars rating={apartment.rating} />
                            <div className='div-names-img-host'>
                                <div className='div-names'>
                                    <p className='host-names'>{firstName}</p>
                                    <p className='host-names'>{lastName}</p>
                                </div>
                                <div className='div-img-host'>
                                    <img className='host-img' src={apartment.host.picture} alt={apartment.host.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <DivCollapse />
        </div>
    );
}

export default ApartmentDetails;

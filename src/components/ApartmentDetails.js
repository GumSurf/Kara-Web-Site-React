import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import data from '../datas/LogementList.json';
import RatingStars from './RatingStars';
import ArrowLeft from '../assets/ArrowLeft.png'
import ArrowRight from '../assets/ArrowRight.png'

function ApartmentDetails() {
    const params = useParams();
    const { id } = params;
    const apartment = data.find((item) => item.id === id);

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    
    if (!apartment) {
        return <div>Appartement non trouvé</div>;
    }

    const nameParts = apartment.host.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    //Next Apartment
    const currentIndex = data.findIndex((item) => item.id === id);

    let nextApartment;
    if (currentIndex !== -1 && currentIndex < data.length - 1) {
        nextApartment = data[currentIndex + 1];
    } else {
        nextApartment = data[0];
    }

    const nextApartmentLink = `/details_appartement/${nextApartment.id}`;

    //Previous Apartment
    let previousApartment;
    if (currentIndex !== -1 && currentIndex > 0) {
        previousApartment = data[currentIndex - 1];
    } else {
        previousApartment = data[data.length - 1];
    }

    var counter = currentIndex + 1;

    const previousApartmentLink = `/details_appartement/${previousApartment.id}`;

    

    return (
        <div className='div-apartment'>
            <div className='div-img-apartment'>
                <img className='img-apartment' src={apartment.cover} alt={apartment.title} />
                <div className='div-counter'>
                    <p className='counter'>{counter}/{data.length}</p>
                </div>
                <div className='div-links'>
                    <Link className='link' to={previousApartmentLink}>
                        <img src={ArrowLeft} alt="Lien précédent" className="link-image" />
                    </Link>
                    <Link className='link' to={nextApartmentLink}>
                        <img src={ArrowRight} alt="Lien suivant" className="link-image" />
                    </Link>
                </div>
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

            <div className='div-details-apartment'>
                <details className='details-apartment details-description'>
                    <summary className='summary-animation'>Description</summary>
                    <p className='description-apartment'>{apartment.description}</p>
                </details>

                <details className='details-apartment details-equipment'>
                    <summary className='summary-animation'>Equipment</summary>
                    <ul className='ul-equipment'>
                        {apartment.equipments.map((equipment, index) => (
                            <li className='equipment-apartment' key={index}>
                                {equipment}
                            </li>
                        ))}
                    </ul>
                </details>
            </div>
        </div>
    );
}

export default ApartmentDetails;

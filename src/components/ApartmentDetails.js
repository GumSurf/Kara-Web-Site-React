import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/LogementList.json';
import RatingStars from './RatingStars';

function ApartmentDetails() {
    const params = useParams();
    const { id } = params;
    const apartment = data.find((item) => item.id === id);

    if (!apartment) {
        return <div>Appartement non trouvé</div>;
    }

    const nameParts = apartment.host.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    return (
        <div className='div-apartment'>
            <div className='div-img-apartment'>
                <img className='img-apartment' src={apartment.cover} alt={apartment.title} />
            </div>

            <div className='title-host-info'>
                <div className='div-title-location'>
                    <h2 className='titre-apartment'>{apartment.title}</h2>
                    <p className='location-apartment'>{apartment.location}</p>
                </div>
                <div className='host-info'>
                    <div className='div-names'>
                        <h3 className='host-names'>{firstName}</h3>
                        <h3 className='host-names'>{lastName}</h3>
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

            <div className='div-details-apartment'>
                <details className='details-apartment details-description'>
                    <summary className='summary-animation'>Description</summary>
                    <p className='description-apartment'>{apartment.description}</p>
                </details>

                <details className='details-apartment details-equipment'>
                    <summary className='summary-animation'>Equipment</summary>
                    <ul className='ul-equipment'>
                        {apartment.equipments.map((equipment, index) => (
                            <li className='equipment-apartment' key={index}>{equipment}</li>
                        ))}
                    </ul>
                </details>
            </div>
        </div>
    );
}

export default ApartmentDetails;

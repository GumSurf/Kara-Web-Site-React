import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import data from '../datas/LogementList.json';

function ApartmentDetails() {
  const params = useParams();
  const { id } = params;
  const apartment = data.find((item) => item.id === id);

  if (!apartment) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <div>
      <h2>{apartment.title}</h2>
      <img src={apartment.cover} alt={apartment.title} />
      <p>{apartment.description}</p>
      <p>Location: {apartment.location}</p>
      <p>Rating: {apartment.rating}</p>
      <h3>Host: {apartment.host.name}</h3>
      <img src={apartment.host.picture} alt={apartment.host.name} />
      <h3>Equipment:</h3>
      <ul>
        {apartment.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h3>Tags:</h3>
      <ul>
        {apartment.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <Outlet /> {/* Affiche les routes imbriquées */}
    </div>
  );
}

export default ApartmentDetails;

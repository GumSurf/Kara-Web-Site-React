import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/LogementList.json';

const DivCollapse = () => {

    const params = useParams();
    const { id } = params;
    const apartment = data.find((item) => item.id === id);

    return (
        <div>
            <div className='div-details-apartment'>
                <details className={'details-apartment details-description'}>
                    <summary className='summary-animation'>Description</summary>
                    <p className='description-apartment'>
                        {apartment.description}
                    </p>
                </details>

                <details className={'details-apartment details-equipment'}>
                    <summary className='summary-animation'>Equipment</summary>
                    <div className='collapse-content'>
                        <ul className='ul-equipment'>
                            {apartment.equipments.map((equipment, index) => (
                                <li className='equipment-apartment' key={index}>
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default DivCollapse;

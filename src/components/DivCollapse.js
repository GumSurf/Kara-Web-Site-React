import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/LogementList.json';

const DivCollapse = () => {
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const containerRef = useRef(null);

    const [div1Height, setDiv1Height] = useState(0);
    const [div2Height, setDiv2Height] = useState(0);
    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        // Calculate the initial heights of div1 and div2 when the component mounts
        if (div1Ref.current && div2Ref.current) {
            setDiv1Height(div1Ref.current.offsetHeight);
            setDiv2Height(div2Ref.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        // Observe changes in the container element (collapse opens/closes)
        const observer = new MutationObserver(() => {
            setDiv1Height(div1Ref.current.offsetHeight);
            setDiv2Height(div2Ref.current.offsetHeight);
        });

        if (containerRef.current) {
            observer.observe(containerRef.current, { attributes: true, subtree: true, childList: true });
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        setMaxHeight(Math.max(div1Height, div2Height));
    }, [div1Height, div2Height]);

    const div1Style = {
        height: `${maxHeight}px !important`,
        boxSizing: 'border-box',
    };

    const div2Style = {
        height: `${maxHeight}px`,
        boxSizing: 'border-box',
    };

    const params = useParams();
    const { id } = params;
    const apartment = data.find((item) => item.id === id);

    return (
        <div>
            <div className='div-details-apartment'>
                <details className={'details-apartment details-description'}>
                    <summary className='summary-animation'>Description</summary>
                    <p className='description-apartment' ref={div1Ref} style={div1Style} >{apartment.description}</p>
                </details>

                <details className={'details-apartment details-equipment'}>
                    <summary className='summary-animation'>Equipment</summary>
                    <div className='collapse-content'>
                        <ul className='ul-equipment' ref={div2Ref} style={div2Style}>
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

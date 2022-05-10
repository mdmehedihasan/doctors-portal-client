import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-20'>
            <InfoCard cardTitle="Opening Hours" bgclassName="bg-emerald-200" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgclassName="bg-aaccent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgclassName="bg-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;
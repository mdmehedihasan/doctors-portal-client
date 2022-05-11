import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-20'>
            <InfoCard cardTitle="Opening Hours" bgclass="bg-[#0FCFEC]" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" bgclass="bg-aaccent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgclass="bg-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;
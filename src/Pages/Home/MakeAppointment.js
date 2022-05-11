import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mb-20'>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>

            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an appointment Today</h2>
                <p className='text-white pb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam minus, rerum cupiditate, quidem magni recusandae ratione unde aspernatur quas voluptas numquam dicta id? Quibusdam fugiat eum architecto perferendis ut, ex in hic, voluptatem perspiciatis repellat ad magni illo est.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
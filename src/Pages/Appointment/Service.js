import { startOfYesterday } from 'date-fns';
import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]} </span>
                        : <span className='text-red-500'>Try another date</span>
                }</p>

                <p>{slots.length}{slots.length > 1 ? ' spaces' : ' space'} avilable</p>

                <p><small>Price:${price}</small></p>

                <div className="card-actions justify-start">

                    {/* <!-- The button to open modal --> */}
                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-primary ">Book Appointment </label>
                </div>
            </div>
        </div>
    );
};

export default Service;
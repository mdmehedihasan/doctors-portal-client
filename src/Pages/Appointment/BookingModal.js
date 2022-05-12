import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        console.log(slot, _id, name);
        setTreatment(null)



    }

    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-primary text-center mb-5">Booking for:{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">

                            {/* {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            } */}
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="btn btn-primary w-full max-w-xs text-white" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default BookingModal;
import React from 'react';
import '@styles/TimePicker.scss';

export const TimePicker = () => {
    return (
        <div className='TimePicker'>
            <button className="back">
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <div className="date">
                This month
            </div>
            <button className="ahead">
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    )
}

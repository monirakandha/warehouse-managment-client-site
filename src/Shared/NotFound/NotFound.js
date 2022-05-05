import React from 'react';
import './NotFound.css'
import NotFoundImg from '../../images/404.jpg';
const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={NotFoundImg} alt="" srcset="" />
        </div>
    );
};

export default NotFound;
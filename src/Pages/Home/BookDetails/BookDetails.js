import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const {id} = useParams(); 
    console.log(id);
    return (
        <div>
            <h1>Book Details for{id} </h1>
        </div>
    );
};

export default BookDetails;
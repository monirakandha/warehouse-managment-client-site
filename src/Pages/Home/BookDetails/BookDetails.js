import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const {id} = useParams(); 
    const{name} = useParams()
    const [book,setBook] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/book/${id}`;
        fetch(url)
        .then( res => res.json())
        .then(data => setBook(data))
    }, []);
    console.log(id);
    console.log(name);
    return (
        <div>
            <h1>Book Details for{id} </h1>
            <h1>Book Details for{name} </h1>
        </div>
    );
};

export default BookDetails;
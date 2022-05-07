import { useEffect, useState } from 'react';


const useSingleBookDetails = (id) => {
    
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id])

    return[book,setBook]
};

export default useSingleBookDetails;
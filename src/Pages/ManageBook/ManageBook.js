import React from 'react';
import useBooks from '../../hooks/useBooks';

const ManageBook = () => {
    const [books , setBooks] = useBooks();
    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are You sure?')
        if (proceed) {
            const url = `http://localhost:5000/book/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = books.filter(book => book._id !== id)
                    setBooks(remaining)
                })
        }
        
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Manage Your Book</h1>
            {
                books.map(book => <div key={ServiceWorker._id}>
                    <h4>{book.name} <button onClick={() => handleDelete(book._id)}>X</button></h4>
                    
                </div>)
            }
        </div>
    );
};

export default ManageBook;
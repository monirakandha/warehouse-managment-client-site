import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import Book from  "../Book/Book"
const Books = ({book}) => {
  const [books , setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect( () => {
    fetch('http://localhost:5000/book')
    .then(res => res.json())
    .then(data => setBooks(data));
  } , [])
  return (
    <div>
      <div className="container">
      <h2 className="services-title" >Our Total Books : {books.length} </h2>
      <div className="services-container">
        {
          books.map(book => <Book key={book.id} book={book}></Book>)
        }
      </div>
    </div>
    <div class="container">
        <div class="col-md-12 text-center">
            <button onClick={() => navigate('/allbooks') } type="button" class="btn btn-primary">Manage All Books</button>
        </div>
    </div>
  
    </div>
  );
};

export default Books;

import React, { useEffect, useState } from 'react';
import Book from  "../Book/Book"
const Books = ({book}) => {
  const [books , setBooks] = useState([]);
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
    </div>
  );
};

export default Books;

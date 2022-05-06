import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import './Books.css'
const Books = ({book}) => {
const [books , setBooks] = useState([]);
useEffect(() => {
  fetch('http://localhost:5000/book')
  .then(res => res.json())
  .then(data => setBooks(data));
} , [])
  return (
    <div className="container">
      <h2 className="books-title" >Our Total books</h2>
      <div className="books-container">
      {
        books.map(book => <Book
        key={book.id} book={book}></Book>)
      }
      </div>
    </div>
  );
};

export default Books;

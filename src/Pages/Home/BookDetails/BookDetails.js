import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSingleBookDetails from '../../../hooks/useSingleBookDetails';

const BookDetails = () => {

    const {id} = useParams(); 
    const [book,setBook] = useSingleBookDetails(id);
    console.log(book);
    const {img, price, name , description,quantity} = book;
    return (
        <div>
            <h1>Book Details for{id} </h1>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          ${price}
          </Card.Text>
          <Card.Text>
          <b>Instock : {quantity}</b>
          </Card.Text>
          <Card.Text>
          {description}
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    );
};

export default BookDetails;
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Book = ({book}) => {
  const { _id, name, picture, description , price , instock} = book;
  const navigate = useNavigate();
  const navigateToBookDetails = id => {
    navigate(`/book/${id}`);
  }
  return (
    <div>
      <h2>this is single book</h2>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          ${price}
          </Card.Text>
          <Card.Text>
          <b>Instock : {instock}</b>
          </Card.Text>
          <Card.Text>
          {description}
          </Card.Text>
          <Button onClick={() => navigateToBookDetails (_id)} variant="primary">Get book</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Book;

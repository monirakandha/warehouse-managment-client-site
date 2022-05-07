import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Book = ({book}) => {
  const { _id, name, img, description , price , quantity} = book;
  const navigate = useNavigate();
  const navigateToBookDetails = id => {
    navigate(`/book/${id}`);
  }
  return (
    <div>
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
          <Button onClick={() => navigateToBookDetails (_id)} variant="primary">Stock Update</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Book;

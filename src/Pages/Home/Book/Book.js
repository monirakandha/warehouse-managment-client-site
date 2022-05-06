import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Book.css";
const Book = ({ book }) => {
  const { _id, name, picture, description , price} = book;
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          ${price}
          </Card.Text>
          <Card.Text>
          {description}
          </Card.Text>
          <Button onClick={() => navigate(`/book/${_id}`) } variant="primary">Get Service For : {name}</Button>
        </Card.Body>
      </Card>
    </div>

  );
};

export default Book;

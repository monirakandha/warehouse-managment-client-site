import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./BookDetails.css";
import useSingleBookDetails from "../../../hooks/useSingleBookDetails";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useSingleBookDetails(id);
  console.log(book._id);
  const updateQuantity = (event) => {
    event.preventDefault();
    const quantity =
      parseFloat(event.target.restock.value) + parseFloat(book.quantity);

    const url = `http://localhost:5000/book/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity:quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Quantity updated succsessfully");
        window.location.reload();
      });
    event.target.reset();
  };

  //delete

  const deleteCar = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/book/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = book.filter((book) => book._id !== id);
          setBook(remaining);
          // navigate(from);
          toast("Car deleted succsessfully");
        });
    }
};
//delivery

const deliveredCar = () => {
  const quantity = book.quantity - 1;
  if (quantity === -1) {
    toast.error("Stock Out plase add more instock");
  } else {
    const url = `http://localhost:5000/book/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Delivered Car succsessfully");
      });
  }
};

  console.log(book);
  const { img, price, name, description, quantity } = book;
  return (
    <div className="container">
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={img} class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <h5 class="card-title">Price : {price}</h5>
              <h5 class="card-title">Quantity : {quantity}</h5>
              <p class="card-text">
                <b>Description</b> : {description}
              </p>
            </div>
            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button onClick={() => deliveredCar(book._id)} type="button" class="btn btn-secondary">
                  Delivery
                </button>
              </div>
              <div className="d-flex flex-column">
                <form onSubmit={updateQuantity}>
                  <input
                    className=""
                    type="Number"
                    id="restock"
                    name="restock"
                    placeholder="Quantity"
                  />
                  {/* <input className='' type="submit" value="Restock" /> */}
                  <button className="btn btn-primary m-3">Restock</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

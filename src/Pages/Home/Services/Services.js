import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import './Services.css'
const Services = ({service}) => {
const [services , setServices] = useState([]);
useEffect(() => {
  fetch('http://localhost:5000/books')
  .then(res => res.json())
  .then(data => setServices(data));
} , [])
  return (
    <div className="container">
      <h2 className="services-title" >Our Total Servies : {services.length} </h2>
      <div className="services-container">
      {
        services.map(service => <Service
        key={service.id} service={service}></Service>)
      }
      </div>
    </div>
  );
};

export default Services;

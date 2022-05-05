import React from 'react';
import {Card} from "react-bootstrap";
import './About.css'
import aboutimg1 from "../../images/about-img/img1.jpg";
import aboutimg2 from "../../images/about-img/img2.jpg";
import aboutimg3 from "../../images/about-img/img3.jpg";
import aboutimg4 from "../../images/about-img/img4.jpg";
import aboutimg5 from "../../images/about-img/img5.jpg";
import aboutimg6 from "../../images/about-img/img6.jpg";

const About = () => {
    return (
        <div className="container">
        <h2 className="services-title" >We know everythingabout books. </h2>
        <div className="services-container">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={aboutimg1}/>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={aboutimg2}/>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={aboutimg3}/>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={aboutimg4}/>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={aboutimg5}/>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={aboutimg6}/>
        </Card>
        </div>
      </div>
    );
};

export default About;
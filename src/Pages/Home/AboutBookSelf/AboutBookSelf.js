import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutImage from '../../../images/about-banner.png';

const AboutBookSelf = () => {
    return (
        <div className="container">
        <div  className="align-items-center row">
            <div class="col-md-6 ">
            <div>
            <h5 className='tex-primary'>ONLINE DATA</h5>
            <h2>The largest library on the planet.</h2>
            <p>We share thousands of books with others by reviewing them. Our goal is to get the books in the readers' hands all over the world.</p>
            </div>
            </div>
            <div class="col-md-6"><img src={AboutImage} className="img-fluid" alt="" srcset="" /></div>
        </div>
    </div>
    );
};

export default AboutBookSelf;
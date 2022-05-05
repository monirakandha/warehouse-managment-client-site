import React from 'react';
import { Button } from 'react-bootstrap';
import banner from '../../../images/banner/banner.jpg'
const Banner = () => {
    return (
        <div className="container">
        <div  className="align-items-center row">
            <div class="col-md-8 ">
            <h2 style={{ fontSize: "4vw" }}>Welcome to BookSelf Mange Your Book By Youself</h2>
            <h5>We are Book Saver We Collect old and new book listing then add our inventory, If you have any kind of Book then added on our inventory.</h5>
            <Button style={{ marginTop:"30px" , paddingLeft:"40px", paddingRight:"40px", paddingBottom:"20px", paddingTop:"20px", fontSize:"25px"}} variant="dark">Join Now</Button>
            </div>
            <div class="col-md-4"><img src={banner} className="img-fluid" alt="" srcset="" /></div>
        </div>
    </div>
    );
};

export default Banner;
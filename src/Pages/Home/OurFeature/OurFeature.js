import React from "react";
import "./OurFeature.css"
import One from  "../../../images/one.png";
import Two from  "../../../images/two.png";
import Three from  "../../../images/three.png";

const OurFeature = () => {
  return (
    <div>
      <div className="container">
          <h1 className="text-center feature-heade">Why We are Best</h1>
        <div className="align-items-center row">
          <div class="col-md-4 ">
            <div>
                <img src={One} alt="" srcset="" />
                <h2>Used Book Buying</h2>
                <p>At our store, readers and students can buy
books that have been sent to us as a charity.</p>
            </div>
          </div>
          <div class="col-md-4 ">
            <div>
                <img src={Two} alt="" srcset="" />
                <h2>Gift Cards</h2>
                <p>They say a book is the best gift for a reason.
Get a gift card for a family member or a friend!</p>
            </div>
          </div>
          <div class="col-md-4 ">
            <div>
                <img src={Three} alt="" srcset="" />
                <h2>Returns and Exchanges</h2>
                <p>We are open for reasonable exchanges and
returns with refund or replacement upon request.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeature;

import React from 'react'
import './style.css'

const Card  = () =>{
    return (
      <div className="col-md-6 center-flex no-padding no-padding center-flex content-holder">
        <div id="customer-care-card">
          <div className="item-holder">
            <div className="customer-care">Customer Care</div>
          </div>

          <div className="item-details">
            <h5 className="num"> +254 718 222 111</h5>
            <h5 className="email">support@sky.garden</h5>
            <h5 className="date-1">Mon - Fri: 8 am - 8 pm</h5>
            <h5 className="date-2">Sat - Sun: 9 am - 5 pm</h5>
          </div>

          <button className="get-started-button">Start Live Chart</button>
        </div>
      </div>
    );
}

export default Card

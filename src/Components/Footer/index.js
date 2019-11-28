import "./style.css";
import React from "react";
import "font-awesome/css/font-awesome.min.css";

const footer = () => {
  return (
    <div className="center-flex footer">
      <div className="row">
        <div className=" logo-app">
          <h3>
            GET{" "}
            <img
              alt="Logo"
              className="logo"
              src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574958029/SkyTest/skygarden_logo_pos_copy.png"
            ></img>{" "}
            App. It's free!
          </h3>
        </div>
        <div className="appstore">
          <img
            alt="Logo"
            className="play"
            src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574958032/SkyTest/Playstore.png"
          ></img>
        </div>
        <div className="col-lg-3 margin-bottom-20 custom-column">
          <div>
            <h5>COMPANY</h5>
            <div className="row-details">
              <p>About Us</p>
              <p>Sell with Sky.Garden</p>
              <p>Sky.Garden Blog</p>
              <p>Returns and Exchange</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 no-padding margin-bottom-20 custom-column">
          <div>
            <h5>CONTACT US</h5>
            <div className="row-details">
              <p>FAQ Center</p>
              <p>hello@sky.garden</p>
              <p>5th Floor, Senteu Plaza Nairobi Kenya</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 no-padding margin-bottom-20 custom-column">
          <div>
            <h5>SHOPING WITH US IS EASY</h5>
            <div className="row-details">
              <p>
                <img
                  className="data"
                  src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574964113/SkyTest/car_copy.png"
                  alt="deliver"
                />{" "}
                Same day delivery
              </p>
              <p>
                <img
                  className="lock"
                  src="https://res.cloudinary.com/dy1bghrrm/image/upload/v1574958048/SkyTest/lock_2_copy.png"
                  alt="deliver"
                />{" "}
                Secure payment online or on delivery
              </p>
              <p>
                <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                {"  "}
                Free returns
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 no-padding margin-bottom-20 custom-column">
          <div>
            <h5>FOLLOW OUR NEWS</h5>
            <div className="row-details">
              <p>
                <i className="fa fa-facebook-official" aria-hidden="true"></i>{" "}
                FaceBook
              </p>
              <p>
                <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
              </p>
              <p>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>{" "}
                LinkdIn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;

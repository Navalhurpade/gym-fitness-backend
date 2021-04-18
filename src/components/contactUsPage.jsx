import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import GymInside from "./assets/gym-inside.jpg";
import ScrollToTop from "./ScrollToTop";

function contactUsPage(props) {
  return (
    <div className="contactUsPage">
      <ScrollToTop />
      <section className="contactHeader">
        <h1>Walk in or Connect us via</h1>
        <p className="contact-p">
          We love questions and feedback – and we're always happy to help! Here
          are some ways to contact us.
        </p>
        <div className="contact-box-container">
          <div className="item-box">
            <h3 className="contact-box-heading">call Us</h3>
            <p className="contact-box-details">
              call us for any queries, regarding any pricing details
            </p>
            <div className="circle" target="_blank" rel="noreferrer">
              <a href="tel:+917887973389">
                <FontAwesomeIcon icon={faPhoneAlt} size="1x" color="#9FAFC1" />
              </a>
            </div>
          </div>

          <div className="item-box">
            <h3 className="contact-box-heading">Mail Us</h3>
            <p className="contact-box-details">
              You can also contact us through mail we reply you within 24 hours
            </p>
            <div className="circle">
              <a
                href="mailto: naval@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} size="1x" color="#9FAFC1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="address-section">
        <h3>Address</h3>
        <div className="address-box">
          <div>
            <img className="gym-inside" src={GymInside} alt="gym- inside" />
          </div>
          <div className="address-container">
            <h4>Goulkhed Road, Shegaon</h4>
            <div className="address-row">
              <div className="circle">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="15px"
                  color="#9FAFC1"
                />
              </div>
              <p className="address-p">near saraswati Collage, 444404</p>
            </div>

            <div className="address-row">
              <div className="circle">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="15px"
                  color="#9FAFC1"
                />
              </div>
              <p className="address-p">naval@gmail.com</p>
            </div>

            <div className="address-row">
              <div className="circle">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="15px"
                  color="#9FAFC1"
                />
              </div>
              <p className="address-p">788797339</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default contactUsPage;

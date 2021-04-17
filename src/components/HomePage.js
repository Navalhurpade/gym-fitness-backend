import React from "react";
import background from "./assets/mussel_men-crop.jpg";
import smilingMan from "./assets/potrait-man-min.png";
import PlanCard from "./PlanCard";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <div className="header-container">
        <img alt="Title-img" className="title-img" src={background} />
        <div className="header-text">
          <h1>
            Be Ready For Fit <br /> Focus on Your Fitness
            <br /> A Gym for you
          </h1>
          <div className="button-container">
            <div className="button_cont">
              <Link className="button" to="/contactUs">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <div className="section-3 row">
          <div className="pic-container col-md-6">
            <img alt="smiling-man" src={smilingMan} className="man-pik" />
          </div>
          <div className="quote col-md-6">
            <h3>Your Body Is Work of art in Gym </h3>
            <p>
              To maintain health and reduce your risk of health problems, health
              professionals and researchers recommend a minimum of 30 minutes of
              moderate-intensity physical activity on most, preferably all,
              days.
            </p>
            <p>
              Increases in daily activity can come from small changes made
              throughout your day, such as walking or cycling instead of using
              the car, getting off a tram, train or bus a stop earlier and
              walking the rest of the way...
            </p>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div>
          <h3>Meet Your coch</h3>
        </div>
        <div className="couch-img">
          <img alt="couch-img" src={smilingMan} />
        </div>
        <div className="couch-intro">
          <h4>Sushil</h4>
          <p>
            Hello Im profestional gym trainer. Training people since 2015. Im
            having 10 year of experence in traing And educating people how to
            get fit, And achive their fitness Goles...
          </p>
        </div>
      </section>
      <div className="plan-card-container">
        <div className="plan-heading">
          <h2>Pricing Plans</h2>
        </div>
        <div className="row plan-card-subcontainer">
          <PlanCard specialDietPlan title="Basic" />
          <PlanCard specialDietPlan personalTraining title="standard" />
          <PlanCard
            personalTraining
            specialDietPlan
            persnalCoch
            healthSuppliments
            title="Pro"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

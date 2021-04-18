import React from "react";
import { Link } from "react-router-dom";
import checked from "./assets/check.svg";
import notChecked from "./assets/not-check.svg";

function PlanCard({
  title,
  personalTraining,
  specialDietPlan,
  persnalCoch,
  healthSuppliments,
}) {
  return (
    <div className="col card-container">
      <div className="flip-card-container" style={{ "--hue": 220 }}>
        <div className="flip-card">
          <div className="card-front">
            <figure>
              <div className="img-bg"></div>
              <figcaption>{title}</figcaption>
            </figure>

            <ul className="card-ul">
              <li className="card-li">
                Special diet Plan{" "}
                {specialDietPlan ? (
                  <img alt="checkedOrnot" src={checked} />
                ) : (
                  <img alt="checkedOrnot" src={notChecked} />
                )}
              </li>
              <li className="card-li">
                Personal Training
                {personalTraining ? (
                  <img alt="checkedOrnot" src={checked} />
                ) : (
                  <img alt="checkedOrnot" src={notChecked} />
                )}
              </li>

              <li className="card-li">
                Helth Supplements
                {healthSuppliments ? (
                  <img alt="checkedOrnot" src={checked} />
                ) : (
                  <img alt="checkedOrnot" src={notChecked} />
                )}
              </li>
              <li className="card-li">
                Personal Coach for You{" "}
                {persnalCoch ? (
                  <img alt="checkedOrnot" src={checked} />
                ) : (
                  <img alt="checkedOrnot" src={notChecked} />
                )}
              </li>
            </ul>
          </div>

          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
            </figure>

            <Link className="card-button" to="/contactUs">
              Book Now !
            </Link>

            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;

import React from "react";

import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const PlanCard = ({ data }) => {
  return (
    <div className="card-plans">
      <h3>{data.name}</h3>
      <h4 className="price">
        ${data.price}
        <span>/month</span>
      </h4>
      <p>That's only {(data.price / 30).toFixed(2)}$ per meal</p>
      <hr />
      <div>
        <ul>
          <li className="perks">
            <span className="is-check">
              {data.is1MealPerDay ? <FaCheck /> : <FaXmark />}
            </span>
            1 meal for day
          </li>
          <li className="perks">
            <span className="is-check">
              {data.isOrderAnytime ? <FaCheck /> : <FaXmark />}
            </span>
            order 24/7
          </li>
          <li className="perks">
            <span className="is-check">
              {data.isAcessNew ? <FaCheck /> : <FaXmark />}
            </span>
            Access to new creations
          </li>
          <li className="perks">
            <span className="is-check">
              {data.isFreeDelivery ? <FaCheck /> : <FaXmark />}
            </span>
            Free delivery
          </li>
        </ul>
        <hr />
      </div>
      <div className="signup-button">
        <a href="#" className="btn">
          sign-up
        </a>
      </div>
    </div>
  );
};

export default PlanCard;

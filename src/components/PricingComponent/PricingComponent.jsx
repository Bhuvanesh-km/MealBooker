import { PricingData } from "../../data/PricingData";
import PlanCard from "./PlanCard";

import "../styles/PricingComponent.css";

const PricingComponent = () => {
  return (
    <section class="Plans" id="Plans">
      <h2>start eating healthy today</h2>

      <div class="pricing-container">
        {PricingData.map((data) => (
          <PlanCard data={data} />
        ))}
        {/* <div class="card-plans">
          <h3>basic</h3>
          <h4 class="price">
            $199<span>/month</span>
          </h4>
          <p>That's only 6.6$ per meal</p>
          <hr />
          <div>
            <ul>
              <li>
                <span class="tick-mark">&#10004</span> 1 meal for day
              </li>
              <li>
                <span class="tick-mark">&#10004</span> order 24/7
              </li>
              <li>
                <span class="tick-mark">&#10060</span> Access to new creations
              </li>
              <li>
                <span class="tick-mark">&#10060</span> Free delivery
              </li>
            </ul>
            <hr />
          </div>
          <div class="signup-button">
            <a href="" class="btn">
              sign-up
            </a>
          </div>
        </div>

        <div class="card-plans classic">
          <h3>classic</h3>
          <h4 class="price">
            $299<span>/month</span>
          </h4>
          <p>That's only 9.9$ per meal</p>
          <hr />
          <div>
            <ul>
              <li>
                <span class="tick-mark">&#10004</span> 1 meal for day
              </li>
              <li>
                <span class="tick-mark">&#10004</span> order 24/7
              </li>
              <li>
                <span class="tick-mark">&#10060</span> Access to new creations
              </li>
              <li>
                <span class="tick-mark">&#10004</span> Free delivery
              </li>
            </ul>
            <hr />
          </div>

          <div class="signup-button">
            <a href="" class="btn">
              sign-up
            </a>
          </div>
        </div>

        <div class="card-plans">
          <h3>premium</h3>
          <h4 class="price">
            $399<span>/month</span>
          </h4>
          <p>That's only 13.30$ per meal</p>
          <hr />
          <div>
            <ul>
              <li>
                <span class="tick-mark">&#10004</span> 1 meal for day
              </li>
              <li>
                <span class="tick-mark">&#10004</span> order 24/7
              </li>
              <li>
                <span class="tick-mark">&#10004</span> Access to new creations
              </li>
              <li>
                <span class="tick-mark">&#10004</span> Free delivery
              </li>
            </ul>
            <hr />
          </div>

          <div class="signup-button">
            <a href="" class="btn">
              sign-up
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PricingComponent;

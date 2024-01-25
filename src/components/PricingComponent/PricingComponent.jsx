import { PricingData } from "../../data/PricingData";
import PlanCard from "./PlanCard";

import "../styles/PricingComponent.css";

const PricingComponent = () => {
  return (
    <section className="Plans" id="Plans">
      <h2>start eating healthy today</h2>

      <div className="pricing-container">
        {PricingData.map((data) => (
          <PlanCard data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default PricingComponent;

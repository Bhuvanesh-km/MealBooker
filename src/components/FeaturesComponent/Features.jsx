import React from "react";

import "../styles/FeaturesComponent.css";
import Featurecard from "./Featurecard";
import { FeaturesData } from "../../data/FeaturesData";

const Features = () => {
  return (
    <section className="Features" id="Features">
      <h2>Awesome Features</h2>
      <div className="container-features">
        {FeaturesData.map((data) => (
          <Featurecard data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;

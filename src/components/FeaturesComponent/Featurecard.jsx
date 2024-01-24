import { IoCalendar } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import "../styles/FeaturesComponent.css";

const Featurecard = ({ data }) => {
  const Icon =
    data.icon === "IoCalendar"
      ? IoCalendar
      : data.icon === "MdDeliveryDining"
      ? MdDeliveryDining
      : data.icon === "GiHotMeal"
      ? GiHotMeal
      : "NA";
  // console.log(Icon);
  return (
    <div className="container-features">
      <div className="container">
        <div className="icon">
          <Icon className="svg-icon" />
        </div>
        <h3>{data.heading}</h3>
        <p className="feature-para">{data.description}</p>
      </div>
    </div>
  );
};

export default Featurecard;

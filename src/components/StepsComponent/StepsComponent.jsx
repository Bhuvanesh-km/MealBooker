import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";

import "../styles/StepsComponent.css";

const StepsComponent = () => {
  return (
    <section className="Details" id="Details">
      <h2>steps to follow</h2>
      <div className="steps-container">
        <img src="./Capture.PNG" alt="steps-to-follow" />

        <div className="steps">
          <div className="steps-content">
            <div className="logo-container">
              <TbCircleNumber1 className="numbers-logo" />
            </div>
            <p className="steps-para">
              choose the subscription plan that best fits your needs and signup
              today.
            </p>
          </div>

          <div className="steps-content">
            <div className="logo-container">
              <TbCircleNumber2 className="numbers-logo" />
            </div>
            <p className="steps-para">
              Order your delicious meal using mobile or website Or you can even
              call us!
            </p>
          </div>

          <div className="steps-content">
            <div className="logo-container">
              <TbCircleNumber3 className="numbers-logo" />
            </div>
            <p className="steps-para">
              Enjoy your meal after less than 20 minutes. See you the next time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsComponent;

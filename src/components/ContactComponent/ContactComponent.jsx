import "../styles/ContactComponent.css";

const ContactComponent = () => {
  return (
    <section className="sign-up" id="sign-up">
      <h2>Contact us</h2>
      <div className="container-contact">
        <div className="video-wrapper">
          <video className="looping-video" autoPlay loop muted>
            <source src="src\assets\Avocado.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="info">
          <form className="form">
            <div className="entry">
              <div className="entry-text">Name</div>
              <input type="text" name="Name" placeholder="Your Name" required />
            </div>
            <div className="entry">
              <div className="entry-text">Email</div>
              <input type="email" name="email" placeholder="Your Email" />
            </div>
            <div className="entry">
              <div className="entry-text">How did you find us</div>
              <select name="" id="">
                <option value="">friends</option>
                <option value="">search</option>
                <option value="">advertsiment</option>
                <option value="">other</option>
              </select>
            </div>
            <div className="entry">
              <div className="entry-text">Drop us a line</div>
              <textarea name="" id="" placeholder="Your Message"></textarea>
            </div>
            <div className="entry ">
              <input type="checkbox" className="checkbox" />
              <span className="checkbox-conditions">
                I have read and agree with all the Privacy Policy and Terms
                Conditions
              </span>
            </div>
            <div className="btn-parent">
              <a href="#" className="btn btn-full form-button">
                SEND MESSAGE
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;

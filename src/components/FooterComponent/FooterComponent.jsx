import "../styles/FooterComponent.css";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-parent">
        <ul className="footer-text">
          <li className="text-value">
            <a href="">About us</a>
          </li>
          <li className="text-value">
            <a href="">Ios App</a>
          </li>
          <li className="text-value">
            <a href="">Android App</a>
          </li>
        </ul>
        <ul className="social-link">
          <li className="icon-footer">
            <a href="#">
              <img
                src="./facebook-logo-svg.svg"
                alt="logo"
                className="social-img"
              />
            </a>
          </li>
          <li className="icon-footer">
            <a href="#">
              <img
                src="./twitter-logo-svg.svg"
                alt="logo"
                className="social-img"
              />
            </a>
          </li>
          <li className="icon-footer">
            <a href="#">
              <img
                src="./instagram-round-svg.svg"
                alt="logo"
                className="social-img"
              />
            </a>
          </li>
          <li className="icon-footer">
            <a href="#">
              <img src="./snapchat-svg.svg" alt="logo" className="social-img" />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer-p">
        Copyright © 2024 EVERYONE. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterComponent;

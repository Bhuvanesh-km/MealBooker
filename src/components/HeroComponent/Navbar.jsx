import "./HeroComponent.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <li className="nav-line">
        <a className="nav-anchors" href="#Features">
          Features
        </a>
      </li>
      <li className="nav-line">
        <a className="nav-anchors" href="#Details">
          Details
        </a>
      </li>
      <li className="nav-line">
        <a className="nav-anchors" href="#Reviews">
          Reviews
        </a>
      </li>
      <li className="nav-line">
        <a className="nav-anchors" href="#Plans">
          Plans
        </a>
      </li>
      <li className="nav-line">
        <a className="nav-anchors" href="#sign-up">
          Sign up
        </a>
      </li>
    </nav>
  );
};

export default Navbar;

import Navbar from "./Navbar";
import Showcase from "./Showcase";
import "./HeroComponent.css";

const HeroComponent = () => {
  return (
    <header className="header-section">
      <Navbar />
      <Showcase />
    </header>
  );
};

export default HeroComponent;

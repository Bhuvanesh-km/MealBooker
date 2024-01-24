import "./App.css";
import {
  HeroComponent,
  Features,
  StepsComponent,
  ReviewComponent,
  PricingComponent,
} from "./components/index";

function App() {
  return (
    <>
      <HeroComponent />
      <Features />
      <StepsComponent />
      <ReviewComponent />
      <PricingComponent />
      <div className="hey"></div>
    </>
  );
}

export default App;

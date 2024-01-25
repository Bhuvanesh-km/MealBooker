import "./App.css";
import {
  HeroComponent,
  Features,
  StepsComponent,
  ReviewComponent,
  PricingComponent,
  ContactComponent,
  FooterComponent,
} from "./components/index";

function App() {
  return (
    <>
      <HeroComponent />
      <Features />
      <StepsComponent />
      <ReviewComponent />
      <PricingComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}

export default App;

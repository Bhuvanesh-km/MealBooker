import "./App.css";
import { Features, ReviewComponent } from "./components/index";
import { HeroComponent } from "./components/index";
import { StepsComponent } from "./components/index";

function App() {
  return (
    <>
      <HeroComponent />
      <Features />
      <StepsComponent />
      <ReviewComponent />
      <div className="hey"></div>
    </>
  );
}

export default App;

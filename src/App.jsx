import "./App.css";
import { Features } from "./components/index";
import { HeroComponent } from "./components/index";
import { StepsComponent } from "./components/index";

function App() {
  return (
    <>
      <HeroComponent />
      <Features />
      <StepsComponent />
      <div className="hey"></div>
    </>
  );
}

export default App;

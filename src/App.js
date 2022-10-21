import freeCodeCampLogo from "./imgs/freecodecamp-logo.jpg";
import "./App.css";
import Button from "./components/Button";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const handleClic = () => {
    setNumClics(numClics + 1);
  };

  const restartCounter = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Button text="Clic" isButtonClic={true} handleClic={handleClic} />
        <Button
          text="Restart"
          isButtonClic={false}
          handleClic={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;

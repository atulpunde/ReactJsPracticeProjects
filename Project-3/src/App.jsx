import { useState } from "react";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePage = () => {
    console.log("test toggle");

    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame toggleGamePage={toggleGamePage} />
      )}
    </>
  );
}

export default App;

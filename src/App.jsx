import ButtonsContainer from "./components/buttonContainer/ButtonsContainer";
import Laps from "./components/laps/Laps";
import StopWatch from "./components/watch/StopWatch";
import "./App.css";
import { useState } from "react";

function App(props) {
  try {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    return (
      <>
        <div className="container">
          <StopWatch isActive={isActive} isPaused={isPaused} setTime={setTime} time={time} />
          <Laps laps={laps} />
          <ButtonsContainer setIsActive={setIsActive} setIsPaused={setIsPaused} isPaused={isPaused} isActive={isActive} setTime={setTime} time={time} laps={laps} setLaps={setLaps} />
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default App;

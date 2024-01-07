import Button from "../button/Button";
import "./style/ButtonsContainer.css";

function ButtonsContainer({ setIsActive, setIsPaused, setTime, time, isPaused, isActive, laps, setLaps }) {
  try {
    const handleStart = () => {
      setIsActive(true);
      setIsPaused(false);
    };

    const handlePauseResume = () => {
      setIsPaused(!isPaused);
    };

    const handleReset = () => {
      setIsActive(false);
      setTime(0);
      setLaps([]);
    };
    const handleLap = () => {
      setLaps([...laps, time]);
    };
    return (
      <>
        <div className="buttons-container">
          {isActive && isPaused ? (
            <>
              <Button text={"Resume"} action={handlePauseResume} />
              <Button text={"Reset"} action={handleReset} />
            </>
          ) : isActive ? (
            <>
              <Button text={"Pause"} action={handlePauseResume} />
              <Button text={"Lap"} action={handleLap} />
            </>
          ) : (
            <Button text={"Start"} action={handleStart} />
          )}
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default ButtonsContainer;

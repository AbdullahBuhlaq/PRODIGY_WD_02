import { useEffect } from "react";
import "./style/StopWatch.css";

function StopWatch({ isActive, isPaused, setTime, time }) {
  try {
    useEffect(() => {
      let interval = null;

      if (isActive && isPaused === false) {
        interval = setInterval(() => {
          setTime((time) => time + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, [isActive, isPaused]);

    return (
      <>
        <div className="timer">
          <span className="digits">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span className="digits">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
          <span className="digits mili-sec">{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default StopWatch;

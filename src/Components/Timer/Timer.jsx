import React, { useEffect, useState } from "react";
import './timer.css'


const Timer = ({duration}) => {
  const [time, setTime] = useState(duration);
    
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const formatedTimer = () => {
    let totalSecs = parseInt(Math.floor(time / 1000));
    let totalMins = parseInt(Math.floor(totalSecs / 60));
    let totalHours = parseInt(Math.floor(totalMins / 60));
    let days = parseInt(Math.floor(totalHours / 24));

    let sec = parseInt(Math.floor(totalSecs % 60));
    let min = parseInt(Math.floor(totalMins % 60));
    let hrs = parseInt(Math.floor(totalHours % 24));

    return (
      <div className="timer">
        <div>
          <h2>{days}</h2>
          <h3>Days</h3>
        </div>
        <div>
          <h2>{hrs}</h2>
          <h3>Hours</h3>
        </div>
        <div>
          <h2>{min}</h2>
          <h3>Minutes</h3>
        </div>
        <div>
          <h2>{sec}</h2>
          <h3>Seconds</h3>
        </div>
      </div>
    );
};
    
  return (
    <div>
         {formatedTimer(time)}
    </div>
  )
}

export default Timer
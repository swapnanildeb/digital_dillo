import React from 'react';
import { useTimer } from 'react-timer-hook';
 
function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
 
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Time until next round! </h1>
      <p>Taking next submissions in:</p>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
 
export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
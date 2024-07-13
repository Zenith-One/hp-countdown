import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const defaultTime = 10

function App() {
  const [isRunning,setRunning] = useState(false);
  const [time, setTime] = useState(defaultTime);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning && time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning,time]);

  const minutes = Math.floor(time / 60);
  const minutesTens = Math.floor(minutes / 10);
  const minutesOnes = minutes % 10;
  const seconds = time % 60;
  const secondsTens = Math.floor(seconds / 10);
  const secondsOnes = seconds % 10;


  let display = () => {
    if (isRunning && time > 0) {
      return (
        <h1
          onClick={() => setRunning(false)}
        >
          <span>{minutesTens}</span>
          <span>{minutesOnes}</span>
          <span>:</span>
          <span>{secondsTens}</span>
          <span>{secondsOnes}</span>
        </h1>
      );
    } else if (time === 0) {
      return (
        <h1
          onClick={() => {
            setRunning(true);
            setTime(defaultTime);
          }}
          style = {{
            cursor: 'pointer',
            fontSize: '0.9em'
          }}>
            Time's up!
        </h1>
      );
    } else {
      return (
        <h1
          onClick={() => setRunning(true)}
          style = {{
            cursor: 'pointer'
          }}>
            { time === defaultTime ? 'Start' : 'Resume' }

        </h1>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {display()}
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./Clock.css";

import { usePomodoro } from 'use-react-pomodoro-fp';
function FunctionalPomodoroClock({ initialTime }) {

  const {
    startPomodoro,
    stopPomodoro,
    resetPomodoro,
    time
  } = usePomodoro({ initialTime });

  return (
    <main className="app manager">
      <div className="timer-container">
        <h1 id="time" className="countdown">
          {time}
        </h1>
      </div>

      <div>
        <div className="options">
          <div className="option">
            <div className="button-groups">
              <button
                id="start-button"
                className="button button--primary"
                onClick={startPomodoro}
              >
                Start
              </button>
              <button
                id="stop-button"
                className="button button--danger"
                onClick={stopPomodoro}
              >
                Stop
              </button>
              <button
                id="reset-button"
                className="button button--reset"
                onClick={resetPomodoro}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function App() {

  const time = '25:00';

  return (
    <div>
      <FunctionalPomodoroClock initialTime={time} />
    </div>
  );
}

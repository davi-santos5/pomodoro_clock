import React, { useEffect, useState } from 'react';

import Control from './components/Control';
import Timer from './components/Timer';

import './App.css';

function App(){
  const [breakTime, setBreakTime] = useState(5)
  const [sessionTime, setSessionTime] = useState(25)
  const [timer, setTimer] = useState(sessionTime * 60)
  
  const [isRunning, setIsRunning] = useState(false)
  const [timerLabel, setTimerLabel] = useState('Session')
  
  useEffect(() => setTimer(sessionTime*60), [sessionTime])
  
  const beep = document.querySelector('#beep')
  
  function resetAll() {
    setIsRunning(false)
    setBreakTime(5)
    setSessionTime(25)
    setTimer(sessionTime*60)
    setTimerLabel('Session')
    beep.pause()
    beep.load()
  }
  
  function changeTimer() {
     if(timerLabel === 'Session'){
       setTimerLabel('Break') 
       setTimer(breakTime*60)
     } else {
       setTimerLabel('Session')
       setTimer(sessionTime*60)
     }
    
    setIsRunning(true)
   }
  
  
  return(
    <div class='container'>
      <h1 id="title">Pomodoro's Clock</h1>
      <div className='controlers'> 
        <Control 
          id='break' 
          label='Break Length' 
          time={breakTime}
          setTime={setBreakTime}
        />
        <Control 
          id='session' 
          label='Session Length' 
          time={sessionTime}
          setTime={setSessionTime}
        />
      </div>
     
      <Timer 
        timer={timer}
        setTimer={setTimer}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        timerLabel={timerLabel}
        setTimerLabel={setTimerLabel}
        changeTimer={changeTimer}
        resetAll={resetAll}
        beep={beep}
      />
    </div>
  )
}


export default App;

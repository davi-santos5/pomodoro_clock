import React from 'react';

import useInterval from '../../Hooks/useInterval';

import './styles.css';

function Timer(
    {
      timer, 
      setTimer, 
      isRunning, 
      setIsRunning, 
      timerLabel, 
      setTimerLabel,
      changeTimer,
      resetAll,
      beep
    }
   ) {
    
    function displayTimer(timer) {
          let minutes = parseInt(timer / 60, 10)
          let seconds = parseInt(timer % 60, 10)
  
          minutes = minutes < 10 ? "0" + minutes : minutes
          seconds = seconds < 10 ? "0" + seconds : seconds
      
          return `${minutes}:${seconds}`
    }
    
     useInterval(() => {
      if(timer > 0){
         setTimer(--timer) 
      } else {
        setIsRunning(false)
        playBeep()
        setTimeout(changeTimer, 4000)
      }
    }, isRunning ? 1000 : null);
    
     function playBeep() {
       beep.play()
       setTimeout(() => beep.pause(), 2800)
       setTimeout(() => beep.load(), 3000)
     }
      
     function controlTimer(){
      setIsRunning(!isRunning)
    }
      
    return(
      <div className='timer'>
        <h2 id='timer-label'>{timerLabel}</h2>
        <p id='time-left'>{displayTimer(timer)}</p>
        <div className='timer-controls'>
          <button id='start_stop' onClick={controlTimer}>
            <i className="fas fa-play"></i>
            <i className="fas fa-pause"></i>  
          </button>
          <button id='reset' onClick={resetAll}>
            <i className="fas fa-undo-alt"></i>
          </button>
          <audio
              id="beep"
              preload="auto"                   
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
        </div>
      </div>
    )
  }
  

  export default Timer;
import React from 'react';

import './styles.css';

  function Control({id, label, time, setTime}){
    
    function reduceTime() {
      if (time > 1) setTime(--time)
    }
    
    function increaseTime() {
      if (time < 60) setTime(++time)
    }
    
    return(
      <div className='control'>
        <h2 className='control-label'id={`${id}-label`}>{label}</h2>
        <div className='button-box'>
          <button 
            className='control-button' 
            id={`${id}-decrement`}
            onClick={reduceTime}
          >
              <i className="fas fa-minus"></i>
          </button>
          <p className='control-length' id={`${id}-length`}>{time}</p>
          <button 
            className='control-button' 
            id={`${id}-increment`}
            onClick={increaseTime}
          >
              <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    )
  }
  
  export default Control;
import React, { useEffect, useState } from 'react'
import '../../assets/styles/components/TestScreen/TimerBarStyling.scss'
import { toast } from 'react-toastify'

const TimerBar = ({user, onFinish, totalTime}) => {

  // const [totalTime, setTotalTime] = useState(300)
  const [currentTime, setCurrentTime] = useState(totalTime)

  useEffect(()=>{

    updateTimer()
    updateProgressBar()

    let timerInterval = setInterval(()=>{
      setCurrentTime((prev) => prev - 1)
    },1000)

    if(currentTime === 10){
      toast(`Last ${currentTime} seconds left. Wrap it up`)
    }

    return (()=>{
      clearInterval(timerInterval)

      if(currentTime === 0){
        onFinish(currentTime)
      }
    })


  }, [currentTime])


  function updateTimer() {
    const time = document.getElementById('time-left')
    let mins = Math.floor(currentTime/60)
    let seconds = currentTime % 60
    mins = mins < 10 ? "0" + mins : mins;
    seconds = seconds< 10 ? "0" + seconds : seconds;
    time.textContent = `${mins} : ${seconds}`
  }

  function updateProgressBar(){
    const progress = document.getElementById('progress')
    const p = 100 - (1 - (currentTime / totalTime)) * 100
    progress.style.width = `${p}%`
  }


  return (
    <div className='time-bar-container'>

        <div className="user">
          Name: {user.name}
        </div>

        <div className="time-end">
          Time Left: <span id="time-left">{totalTime} : 00</span> seconds
        </div>

        <div className="progress-bar">
          <div className="progress" id='progress'></div>
        </div>

        <div className="end-test-btn">
          <button onClick={() => onFinish(currentTime)} >END TEST</button>
        </div>

    </div>
  )
}

export default TimerBar
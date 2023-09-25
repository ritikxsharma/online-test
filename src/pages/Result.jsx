import React, { useEffect } from 'react'
import '../assets/styles/pages/ResultScreenStyling.scss'

const Result = ({user, totalQuestions, totalTimeTaken}) => {

  useEffect(()=>{

    const timeTaken = document.getElementById('time-taken')
    let mins = Math.floor(totalTimeTaken/60)
    let seconds = totalTimeTaken % 60
    mins = mins < 10 ? "0" + mins : mins;
    seconds = seconds< 10 ? "0" + seconds : seconds;
    timeTaken.textContent = `${mins} : ${seconds}`

  }, [totalTimeTaken])

  return (
    <div className='result-screen'>

      <div className="details">

        <div className="heading">
          Test Successfully Submitted
        </div>

        <div className="result-box">
          <div className="info-box">
            <span class="material-symbols-outlined">
              badge
            </span>
            Name : {user.name}
          </div>
          <div className="info-box">
            <span class="material-symbols-outlined">
              list
            </span>
            Total Questions : {totalQuestions}
          </div>
          <div className="info-box">
            <span class="material-symbols-outlined">
              timer
            </span>
            Total Time Taken: <span id="time-taken">{ totalTimeTaken }</span> mins
          </div>
        </div>

      </div>
    </div>
  )
}

export default Result
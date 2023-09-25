import React, { useState } from 'react'
import '../assets/styles/pages/TestScreenStyling.scss'
import TimerBar from '../components/TestScreen/TimerBar'
import SideBar from '../components/TestScreen/SideBar'
import Main from '../components/TestScreen/Main'
import { useNavigate } from 'react-router-dom'

const TestScreen = ({user, questionsSelected, totalTime, updateTimeTaken}) => {

  const [question, setQuestion] = useState(questionsSelected[0])

  const navigate = useNavigate()

  const handleShowQuestion = (id) =>{
    setQuestion(questionsSelected[id-1])
  }

  const handleFinish = (time) =>{
    updateTimeTaken(time)
    navigate("/result")
  }

  return (
    <div className='test-screen-container'>
        <nav className="timerbar">
            <TimerBar user={user} onFinish={handleFinish} totalTime={totalTime} ></TimerBar>
        </nav>
        <aside className="sidebar">
            <SideBar questionsSelected={questionsSelected} handleShowQuestion={handleShowQuestion} ></SideBar>
        </aside>
        <main className="question">
            <Main question={question} handleShowQuestion={handleShowQuestion} totalQuestions={questionsSelected.length} ></Main>
        </main>
    </div>
  )     
}

export default TestScreen
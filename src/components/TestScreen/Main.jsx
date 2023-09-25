import React, { useEffect } from 'react'
import '../../assets/styles/components/TestScreen/MainStyling.scss'
import { ToastContainer } from 'react-toastify'

const Main = ({question, handleShowQuestion, totalQuestions}) => {

  useEffect(() =>{

  }, [question])

  return (

    <div className='question-screen'>
        <div className="question"> 
          Ques.{question.id} : <br></br><br></br> {question.details}
        </div>
        <div className="btns">

            {
              question.id !== 1 && (
                <button id='prev' onClick={() => handleShowQuestion(question.id - 1)}>Previous</button>
              )
            }

            {
              question.id !== totalQuestions && (
                <button id='next' onClick={() => handleShowQuestion(question.id + 1)}>Next</button>
              )
            }
           
            <button id='save'>Save</button>
            <ToastContainer autoClose={3000}></ToastContainer>
        </div>
    </div>
  )
}

export default Main
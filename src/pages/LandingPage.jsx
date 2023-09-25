import React, { useState } from 'react'
import '../assets/styles/pages/LandingPageStyling.scss'
import UserInfoForm from '../components/LandingPage/UserInfoForm'
import Questions from '../components/LandingPage/Questions'

const LandingPage = ({user, updateUserInfo, updateQuestionsSelected}) => {

  const [showQuestions, setShowQuestions] = useState(false)

  const newUserInfo = (newUser) =>{
    updateUserInfo(newUser)
    setShowQuestions(true)
  }

  return (
    <div className='landing-page'>
        <div className="container">
            <div className="about">
                <img src={require('../assets/images/about-test.png')} alt="" />
            </div>
            <div className="user-input">
                
                {
                  !showQuestions ? (
                    <UserInfoForm user={user} updateUserInfo={newUserInfo} ></UserInfoForm>
                  ) : (
                    <Questions onQuestionsChange={updateQuestionsSelected} ></Questions>
                  )
                }
                    
            </div>
        </div>
    </div>
  )
}

export default LandingPage
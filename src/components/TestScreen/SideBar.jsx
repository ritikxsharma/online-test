import React, { useEffect, useState } from 'react'
import '../../assets/styles/components/TestScreen/SideBarStyling.scss'

const SideBar = ({questionsSelected, handleShowQuestion}) => {

  const [showExpanded, setShowExpanded] = useState(false)
  const screenWidth = window.innerWidth
  useEffect(() => {
    
    if(screenWidth >= 1024) setShowExpanded(true)
    else  setShowExpanded(false)

  }, [screenWidth])
  

  return (
    <aside>
      {
        showExpanded ? (
          <div className="expanded">
            <div className="heading">
                Questions Panel
                <div className="toggler" onClick={() => setShowExpanded(!showExpanded)} >
                  x
                </div>
            </div>
            <div className="questions-list">
              {
                questionsSelected.map((question)=>{
                  return <div key={question.id} className="question-box" onClick={()=> handleShowQuestion(question.id) }>
                    {question.id}. {question.name}
                  </div>
                })
              }
            </div>
          </div>
        ) : (
          <div className="not-expanded">
            <div className="toggler" onClick={() => setShowExpanded(!showExpanded)} >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            <div className="questions-list">
              {
                questionsSelected.map((q) =>{
                  return <div className="question-box" key={q.id} onClick={()=> handleShowQuestion(q.id)} >
                    {q.id}
                  </div>
                })
              }
            </div>

          </div>
        )
      }
    </aside>
  )
}

export default SideBar
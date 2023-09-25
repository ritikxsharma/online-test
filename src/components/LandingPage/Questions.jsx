import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Loading from '../common/Loading'
import { MathJaxContext, MathJax } from 'better-react-mathjax'
import '../../assets/styles/components/LandingPage/QuestionsStyling.scss'

const Questions = ({onQuestionsChange}) => {

  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchQuestions = async () =>{
      try {
        const questionIDS = ["AreaUnderTheCurve_21", "BinomialTheorem_13", "BinomialTheorem_24", "AreaUnderTheCurve_15", "AreaUnderTheCurve_2", "BinomialTheorem_3", "BinomialTheorem_4", "AreaUnderTheCurve_5" ]
        const questionsList = [];

        for (let i = 0; i < questionIDS.length; i++) {
          const res = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionIDS[i]}`, ({
            method: "GET",
            mode: "cors"
          }))      

          if(!res.ok) throw new Error("Failed")

          const data = await res.json()
          const name = data[0].QuestionID
          const details = data[0].Question
          
          const newQuestion = { id: i+1, name: name, details: details, selected: false}
          questionsList.push(newQuestion)
        }

        setQuestions(questionsList)
        setLoading(false)
        
      } catch (error) {
        console.log("Unable to fetch");
      }
    }

    fetchQuestions()

  }, [])

  const navigate = useNavigate()
  
  const handleCheckboxChange = (id) =>{
    console.log(id);
    setQuestions(questions.map((q)=>{
      if(q.id === id) return {...q, selected: !q.selected}
      return q
    }))
  }

  const handleStartTest = () =>{

    let selectedQuestions = questions.filter((q) => q.selected)

    selectedQuestions = selectedQuestions.map((q, id) => ({id: id+1, name: q.name, details: q.details }))
    
    if(selectedQuestions.length > 0){
      onQuestionsChange(selectedQuestions)
      navigate("/test-page")
    }

    else{
      alert("Select atleast 1 question")
    }

  }

  return (
    <>
      {
        loading ? (
          <Loading></Loading>
        ) : (
          <div className="questions-container">
            <h2>Select Questions</h2>
            <div className="questions">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Select</th>
                  </tr>
                </thead>

                
                <tbody>
                  {
                    questions.map((question) =>{
                      return <tr key={question.id}>
                        <td>{question.id}</td>
                        <td>{question.name}</td>
                        <td><input type="checkbox" checked = {question.selected} onChange={()=> handleCheckboxChange(question.id)} /></td>
                      </tr>
                    })
                  }
                </tbody>

              </table>
            </div>
            <div className="time-info">
              Total test time = {
                questions.filter(({selected}) => selected === true).length *5
              } mins
            </div>
            <div className="start-test-button">
              <button type="submit" onClick={handleStartTest}>Start Test</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Questions
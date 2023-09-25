import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import TestScreen from './pages/TestScreen';
import Result from './pages/Result';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState({
    name:"",
    email:"",
    mobile:""
  })

  const [questionsSelected, setQuestionsSelected] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [timeTaken, setTimeTaken] = useState(0)

  const updateUserInfo = (newUser) =>{
    setUser(newUser)
  }
  const updateQuestionsSelected = (updatedQuestions) =>{
    setQuestionsSelected(updatedQuestions)
    setTotalTime(updatedQuestions.length * 5 * 60)
  }
  const updateTimeTaken = (time) =>{
    setTimeTaken(totalTime - time)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/online-test' 
            element={
              <LandingPage 
                user={user} 
                updateUserInfo={updateUserInfo} 
                questionsSelected={questionsSelected} 
                updateQuestionsSelected={updateQuestionsSelected}>
              </LandingPage>
            }>
          </Route>

          <Route path='/test-page' 
            element={
              <TestScreen 
                user={user} questionsSelected={questionsSelected} totalTime={totalTime} updateTimeTaken={updateTimeTaken} >
              </TestScreen>
            }>
          </Route>

          <Route path='/result' 
            element={
              <Result 
                user={user} totalQuestions={questionsSelected.length} totalTimeTaken={timeTaken}>
              </Result>
            }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

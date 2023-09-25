const express = require('express');
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())

app.get('/getQuestion', async(req, res) =>{
    try{
        const qID = req.query.QUESTION_ID
        console.log(qID);
        const url = `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${qID}`
        const response = await fetch(url)

        if(!response.ok) throw new Error("Failed")

        const question = await response.json()
        res.status(200).json({"name":`${question[0].QuestionID}`, "details":`${question[0].Question}`})

    }catch(err){
        console.log("Unable");
        res.status(500).json({error: "Failed"})
    }
})


app.listen(port, ()=>{
    console.log(`Server https://localhost:${port}`);
})
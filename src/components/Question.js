import React, { useEffect, useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import "./Question.css"

const Question = ({ questions, questionIndex }) => {
  const [currentQuestion, setCurrentQuestion] = useState("")
  useEffect(() => {
    setCurrentQuestion(questions[questionIndex])
  }, [questionIndex])
  return (
    <div className="question_card">
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Question
          </Typography>
          <Typography sx={{ fontSize: 24 }} color="InfoText">
            {questions[questionIndex]}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Question

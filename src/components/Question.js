import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import "./Question.css"
const Question = () => {
    const questions = [
        {
            id: 1,
            question: "What is the name of this app?",
            answers: {
                answer_a: "quizzer",
                answer_b: "wizzard",
                answer_c: "twizzler",
                answer_d: "rizzard",
            },
        },
    ]
    return (
        <div className="question_card">
            <Card>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        Question
                    </Typography>
                    <Typography sx={{ fontSize: 24 }} color="InfoText">
                        {questions[0].question}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Question

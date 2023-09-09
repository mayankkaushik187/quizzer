import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import "./Question.css"
const Question = ({ questions }) => {
    console.log("Question ka ", questions)
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

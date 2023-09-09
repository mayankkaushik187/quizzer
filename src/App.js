import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Question from "./components/Question"
import Options from "./components/Options"
import axios from "axios"

const App = () => {
    const [results, setResults] = useState([])
    useEffect(() => {
        axios
            .get(
                "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
            )
            .then((res) => {
                console.log("here", res)
                setResults(res.data.results)
            })
    }, [])
    console.log("results", results)
    const shuffle = (array) => {
        let currentIndex = array.length,
            randomIndex
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            ;[array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ]
        }
        return array
    }
    var questionWithAnswers = []
    results.forEach((question) => {
        var answers = []
        answers = answers.concat(question.incorrect_answers)
        answers.push(question.correct_answer)
        answers = shuffle(answers)
        const obj = {
            question: question.question,
            answers: answers,
            correct_answer: question.correct_answer,
        }
        questionWithAnswers.push(obj)
    })
    console.log(questionWithAnswers)
    return (
        <React.Fragment>
            <Header />
            <Question questions={questionWithAnswers} />
            <Options options={questionWithAnswers} />
        </React.Fragment>
    )
}

export default App

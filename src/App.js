import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Question from "./components/Question"
import Options from "./components/Options"
import Footer from "./components/Footer"
import ErrorBoundary from "./components/ErrorBoundary"
import Score from "./components/Score"
import axios from "axios"

const App = () => {
  const [results, setResults] = useState([])
  const [questions, setQuestions] = useState([])
  const [options, setOptions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [optionClicked, setOptionClicked] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [currentScore, setCurrentScore] = useState(0)

  const apiCall = () => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
      )
      .then((resp) => {
        setResults(resp?.data?.results)
        resp?.data.results.forEach((item) => {
          if (!item) return
          setQuestions([...questions, questions.push(item?.question)])
          let newArr = []
          newArr = newArr.concat(item?.incorrect_answers)
          newArr.push(item?.correct_answer)
          console.log(item?.correct_answer)
          newArr = shuffle(newArr)
          setOptions([...options, options.push(newArr)])
          setCorrectAnswer([
            ...correctAnswer,
            correctAnswer.push(item?.correct_answer),
          ])
        })
        console.log(correctAnswer, "correct")
      })
      .catch((error) => {
        console.error(error)
      })
  }
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
  useEffect(() => {
    apiCall()
  }, [])
  return (
    <React.Fragment>
      <Header />
      <ErrorBoundary>
        <Question questions={questions} questionIndex={questionIndex} />
        <Options
          options={options}
          setOptionClicked={setOptionClicked}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          correctAnswer={correctAnswer}
          setCurrentScore={setCurrentScore}
          currentScore={currentScore}
        />
        <Score currentScore={currentScore} />
      </ErrorBoundary>
      <Footer />
    </React.Fragment>
  )
}

export default App

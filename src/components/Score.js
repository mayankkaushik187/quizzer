import React from "react"
import "../components/Score.css"
const Score = ({ currentScore }) => {
  return <div className="score">Score is {currentScore}</div>
}

export default Score

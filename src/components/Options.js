import React from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import "./Options.css"

const Option = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))
const Options = ({
  options,
  setOptionClicked,
  questionIndex,
  setQuestionIndex,
  correctAnswer,
  setCurrentScore,
  currentScore,
}) => {
  const handleOptionClick = (index, optionValue) => {
    console.log(index, optionValue)
    setOptionClicked(optionValue)
    if (optionValue === correctAnswer[questionIndex]) {
      setCurrentScore(currentScore + 1)
    } else {
      setCurrentScore(currentScore - 1)
    }
    setQuestionIndex(questionIndex + 1)
  }
  return (
    <div className="options">
      <Box sx={{ width: "400px" }}>
        <Stack spacing={2}>
          {options[questionIndex]?.map((option, index) => (
            <Option
              key={index}
              onClick={() => handleOptionClick(index, option)}
            >
              {option}
            </Option>
          ))}
        </Stack>
      </Box>
    </div>
  )
}

export default Options

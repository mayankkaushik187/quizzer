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

const Options = ({ options }) => {
    console.log("options ka ", options)
    return (
        <div className="options">
            <Box sx={{ width: "400px" }}>
                <Stack spacing={2}>
                    {options[0].answers.map((option) => (
                        <Option>{option}</Option>
                    ))}
                </Stack>
            </Box>
        </div>
    )
}

export default Options

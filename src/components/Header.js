import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import "./Header.css"

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        className="logo"
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontSize: "3rem" }}
                    >
                        quizzer.
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
